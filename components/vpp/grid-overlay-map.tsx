"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { DERAsset } from "@/lib/vpp"
import { Sun, Battery, MapPin } from "lucide-react"

interface GridOverlayMapProps {
  assets: DERAsset[]
  onSelectAsset: (assetId: string) => void
}

export function GridOverlayMap({ assets, onSelectAsset }: GridOverlayMapProps) {
  // Group assets by site
  const sites = assets.reduce(
    (acc, asset) => {
      if (!acc[asset.siteId]) {
        acc[asset.siteId] = {
          name: asset.siteName,
          location: asset.location,
          assets: [],
        }
      }
      acc[asset.siteId].assets.push(asset)
      return acc
    },
    {} as Record<string, { name: string; location: { lat: number; lng: number }; assets: DERAsset[] }>,
  )

  // Calculate relative positions for the map visualization
  const getPosition = (location: { lat: number; lng: number }) => {
    const minLat = 12.8456,
      maxLat = 12.9716
    const minLng = 77.5946,
      maxLng = 77.75

    const x = ((location.lng - minLng) / (maxLng - minLng)) * 100
    const y = ((maxLat - location.lat) / (maxLat - minLat)) * 100

    return { x: Math.max(10, Math.min(90, x)), y: Math.max(10, Math.min(90, y)) }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-serif flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Grid Overlay Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-muted rounded-lg h-96 overflow-hidden">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Transmission Lines (simplified) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {Object.values(sites).map((site, i, arr) => {
              if (i === 0) return null
              const pos1 = getPosition(arr[0].location)
              const pos2 = getPosition(site.location)
              return (
                <line
                  key={`line-${i}`}
                  x1={`${pos1.x}%`}
                  y1={`${pos1.y}%`}
                  x2={`${pos2.x}%`}
                  y2={`${pos2.y}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="4"
                  opacity="0.3"
                />
              )
            })}
          </svg>

          {/* Site Markers */}
          {Object.entries(sites).map(([siteId, site]) => {
            const pos = getPosition(site.location)
            const totalCapacity = site.assets.reduce((sum, a) => sum + a.capacity_kw, 0)
            const totalOutput = site.assets.reduce((sum, a) => sum + a.currentOutput_kw, 0)
            const hasDispatch = site.assets.some((a) => a.status === "dispatching")
            const hasOffline = site.assets.some((a) => a.status === "offline")

            return (
              <div
                key={siteId}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onClick={() => onSelectAsset(site.assets[0].id)}
              >
                {/* Pulsing ring for active dispatch */}
                {hasDispatch && <div className="absolute inset-0 -m-2 rounded-full bg-green-500/20 animate-ping" />}

                {/* Main marker */}
                <div
                  className={`
                  relative w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    hasOffline
                      ? "bg-muted border-2 border-destructive"
                      : hasDispatch
                        ? "bg-green-100 dark:bg-green-900 border-2 border-green-500"
                        : "bg-card border-2 border-primary"
                  }
                  shadow-lg transition-transform group-hover:scale-110
                `}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold">{totalOutput.toFixed(0)}</div>
                    <div className="text-[8px] text-muted-foreground">kW</div>
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="bg-popover border border-border rounded-lg p-3 shadow-lg min-w-[200px]">
                    <p className="font-medium text-sm mb-2">{site.name}</p>
                    <div className="space-y-1">
                      {site.assets.map((asset) => (
                        <div key={asset.id} className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1">
                            {asset.type === "solar" ? (
                              <Sun className="h-3 w-3 text-amber-500" />
                            ) : (
                              <Battery className="h-3 w-3 text-green-500" />
                            )}
                            {asset.type === "solar" ? "Solar" : "Battery"}
                          </span>
                          <span className="font-mono">{asset.currentOutput_kw.toFixed(1)} kW</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">Total</span>
                      <Badge variant="secondary" className="text-xs">
                        {totalCapacity} kW capacity
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur border border-border rounded-lg p-3">
            <p className="text-xs font-medium mb-2">Legend</p>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>Active Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-primary" />
                <span>Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-destructive" />
                <span>Offline</span>
              </div>
            </div>
          </div>

          {/* Substation marker */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-card/90 backdrop-blur border border-border rounded-lg px-3 py-2">
            <div className="w-4 h-4 bg-amber-500 rounded" />
            <span className="text-xs font-medium">Grid Substation</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
