"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { DERAsset } from "@/lib/vpp"
import { Clock, Zap, Play, Pause, X, CheckCircle2 } from "lucide-react"

interface DispatchQueueProps {
  assets: DERAsset[]
  onDispatch: (assetId: string, command: string, power: number) => void
}

const mockDispatchQueue = [
  {
    id: "disp-1",
    assetId: "der-4",
    command: "discharge",
    targetPower: 15,
    duration: 60,
    reason: "Peak demand response",
    priority: "high",
    status: "executing",
    startedAt: new Date(Date.now() - 25 * 60000),
  },
  {
    id: "disp-2",
    assetId: "der-6",
    command: "discharge",
    targetPower: 50,
    duration: 120,
    reason: "Grid frequency support",
    priority: "critical",
    status: "executing",
    startedAt: new Date(Date.now() - 45 * 60000),
  },
  {
    id: "disp-3",
    assetId: "der-8",
    command: "charge",
    targetPower: 30,
    duration: 90,
    reason: "Off-peak charging schedule",
    priority: "low",
    status: "queued",
    startedAt: null,
  },
  {
    id: "disp-4",
    assetId: "der-2",
    command: "export",
    targetPower: 3,
    duration: 30,
    reason: "High price period",
    priority: "medium",
    status: "queued",
    startedAt: null,
  },
]

export function DispatchQueue({ assets, onDispatch }: DispatchQueueProps) {
  const [queue, setQueue] = useState(mockDispatchQueue)

  const getAsset = (assetId: string) => assets.find((a) => a.id === assetId)

  const cancelDispatch = (dispatchId: string) => {
    setQueue((prev) => prev.filter((d) => d.id !== dispatchId))
  }

  const executeDispatch = (dispatchId: string) => {
    setQueue((prev) =>
      prev.map((d) => (d.id === dispatchId ? { ...d, status: "executing", startedAt: new Date() } : d)),
    )
  }

  return (
    <div className="space-y-6">
      {/* Active Dispatches */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-500" />
            Active Dispatches
          </CardTitle>
          <CardDescription>Currently executing dispatch commands</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {queue
              .filter((d) => d.status === "executing")
              .map((dispatch) => {
                const asset = getAsset(dispatch.assetId)
                const elapsed = dispatch.startedAt ? Math.round((Date.now() - dispatch.startedAt.getTime()) / 60000) : 0
                const progress = (elapsed / dispatch.duration) * 100

                return (
                  <div
                    key={dispatch.id}
                    className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">{asset?.siteName}</p>
                          <Badge
                            variant={
                              dispatch.priority === "critical"
                                ? "destructive"
                                : dispatch.priority === "high"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {dispatch.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{dispatch.reason}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => cancelDispatch(dispatch.id)}>
                        <Pause className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-muted-foreground">Command</p>
                        <p className="font-medium capitalize">{dispatch.command}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Target Power</p>
                        <p className="font-mono">{dispatch.targetPower} kW</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-mono">
                          {elapsed}/{dispatch.duration} min
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.min(100, progress).toFixed(0)}%</span>
                      </div>
                      <div className="h-2 bg-green-200 dark:bg-green-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 transition-all"
                          style={{ width: `${Math.min(100, progress)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}

            {queue.filter((d) => d.status === "executing").length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No active dispatches</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Queued Dispatches */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Dispatch Queue
          </CardTitle>
          <CardDescription>Pending dispatch commands</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {queue
              .filter((d) => d.status === "queued")
              .map((dispatch, index) => {
                const asset = getAsset(dispatch.assetId)

                return (
                  <div key={dispatch.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{asset?.siteName}</p>
                          <Badge variant="outline" className="text-xs">
                            {dispatch.command}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{dispatch.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right text-sm">
                        <p className="font-mono">{dispatch.targetPower} kW</p>
                        <p className="text-muted-foreground">{dispatch.duration} min</p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" onClick={() => executeDispatch(dispatch.id)}>
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => cancelDispatch(dispatch.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}

            {queue.filter((d) => d.status === "queued").length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No pending dispatches</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dispatch History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Recent Dispatch History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              {
                time: "14:32",
                asset: "Whitefield Office Park",
                command: "Discharge",
                power: "45 kW",
                duration: "60 min",
                status: "completed",
              },
              {
                time: "13:15",
                asset: "Koramangala Commercial",
                command: "Charge",
                power: "15 kW",
                duration: "90 min",
                status: "completed",
              },
              {
                time: "11:45",
                asset: "Electronic City Industrial",
                command: "Curtail",
                power: "50 kW",
                duration: "30 min",
                status: "completed",
              },
              {
                time: "10:00",
                asset: "HSR Layout Apartments",
                command: "Export",
                power: "8 kW",
                duration: "120 min",
                status: "completed",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-12">{item.time}</span>
                  <div>
                    <p className="text-sm font-medium">{item.asset}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.command} @ {item.power} for {item.duration}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
