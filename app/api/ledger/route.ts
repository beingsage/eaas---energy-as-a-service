import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"
import { generateMockLedgerEntries } from "@/lib/mock-ledger"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const siteId = searchParams.get("site_id") || "site-1"
    const days = Number.parseInt(searchParams.get("days") || "30")
    const direction = searchParams.get("direction")

    const db = await getDb()

    const query: any = { site_id: siteId }
    if (direction && direction !== "all") {
      query.energy_direction = direction
    }

    // Try to get real data
    const entries = await db.collection("ledger").find(query).sort({ timestamp: -1 }).limit(1000).toArray()

    // If no real data, return mock data
    if (entries.length === 0) {
      const mockEntries = generateMockLedgerEntries(siteId, "dev-1", days)
      return NextResponse.json(mockEntries)
    }

    return NextResponse.json(entries)
  } catch (error) {
    console.error("Ledger fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch ledger entries" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const db = await getDb()

    const result = await db.collection("ledger").insertOne({
      ...body,
      created_at: new Date(),
    })

    return NextResponse.json({
      success: true,
      entry_id: result.insertedId.toString(),
    })
  } catch (error) {
    console.error("Ledger entry creation error:", error)
    return NextResponse.json({ error: "Failed to create ledger entry" }, { status: 500 })
  }
}
