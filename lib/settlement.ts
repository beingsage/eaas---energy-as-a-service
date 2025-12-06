import type { LedgerEntry, Invoice, InvoiceLineItem } from "./types"
import { touRates } from "./mock-data"
import crypto from "crypto"

// Generate cryptographic hash for ledger entry
export function generateBlockSignature(entry: Omit<LedgerEntry, "_id" | "block_signature">): string {
  const data = JSON.stringify({
    device_id: entry.device_id,
    site_id: entry.site_id,
    timestamp: entry.timestamp,
    energy_direction: entry.energy_direction,
    kwh: entry.kwh,
    rate: entry.rate,
    carbon_factor: entry.carbon_factor,
  })

  return crypto.createHash("sha256").update(data).digest("hex")
}

// Determine TOU rate for a given timestamp
export function getTouRateForTimestamp(timestamp: Date): number {
  const hour = timestamp.getHours()

  if (hour >= touRates.peak.start && hour < touRates.peak.end) {
    return touRates.peak.rate
  } else if (hour >= touRates.standard.start && hour < touRates.standard.end) {
    return touRates.standard.rate
  } else {
    return touRates.offPeak.rate
  }
}

// Create ledger entry from telemetry
export function createLedgerEntry(
  deviceId: string,
  siteId: string,
  kwh: number,
  direction: "IMPORT" | "EXPORT",
  timestamp: Date = new Date(),
): Omit<LedgerEntry, "_id"> {
  const rate = direction === "IMPORT" ? getTouRateForTimestamp(timestamp) : 3.5 // Fixed export rate

  const carbonFactor = 0.82 // kg CO2 per kWh (India grid average)
  const credit = kwh * rate * (direction === "EXPORT" ? 1 : -1)

  const entry = {
    device_id: deviceId,
    site_id: siteId,
    timestamp,
    energy_direction: direction,
    kwh,
    rate,
    carbon_factor: carbonFactor,
    credit,
    block_signature: "",
  }

  entry.block_signature = generateBlockSignature(entry)

  return entry
}

// Settlement calculation for a billing period
export interface SettlementResult {
  totalImportKwh: number
  totalExportKwh: number
  importCharges: number
  exportCredits: number
  netEnergyCharges: number
  carbonOffset: number
  peakUsageKwh: number
  offPeakUsageKwh: number
  touBreakdown: {
    period: string
    kwh: number
    rate: number
    amount: number
  }[]
}

export function calculateSettlement(entries: LedgerEntry[]): SettlementResult {
  const importEntries = entries.filter((e) => e.energy_direction === "IMPORT")
  const exportEntries = entries.filter((e) => e.energy_direction === "EXPORT")

  const totalImportKwh = importEntries.reduce((sum, e) => sum + e.kwh, 0)
  const totalExportKwh = exportEntries.reduce((sum, e) => sum + e.kwh, 0)

  // Calculate TOU breakdown
  const touGroups = {
    peak: { kwh: 0, rate: touRates.peak.rate },
    standard: { kwh: 0, rate: touRates.standard.rate },
    offPeak: { kwh: 0, rate: touRates.offPeak.rate },
  }

  importEntries.forEach((entry) => {
    const hour = new Date(entry.timestamp).getHours()
    if (hour >= touRates.peak.start && hour < touRates.peak.end) {
      touGroups.peak.kwh += entry.kwh
    } else if (hour >= touRates.standard.start && hour < touRates.standard.end) {
      touGroups.standard.kwh += entry.kwh
    } else {
      touGroups.offPeak.kwh += entry.kwh
    }
  })

  const touBreakdown = [
    {
      period: "Peak",
      kwh: touGroups.peak.kwh,
      rate: touGroups.peak.rate,
      amount: touGroups.peak.kwh * touGroups.peak.rate,
    },
    {
      period: "Standard",
      kwh: touGroups.standard.kwh,
      rate: touGroups.standard.rate,
      amount: touGroups.standard.kwh * touGroups.standard.rate,
    },
    {
      period: "Off-Peak",
      kwh: touGroups.offPeak.kwh,
      rate: touGroups.offPeak.rate,
      amount: touGroups.offPeak.kwh * touGroups.offPeak.rate,
    },
  ]

  const importCharges = touBreakdown.reduce((sum, t) => sum + t.amount, 0)
  const exportCredits = totalExportKwh * 3.5 // Fixed export rate
  const netEnergyCharges = importCharges - exportCredits
  const carbonOffset = totalExportKwh * 0.82 // Only count solar generation

  return {
    totalImportKwh,
    totalExportKwh,
    importCharges,
    exportCredits,
    netEnergyCharges,
    carbonOffset,
    peakUsageKwh: touGroups.peak.kwh,
    offPeakUsageKwh: touGroups.offPeak.kwh,
    touBreakdown,
  }
}

// Generate invoice from settlement
export function generateInvoice(
  subscriptionId: string,
  userId: string,
  siteId: string,
  settlement: SettlementResult,
  subscriptionFee: number,
  slaUptime: number,
  periodStart: Date,
  periodEnd: Date,
): Omit<Invoice, "_id"> {
  const lineItems: InvoiceLineItem[] = []

  // Subscription fee
  lineItems.push({
    description: "Monthly Subscription Fee",
    quantity: 1,
    unit: "month",
    rate: subscriptionFee,
    amount: subscriptionFee,
    category: "subscription",
  })

  // Energy charges by TOU period
  settlement.touBreakdown.forEach((tou) => {
    if (tou.kwh > 0) {
      lineItems.push({
        description: `Energy Consumption (${tou.period})`,
        quantity: Number(tou.kwh.toFixed(2)),
        unit: "kWh",
        rate: tou.rate,
        amount: Number(tou.amount.toFixed(2)),
        category: "energy",
      })
    }
  })

  // Export credits
  if (settlement.exportCredits > 0) {
    lineItems.push({
      description: "Export Credits",
      quantity: Number(settlement.totalExportKwh.toFixed(2)),
      unit: "kWh",
      rate: 3.5,
      amount: -Number(settlement.exportCredits.toFixed(2)),
      category: "export_credit",
    })
  }

  // SLA credits (if uptime was below guarantee)
  const guaranteedUptime = 98
  let slaCredit = 0
  if (slaUptime < guaranteedUptime) {
    const uptimeShortfall = guaranteedUptime - slaUptime
    slaCredit = subscriptionFee * (uptimeShortfall * 0.05) // 5% per percentage point
    lineItems.push({
      description: `SLA Credit (${slaUptime.toFixed(1)}% vs ${guaranteedUptime}% guarantee)`,
      quantity: 1,
      unit: "credit",
      rate: slaCredit,
      amount: -slaCredit,
      category: "sla_credit",
    })
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0)
  const taxes = subtotal * 0.18 // 18% GST
  const total = subtotal + taxes

  lineItems.push({
    description: "GST (18%)",
    quantity: 1,
    unit: "tax",
    rate: taxes,
    amount: Number(taxes.toFixed(2)),
    category: "tax",
  })

  const dueDate = new Date(periodEnd)
  dueDate.setDate(dueDate.getDate() + 15)

  return {
    subscription_id: subscriptionId,
    user_id: userId,
    site_id: siteId,
    billing_period_start: periodStart,
    billing_period_end: periodEnd,
    line_items: lineItems,
    subtotal: Number(subtotal.toFixed(2)),
    taxes: Number(taxes.toFixed(2)),
    total: Number(total.toFixed(2)),
    export_credits: Number(settlement.exportCredits.toFixed(2)),
    sla_credits: slaCredit,
    net_amount: Number(total.toFixed(2)),
    status: "draft",
    due_date: dueDate,
    created_at: new Date(),
  }
}
