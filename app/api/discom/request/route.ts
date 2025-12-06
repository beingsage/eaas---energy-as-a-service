import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, siteId, requestType, inverterCapacity, panelCapacity, documents } = body

    // Generate application ID
    const applicationId = `NM-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`

    // Create DISCOM request
    const discomRequest = {
      id: applicationId,
      userId,
      siteId,
      requestType,
      status: "submitted",
      inverterCapacity_kw: inverterCapacity,
      panelCapacity_kwp: panelCapacity,
      documents: documents || [],
      submittedAt: new Date().toISOString(),
      estimatedProcessingDays: requestType === "net_metering" ? 30 : 45,
    }

    // Simulate webhook notification to DISCOM
    console.log(`[DISCOM Webhook] New application: ${applicationId}`)

    return NextResponse.json({
      success: true,
      application: discomRequest,
      message: `Application ${applicationId} submitted successfully`,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit DISCOM request" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")
  const userId = searchParams.get("userId")

  // Return mock requests (in production, query MongoDB)
  const requests = [
    {
      id: "NM-2024-001",
      userId: "user-1",
      requestType: "net_metering",
      status: "under_review",
      inverterCapacity_kw: 5,
      panelCapacity_kwp: 6,
      submittedAt: "2024-12-10T00:00:00Z",
    },
    {
      id: "NM-2024-002",
      userId: "user-2",
      requestType: "net_metering",
      status: "approved",
      inverterCapacity_kw: 10,
      panelCapacity_kwp: 12,
      exportLimit_kw: 8,
      submittedAt: "2024-11-25T00:00:00Z",
      reviewedAt: "2024-12-05T00:00:00Z",
    },
  ]

  let filtered = requests
  if (status) filtered = filtered.filter((r) => r.status === status)
  if (userId) filtered = filtered.filter((r) => r.userId === userId)

  return NextResponse.json({ requests: filtered })
}
