import type { LedgerEntry } from "./types"
import { createLedgerEntry } from "./settlement"

// Generate mock ledger entries for demo purposes
export function generateMockLedgerEntries(siteId: string, deviceId: string, days = 30): Omit<LedgerEntry, "_id">[] {
  const entries: Omit<LedgerEntry, "_id">[] = []
  const now = new Date()

  for (let day = days; day >= 0; day--) {
    const date = new Date(now)
    date.setDate(date.getDate() - day)

    // Generate hourly entries
    for (let hour = 0; hour < 24; hour++) {
      const timestamp = new Date(date)
      timestamp.setHours(hour, Math.floor(Math.random() * 60), 0, 0)

      // Solar generation (6 AM - 6 PM)
      if (hour >= 6 && hour <= 18) {
        const solarMultiplier = Math.sin(((hour - 6) * Math.PI) / 12)
        const solarKwh = solarMultiplier * (0.8 + Math.random() * 0.4)

        if (solarKwh > 0.1) {
          // Some solar goes to load, some exported
          const exportRatio = 0.2 + Math.random() * 0.3 // 20-50% exported
          const exportKwh = solarKwh * exportRatio

          if (exportKwh > 0.05) {
            entries.push(
              createLedgerEntry(`${deviceId}-solar`, siteId, Number(exportKwh.toFixed(3)), "EXPORT", timestamp),
            )
          }
        }
      }

      // Grid import (always some base load)
      const baseLoad = 0.1 + Math.random() * 0.15
      const peakAddition = hour >= 18 && hour <= 22 ? 0.3 + Math.random() * 0.2 : 0
      const importKwh = baseLoad + peakAddition

      entries.push(createLedgerEntry(`${deviceId}-meter`, siteId, Number(importKwh.toFixed(3)), "IMPORT", timestamp))
    }
  }

  return entries
}

// Get mock ledger summary
export function getMockLedgerSummary(entries: Omit<LedgerEntry, "_id">[]) {
  const imports = entries.filter((e) => e.energy_direction === "IMPORT")
  const exports = entries.filter((e) => e.energy_direction === "EXPORT")

  const totalImport = imports.reduce((sum, e) => sum + e.kwh, 0)
  const totalExport = exports.reduce((sum, e) => sum + e.kwh, 0)
  const totalImportCost = imports.reduce((sum, e) => sum + e.kwh * e.rate, 0)
  const totalExportCredit = exports.reduce((sum, e) => sum + e.kwh * e.rate, 0)

  return {
    totalEntries: entries.length,
    totalImportKwh: Number(totalImport.toFixed(2)),
    totalExportKwh: Number(totalExport.toFixed(2)),
    totalImportCost: Number(totalImportCost.toFixed(2)),
    totalExportCredit: Number(totalExportCredit.toFixed(2)),
    netCost: Number((totalImportCost - totalExportCredit).toFixed(2)),
    avgImportRate: Number((totalImportCost / totalImport).toFixed(2)),
    carbonOffset: Number((totalExport * 0.82).toFixed(2)),
  }
}
