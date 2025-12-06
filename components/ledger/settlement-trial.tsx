"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { LedgerEntry } from "@/lib/types"
import { calculateSettlement, generateInvoice } from "@/lib/settlement"
import { Calculator, FileText, Clock, Zap, Download } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

interface SettlementTrialProps {
  entries: LedgerEntry[]
}

export function SettlementTrial({ entries }: SettlementTrialProps) {
  const settlement = useMemo(() => calculateSettlement(entries), [entries])

  const mockInvoice = useMemo(() => {
    const periodStart = new Date()
    periodStart.setDate(1)
    const periodEnd = new Date()
    periodEnd.setMonth(periodEnd.getMonth() + 1, 0)

    return generateInvoice(
      "sub-1",
      "user-1",
      "site-1",
      settlement,
      2999, // Subscription fee
      99.8, // SLA uptime
      periodStart,
      periodEnd,
    )
  }, [settlement])

  const touChartData = settlement.touBreakdown.map((t) => ({
    name: t.period,
    kwh: Number(t.kwh.toFixed(1)),
    amount: Number(t.amount.toFixed(0)),
  }))

  const pieData = [
    { name: "Import", value: settlement.totalImportKwh },
    { name: "Export", value: settlement.totalExportKwh },
  ]

  const COLORS = ["hsl(var(--chart-2))", "hsl(var(--chart-1))"]

  return (
    <div className="space-y-6">
      {/* Settlement Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Settlement Calculation
            </CardTitle>
            <CardDescription>Billing period aggregation and TOU application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Total Import</p>
                <p className="text-xl font-bold">{settlement.totalImportKwh.toFixed(1)} kWh</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Total Export</p>
                <p className="text-xl font-bold text-green-600">{settlement.totalExportKwh.toFixed(1)} kWh</p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                TOU Breakdown
              </h4>
              <div className="space-y-2">
                {settlement.touBreakdown.map((tou) => (
                  <div key={tou.period} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          tou.period === "Peak" ? "destructive" : tou.period === "Standard" ? "secondary" : "default"
                        }
                      >
                        {tou.period}
                      </Badge>
                      <span className="text-muted-foreground">
                        {tou.kwh.toFixed(1)} kWh @ ₹{tou.rate}
                      </span>
                    </div>
                    <span className="font-medium">₹{tou.amount.toFixed(0)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Import Charges</span>
                <span>₹{settlement.importCharges.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Export Credits</span>
                <span>-₹{settlement.exportCredits.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-border">
                <span>Net Energy Charges</span>
                <span>₹{settlement.netEnergyCharges.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif">TOU Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={touChartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar dataKey="kwh" name="kWh" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Import vs Export</h4>
              <div className="flex items-center gap-4">
                <div className="h-32 w-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  {pieData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                      <span className="text-sm">
                        {entry.name}: {entry.value.toFixed(1)} kWh
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Generated Invoice Preview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-serif flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Invoice Preview
              </CardTitle>
              <CardDescription>Generated from settlement calculation</CardDescription>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border border-border rounded-lg p-6 bg-card">
            {/* Invoice Header */}
            <div className="flex justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="font-serif font-bold text-xl">Energy OS</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Energy Operating System Pvt. Ltd.
                  <br />
                  Bangalore, Karnataka 560001
                  <br />
                  GSTIN: 29AAAAA0000A1Z5
                </p>
              </div>
              <div className="text-right">
                <Badge className="mb-2">{mockInvoice.status.toUpperCase()}</Badge>
                <p className="text-sm">
                  <span className="text-muted-foreground">Invoice #:</span> INV-2024-004
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Date:</span> {new Date().toLocaleDateString("en-IN")}
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Due:</span> {mockInvoice.due_date.toLocaleDateString("en-IN")}
                </p>
              </div>
            </div>

            {/* Line Items */}
            <table className="w-full text-sm mb-6">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-medium">Description</th>
                  <th className="text-right py-2 font-medium">Qty</th>
                  <th className="text-right py-2 font-medium">Rate</th>
                  <th className="text-right py-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {mockInvoice.line_items.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-3">{item.description}</td>
                    <td className="py-3 text-right">
                      {item.quantity} {item.unit}
                    </td>
                    <td className="py-3 text-right">{item.category === "tax" ? "" : `₹${item.rate.toFixed(2)}`}</td>
                    <td className={`py-3 text-right ${item.amount < 0 ? "text-green-600" : ""}`}>
                      {item.amount < 0 ? "-" : ""}₹{Math.abs(item.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{mockInvoice.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span>₹{mockInvoice.taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Export Credits</span>
                  <span>-₹{mockInvoice.export_credits.toFixed(2)}</span>
                </div>
                {mockInvoice.sla_credits > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>SLA Credits</span>
                    <span>-₹{mockInvoice.sla_credits.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Total Due</span>
                  <span>₹{mockInvoice.net_amount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
