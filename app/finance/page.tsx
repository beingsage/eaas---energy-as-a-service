"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Wallet,
  TrendingUp,
  Calculator,
  FileText,
  CheckCircle2,
  IndianRupee,
  Calendar,
  PiggyBank,
  Shield,
  AlertCircle,
  CreditCard,
  Battery,
  Sun,
} from "lucide-react"

interface Loan {
  id: string
  type: "asset_backed" | "pay_per_kwh" | "standard_emi"
  principal: number
  interestRate: number
  tenureMonths: number
  emiAmount: number
  disbursedAt: Date
  status: "active" | "closed" | "defaulted"
  paidEmis: number
  totalEmis: number
  collateral: string
  nextDueDate: Date
}

interface CreditScore {
  overall: number
  consumption: number
  uptime: number
  payment: number
  contract: number
}

const mockLoans: Loan[] = [
  {
    id: "loan-1",
    type: "asset_backed",
    principal: 250000,
    interestRate: 9.5,
    tenureMonths: 36,
    emiAmount: 8012,
    disbursedAt: new Date("2024-06-15"),
    status: "active",
    paidEmis: 6,
    totalEmis: 36,
    collateral: "5kW Solar + 5kWh Battery",
    nextDueDate: new Date("2025-01-15"),
  },
]

const mockCreditScore: CreditScore = {
  overall: 78,
  consumption: 85,
  uptime: 92,
  payment: 100,
  contract: 75,
}

export default function FinancePage() {
  const [loanAmount, setLoanAmount] = useState(200000)
  const [tenure, setTenure] = useState(24)
  const [applyDialogOpen, setApplyDialogOpen] = useState(false)

  const interestRate = 9.5
  const monthlyRate = interestRate / 12 / 100
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
  const totalPayment = emi * tenure
  const totalInterest = totalPayment - loanAmount

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Wallet className="h-6 w-6" />
              Asset Financing
            </h1>
            <p className="text-muted-foreground">Device-backed loans and pay-per-kWh financing options</p>
          </div>
          <Dialog open={applyDialogOpen} onOpenChange={setApplyDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <CreditCard className="h-4 w-4 mr-2" />
                Apply for Financing
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="font-serif">Apply for Asset Financing</DialogTitle>
                <DialogDescription>Get instant approval based on your energy credit score</DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900 dark:text-green-100">
                      Pre-approved for up to ₹5,00,000
                    </span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Based on your credit score of {mockCreditScore.overall}/100
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label>Select Financing Type</Label>
                  <div className="grid gap-3">
                    {[
                      { id: "asset", name: "Asset-Backed Loan", desc: "Lower rates with device collateral" },
                      { id: "kwh", name: "Pay-per-kWh", desc: "Pay as you generate energy" },
                      { id: "emi", name: "Standard EMI", desc: "Fixed monthly payments" },
                    ].map((type) => (
                      <label
                        key={type.id}
                        className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted"
                      >
                        <input type="radio" name="financeType" className="accent-primary" />
                        <div>
                          <p className="font-medium">{type.name}</p>
                          <p className="text-sm text-muted-foreground">{type.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setApplyDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setApplyDialogOpen(false)}>Continue Application</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Credit Score & Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Energy Credit Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className={`text-4xl font-bold font-serif ${getScoreColor(mockCreditScore.overall)}`}>
                  {mockCreditScore.overall}
                </div>
                <div className="text-sm text-muted-foreground">/100</div>
              </div>
              <Badge variant="secondary" className="mt-2">
                Good Standing
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <IndianRupee className="h-4 w-4" />
                <span className="text-sm">Active Loans</span>
              </div>
              <div className="text-2xl font-bold font-serif">
                ₹{mockLoans.reduce((sum, l) => sum + l.principal, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">principal outstanding</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Next EMI Due</span>
              </div>
              <div className="text-2xl font-bold font-serif">₹{mockLoans[0]?.emiAmount.toLocaleString() || 0}</div>
              <p className="text-xs text-muted-foreground">
                {mockLoans[0]?.nextDueDate.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                }) || "N/A"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <PiggyBank className="h-4 w-4" />
                <span className="text-sm">Total Savings</span>
              </div>
              <div className="text-2xl font-bold font-serif text-green-600">₹42,500</div>
              <p className="text-xs text-muted-foreground">vs grid-only power</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="calculator">EMI Calculator</TabsTrigger>
            <TabsTrigger value="score">Credit Score</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Active Loans */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Active Financing</CardTitle>
                <CardDescription>Your current asset-backed loans and financing</CardDescription>
              </CardHeader>
              <CardContent>
                {mockLoans.length > 0 ? (
                  <div className="space-y-6">
                    {mockLoans.map((loan) => (
                      <div key={loan.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              {loan.type === "asset_backed" ? (
                                <Battery className="h-5 w-5 text-primary" />
                              ) : (
                                <Sun className="h-5 w-5 text-primary" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">
                                {loan.type === "asset_backed"
                                  ? "Asset-Backed Loan"
                                  : loan.type === "pay_per_kwh"
                                    ? "Pay-per-kWh"
                                    : "Standard EMI"}
                              </h4>
                              <p className="text-sm text-muted-foreground">Collateral: {loan.collateral}</p>
                            </div>
                          </div>
                          <Badge variant={loan.status === "active" ? "default" : "secondary"}>{loan.status}</Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Principal</p>
                            <p className="font-medium">₹{loan.principal.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Interest Rate</p>
                            <p className="font-medium">{loan.interestRate}% p.a.</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Monthly EMI</p>
                            <p className="font-medium">₹{loan.emiAmount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Tenure</p>
                            <p className="font-medium">{loan.tenureMonths} months</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Repayment Progress</span>
                            <span>
                              {loan.paidEmis}/{loan.totalEmis} EMIs paid
                            </span>
                          </div>
                          <Progress value={(loan.paidEmis / loan.totalEmis) * 100} className="h-2" />
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            View Statement
                          </Button>
                          <Button variant="outline" size="sm">
                            <CreditCard className="h-4 w-4 mr-1" />
                            Pay Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Wallet className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">No Active Financing</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      You don&apos;t have any active loans or financing
                    </p>
                    <Button>Apply for Financing</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Financing Options */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Asset-Backed Loan",
                  rate: "9.5%",
                  desc: "Lowest rates with device collateral",
                  features: ["Device as collateral", "Lower interest", "Flexible tenure"],
                  icon: Battery,
                },
                {
                  title: "Pay-per-kWh",
                  rate: "₹0.5/kWh",
                  desc: "Pay based on energy generated",
                  features: ["No upfront EMI", "Pay as you generate", "Seasonal flexibility"],
                  icon: Sun,
                },
                {
                  title: "Standard EMI",
                  rate: "12%",
                  desc: "Fixed monthly payments",
                  features: ["No collateral", "Quick approval", "Fixed payments"],
                  icon: CreditCard,
                },
              ].map((option) => (
                <Card key={option.title}>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <option.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-serif">{option.title}</CardTitle>
                    <CardDescription>{option.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-4">{option.rate}</div>
                    <ul className="space-y-2 text-sm">
                      {option.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calculator">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    EMI Calculator
                  </CardTitle>
                  <CardDescription>Calculate your monthly payments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Loan Amount</Label>
                        <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                      </div>
                      <Slider
                        value={[loanAmount]}
                        onValueChange={(v) => setLoanAmount(v[0])}
                        min={50000}
                        max={1000000}
                        step={10000}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>₹50,000</span>
                        <span>₹10,00,000</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Tenure (months)</Label>
                        <span className="font-medium">{tenure} months</span>
                      </div>
                      <Slider value={[tenure]} onValueChange={(v) => setTenure(v[0])} min={12} max={60} step={6} />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>12 months</span>
                        <span>60 months</span>
                      </div>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">{interestRate}% p.a.</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Rate based on your credit score and collateral</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Payment Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Monthly EMI</p>
                    <p className="text-4xl font-bold font-serif text-primary">₹{Math.round(emi).toLocaleString()}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Principal Amount</span>
                      <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest</span>
                      <span className="font-medium">₹{Math.round(totalInterest).toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-medium">Total Payment</span>
                      <span className="font-bold">₹{Math.round(totalPayment).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="score">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Energy Credit Score</CardTitle>
                  <CardDescription>Your creditworthiness based on energy data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className={`text-6xl font-bold font-serif ${getScoreColor(mockCreditScore.overall)}`}>
                      {mockCreditScore.overall}
                    </div>
                    <p className="text-muted-foreground mt-2">out of 100</p>
                    <Badge variant="secondary" className="mt-2">
                      Good
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "Consumption Stability", score: mockCreditScore.consumption, weight: "25%" },
                      { name: "Device Uptime", score: mockCreditScore.uptime, weight: "25%" },
                      { name: "Payment History", score: mockCreditScore.payment, weight: "30%" },
                      { name: "Contract Adherence", score: mockCreditScore.contract, weight: "20%" },
                    ].map((factor) => (
                      <div key={factor.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{factor.name}</span>
                          <span className="text-muted-foreground">{factor.weight}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={factor.score} className="flex-1 h-2" />
                          <span className={`font-medium w-8 ${getScoreColor(factor.score)}`}>{factor.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">How It Works</CardTitle>
                  <CardDescription>Your score is calculated from real energy data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Consumption Stability",
                        desc: "Consistent energy usage patterns indicate reliable payment capacity",
                        icon: TrendingUp,
                      },
                      {
                        title: "Device Uptime",
                        desc: "Well-maintained devices that generate reliably back your loans",
                        icon: Battery,
                      },
                      {
                        title: "Payment History",
                        desc: "On-time electricity and EMI payments boost your score",
                        icon: CheckCircle2,
                      },
                      {
                        title: "Contract Adherence",
                        desc: "Following SLA terms and export limits shows reliability",
                        icon: FileText,
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-900 dark:text-amber-100">Improve Your Score</p>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          Maintain consistent usage and ensure device uptime to unlock better rates
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Payment History</CardTitle>
                <CardDescription>Your EMI and payment records</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { date: "2024-12-15", desc: "EMI Payment - Month 6", amount: 8012, status: "paid" },
                      { date: "2024-11-15", desc: "EMI Payment - Month 5", amount: 8012, status: "paid" },
                      { date: "2024-10-15", desc: "EMI Payment - Month 4", amount: 8012, status: "paid" },
                      { date: "2024-09-15", desc: "EMI Payment - Month 3", amount: 8012, status: "paid" },
                      { date: "2024-08-15", desc: "EMI Payment - Month 2", amount: 8012, status: "paid" },
                      { date: "2024-07-15", desc: "EMI Payment - Month 1", amount: 8012, status: "paid" },
                      { date: "2024-06-15", desc: "Loan Disbursement", amount: 250000, status: "disbursed" },
                    ].map((payment, i) => (
                      <TableRow key={i}>
                        <TableCell>{new Date(payment.date).toLocaleDateString("en-IN")}</TableCell>
                        <TableCell>{payment.desc}</TableCell>
                        <TableCell className="font-mono">
                          {payment.status === "disbursed" ? "+" : "-"}₹{payment.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge variant={payment.status === "paid" ? "default" : "secondary"}>
                            {payment.status === "paid" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                            {payment.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
