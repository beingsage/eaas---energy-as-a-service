// Hardware Gateway Mock - Simulates protocol bridges for DER devices

export interface DeviceTelemetry {
  device_id: string
  timestamp: Date
  instant_power_w: number
  energy_import_kwh: number
  energy_export_kwh: number
  battery_soc_pct?: number
  grid_voltage: number
  grid_frequency: number
  temperature_c?: number
}

export interface ProtocolBridge {
  name: string
  translate: (rawData: any) => DeviceTelemetry
}

// Modbus RTU/TCP Bridge
export const modbusBridge: ProtocolBridge = {
  name: "Modbus RTU/TCP",
  translate: (rawData: any): DeviceTelemetry => {
    // Simulate Modbus register parsing
    return {
      device_id: rawData.slave_id || "unknown",
      timestamp: new Date(),
      instant_power_w: rawData.registers?.[0] || 0,
      energy_import_kwh: (rawData.registers?.[1] || 0) / 100,
      energy_export_kwh: (rawData.registers?.[2] || 0) / 100,
      grid_voltage: (rawData.registers?.[3] || 2200) / 10,
      grid_frequency: (rawData.registers?.[4] || 500) / 10,
      temperature_c: rawData.registers?.[5],
    }
  },
}

// SunSpec Bridge (Solar inverters)
export const sunSpecBridge: ProtocolBridge = {
  name: "SunSpec",
  translate: (rawData: any): DeviceTelemetry => {
    return {
      device_id: rawData.SN || "unknown",
      timestamp: new Date(),
      instant_power_w: rawData.W || 0,
      energy_import_kwh: 0,
      energy_export_kwh: (rawData.WH || 0) / 1000,
      grid_voltage: rawData.PhVphA || 230,
      grid_frequency: rawData.Hz || 50,
      temperature_c: rawData.TmpCab,
    }
  },
}

// OCPP Bridge (EV Chargers)
export const ocppBridge: ProtocolBridge = {
  name: "OCPP 1.6/2.0",
  translate: (rawData: any): DeviceTelemetry => {
    return {
      device_id: rawData.chargePointId || "unknown",
      timestamp: new Date(rawData.timestamp || Date.now()),
      instant_power_w: (rawData.meterValue?.power || 0) * 1000,
      energy_import_kwh: rawData.meterValue?.energy || 0,
      energy_export_kwh: 0,
      grid_voltage: rawData.meterValue?.voltage || 230,
      grid_frequency: 50,
    }
  },
}

// CAN Bus Bridge (Battery systems)
export const canbusBridge: ProtocolBridge = {
  name: "CAN Bus",
  translate: (rawData: any): DeviceTelemetry => {
    return {
      device_id: rawData.can_id?.toString(16) || "unknown",
      timestamp: new Date(),
      instant_power_w: rawData.data?.[0] * 100 || 0,
      energy_import_kwh: 0,
      energy_export_kwh: 0,
      battery_soc_pct: rawData.data?.[1] || 0,
      grid_voltage: 0,
      grid_frequency: 0,
      temperature_c: rawData.data?.[2],
    }
  },
}

// MQTT Bridge (Generic IoT)
export const mqttBridge: ProtocolBridge = {
  name: "MQTT",
  translate: (rawData: any): DeviceTelemetry => {
    return {
      device_id: rawData.deviceId || "unknown",
      timestamp: new Date(rawData.ts || Date.now()),
      instant_power_w: rawData.power || 0,
      energy_import_kwh: rawData.import || 0,
      energy_export_kwh: rawData.export || 0,
      battery_soc_pct: rawData.soc,
      grid_voltage: rawData.voltage || 230,
      grid_frequency: rawData.frequency || 50,
      temperature_c: rawData.temp,
    }
  },
}

// Hardware Gateway class
export class HardwareGateway {
  private bridges: Map<string, ProtocolBridge> = new Map()

  constructor() {
    this.bridges.set("modbus", modbusBridge)
    this.bridges.set("sunspec", sunSpecBridge)
    this.bridges.set("ocpp", ocppBridge)
    this.bridges.set("canbus", canbusBridge)
    this.bridges.set("mqtt", mqttBridge)
  }

  modbus(rawData: any): DeviceTelemetry {
    return this.bridges.get("modbus")!.translate(rawData)
  }

  sunSpec(rawData: any): DeviceTelemetry {
    return this.bridges.get("sunspec")!.translate(rawData)
  }

  ocpp(rawData: any): DeviceTelemetry {
    return this.bridges.get("ocpp")!.translate(rawData)
  }

  canbus(rawData: any): DeviceTelemetry {
    return this.bridges.get("canbus")!.translate(rawData)
  }

  mqtt(rawData: any): DeviceTelemetry {
    return this.bridges.get("mqtt")!.translate(rawData)
  }

  // Universal translate method
  translate(protocol: string, rawData: any): DeviceTelemetry | null {
    const bridge = this.bridges.get(protocol)
    if (!bridge) return null
    return bridge.translate(rawData)
  }
}

// Device Simulator - generates realistic telemetry
export class DeviceSimulator {
  private deviceId: string
  private deviceType: "solar" | "battery" | "ev_charger" | "smart_meter"
  private capacity_kw: number

  constructor(deviceId: string, deviceType: "solar" | "battery" | "ev_charger" | "smart_meter", capacity_kw: number) {
    this.deviceId = deviceId
    this.deviceType = deviceType
    this.capacity_kw = capacity_kw
  }

  generateTelemetry(): DeviceTelemetry {
    const hour = new Date().getHours()
    const baseVoltage = 220 + Math.random() * 20
    const baseFrequency = 49.9 + Math.random() * 0.2

    switch (this.deviceType) {
      case "solar":
        // Solar curve: peaks at noon
        const solarMultiplier = Math.max(0, Math.sin(((hour - 6) * Math.PI) / 12))
        const cloudFactor = 0.8 + Math.random() * 0.2
        return {
          device_id: this.deviceId,
          timestamp: new Date(),
          instant_power_w: this.capacity_kw * 1000 * solarMultiplier * cloudFactor,
          energy_import_kwh: 0,
          energy_export_kwh: Math.random() * 0.5,
          grid_voltage: baseVoltage,
          grid_frequency: baseFrequency,
          temperature_c: 25 + solarMultiplier * 20,
        }

      case "battery":
        // Battery: charges during day, discharges during peak
        const isPeak = hour >= 18 && hour < 22
        const isCharging = hour >= 10 && hour < 16
        const soc = 40 + Math.random() * 50
        return {
          device_id: this.deviceId,
          timestamp: new Date(),
          instant_power_w: isPeak ? -this.capacity_kw * 500 : isCharging ? this.capacity_kw * 300 : 0,
          energy_import_kwh: isCharging ? Math.random() * 0.3 : 0,
          energy_export_kwh: isPeak ? Math.random() * 0.4 : 0,
          battery_soc_pct: soc,
          grid_voltage: baseVoltage,
          grid_frequency: baseFrequency,
          temperature_c: 30 + Math.random() * 10,
        }

      case "ev_charger":
        // EV: typically charges at night or during work hours
        const isChargingTime = hour >= 22 || hour < 6 || (hour >= 9 && hour < 17)
        const chargingProbability = isChargingTime ? 0.6 : 0.1
        const isActive = Math.random() < chargingProbability
        return {
          device_id: this.deviceId,
          timestamp: new Date(),
          instant_power_w: isActive ? this.capacity_kw * 1000 * (0.7 + Math.random() * 0.3) : 0,
          energy_import_kwh: isActive ? Math.random() * 0.5 : 0,
          energy_export_kwh: 0,
          grid_voltage: baseVoltage,
          grid_frequency: baseFrequency,
        }

      case "smart_meter":
        // Smart meter: measures net consumption
        const baseLoad = 300 + Math.random() * 200
        const peakMultiplier = hour >= 18 && hour < 22 ? 1.5 : 1
        return {
          device_id: this.deviceId,
          timestamp: new Date(),
          instant_power_w: baseLoad * peakMultiplier,
          energy_import_kwh: Math.random() * 0.3,
          energy_export_kwh: Math.random() * 0.1,
          grid_voltage: baseVoltage,
          grid_frequency: baseFrequency,
        }

      default:
        return {
          device_id: this.deviceId,
          timestamp: new Date(),
          instant_power_w: 0,
          energy_import_kwh: 0,
          energy_export_kwh: 0,
          grid_voltage: baseVoltage,
          grid_frequency: baseFrequency,
        }
    }
  }
}

// Export singleton gateway
export const gateway = new HardwareGateway()
