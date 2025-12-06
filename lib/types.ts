export interface Plan {
  _id: string
  name: string
  description: string
  capacity_kw: number
  battery_kwh: number
  monthly_price: number
  price_per_kwh: number
  export_rate: number
  sla_uptime: number
  features: string[]
  tier: "residential" | "commercial" | "enterprise"
  popular?: boolean
}

export interface User {
  _id: string
  email: string
  password_hash: string
  name: string
  phone: string
  role: "customer" | "operator" | "admin" | "discom"
  created_at: Date
  kyc_verified: boolean
}

export interface Site {
  _id: string
  user_id: string
  address: string
  city: string
  state: string
  pincode: string
  sanctioned_load_kw: number
  meter_number: string
  coordinates: { lat: number; lng: number }
  created_at: Date
}

export interface Subscription {
  _id: string
  user_id: string
  site_id: string
  plan_id: string
  status: "pending" | "active" | "suspended" | "cancelled"
  start_date: Date
  billing_cycle_day: number
  contract_months: number
  created_at: Date
}

export interface Device {
  _id: string
  site_id: string
  type: "solar_inverter" | "battery" | "ev_charger" | "smart_meter"
  manufacturer: string
  model: string
  capacity_kw: number
  serial_number: string
  firmware_version: string
  status: "online" | "offline" | "maintenance"
  commissioned_at: Date
  last_seen: Date
}

export interface TelemetryReading {
  _id: string
  device_id: string
  site_id: string
  timestamp: Date
  instant_power_w: number
  energy_import_kwh: number
  energy_export_kwh: number
  battery_soc_pct?: number
  grid_voltage: number
  grid_frequency: number
  temperature_c?: number
}

export interface LedgerEntry {
  _id: string
  device_id: string
  site_id: string
  timestamp: Date
  energy_direction: "IMPORT" | "EXPORT"
  kwh: number
  rate: number
  carbon_factor: number
  credit: number
  block_signature: string
}

export interface Invoice {
  _id: string
  subscription_id: string
  user_id: string
  site_id: string
  billing_period_start: Date
  billing_period_end: Date
  line_items: InvoiceLineItem[]
  subtotal: number
  taxes: number
  total: number
  export_credits: number
  sla_credits: number
  net_amount: number
  status: "draft" | "sent" | "paid" | "overdue"
  due_date: Date
  created_at: Date
}

export interface InvoiceLineItem {
  description: string
  quantity: number
  unit: string
  rate: number
  amount: number
  category: "subscription" | "energy" | "export_credit" | "sla_credit" | "tax"
}

export interface DiscomRequest {
  _id: string
  user_id: string
  site_id: string
  request_type: "net_metering" | "capacity_increase" | "disconnection"
  status: "submitted" | "under_review" | "approved" | "rejected"
  inverter_capacity_kw: number
  panel_capacity_kwp: number
  documents: string[]
  export_limit_kw?: number
  admin_notes?: string
  submitted_at: Date
  reviewed_at?: Date
}

export interface Loan {
  _id: string
  user_id: string
  subscription_id: string
  principal: number
  interest_rate: number
  tenure_months: number
  emi_amount: number
  disbursed_at: Date
  status: "active" | "closed" | "defaulted"
  payments: LoanPayment[]
}

export interface LoanPayment {
  due_date: Date
  amount: number
  paid_at?: Date
  status: "pending" | "paid" | "overdue"
}
