"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sun,
  Battery,
  Zap,
  Car,
  Plus,
  Settings,
  RefreshCw,
  Wifi,
  WifiOff,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Cpu,
  Server,
  Activity,
  Download,
  Upload,
  Terminal,
} from "lucide-react"

interface Device {
  id: string
  type: "solar_inverter" | "battery" | "ev_charger" | "smart_meter" | "gateway"
  name: string
  manufacturer: string
  model: string
  serialNumber: string
  firmware: string
  status: "online" | "offline" | "maintenance" | "pending"
  capacity_kw: number
  protocol: "modbus" | "sunspec" | "ocpp" | "mqtt" | "canbus"
  lastSeen: Date
  metrics: {
    uptime: number
    dataPoints: number
    errors: number
  }
}

const mockDevices: Device[] = [
  {
    id: "dev-1",
    type: "solar_inverter",
    name: "Solar Inverter #1",
    manufacturer: "Growatt",
    model: "MIN 5000TL-X",
    serialNumber: "GW5TLX2024001",
    firmware: "v2.4.1",
    status: "online",
    capacity_kw: 5,
    protocol: "modbus",
    lastSeen: new Date(),
    metrics: { uptime: 99.2, dataPoints: 15420, errors: 3 },
  },
  {
    id: "dev-2",
    type: "battery",
    name: "Battery System",
    manufacturer: "BYD",
    model: "HVS 5.1",
    serialNumber: "BYD5HVS2024001",
    firmware: "v1.8.0",
    status: "online",
    capacity_kw: 5,
    protocol: "canbus",
    lastSeen: new Date(),
    metrics: { uptime: 98.7, dataPoints: 12300, errors: 1 },
  },
  {
    id: "dev-3",
    type: "smart_meter",
    name: "Smart Meter",
    manufacturer: "Genus",
    model: "EM3000",
    serialNumber: "GNS3K2024001",
    firmware: "v3.1.2",
    status: "online",
    capacity_kw: 10,
    protocol: "modbus",
    lastSeen: new Date(),
    metrics: { uptime: 99.9, dataPoints: 25600, errors: 0 },
  },
  {
    id: "dev-4",
    type: "ev_charger",
    name: "EV Charger",
    manufacturer: "ABB",
    model: "Terra AC 7.4",
    serialNumber: "ABB74AC2024001",
    firmware: "v2.0.5",
    status: "offline",
    capacity_kw: 7.4,
    protocol: "ocpp",
    lastSeen: new Date(Date.now() - 3600000),
    metrics: { uptime: 95.4, dataPoints: 8900, errors: 12 },
  },
  {
    id: "dev-5",
    type: "gateway",
    name: "Edge Gateway",
    manufacturer: "Energy OS",
    model: "EOS-GW100",
    serialNumber: "EOSGW2024001",
    firmware: "v4.2.0",
    status: "online",
    capacity_kw: 0,
    protocol: "mqtt",
    lastSeen: new Date(),
    metrics: { uptime: 99.8, dataPoints: 156000, errors: 2 },
  },
]

const protocolInfo = {
  modbus: { name: "Modbus RTU/TCP", color: "bg-blue-500" },
  sunspec: { name: "SunSpec", color: "bg-amber-500" },
  ocpp: { name: "OCPP 1.6/2.0", color: "bg-green-500" },
  mqtt: { name: "MQTT", color: "bg-purple-500" },
  canbus: { name: "CAN Bus", color: "bg-red-500" },
}

export default function DevicesPage() {
  const [devices, setDevices] = useState<Device[]>(mockDevices)
  const [addDeviceOpen, setAddDeviceOpen] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null)

  const getDeviceIcon = (type: Device["type"]) => {
    switch (type) {
      case "solar_inverter":
        return <Sun className="h-5 w-5 text-amber-500" />
      case "battery":
        return <Battery className="h-5 w-5 text-green-500" />
      case "ev_charger":
        return <Car className="h-5 w-5 text-blue-500" />
      case "smart_meter":
        return <Zap className="h-5 w-5 text-purple-500" />
      case "gateway":
        return <Server className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: Device["status"]) => {
    switch (status) {
      case "online":
        return (
          <Badge variant="default" className="bg-green-600">
            <Wifi className="h-3 w-3 mr-1" /> Online
          </Badge>
        )
      case "offline":
        return (
          <Badge variant="destructive">
            <WifiOff className="h-3 w-3 mr-1" /> Offline
          </Badge>
        )
      case "maintenance":
        return (
          <Badge variant="secondary">
            <Settings className="h-3 w-3 mr-1" /> Maintenance
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline">
            <Clock className="h-3 w-3 mr-1" /> Pending
          </Badge>
        )
    }
  }

  const handleProvision = (deviceId: string) => {
    setDevices((prev) => prev.map((d) => (d.id === deviceId ? { ...d, status: "online" as const } : d)))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Cpu className="h-6 w-6" />
              Device Management
            </h1>
            <p className="text-muted-foreground">Provision and manage your distributed energy resources</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync All
            </Button>
            <Dialog open={addDeviceOpen} onOpenChange={setAddDeviceOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Device
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="font-serif">Add New Device</DialogTitle>
                  <DialogDescription>Enter device details to provision a new DER asset</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="deviceType">Device Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solar_inverter">Solar Inverter</SelectItem>
                        <SelectItem value="battery">Battery System</SelectItem>
                        <SelectItem value="ev_charger">EV Charger</SelectItem>
                        <SelectItem value="smart_meter">Smart Meter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="protocol">Communication Protocol</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select protocol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modbus">Modbus RTU/TCP</SelectItem>
                        <SelectItem value="sunspec">SunSpec</SelectItem>
                        <SelectItem value="ocpp">OCPP 1.6/2.0</SelectItem>
                        <SelectItem value="mqtt">MQTT</SelectItem>
                        <SelectItem value="canbus">CAN Bus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="manufacturer">Manufacturer</Label>
                      <Input id="manufacturer" placeholder="e.g., Growatt" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="model">Model</Label>
                      <Input id="model" placeholder="e.g., MIN 5000TL-X" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="serial">Serial Number</Label>
                    <Input id="serial" placeholder="Device serial number" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="capacity">Capacity (kW)</Label>
                    <Input id="capacity" type="number" placeholder="5" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setAddDeviceOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setAddDeviceOpen(false)}>Provision Device</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Online</span>
              </div>
              <div className="text-2xl font-bold font-serif">{devices.filter((d) => d.status === "online").length}</div>
              <p className="text-xs text-muted-foreground">devices connected</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <span className="text-sm">Issues</span>
              </div>
              <div className="text-2xl font-bold font-serif">
                {devices.filter((d) => d.status === "offline" || d.status === "maintenance").length}
              </div>
              <p className="text-xs text-muted-foreground">need attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Activity className="h-4 w-4" />
                <span className="text-sm">Total Capacity</span>
              </div>
              <div className="text-2xl font-bold font-serif">
                {devices.filter((d) => d.type !== "gateway").reduce((sum, d) => sum + d.capacity_kw, 0)} kW
              </div>
              <p className="text-xs text-muted-foreground">installed</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Upload className="h-4 w-4" />
                <span className="text-sm">Data Points</span>
              </div>
              <div className="text-2xl font-bold font-serif">
                {(devices.reduce((sum, d) => sum + d.metrics.dataPoints, 0) / 1000).toFixed(0)}K
              </div>
              <p className="text-xs text-muted-foreground">this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="devices" className="space-y-6">
          <TabsList>
            <TabsTrigger value="devices">All Devices</TabsTrigger>
            <TabsTrigger value="gateway">Gateway</TabsTrigger>
            <TabsTrigger value="protocols">Protocols</TabsTrigger>
          </TabsList>

          <TabsContent value="devices" className="space-y-4">
            <div className="grid gap-4">
              {devices
                .filter((d) => d.type !== "gateway")
                .map((device) => (
                  <Card key={device.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="py-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                            {getDeviceIcon(device.type)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{device.name}</h3>
                              {getStatusBadge(device.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {device.manufacturer} {device.model}
                            </p>
                            <p className="text-xs text-muted-foreground font-mono">S/N: {device.serialNumber}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Capacity</p>
                            <p className="font-medium">{device.capacity_kw} kW</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Protocol</p>
                            <Badge variant="outline" className="font-mono text-xs">
                              {protocolInfo[device.protocol].name}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Uptime</p>
                            <p className="font-medium">{device.metrics.uptime}%</p>
                          </div>
                          <Button variant="outline" size="sm" onClick={() => setSelectedDevice(device)}>
                            <Settings className="h-4 w-4 mr-1" />
                            Configure
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="gateway">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Server className="h-5 w-5" />
                    Edge Gateway
                  </CardTitle>
                  <CardDescription>Hardware bridge translating device protocols to unified JSON</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {devices
                    .filter((d) => d.type === "gateway")
                    .map((gw) => (
                      <div key={gw.id} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Status</span>
                          {getStatusBadge(gw.status)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Firmware</span>
                          <span className="font-mono text-sm">{gw.firmware}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Uptime</span>
                          <span className="font-medium">{gw.metrics.uptime}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Messages Processed</span>
                          <span className="font-medium">{gw.metrics.dataPoints.toLocaleString()}</span>
                        </div>
                        <Progress value={gw.metrics.uptime} className="h-2" />
                      </div>
                    ))}
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Update Firmware
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Restart
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Protocol Bridges
                  </CardTitle>
                  <CardDescription>Active protocol translators on the gateway</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(protocolInfo).map(([key, info]) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${info.color}`} />
                          <div>
                            <p className="font-medium">{info.name}</p>
                            <p className="text-xs text-muted-foreground font-mono">bridge.{key}()</p>
                          </div>
                        </div>
                        <Badge variant="outline">
                          {devices.filter((d) => d.protocol === key && d.type !== "gateway").length} devices
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="protocols">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Device Abstraction Layer (EDAL)</CardTitle>
                <CardDescription>Universal API translating OEM protocols to standard commands</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Supported Commands</h4>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="p-2 bg-muted rounded">device.setExportLimit(kW)</div>
                      <div className="p-2 bg-muted rounded">device.scheduleCharge(start, rate)</div>
                      <div className="p-2 bg-muted rounded">device.throttle(maxKW)</div>
                      <div className="p-2 bg-muted rounded">device.shutdown()</div>
                      <div className="p-2 bg-muted rounded">device.getTelemetry()</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Protocol Support Status</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Modbus RTU/TCP", status: "stable", coverage: 95 },
                        { name: "SunSpec", status: "stable", coverage: 90 },
                        { name: "OCPP 1.6/2.0", status: "stable", coverage: 88 },
                        { name: "CAN Bus", status: "beta", coverage: 75 },
                        { name: "MQTT", status: "stable", coverage: 98 },
                      ].map((p) => (
                        <div key={p.name} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>{p.name}</span>
                            <Badge variant={p.status === "stable" ? "default" : "secondary"}>{p.status}</Badge>
                          </div>
                          <Progress value={p.coverage} className="h-2" />
                          <p className="text-xs text-muted-foreground">{p.coverage}% device coverage</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Device Config Dialog */}
      <Dialog open={!!selectedDevice} onOpenChange={() => setSelectedDevice(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="font-serif">Configure {selectedDevice?.name}</DialogTitle>
            <DialogDescription>
              {selectedDevice?.manufacturer} {selectedDevice?.model}
            </DialogDescription>
          </DialogHeader>
          {selectedDevice && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Serial Number</Label>
                  <p className="font-mono text-sm">{selectedDevice.serialNumber}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Firmware</Label>
                  <p className="font-mono text-sm">{selectedDevice.firmware}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Protocol</Label>
                  <p className="text-sm">{protocolInfo[selectedDevice.protocol].name}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Capacity</Label>
                  <p className="text-sm">{selectedDevice.capacity_kw} kW</p>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <h4 className="font-medium mb-3">Device Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{selectedDevice.metrics.uptime}%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{selectedDevice.metrics.dataPoints.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Data Points</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{selectedDevice.metrics.errors}</p>
                    <p className="text-xs text-muted-foreground">Errors</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedDevice(null)}>
              Close
            </Button>
            <Button variant="destructive">Remove Device</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
