"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sun, Battery, Zap, Gauge, Settings, RefreshCw, Wifi, WifiOff, Clock, Info } from "lucide-react"
import type { Device } from "@/lib/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface DeviceListProps {
  devices: Device[]
}

const deviceIcons = {
  solar_inverter: Sun,
  battery: Battery,
  ev_charger: Zap,
  smart_meter: Gauge,
}

const deviceLabels = {
  solar_inverter: "Solar Inverter",
  battery: "Battery System",
  ev_charger: "EV Charger",
  smart_meter: "Smart Meter",
}

export function DeviceList({ devices }: DeviceListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-serif font-bold">Connected Devices</h2>
          <p className="text-sm text-muted-foreground">{devices.length} devices registered</p>
        </div>
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Status
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {devices.map((device) => {
          const Icon = deviceIcons[device.type] || Gauge
          const isOnline = device.status === "online"

          return (
            <Card key={device._id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isOnline ? "bg-green-100 dark:bg-green-900" : "bg-muted"}`}>
                      <Icon className={`h-5 w-5 ${isOnline ? "text-green-600" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <CardTitle className="text-base font-serif">{deviceLabels[device.type]}</CardTitle>
                      <CardDescription className="text-xs">
                        {device.manufacturer} {device.model}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={isOnline ? "default" : "secondary"} className="text-xs">
                    {isOnline ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
                    {device.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity</span>
                    <span>{device.capacity_kw} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Serial</span>
                    <span className="font-mono text-xs">{device.serial_number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Firmware</span>
                    <span>v{device.firmware_version}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Last seen
                    </span>
                    <span className="text-xs">just now</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Info className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-serif">{deviceLabels[device.type]} Details</DialogTitle>
                        <DialogDescription>Full device information and diagnostics</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Manufacturer</p>
                            <p className="font-medium">{device.manufacturer}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Model</p>
                            <p className="font-medium">{device.model}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Serial Number</p>
                            <p className="font-mono">{device.serial_number}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Capacity</p>
                            <p className="font-medium">{device.capacity_kw} kW</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Firmware</p>
                            <p className="font-medium">v{device.firmware_version}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Status</p>
                            <Badge variant={isOnline ? "default" : "secondary"}>{device.status}</Badge>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Commissioned</p>
                            <p className="font-medium">
                              {new Date(device.commissioned_at).toLocaleDateString("en-IN")}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Uptime</p>
                            <p className="font-medium text-green-600">99.8%</p>
                          </div>
                        </div>

                        <div className="border-t border-border pt-4">
                          <h4 className="font-medium mb-2">Recent Alerts</h4>
                          <p className="text-sm text-muted-foreground">No alerts in the last 7 days</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Add Device Card */}
      <Card className="border-dashed">
        <CardContent className="py-8 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="font-medium mb-1">Add New Device</h3>
          <p className="text-sm text-muted-foreground mb-4">Connect additional DERs to your site</p>
          <Button variant="outline">Add Device</Button>
        </CardContent>
      </Card>
    </div>
  )
}
