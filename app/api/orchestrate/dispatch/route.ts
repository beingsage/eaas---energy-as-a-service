import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { asset_id, command, target_power_kw, duration_minutes, reason, priority } = body

    const db = await getDb()

    // Log the dispatch command
    const result = await db.collection("dispatch_commands").insertOne({
      asset_id,
      command,
      target_power_kw,
      duration_minutes,
      reason,
      priority,
      status: "queued",
      created_at: new Date(),
      executed_at: null,
      completed_at: null,
    })

    // In a real system, this would trigger the actual device command
    // through MQTT, Modbus, or other protocols

    return NextResponse.json({
      success: true,
      dispatch_id: result.insertedId.toString(),
      message: `Dispatch command ${command} queued for asset ${asset_id}`,
    })
  } catch (error) {
    console.error("Dispatch error:", error)
    return NextResponse.json({ error: "Failed to dispatch command" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    const db = await getDb()

    const query = status ? { status } : {}
    const commands = await db.collection("dispatch_commands").find(query).sort({ created_at: -1 }).limit(50).toArray()

    return NextResponse.json(commands)
  } catch (error) {
    console.error("Dispatch fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch dispatch commands" }, { status: 500 })
  }
}
