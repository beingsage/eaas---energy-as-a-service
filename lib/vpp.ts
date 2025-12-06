// Virtual Power Plant orchestration types and utilities

export interface DERAsset {
  id: string
  siteId: string
  siteName: string
  type: "solar" | "battery" | "ev_charger" | "load"
  capacity_kw: number
  currentOutput_kw: number
  status: "online" | "offline" | "dispatching" | "curtailed"
  soc?: number // State of charge for batteries
  location: { lat: number; lng: number }
  lastDispatch?: Date
  controllable: boolean
}

export interface DispatchCommand {
  assetId: string
  command: "charge" | "discharge" | "curtail" | "export" | "throttle" | "idle"
  targetPower_kw: number
  duration_minutes: number
  reason: string
  priority: "low" | "medium" | "high" | "critical"
}

export interface GridSignal {
  type: "frequency" | "voltage" | "congestion" | "price"
  value: number
  threshold: number
  action: "increase_export" | "decrease_export" | "charge" | "discharge" | "curtail"
  urgency: "normal" | "elevated" | "critical"
}

export interface VPPStatus {
  totalCapacity_kw: number
  availableCapacity_kw: number
  currentDispatch_kw: number
  assetsOnline: number
  assetsTotal: number
  gridFrequency_hz: number
  gridVoltage_v: number
  congestionLevel: "low" | "medium" | "high"
  activePrograms: string[]
}

// Mock DER assets across multiple sites
export const mockDERAssets: DERAsset[] = [
  {
    id: "der-1",
    siteId: "site-1",
    siteName: "Indiranagar Residence",
    type: "solar",
    capacity_kw: 5,
    currentOutput_kw: 3.2,
    status: "online",
    location: { lat: 12.9716, lng: 77.5946 },
    controllable: true,
  },
  {
    id: "der-2",
    siteId: "site-1",
    siteName: "Indiranagar Residence",
    type: "battery",
    capacity_kw: 5,
    currentOutput_kw: 0,
    status: "online",
    soc: 72,
    location: { lat: 12.9716, lng: 77.5946 },
    controllable: true,
  },
  {
    id: "der-3",
    siteId: "site-2",
    siteName: "Koramangala Commercial",
    type: "solar",
    capacity_kw: 25,
    currentOutput_kw: 18.5,
    status: "online",
    location: { lat: 12.9352, lng: 77.6245 },
    controllable: true,
  },
  {
    id: "der-4",
    siteId: "site-2",
    siteName: "Koramangala Commercial",
    type: "battery",
    capacity_kw: 20,
    currentOutput_kw: -5,
    status: "dispatching",
    soc: 85,
    location: { lat: 12.9352, lng: 77.6245 },
    lastDispatch: new Date(),
    controllable: true,
  },
  {
    id: "der-5",
    siteId: "site-3",
    siteName: "Whitefield Office Park",
    type: "solar",
    capacity_kw: 100,
    currentOutput_kw: 72,
    status: "online",
    location: { lat: 12.9698, lng: 77.75 },
    controllable: true,
  },
  {
    id: "der-6",
    siteId: "site-3",
    siteName: "Whitefield Office Park",
    type: "battery",
    capacity_kw: 100,
    currentOutput_kw: 25,
    status: "dispatching",
    soc: 45,
    location: { lat: 12.9698, lng: 77.75 },
    lastDispatch: new Date(),
    controllable: true,
  },
  {
    id: "der-7",
    siteId: "site-4",
    siteName: "Electronic City Industrial",
    type: "solar",
    capacity_kw: 250,
    currentOutput_kw: 180,
    status: "curtailed",
    location: { lat: 12.8456, lng: 77.6603 },
    controllable: true,
  },
  {
    id: "der-8",
    siteId: "site-4",
    siteName: "Electronic City Industrial",
    type: "battery",
    capacity_kw: 200,
    currentOutput_kw: -50,
    status: "dispatching",
    soc: 92,
    location: { lat: 12.8456, lng: 77.6603 },
    lastDispatch: new Date(),
    controllable: true,
  },
  {
    id: "der-9",
    siteId: "site-5",
    siteName: "HSR Layout Apartments",
    type: "solar",
    capacity_kw: 15,
    currentOutput_kw: 11,
    status: "online",
    location: { lat: 12.9116, lng: 77.6389 },
    controllable: true,
  },
  {
    id: "der-10",
    siteId: "site-5",
    siteName: "HSR Layout Apartments",
    type: "battery",
    capacity_kw: 10,
    currentOutput_kw: 0,
    status: "offline",
    soc: 20,
    location: { lat: 12.9116, lng: 77.6389 },
    controllable: false,
  },
]

export function calculateVPPStatus(assets: DERAsset[]): VPPStatus {
  const onlineAssets = assets.filter((a) => a.status !== "offline")
  const totalCapacity = assets.reduce((sum, a) => sum + a.capacity_kw, 0)
  const availableCapacity = onlineAssets.reduce((sum, a) => {
    if (a.type === "battery") {
      return sum + ((a.soc || 0) / 100) * a.capacity_kw
    }
    return sum + a.currentOutput_kw
  }, 0)
  const currentDispatch = assets
    .filter((a) => a.status === "dispatching")
    .reduce((sum, a) => sum + Math.abs(a.currentOutput_kw), 0)

  return {
    totalCapacity_kw: totalCapacity,
    availableCapacity_kw: availableCapacity,
    currentDispatch_kw: currentDispatch,
    assetsOnline: onlineAssets.length,
    assetsTotal: assets.length,
    gridFrequency_hz: 49.98 + Math.random() * 0.04,
    gridVoltage_v: 228 + Math.random() * 8,
    congestionLevel: Math.random() > 0.7 ? "high" : Math.random() > 0.4 ? "medium" : "low",
    activePrograms: ["Demand Response", "Frequency Regulation", "Peak Shaving"],
  }
}

export function simulateGridSignal(): GridSignal {
  const signals: GridSignal[] = [
    {
      type: "frequency",
      value: 49.85,
      threshold: 49.9,
      action: "discharge",
      urgency: "elevated",
    },
    {
      type: "congestion",
      value: 85,
      threshold: 80,
      action: "curtail",
      urgency: "normal",
    },
    {
      type: "price",
      value: 12.5,
      threshold: 10,
      action: "discharge",
      urgency: "normal",
    },
    {
      type: "voltage",
      value: 242,
      threshold: 240,
      action: "decrease_export",
      urgency: "elevated",
    },
  ]
  return signals[Math.floor(Math.random() * signals.length)]
}
