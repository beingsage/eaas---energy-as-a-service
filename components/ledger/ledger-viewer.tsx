"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { LedgerEntry } from "@/lib/types"
import { ArrowUpRight, ArrowDownLeft, ChevronLeft, ChevronRight, Copy, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface LedgerViewerProps {
  entries: LedgerEntry[]
}

export function LedgerViewer({ entries }: LedgerViewerProps) {
  const [page, setPage] = useState(0)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const pageSize = 20
  const totalPages = Math.ceil(entries.length / pageSize)

  const paginatedEntries = entries.slice(page * pageSize, (page + 1) * pageSize)

  const copySignature = (sig: string, id: string) => {
    navigator.clipboard.writeText(sig)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium">Timestamp</th>
                <th className="text-left py-3 px-4 font-medium">Direction</th>
                <th className="text-right py-3 px-4 font-medium">Energy</th>
                <th className="text-right py-3 px-4 font-medium">Rate</th>
                <th className="text-right py-3 px-4 font-medium">Credit/Charge</th>
                <th className="text-left py-3 px-4 font-medium">Signature</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEntries.map((entry) => (
                <tr key={entry._id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="text-sm">
                      {new Date(entry.timestamp).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(entry.timestamp).toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={entry.energy_direction === "EXPORT" ? "default" : "secondary"}
                      className="flex items-center gap-1 w-fit"
                    >
                      {entry.energy_direction === "EXPORT" ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownLeft className="h-3 w-3" />
                      )}
                      {entry.energy_direction}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">{entry.kwh.toFixed(3)} kWh</td>
                  <td className="py-3 px-4 text-right">₹{entry.rate.toFixed(2)}/kWh</td>
                  <td
                    className={`py-3 px-4 text-right font-medium ${
                      entry.energy_direction === "EXPORT" ? "text-green-600" : ""
                    }`}
                  >
                    {entry.energy_direction === "EXPORT" ? "+" : ""}₹{Math.abs(entry.credit).toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="font-mono text-xs text-muted-foreground hover:text-foreground truncate max-w-[120px] block">
                          {entry.block_signature.substring(0, 12)}...
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="font-serif">Ledger Entry Details</DialogTitle>
                          <DialogDescription>Full transaction record with verification signature</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Entry ID</p>
                              <p className="font-mono">{entry._id}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Device ID</p>
                              <p className="font-mono">{entry.device_id}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Timestamp</p>
                              <p>{new Date(entry.timestamp).toLocaleString("en-IN")}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Direction</p>
                              <Badge variant={entry.energy_direction === "EXPORT" ? "default" : "secondary"}>
                                {entry.energy_direction}
                              </Badge>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Energy</p>
                              <p className="font-mono">{entry.kwh.toFixed(3)} kWh</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Rate</p>
                              <p>₹{entry.rate.toFixed(2)}/kWh</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Carbon Factor</p>
                              <p>{entry.carbon_factor} kg CO₂/kWh</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Credit/Charge</p>
                              <p className={entry.energy_direction === "EXPORT" ? "text-green-600" : ""}>
                                {entry.energy_direction === "EXPORT" ? "+" : ""}₹{Math.abs(entry.credit).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="border-t border-border pt-4">
                            <p className="text-muted-foreground text-sm mb-2">Block Signature (SHA-256)</p>
                            <div className="flex items-start gap-2">
                              <code className="flex-1 text-xs bg-muted p-3 rounded-lg break-all font-mono">
                                {entry.block_signature}
                              </code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copySignature(entry.block_signature, entry._id)}
                              >
                                {copiedId === entry._id ? (
                                  <Check className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Page {page + 1} of {totalPages}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
