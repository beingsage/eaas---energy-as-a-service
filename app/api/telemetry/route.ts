import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"
import { generateMockTelemetry } from "@/lib/mock-data"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { device_id, site_id, ...telemetryData } = body

    const db = await getDb()

    await db.collection("telemetry").insertOne({
      device_id,
      site_id,
      ...telemetryData,
      timestamp: new Date(),
      created_at: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Telemetry ingest error:", error)
    return NextResponse.json({ error: "Failed to ingest telemetry" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const siteId = searchParams.get("site_id") || "site-1"
    const limit = Number.parseInt(searchParams.get("limit") || "100")

    const db = await getDb()

    const telemetry = await db
      .collection("telemetry")
      .find({ site_id: siteId })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray()

    // If no real data, return mock data
    if (telemetry.length === 0) {
      const mockData = [
        generateMockTelemetry("dev-solar-1", siteId, "solar_inverter"),
        generateMockTelemetry("dev-battery-1", siteId, "battery"),
        generateMockTelemetry("dev-meter-1", siteId, "smart_meter"),
      ]
      return NextResponse.json(mockData)
    }

    return NextResponse.json(telemetry)
  } catch (error) {
    console.error("Telemetry fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch telemetry" }, { status: 500 })
  }
}
