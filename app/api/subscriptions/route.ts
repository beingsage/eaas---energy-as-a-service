import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, siteId, planId, configuration } = body

    // Create subscription
    const subscription = {
      id: `sub-${Date.now()}`,
      userId,
      siteId,
      planId,
      status: "pending",
      configuration,
      startDate: null,
      billingCycleDay: 1,
      contractMonths: configuration?.contractMonths || 24,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      subscription,
      message: "Subscription created successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create subscription" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const status = searchParams.get("status")

  // Mock subscriptions
  const subscriptions = [
    {
      id: "sub-1",
      userId: "user-1",
      planId: "plan-2",
      planName: "Solar Plus",
      status: "active",
      startDate: "2024-06-15",
      monthlyPrice: 2999,
      nextBillingDate: "2025-01-15",
    },
  ]

  let filtered = subscriptions
  if (userId) filtered = filtered.filter((s) => s.userId === userId)
  if (status) filtered = filtered.filter((s) => s.status === status)

  return NextResponse.json({ subscriptions: filtered })
}
