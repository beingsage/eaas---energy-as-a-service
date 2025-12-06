import { NextResponse } from "next/server"
import { mockPlans } from "@/lib/mock-data"

export async function GET() {
  // Return mock plans with generated IDs
  const plans = mockPlans.map((plan, index) => ({
    ...plan,
    _id: `plan-${index}`,
  }))

  return NextResponse.json(plans)
}
