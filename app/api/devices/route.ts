import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const siteId = searchParams.get("site_id")

    const db = await getDb()

    const query = siteId ? { site_id: siteId } : {}
    const devices = await db.collection("devices").find(query).toArray()

    return NextResponse.json(devices)
  } catch (error) {
    console.error("Devices fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch devices" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const db = await getDb()

    const result = await db.collection("devices").insertOne({
      ...body,
      status: "offline",
      commissioned_at: new Date(),
      last_seen: new Date(),
    })

    return NextResponse.json({
      success: true,
      device_id: result.insertedId.toString(),
    })
  } catch (error) {
    console.error("Device creation error:", error)
    return NextResponse.json({ error: "Failed to create device" }, { status: 500 })
  }
}
