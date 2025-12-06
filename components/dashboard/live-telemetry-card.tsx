"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { TelemetryReading } from "@/lib/types"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { useMemo } from "react"

interface LiveTelemetryCardProps {
  telemetry: TelemetryReading[]
}

export function LiveTelemetryCard({ telemetry }: LiveTelemetryCardProps) {
  const chartData = useMemo(() => {
    // Group by timestamp and aggregate
    const timeGroups = new Map<string, { solar: number; grid: number; time: string }>()

    telemetry.forEach((reading) => {
      const time = new Date(reading.timestamp).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })

      const existing = timeGroups.get(time) || { solar: 0, grid: 0, time }

      if (reading.device_id.includes("solar")) {
        existing.solar = reading.instant_power_w / 1000
      } else if (reading.device_id.includes("meter")) {
        existing.grid = (reading.instant_power_w / 1000) * 0.3
      }

      timeGroups.set(time, existing)
    })

    return Array.from(timeGroups.values()).slice(-20)
  }, [telemetry])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-serif">Live Power Output</CardTitle>
        <CardDescription>Real-time generation and consumption (last 2 minutes)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="time" tick={{ fontSize: 10 }} className="text-muted-foreground" />
              <YAxis tick={{ fontSize: 10 }} className="text-muted-foreground" unit=" kW" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
                formatter={(value: number) => [`${value.toFixed(2)} kW`, ""]}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="solar"
                name="Solar Generation"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="grid"
                name="Grid Import"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
