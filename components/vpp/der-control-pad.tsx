"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { DERAsset } from "@/lib/vpp"
import { Zap, Battery, BatteryCharging, Power, AlertCircle } from "lucide-react"

interface DERControlPadProps {
  assets: DERAsset[]
  onDispatch: (assetId: string, command: string, power: number) => void
}

export function DERControlPad({ assets, onDispatch }: DERControlPadProps) {
  const [selectedAsset, setSelectedAsset] = useState<string>("")
  const [command, setCommand] = useState<string>("")
  const [targetPower, setTargetPower] = useState([50])

  const asset = assets.find((a) => a.id === selectedAsset)
  const maxPower = asset?.capacity_kw || 100

  const handleDispatch = () => {
    if (selectedAsset && command) {
      const power =
        command === "discharge" || command === "export"
          ? (targetPower[0] / 100) * maxPower
          : command === "charge"
            ? (-targetPower[0] / 100) * maxPower
            : 0
      onDispatch(selectedAsset, command, power)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-serif flex items-center gap-2">
          <Zap className="h-5 w-5" />
          DER Control Pad
        </CardTitle>
        <CardDescription>Manual dispatch commands</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Select Asset</Label>
          <Select value={selectedAsset} onValueChange={setSelectedAsset}>
            <SelectTrigger>
              <SelectValue placeholder="Choose an asset" />
            </SelectTrigger>
            <SelectContent>
              {assets
                .filter((a) => a.controllable)
                .map((asset) => (
                  <SelectItem key={asset.id} value={asset.id}>
                    {asset.siteName} - {asset.type === "solar" ? "Solar" : "Battery"} ({asset.capacity_kw} kW)
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Command</Label>
          <Select value={command} onValueChange={setCommand}>
            <SelectTrigger>
              <SelectValue placeholder="Select command" />
            </SelectTrigger>
            <SelectContent>
              {asset?.type === "battery" && (
                <>
                  <SelectItem value="charge">
                    <span className="flex items-center gap-2">
                      <BatteryCharging className="h-4 w-4" />
                      Charge
                    </span>
                  </SelectItem>
                  <SelectItem value="discharge">
                    <span className="flex items-center gap-2">
                      <Battery className="h-4 w-4" />
                      Discharge
                    </span>
                  </SelectItem>
                </>
              )}
              <SelectItem value="export">
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Export to Grid
                </span>
              </SelectItem>
              <SelectItem value="curtail">
                <span className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Curtail
                </span>
              </SelectItem>
              <SelectItem value="idle">
                <span className="flex items-center gap-2">
                  <Power className="h-4 w-4" />
                  Idle
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {command && command !== "idle" && command !== "curtail" && (
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Target Power</Label>
              <span className="text-sm font-mono">
                {((targetPower[0] / 100) * maxPower).toFixed(1)} kW ({targetPower[0]}%)
              </span>
            </div>
            <Slider value={targetPower} onValueChange={setTargetPower} max={100} step={5} />
          </div>
        )}

        <Button className="w-full" onClick={handleDispatch} disabled={!selectedAsset || !command}>
          <Zap className="h-4 w-4 mr-2" />
          Execute Command
        </Button>

        {asset && (
          <div className="p-3 bg-muted rounded-lg text-sm">
            <p className="font-medium mb-1">Asset Status</p>
            <div className="grid grid-cols-2 gap-2 text-muted-foreground">
              <span>Current Output:</span>
              <span className="font-mono">{asset.currentOutput_kw.toFixed(1)} kW</span>
              {asset.soc !== undefined && (
                <>
                  <span>State of Charge:</span>
                  <span className="font-mono">{asset.soc.toFixed(0)}%</span>
                </>
              )}
              <span>Status:</span>
              <span className="capitalize">{asset.status}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
