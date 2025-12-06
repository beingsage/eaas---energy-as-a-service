import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, loanAmount, tenure, financeType, collateral } = body

    // Simulate credit score calculation
    const creditScore = {
      overall: 78,
      consumption: 85,
      uptime: 92,
      payment: 100,
      contract: 75,
    }

    // Calculate interest rate based on credit score and finance type
    let interestRate: number
    switch (financeType) {
      case "asset_backed":
        interestRate = creditScore.overall >= 80 ? 8.5 : creditScore.overall >= 60 ? 9.5 : 11.0
        break
      case "pay_per_kwh":
        interestRate = 0 // Pay per kWh doesn't have traditional interest
        break
      case "standard_emi":
        interestRate = creditScore.overall >= 80 ? 11.0 : creditScore.overall >= 60 ? 12.0 : 14.0
        break
      default:
        interestRate = 12.0
    }

    // Calculate EMI
    const monthlyRate = interestRate / 12 / 100
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)

    // Simulate loan creation
    const loan = {
      id: `loan-${Date.now()}`,
      userId,
      type: financeType,
      principal: loanAmount,
      interestRate,
      tenureMonths: tenure,
      emiAmount: Math.round(emi),
      status: "pending_approval",
      creditScore,
      collateral,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      loan,
      message: "Finance application submitted successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to process finance application" }, { status: 500 })
  }
}
