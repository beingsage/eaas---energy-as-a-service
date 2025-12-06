"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, CreditCard, Calendar, TrendingUp, ArrowRight, FileText, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface BillingOverviewProps {
  stats: {
    generationToday: number
    importToday: number
    exportToday: number
    savingsToday: number
  }
}

const mockInvoices = [
  {
    id: "INV-2024-003",
    period: "March 2024",
    amount: 2847,
    status: "paid",
    dueDate: "2024-03-15",
  },
  {
    id: "INV-2024-002",
    period: "February 2024",
    amount: 2654,
    status: "paid",
    dueDate: "2024-02-15",
  },
  {
    id: "INV-2024-001",
    period: "January 2024",
    amount: 2912,
    status: "paid",
    dueDate: "2024-01-15",
  },
]

export function BillingOverview({ stats }: BillingOverviewProps) {
  const currentMonthEstimate = Math.round(stats.savingsToday * 30)
  const monthlySubscription = 2999

  return (
    <div className="space-y-6">
      {/* Current Billing Summary */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Month Bill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">₹{monthlySubscription.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">Due: April 15, 2024</p>
            <Button className="w-full mt-4" size="sm">
              <CreditCard className="h-4 w-4 mr-2" />
              Pay Now
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Export Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif text-green-600">
              ₹{Math.round(stats.exportToday * 30 * 3.5).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{(stats.exportToday * 30).toFixed(0)} kWh exported</p>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
              <TrendingUp className="h-4 w-4" />
              Applied to next invoice
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Net Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif text-green-600">₹{currentMonthEstimate.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">vs. grid-only power</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
              <Calendar className="h-4 w-4" />
              This month estimate
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Current Invoice Breakdown</CardTitle>
          <CardDescription>Billing period: April 1 - April 30, 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between py-2">
              <span>Monthly Subscription (5kW Solar + 5kWh Battery)</span>
              <span>₹2,999.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Energy Consumption (385 kWh @ ₹4.50/kWh)</span>
              <span>₹1,732.50</span>
            </div>
            <div className="flex justify-between py-2 text-green-600">
              <span>Export Credits (96 kWh @ ₹3.50/kWh)</span>
              <span>-₹336.00</span>
            </div>
            <div className="flex justify-between py-2 text-green-600">
              <span>SLA Credit (99.8% uptime vs 98% guarantee)</span>
              <span>-₹0.00</span>
            </div>
            <div className="border-t border-border my-2" />
            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span>₹4,395.50</span>
            </div>
            <div className="flex justify-between py-2">
              <span>GST (18%)</span>
              <span>₹791.19</span>
            </div>
            <div className="border-t border-border my-2" />
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Total Due</span>
              <span>₹5,186.69</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Invoices */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-serif">Invoice History</CardTitle>
              <CardDescription>Past billing statements</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/ledger">
                View Ledger
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockInvoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{invoice.period}</p>
                    <p className="text-sm text-muted-foreground">{invoice.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{invoice.amount.toLocaleString()}</p>
                  <Badge variant="secondary" className="mt-1">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    {invoice.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/26</p>
              </div>
            </div>
            <Badge>Default</Badge>
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            Add Payment Method
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
