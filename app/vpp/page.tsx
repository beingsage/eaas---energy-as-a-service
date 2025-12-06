"use client"

import { useState, useEffect, useMemo } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Network,
  Zap,
  Battery,
  Sun,
  AlertTriangle,
  Activity,
  PlayCircle,
  PauseCircle,
  Settings,
  Map,
  List,
  Radio,
  Gauge,
} from "lucide-react"
import { mockDERAssets, calculateVPPStatus, simulateGridSignal, type DERAsset, type GridSignal } from "@/lib/vpp"
import { DERControlPad } from "@/components/vpp/der-control-pad"
import { GridOverlayMap } from "@/components/vpp/grid-overlay-map"
import { DispatchQueue } from "@/components/vpp/dispatch-queue"

export default function VPPPage() {
  const [assets, setAssets] = useState<DERAsset[]>(mockDERAssets)
  const [gridSignal, setGridSignal] = useState<GridSignal | null>(null)
  const [isAutoDispatch, setIsAutoDispatch] = useState(true)
  const [viewMode, setViewMode] = useState<"map" | "list">("map")

  const vppStatus = useMemo(() => calculateVPPStatus(assets), [assets])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update asset outputs randomly
      setAssets((prev) =>
        prev.map((asset) => ({
          ...asset,
          currentOutput_kw:
            asset.type === "solar" ? asset.currentOutput_kw + (Math.random() - 0.5) * 2 : asset.currentOutput_kw,
          soc:
            asset.type === "battery" && asset.soc
              ? Math.min(100, Math.max(0, asset.soc + (Math.random() - 0.5) * 2))
              : asset.soc,
        })),
      )

      // Occasionally trigger grid signals
      if (Math.random() > 0.8) {
        setGridSignal(simulateGridSignal())
        setTimeout(() => setGridSignal(null), 5000)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleDispatch = (assetId: string, command: string, power: number) => {
    setAssets((prev) =>
      prev.map((asset) => {
        if (asset.id === assetId) {
          return {
            ...asset,
            status: command === "idle" ? "online" : "dispatching",
            currentOutput_kw: power,
            lastDispatch: new Date(),
          }
        }
        return asset
      }),
    )
  }

  const solarAssets = assets.filter((a) => a.type === "solar")
  const batteryAssets = assets.filter((a) => a.type === "battery")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Network className="h-6 w-6" />
              Virtual Power Plant
            </h1>
            <p className="text-muted-foreground">DER orchestration and grid services management</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant={isAutoDispatch ? "default" : "outline"} onClick={() => setIsAutoDispatch(!isAutoDispatch)}>
              {isAutoDispatch ? (
                <>
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Auto-Dispatch ON
                </>
              ) : (
                <>
                  <PauseCircle className="h-4 w-4 mr-2" />
                  Auto-Dispatch OFF
                </>
              )}
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>

        {/* Grid Signal Alert */}
        {gridSignal && (
          <Card className="mb-6 border-amber-500 bg-amber-50 dark:bg-amber-950">
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-amber-900 dark:text-amber-100">
                      Grid Signal: {gridSignal.type.charAt(0).toUpperCase() + gridSignal.type.slice(1)}{" "}
                      {gridSignal.urgency === "critical" ? "Critical" : "Alert"}
                    </p>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      {gridSignal.type === "frequency" &&
                        `Frequency at ${gridSignal.value.toFixed(2)} Hz (threshold: ${gridSignal.threshold} Hz)`}
                      {gridSignal.type === "congestion" &&
                        `Grid congestion at ${gridSignal.value}% (threshold: ${gridSignal.threshold}%)`}
                      {gridSignal.type === "price" &&
                        `Spot price at ₹${gridSignal.value}/kWh (threshold: ₹${gridSignal.threshold}/kWh)`}
                      {gridSignal.type === "voltage" &&
                        `Voltage at ${gridSignal.value}V (threshold: ${gridSignal.threshold}V)`}
                    </p>
                  </div>
                </div>
                <Badge variant={gridSignal.urgency === "critical" ? "destructive" : "secondary"}>
                  {gridSignal.action.replace("_", " ").toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {/* VPP Status Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Zap className="h-4 w-4" />
                <span className="text-sm">Total Capacity</span>
              </div>
              <div className="text-2xl font-bold font-serif">{(vppStatus.totalCapacity_kw / 1000).toFixed(2)} MW</div>
              <Progress
                value={(vppStatus.availableCapacity_kw / vppStatus.totalCapacity_kw) * 100}
                className="mt-2 h-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {vppStatus.availableCapacity_kw.toFixed(0)} kW available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Activity className="h-4 w-4" />
                <span className="text-sm">Active Dispatch</span>
              </div>
              <div className="text-2xl font-bold font-serif text-green-600">
                {vppStatus.currentDispatch_kw.toFixed(0)} kW
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary">{assets.filter((a) => a.status === "dispatching").length} assets</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Radio className="h-4 w-4" />
                <span className="text-sm">Grid Frequency</span>
              </div>
              <div className="text-2xl font-bold font-serif">{vppStatus.gridFrequency_hz.toFixed(2)} Hz</div>
              <div className="flex items-center gap-1 text-xs mt-2">
                <span
                  className={
                    vppStatus.gridFrequency_hz >= 49.9 && vppStatus.gridFrequency_hz <= 50.1
                      ? "text-green-600"
                      : "text-amber-600"
                  }
                >
                  {vppStatus.gridFrequency_hz >= 49.9 && vppStatus.gridFrequency_hz <= 50.1 ? "Normal" : "Deviation"}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Gauge className="h-4 w-4" />
                <span className="text-sm">Assets Online</span>
              </div>
              <div className="text-2xl font-bold font-serif">
                {vppStatus.assetsOnline}/{vppStatus.assetsTotal}
              </div>
              <Badge
                variant={
                  vppStatus.congestionLevel === "high"
                    ? "destructive"
                    : vppStatus.congestionLevel === "medium"
                      ? "secondary"
                      : "default"
                }
                className="mt-2"
              >
                {vppStatus.congestionLevel} congestion
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="dispatch">Dispatch Queue</TabsTrigger>
              <TabsTrigger value="programs">Grid Programs</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant={viewMode === "map" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("map")}>
                <Map className="h-4 w-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Asset Overview */}
              <div className="lg:col-span-2">
                {viewMode === "map" ? (
                  <GridOverlayMap assets={assets} onSelectAsset={() => {}} />
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">DER Assets</CardTitle>
                      <CardDescription>All distributed energy resources in the VPP</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {assets.map((asset) => (
                          <div key={asset.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex items-center gap-3">
                              {asset.type === "solar" ? (
                                <Sun className="h-5 w-5 text-amber-500" />
                              ) : (
                                <Battery className="h-5 w-5 text-green-500" />
                              )}
                              <div>
                                <p className="font-medium">{asset.siteName}</p>
                                <p className="text-sm text-muted-foreground">
                                  {asset.type === "solar" ? "Solar" : "Battery"} • {asset.capacity_kw} kW
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="font-mono">
                                  {asset.currentOutput_kw > 0 ? "+" : ""}
                                  {asset.currentOutput_kw.toFixed(1)} kW
                                </p>
                                {asset.soc !== undefined && (
                                  <p className="text-xs text-muted-foreground">SOC: {asset.soc.toFixed(0)}%</p>
                                )}
                              </div>
                              <Badge
                                variant={
                                  asset.status === "online"
                                    ? "default"
                                    : asset.status === "dispatching"
                                      ? "secondary"
                                      : asset.status === "curtailed"
                                        ? "destructive"
                                        : "outline"
                                }
                              >
                                {asset.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Control Panel */}
              <div className="space-y-6">
                <DERControlPad assets={assets} onDispatch={handleDispatch} />

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif">Fleet Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-2">
                          <Sun className="h-4 w-4 text-amber-500" />
                          Solar Generation
                        </span>
                        <span className="font-mono">
                          {solarAssets.reduce((sum, a) => sum + a.currentOutput_kw, 0).toFixed(1)} kW
                        </span>
                      </div>
                      <Progress
                        value={
                          (solarAssets.reduce((sum, a) => sum + a.currentOutput_kw, 0) /
                            solarAssets.reduce((sum, a) => sum + a.capacity_kw, 0)) *
                          100
                        }
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-2">
                          <Battery className="h-4 w-4 text-green-500" />
                          Battery Avg SOC
                        </span>
                        <span className="font-mono">
                          {(batteryAssets.reduce((sum, a) => sum + (a.soc || 0), 0) / batteryAssets.length).toFixed(0)}%
                        </span>
                      </div>
                      <Progress
                        value={batteryAssets.reduce((sum, a) => sum + (a.soc || 0), 0) / batteryAssets.length}
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dispatch">
            <DispatchQueue assets={assets} onDispatch={handleDispatch} />
          </TabsContent>

          <TabsContent value="programs">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Demand Response",
                  status: "active",
                  description: "Reduce load during peak demand events",
                  enrolled: 8,
                  earnings: 12500,
                },
                {
                  name: "Frequency Regulation",
                  status: "active",
                  description: "Provide fast response for grid frequency support",
                  enrolled: 5,
                  earnings: 8200,
                },
                {
                  name: "Peak Shaving",
                  status: "active",
                  description: "Discharge batteries during high-price periods",
                  enrolled: 6,
                  earnings: 15800,
                },
                {
                  name: "Voltage Support",
                  status: "standby",
                  description: "Reactive power compensation for voltage stability",
                  enrolled: 3,
                  earnings: 2100,
                },
                {
                  name: "Emergency Backup",
                  status: "standby",
                  description: "Black start and islanding capability",
                  enrolled: 2,
                  earnings: 0,
                },
                {
                  name: "Carbon Credits",
                  status: "active",
                  description: "Generate verified carbon offset certificates",
                  enrolled: 10,
                  earnings: 5600,
                },
              ].map((program) => (
                <Card key={program.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-serif">{program.name}</CardTitle>
                      <Badge variant={program.status === "active" ? "default" : "secondary"}>{program.status}</Badge>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Assets Enrolled</span>
                      <span className="font-medium">{program.enrolled}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-muted-foreground">MTD Earnings</span>
                      <span className="font-medium text-green-600">₹{program.earnings.toLocaleString()}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent" size="sm">
                      Manage Enrollment
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
