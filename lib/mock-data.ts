import type { Plan, User, Site } from "./types"

export const mockPlans: Omit<Plan, "_id">[] = [
  {
    name: "Solar Starter",
    description: "Perfect for small households looking to reduce their electricity bills",
    capacity_kw: 3,
    battery_kwh: 0,
    monthly_price: 1499,
    price_per_kwh: 5.5,
    export_rate: 3.0,
    sla_uptime: 95,
    features: [
      "3 kW Solar System",
      "Real-time monitoring",
      "Basic analytics",
      "Email support",
      "Net metering assistance",
    ],
    tier: "residential",
  },
  {
    name: "Solar Plus",
    description: "Our most popular plan with battery backup for uninterrupted power",
    capacity_kw: 5,
    battery_kwh: 5,
    monthly_price: 2999,
    price_per_kwh: 4.5,
    export_rate: 3.5,
    sla_uptime: 98,
    features: [
      "5 kW Solar System",
      "5 kWh Battery Storage",
      "Real-time monitoring",
      "Advanced analytics",
      "Priority support",
      "TOU optimization",
      "Net metering assistance",
    ],
    tier: "residential",
    popular: true,
  },
  {
    name: "Solar Pro",
    description: "Maximum savings with larger capacity and extended battery backup",
    capacity_kw: 10,
    battery_kwh: 10,
    monthly_price: 5499,
    price_per_kwh: 4.0,
    export_rate: 4.0,
    sla_uptime: 99,
    features: [
      "10 kW Solar System",
      "10 kWh Battery Storage",
      "Real-time monitoring",
      "Premium analytics dashboard",
      "24/7 dedicated support",
      "TOU optimization",
      "EV charging ready",
      "Net metering assistance",
    ],
    tier: "residential",
  },
  {
    name: "Commercial Basic",
    description: "Reliable solar power for small businesses and offices",
    capacity_kw: 25,
    battery_kwh: 20,
    monthly_price: 12999,
    price_per_kwh: 3.8,
    export_rate: 4.0,
    sla_uptime: 99,
    features: [
      "25 kW Solar System",
      "20 kWh Battery Storage",
      "Commercial-grade inverters",
      "Demand response ready",
      "API access",
      "Dedicated account manager",
    ],
    tier: "commercial",
  },
  {
    name: "Commercial Premium",
    description: "Full-scale energy solution for large commercial operations",
    capacity_kw: 100,
    battery_kwh: 100,
    monthly_price: 44999,
    price_per_kwh: 3.2,
    export_rate: 4.5,
    sla_uptime: 99.5,
    features: [
      "100 kW Solar System",
      "100 kWh Battery Storage",
      "VPP participation",
      "Demand response integration",
      "Full API access",
      "On-site maintenance",
      "Carbon credit tracking",
      "Custom SLA terms",
    ],
    tier: "commercial",
  },
  {
    name: "Enterprise Grid",
    description: "Utility-scale solution with VPP orchestration capabilities",
    capacity_kw: 500,
    battery_kwh: 500,
    monthly_price: 199999,
    price_per_kwh: 2.8,
    export_rate: 5.0,
    sla_uptime: 99.9,
    features: [
      "500 kW Solar System",
      "500 kWh Battery Storage",
      "Full VPP orchestration",
      "Grid services participation",
      "White-label dashboard",
      "Custom integrations",
      "Regulatory compliance suite",
      "Dedicated engineering team",
    ],
    tier: "enterprise",
  },
]

export const mockUsers: Omit<User, "_id">[] = [
  {
    email: "demo@energyos.in",
    password_hash: "hashed_demo_password",
    name: "Demo User",
    phone: "+91 98765 43210",
    role: "customer",
    created_at: new Date("2024-01-15"),
    kyc_verified: true,
  },
  {
    email: "operator@energyos.in",
    password_hash: "hashed_operator_password",
    name: "Grid Operator",
    phone: "+91 98765 43211",
    role: "operator",
    created_at: new Date("2024-01-10"),
    kyc_verified: true,
  },
  {
    email: "admin@energyos.in",
    password_hash: "hashed_admin_password",
    name: "System Admin",
    phone: "+91 98765 43212",
    role: "admin",
    created_at: new Date("2024-01-01"),
    kyc_verified: true,
  },
  {
    email: "discom@energyos.in",
    password_hash: "hashed_discom_password",
    name: "DISCOM Officer",
    phone: "+91 98765 43213",
    role: "discom",
    created_at: new Date("2024-01-05"),
    kyc_verified: true,
  },
]

export const mockSites: Omit<Site, "_id" | "user_id">[] = [
  {
    address: "42, MG Road, Indiranagar",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560038",
    sanctioned_load_kw: 5,
    meter_number: "KA-BLR-2024-001",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    created_at: new Date("2024-02-01"),
  },
  {
    address: "15, Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500034",
    sanctioned_load_kw: 10,
    meter_number: "TS-HYD-2024-001",
    coordinates: { lat: 17.4239, lng: 78.4738 },
    created_at: new Date("2024-02-15"),
  },
]

export function generateMockTelemetry(deviceId: string, siteId: string, deviceType: string) {
  const now = new Date()
  const hour = now.getHours()

  // Simulate solar generation curve (peak at noon)
  const solarMultiplier = deviceType === "solar_inverter" ? Math.max(0, Math.sin(((hour - 6) * Math.PI) / 12)) : 0

  const baseLoad = 500 + Math.random() * 200
  const solarGeneration = solarMultiplier * (3000 + Math.random() * 500)

  return {
    device_id: deviceId,
    site_id: siteId,
    timestamp: now,
    instant_power_w: deviceType === "solar_inverter" ? solarGeneration : baseLoad,
    energy_import_kwh: deviceType === "smart_meter" ? Math.random() * 0.5 : 0,
    energy_export_kwh:
      deviceType === "solar_inverter" && solarGeneration > baseLoad
        ? ((solarGeneration - baseLoad) / 1000) * (Math.random() * 0.2)
        : 0,
    battery_soc_pct: deviceType === "battery" ? 40 + Math.random() * 50 : undefined,
    grid_voltage: 220 + Math.random() * 20,
    grid_frequency: 49.9 + Math.random() * 0.2,
    temperature_c: 25 + Math.random() * 15,
  }
}

export const touRates = {
  peak: { start: 18, end: 22, rate: 8.5 }, // 6 PM - 10 PM
  standard: { start: 6, end: 18, rate: 6.0 }, // 6 AM - 6 PM
  offPeak: { start: 22, end: 6, rate: 4.0 }, // 10 PM - 6 AM
}

export function getCurrentTouRate(): { period: string; rate: number } {
  const hour = new Date().getHours()

  if (hour >= touRates.peak.start && hour < touRates.peak.end) {
    return { period: "Peak", rate: touRates.peak.rate }
  } else if (hour >= touRates.standard.start && hour < touRates.standard.end) {
    return { period: "Standard", rate: touRates.standard.rate }
  } else {
    return { period: "Off-Peak", rate: touRates.offPeak.rate }
  }
}
