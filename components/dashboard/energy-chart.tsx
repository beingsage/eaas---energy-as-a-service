"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { useMemo } from "react"

// Generate mock historical data
function generateDailyData() {
  const data = []
  for (let hour = 0; hour < 24; hour++) {
    const solarMultiplier = hour >= 6 && hour <= 18 ? Math.sin(((hour - 6) * Math.PI) / 12) : 0

    data.push({
      hour: `${hour.toString().padStart(2, "0")}:00`,
      generation: Number((solarMultiplier * 4.5 + Math.random() * 0.5).toFixed(2)),
      consumption: Number((0.8 + Math.random() * 0.5 + (hour >= 18 && hour <= 22 ? 1.5 : 0)).toFixed(2)),
      export: Number((solarMultiplier > 0.5 ? (solarMultiplier - 0.5) * 2 : 0).toFixed(2)),
    })
  }
  return data
}

function generateWeeklyData() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  return days.map((day) => ({
    day,
    generation: Number((18 + Math.random() * 5).toFixed(1)),
    consumption: Number((12 + Math.random() * 4).toFixed(1)),
    export: Number((3 + Math.random() * 2).toFixed(1)),
    savings: Number((85 + Math.random() * 30).toFixed(0)),
  }))
}

function generateMonthlyData() {
  const data = []
  for (let i = 1; i <= 30; i++) {
    data.push({
      day: i,
      generation: Number((15 + Math.random() * 8).toFixed(1)),
      consumption: Number((10 + Math.random() * 5).toFixed(1)),
      savings: Number((75 + Math.random() * 40).toFixed(0)),
    })
  }
  return data
}

export function EnergyChart() {
  const dailyData = useMemo(() => generateDailyData(), [])
  const weeklyData = useMemo(() => generateWeeklyData(), [])
  const monthlyData = useMemo(() => generateMonthlyData(), [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-serif">Energy Analytics</CardTitle>
        <CardDescription>Historical generation, consumption, and savings</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today">
          <TabsList className="mb-4">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="hour" tick={{ fontSize: 10 }} interval={2} />
                  <YAxis tick={{ fontSize: 10 }} unit=" kWh" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="generation"
                    name="Generation"
                    stackId="1"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="export"
                    name="Export"
                    stackId="2"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">18.5 kWh</div>
                <div className="text-xs text-muted-foreground">Generated</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">12.3 kWh</div>
                <div className="text-xs text-muted-foreground">Consumed</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">3.2 kWh</div>
                <div className="text-xs text-muted-foreground">Exported</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="week">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} unit=" kWh" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar dataKey="generation" name="Generation" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="consumption" name="Consumption" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="export" name="Export" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">142 kWh</div>
                <div className="text-xs text-muted-foreground">Generated</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">95 kWh</div>
                <div className="text-xs text-muted-foreground">Consumed</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">24 kWh</div>
                <div className="text-xs text-muted-foreground">Exported</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-green-600">₹687</div>
                <div className="text-xs text-muted-foreground">Saved</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="month">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} unit=" kWh" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="generation"
                    name="Generation"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="consumption"
                    name="Consumption"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    fillOpacity={0.4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">562 kWh</div>
                <div className="text-xs text-muted-foreground">Generated</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">385 kWh</div>
                <div className="text-xs text-muted-foreground">Consumed</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">461 kg</div>
                <div className="text-xs text-muted-foreground">CO₂ Offset</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-green-600">₹2,845</div>
                <div className="text-xs text-muted-foreground">Saved</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
