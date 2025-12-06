import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"
import { calculateSettlement, generateInvoice } from "@/lib/settlement"
import { generateMockLedgerEntries } from "@/lib/mock-ledger"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { subscription_id, site_id, user_id, period_start, period_end, subscription_fee, sla_uptime } = body

    const db = await getDb()

    // Get ledger entries for the billing period
    const ledgerEntries = await db
      .collection("ledger")
      .find({
        site_id,
        timestamp: {
          $gte: new Date(period_start),
          $lte: new Date(period_end),
        },
      })
      .toArray()

    // If no real entries, use mock data
    const entries = ledgerEntries.length > 0 ? ledgerEntries : generateMockLedgerEntries(site_id, "dev-1", 30)

    // Calculate settlement
    const settlement = calculateSettlement(entries as any)

    // Generate invoice
    const invoice = generateInvoice(
      subscription_id,
      user_id,
      site_id,
      settlement,
      subscription_fee || 2999,
      sla_uptime || 99.8,
      new Date(period_start),
      new Date(period_end),
    )

    // Store invoice
    const result = await db.collection("invoices").insertOne(invoice)

    return NextResponse.json({
      success: true,
      invoice_id: result.insertedId.toString(),
      settlement,
      invoice,
    })
  } catch (error) {
    console.error("Billing run error:", error)
    return NextResponse.json({ error: "Failed to run billing" }, { status: 500 })
  }
}
