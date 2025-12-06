"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sun,
  Battery,
  Zap,
  TrendingUp,
  TrendingDown,
  Clock,
  Activity,
  DollarSign,
  Leaf,
  AlertCircle,
  CheckCircle2,
} from "lucide-react"
import { LiveTelemetryCard } from "@/components/dashboard/live-telemetry-card"
import { EnergyChart } from "@/components/dashboard/energy-chart"
import { DeviceList } from "@/components/dashboard/device-list"
import { BillingOverview } from "@/components/dashboard/billing-overview"
import { TouIndicator } from "@/components/dashboard/tou-indicator"
import { WelcomeModal } from "@/components/dashboard/welcome-modal"
import { useTelemetry } from "@/hooks/use-telemetry"
import { getCurrentTouRate } from "@/lib/mock-data"

function DashboardContent() {
  const searchParams = useSearchParams()
  const showWelcome = searchParams.get("welcome") === "true"
  const [welcomeOpen, setWelcomeOpen] = useState(showWelcome)

  const { telemetry, devices, isConnected, stats } = useTelemetry()
  const touRate = getCurrentTouRate()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold">Energy Dashboard</h1>
            <p className="text-muted-foreground">Real-time monitoring for Site #KA-BLR-2024-001</p>
          </div>
          <div className="flex items-center gap-4">
            <TouIndicator rate={touRate} />
            <Badge variant={isConnected ? "default" : "destructive"} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
              {isConnected ? "Live" : "Offline"}
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Sun className="h-4 w-4" />
                <span className="text-sm">Solar Generation</span>
              </div>
              <div className="text-2xl font-bold font-serif">{(stats.currentGeneration / 1000).toFixed(2)} kW</div>
              <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                {stats.generationToday.toFixed(1)} kWh today
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Zap className="h-4 w-4" />
                <span className="text-sm">Grid Import</span>
              </div>
              <div className="text-2xl font-bold font-serif">{(stats.currentImport / 1000).toFixed(2)} kW</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Clock className="h-3 w-3" />
                {stats.importToday.toFixed(1)} kWh today
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Battery className="h-4 w-4" />
                <span className="text-sm">Battery</span>
              </div>
              <div className="text-2xl font-bold font-serif">{stats.batterySoc}%</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                {stats.batteryStatus === "charging" ? (
                  <>
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-green-600">Charging</span>
                  </>
                ) : stats.batteryStatus === "discharging" ? (
                  <>
                    <TrendingDown className="h-3 w-3 text-amber-600" />
                    <span className="text-amber-600">Discharging</span>
                  </>
                ) : (
                  <>
                    <Activity className="h-3 w-3" />
                    <span>Idle</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <DollarSign className="h-4 w-4" />
                <span className="text-sm">{"Today's Savings"}</span>
              </div>
              <div className="text-2xl font-bold font-serif text-green-600">₹{stats.savingsToday.toFixed(0)}</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Leaf className="h-3 w-3 text-green-600" />
                {stats.carbonOffset.toFixed(1)} kg CO₂ offset
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Live Telemetry */}
              <div className="lg:col-span-2">
                <LiveTelemetryCard telemetry={telemetry} />
              </div>

              {/* Energy Flow Diagram */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-serif">Energy Flow</CardTitle>
                  <CardDescription>Real-time power distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <EnergyFlowDiagram stats={stats} />
                </CardContent>
              </Card>
            </div>

            {/* Energy Charts */}
            <EnergyChart />

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-serif">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900 dark:text-green-100">All systems operational</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Last checked: just now</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-900 dark:text-amber-100">Peak hours approaching</p>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Battery will start discharging at 6 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices">
            <DeviceList devices={devices} />
          </TabsContent>

          <TabsContent value="billing">
            <BillingOverview stats={stats} />
          </TabsContent>
        </Tabs>
      </main>

      <WelcomeModal open={welcomeOpen} onOpenChange={setWelcomeOpen} />
    </div>
  )
}

function EnergyFlowDiagram({ stats }: { stats: any }) {
  return (
    <div className="relative h-64">
      {/* Solar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mx-auto mb-2">
          <Sun className="h-8 w-8 text-amber-600" />
        </div>
        <div className="text-sm font-medium">{(stats.currentGeneration / 1000).toFixed(1)} kW</div>
        <div className="text-xs text-muted-foreground">Solar</div>
      </div>

      {/* Grid */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-center">
        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-2">
          <Zap className="h-6 w-6 text-blue-600" />
        </div>
        <div className="text-sm font-medium">{(stats.currentImport / 1000).toFixed(1)} kW</div>
        <div className="text-xs text-muted-foreground">Grid</div>
      </div>

      {/* Home */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
          <div className="text-center">
            <div className="text-lg font-bold">
              {((stats.currentGeneration + stats.currentImport) / 1000).toFixed(1)}
            </div>
            <div className="text-xs">kW Load</div>
          </div>
        </div>
      </div>

      {/* Battery */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-2">
          <Battery className="h-6 w-6 text-green-600" />
        </div>
        <div className="text-sm font-medium">{stats.batterySoc}%</div>
        <div className="text-xs text-muted-foreground">Battery</div>
      </div>

      {/* Export */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-2">
          <TrendingUp className="h-6 w-6 text-purple-600" />
        </div>
        <div className="text-sm font-medium">{stats.exportToday.toFixed(1)} kWh</div>
        <div className="text-xs text-muted-foreground">Exported</div>
      </div>

      {/* Flow Lines - simplified visual */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-muted-foreground/30" />
          </marker>
        </defs>
        {/* Solar to Home */}
        <line
          x1="50%"
          y1="80"
          x2="50%"
          y2="110"
          stroke="currentColor"
          strokeWidth="2"
          className="text-amber-400"
          strokeDasharray="4"
        />
        {/* Grid to Home */}
        <line
          x1="60"
          y1="50%"
          x2="90"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-400"
          strokeDasharray="4"
        />
        {/* Home to Battery */}
        <line
          x1="calc(100% - 90px)"
          y1="50%"
          x2="calc(100% - 60px)"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className="text-green-400"
          strokeDasharray="4"
        />
      </svg>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading dashboard...</div>}
    >
      <DashboardContent />
    </Suspense>
  )
}
