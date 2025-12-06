"use client"

import { useState, useEffect, useCallback } from "react"
import { generateMockTelemetry, getCurrentTouRate } from "@/lib/mock-data"
import type { TelemetryReading, Device } from "@/lib/types"

interface TelemetryStats {
  currentGeneration: number
  currentImport: number
  generationToday: number
  importToday: number
  exportToday: number
  batterySoc: number
  batteryStatus: "charging" | "discharging" | "idle"
  savingsToday: number
  carbonOffset: number
}

const mockDevices: Device[] = [
  {
    _id: "dev-solar-1",
    site_id: "site-1",
    type: "solar_inverter",
    manufacturer: "Growatt",
    model: "MIN 5000TL-X",
    capacity_kw: 5,
    serial_number: "GW5K2024001",
    firmware_version: "2.4.1",
    status: "online",
    commissioned_at: new Date("2024-02-15"),
    last_seen: new Date(),
  },
  {
    _id: "dev-battery-1",
    site_id: "site-1",
    type: "battery",
    manufacturer: "BYD",
    model: "HVS 5.1",
    capacity_kw: 5,
    serial_number: "BYD5K2024001",
    firmware_version: "1.8.3",
    status: "online",
    commissioned_at: new Date("2024-02-15"),
    last_seen: new Date(),
  },
  {
    _id: "dev-meter-1",
    site_id: "site-1",
    type: "smart_meter",
    manufacturer: "Schneider",
    model: "PM5560",
    capacity_kw: 10,
    serial_number: "SE10K2024001",
    firmware_version: "3.2.0",
    status: "online",
    commissioned_at: new Date("2024-02-15"),
    last_seen: new Date(),
  },
]

export function useTelemetry() {
  const [telemetry, setTelemetry] = useState<TelemetryReading[]>([])
  const [devices] = useState<Device[]>(mockDevices)
  const [isConnected, setIsConnected] = useState(true)
  const [stats, setStats] = useState<TelemetryStats>({
    currentGeneration: 0,
    currentImport: 0,
    generationToday: 0,
    importToday: 0,
    exportToday: 0,
    batterySoc: 65,
    batteryStatus: "idle",
    savingsToday: 0,
    carbonOffset: 0,
  })

  const generateReading = useCallback(() => {
    const solarReading = generateMockTelemetry("dev-solar-1", "site-1", "solar_inverter")
    const meterReading = generateMockTelemetry("dev-meter-1", "site-1", "smart_meter")
    const batteryReading = generateMockTelemetry("dev-battery-1", "site-1", "battery")

    const touRate = getCurrentTouRate()
    const hour = new Date().getHours()

    // Simulate battery behavior based on TOU
    let batteryStatus: "charging" | "discharging" | "idle" = "idle"
    if (touRate.period === "Peak" && stats.batterySoc > 20) {
      batteryStatus = "discharging"
    } else if (touRate.period === "Off-Peak" && stats.batterySoc < 90) {
      batteryStatus = "charging"
    } else if (solarReading.instant_power_w > 1000 && stats.batterySoc < 95) {
      batteryStatus = "charging"
    }

    const newSoc =
      batteryStatus === "charging"
        ? Math.min(100, stats.batterySoc + Math.random() * 0.5)
        : batteryStatus === "discharging"
          ? Math.max(10, stats.batterySoc - Math.random() * 0.3)
          : stats.batterySoc

    // Calculate daily totals (simulated)
    const baseGeneration = 15 + Math.random() * 5 // 15-20 kWh base
    const timeMultiplier = hour / 18 // Increases throughout the day
    const generationToday = baseGeneration * Math.min(1, timeMultiplier)

    const importToday = 5 + Math.random() * 2
    const exportToday = generationToday * 0.15 // 15% export

    // Calculate savings
    const avgGridRate = 7.5
    const solarRate = 4.5
    const exportRate = 3.5
    const savingsFromGeneration = generationToday * (avgGridRate - solarRate)
    const exportRevenue = exportToday * exportRate
    const savingsToday = savingsFromGeneration + exportRevenue

    // Carbon offset (0.82 kg CO2 per kWh in India)
    const carbonOffset = generationToday * 0.82

    setStats({
      currentGeneration: solarReading.instant_power_w,
      currentImport: meterReading.instant_power_w * 0.3,
      generationToday,
      importToday,
      exportToday,
      batterySoc: Math.round(newSoc),
      batteryStatus,
      savingsToday,
      carbonOffset,
    })

    setTelemetry((prev) => {
      const newReadings = [
        { ...solarReading, _id: `solar-${Date.now()}` },
        { ...meterReading, _id: `meter-${Date.now()}` },
        { ...batteryReading, _id: `battery-${Date.now()}`, battery_soc_pct: newSoc },
      ]
      // Keep last 60 readings (5 minutes of data at 5s intervals)
      return [...prev.slice(-57), ...newReadings]
    })
  }, [stats.batterySoc])

  useEffect(() => {
    // Initial reading
    generateReading()

    // Update every 5 seconds
    const interval = setInterval(generateReading, 5000)

    // Simulate occasional disconnects
    const disconnectInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsConnected(false)
        setTimeout(() => setIsConnected(true), 3000)
      }
    }, 30000)

    return () => {
      clearInterval(interval)
      clearInterval(disconnectInterval)
    }
  }, [generateReading])

  return { telemetry, devices, isConnected, stats }
}
