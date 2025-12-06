"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Download,
  Search,
  ArrowUpRight,
  ArrowDownLeft,
  Shield,
  Calendar,
  Filter,
  TrendingUp,
  Leaf,
} from "lucide-react"
import { generateMockLedgerEntries, getMockLedgerSummary } from "@/lib/mock-ledger"
import type { LedgerEntry } from "@/lib/types"
import { LedgerViewer } from "@/components/ledger/ledger-viewer"
import { SettlementTrial } from "@/components/ledger/settlement-trial"

export default function LedgerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [directionFilter, setDirectionFilter] = useState<"all" | "IMPORT" | "EXPORT">("all")
  const [dateRange, setDateRange] = useState("30")

  // Generate mock data
  const ledgerEntries = useMemo(() => {
    const entries = generateMockLedgerEntries("site-1", "dev-1", Number.parseInt(dateRange))
    return entries.map((e, i) => ({ ...e, _id: `entry-${i}` })) as LedgerEntry[]
  }, [dateRange])

  const summary = useMemo(() => getMockLedgerSummary(ledgerEntries), [ledgerEntries])

  // Filter entries
  const filteredEntries = useMemo(() => {
    return ledgerEntries.filter((entry) => {
      if (directionFilter !== "all" && entry.energy_direction !== directionFilter) {
        return false
      }
      if (searchTerm && !entry.block_signature.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false
      }
      return true
    })
  }, [ledgerEntries, directionFilter, searchTerm])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Energy Ledger
            </h1>
            <p className="text-muted-foreground">
              Immutable record of all energy transactions for Site #KA-BLR-2024-001
            </p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <ArrowDownLeft className="h-4 w-4" />
                <span className="text-sm">Total Import</span>
              </div>
              <div className="text-2xl font-bold font-serif">{summary.totalImportKwh} kWh</div>
              <div className="text-sm text-muted-foreground">₹{summary.totalImportCost.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <ArrowUpRight className="h-4 w-4" />
                <span className="text-sm">Total Export</span>
              </div>
              <div className="text-2xl font-bold font-serif text-green-600">{summary.totalExportKwh} kWh</div>
              <div className="text-sm text-green-600">₹{summary.totalExportCredit.toLocaleString()} credit</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Net Energy Cost</span>
              </div>
              <div className="text-2xl font-bold font-serif">₹{summary.netCost.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Avg ₹{summary.avgImportRate}/kWh</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Leaf className="h-4 w-4" />
                <span className="text-sm">Carbon Offset</span>
              </div>
              <div className="text-2xl font-bold font-serif text-green-600">{summary.carbonOffset} kg</div>
              <div className="text-sm text-muted-foreground">CO₂ avoided</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ledger" className="space-y-6">
          <TabsList>
            <TabsTrigger value="ledger">Ledger Entries</TabsTrigger>
            <TabsTrigger value="settlement">Settlement Trial</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="ledger" className="space-y-4">
            {/* Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by block signature..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Select value={directionFilter} onValueChange={(v: any) => setDirectionFilter(v)}>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Direction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Transactions</SelectItem>
                      <SelectItem value="IMPORT">Import Only</SelectItem>
                      <SelectItem value="EXPORT">Export Only</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="w-[180px]">
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">Last 7 days</SelectItem>
                      <SelectItem value="30">Last 30 days</SelectItem>
                      <SelectItem value="90">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Ledger Table */}
            <LedgerViewer entries={filteredEntries} />

            <div className="text-center text-sm text-muted-foreground">
              Showing {filteredEntries.length} of {ledgerEntries.length} entries
            </div>
          </TabsContent>

          <TabsContent value="settlement">
            <SettlementTrial entries={ledgerEntries} />
          </TabsContent>

          <TabsContent value="verification">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Ledger Verification
                </CardTitle>
                <CardDescription>Verify the integrity of ledger entries using cryptographic signatures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300 mb-2">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">All Entries Verified</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    {ledgerEntries.length} entries verified with valid SHA-256 signatures
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-4">How Verification Works</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Data Collection</p>
                        <p className="text-muted-foreground">
                          Each kWh packet from devices is timestamped and recorded with its TOU rate
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Signature Generation</p>
                        <p className="text-muted-foreground">
                          A SHA-256 hash is computed from the entry data, creating a unique fingerprint
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Immutable Storage</p>
                        <p className="text-muted-foreground">
                          Entries are stored with their signatures, making any tampering detectable
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Verification</p>
                        <p className="text-muted-foreground">
                          Re-computing the hash and comparing with stored signature confirms integrity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-medium mb-2">Sample Entry Verification</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-2">
                    <div>
                      <span className="text-muted-foreground">Entry ID:</span> {ledgerEntries[0]?._id}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Timestamp:</span>{" "}
                      {ledgerEntries[0]?.timestamp.toISOString()}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Direction:</span> {ledgerEntries[0]?.energy_direction}
                    </div>
                    <div>
                      <span className="text-muted-foreground">kWh:</span> {ledgerEntries[0]?.kwh}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Rate:</span> ₹{ledgerEntries[0]?.rate}/kWh
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className="text-muted-foreground">Block Signature:</span>
                      <br />
                      <span className="text-green-600 break-all">{ledgerEntries[0]?.block_signature}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
