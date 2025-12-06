# Energy OS - Energy-as-a-Service Platform

[![YouTube Stream](https://img.shields.io/badge/YouTube-Watch_Stream-red)](https://youtu.be/OmzRE7VgBxM)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](./Dockerfile)

## 🎯 What is Energy OS?

Energy OS is a comprehensive **Energy-as-a-Service (EaaS)** platform that revolutionizes how distributed energy resources (DERs) are managed, optimized, and monetized. It's designed for energy utilities, aggregators, and prosumers to intelligently balance supply and demand while maximizing revenue through dynamic pricing, demand response, and grid services.

### Core Capabilities

**Energy Management**
- Real-time telemetry ingestion and processing from IoT devices (solar panels, batteries, EV chargers)
- Live monitoring dashboards with energy consumption patterns and generation forecasts
- Device orchestration with granular control over distributed assets

**Virtual Power Plant (VPP) Operations**
- Aggregate multiple distributed energy resources into a controllable virtual power plant
- Coordinate demand response across hundreds of devices simultaneously
- Dispatch grid services with millisecond-level precision control

**Financial Settlement & Trading**
- Automated billing based on time-of-use (TOU) tariffs and dynamic pricing
- Real-time settlement ledgers with immutable audit trails
- Financial reconciliation for energy trades and ancillary services

**Grid Coordination**
- DISCOM (Distribution Company) integration for regulatory compliance
- Demand response participation with automated bidding
- Grid stability support through frequency regulation and voltage support

---

## 🏗️ Backend Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    Energy OS Platform                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │            Next.js API Routes (SSR + API)                │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │  /api/auth        → Authentication & JWT tokens         │  │
│  │  /api/devices     → Device registry & control           │  │
│  │  /api/telemetry   → Real-time data ingestion            │  │
│  │  /api/orchestrate → VPP coordination & dispatch         │  │
│  │  /api/billing     → Invoice generation & payment        │  │
│  │  /api/ledger      → Settlement ledger operations        │  │
│  │  /api/finance     → Financial analytics & reporting     │  │
│  │  /api/plans       → Rate plan management                │  │
│  │  /api/subscriptions → Subscription & usage tracking     │  │
│  │  /api/discom      → Grid operator integration           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                            ↓                                    │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │         MongoDB Data Layer (Multi-Tenant)                │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │  Collections:                                             │  │
│  │  • users           → User profiles & roles                │  │
│  │  • devices         → Physical & virtual devices           │  │
│  │  • telemetry       → Time-series energy data              │  │
│  │  • transactions    → Billing & settlement records         │  │
│  │  • ledger_entries  → Financial audit trail               │  │
│  │  • vpp_assets      → VPP aggregation metadata            │  │
│  │  • dispatch_events → Control signals & responses         │  │
│  │  • subscriptions   → Service plans & usage               │  │
│  │  • discom_requests → Grid operator requests              │  │
│  │  • rate_plans      → TOU and dynamic pricing rules       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                            ↓                                    │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │        Business Logic & Core Services                     │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │  Settlement Engine                                        │  │
│  │  ├─ Energy quantization (kWh)                             │  │
│  │  ├─ Rate application ($/kWh)                              │  │
│  │  ├─ Settlement calculation                                │  │
│  │  └─ Trial balance generation                              │  │
│  │                                                            │  │
│  │  VPP Orchestration Engine                                │  │
│  │  ├─ Real-time asset aggregation                           │  │
│  │  ├─ Dispatch optimization                                 │  │
│  │  ├─ State management (on/off/partial)                     │  │
│  │  └─ Feedback loop & telemetry sync                        │  │
│  │                                                            │  │
│  │  Telemetry Processor                                     │  │
│  │  ├─ Data validation & normalization                       │  │
│  │  ├─ Real-time aggregation (sum/avg/max)                   │  │
│  │  ├─ Anomaly detection                                     │  │
│  │  └─ Time-series compression                               │  │
│  │                                                            │  │
│  │  Billing Engine                                          │  │
│  │  ├─ Usage calculation                                     │  │
│  │  ├─ TOU tariff application                                │  │
│  │  ├─ Invoice generation                                    │  │
│  │  └─ Payment reconciliation                                │  │
│  │                                                            │  │
│  │  Authentication & Authorization                          │  │
│  │  ├─ JWT token generation & validation                     │  │
│  │  ├─ Role-based access control (RBAC)                      │  │
│  │  ├─ Multi-tenant isolation                                │  │
│  │  └─ API key management                                    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Modules Explained

#### 1. **Authentication Service** (`/api/auth`)
- **JWT-based authentication** with refresh token rotation
- **Multi-tenant support** with organization isolation
- **Role hierarchy**: Admin → Manager → User
- **Session management** with expiration and renewal
- Integration with OAuth providers (optional)

```typescript
// Authentication Flow
Client → Login (email/password) → JWT Token → API Requests (Bearer Token)
```

#### 2. **Device Management** (`/api/devices`)
- **Device registry** with metadata (type, location, capacity, owner)
- **Device types**: Solar inverters, batteries (ESS), EV chargers, smart meters
- **State tracking**: Online/Offline, Active/Inactive, Error states
- **Capabilities matrix**: What actions each device supports (charge, discharge, curtail)
- **Firmware management**: OTA updates and version tracking

#### 3. **Telemetry Pipeline** (`/api/telemetry`)
- **Real-time data ingestion** from IoT devices at 1-30 second intervals
- **Data validation** against device specifications and physical limits
- **Time-series compression** for efficient storage (TSDB pattern)
- **Aggregation**: Device-level → Site-level → Fleet-level → VPP-level
- **Anomaly detection**: Flag impossible readings (e.g., battery discharging >C-rate)

**Key Metrics Tracked**:
- Power (kW): Real-time generation/consumption
- Energy (kWh): Cumulative generation/consumption
- State of Charge (SoC %): For batteries
- Temperature: For thermal monitoring
- Frequency: Grid frequency for VPP coordination

#### 4. **VPP Orchestration** (`/api/orchestrate`)
- **Asset aggregation**: Combine multiple devices into logical groups
- **Dispatch commands**: Send control signals (charge/discharge rate, frequency adjustment)
- **Real-time feedback**: Verify device response and adjust commands
- **Optimization**: Maximize revenue or minimize costs based on market signals
- **Constraint handling**: Respect device limits (SoC bounds, ramp rates, minimum run times)

**Orchestration Algorithm**:
```
Input: Grid demand signal, Market prices, Device capabilities
Process:
  1. Calculate available power from each device
  2. Prioritize dispatch based on:
     - Grid frequency deviation (urgent)
     - Electricity price (revenue optimization)
     - Device charge/discharge limits
  3. Send dispatch commands
  4. Monitor feedback and adjust
Output: Optimized power dispatch, Revenue maximization
```

#### 5. **Settlement Engine** (`/api/ledger`)
- **Energy settlement**: Track all energy flows (generation, consumption, trading)
- **Trial balance**: Double-entry bookkeeping ledger with debit/credit entries
- **Reconciliation**: Monthly settlement with DISCOM and other stakeholders
- **Dispute resolution**: Audit trail with cryptographic verification
- **Multi-currency support**: Handle different rate cards per customer

**Settlement Logic**:
```
For each billing period:
  1. Aggregate energy by tariff bucket (TOU periods)
  2. Apply applicable rates ($0.08/kWh morning, $0.12/kWh peak)
  3. Calculate charges: Energy × Rate
  4. Create ledger entries: Debit customer, Credit utility
  5. Generate trial balance report
  6. Reconcile with meter readings
```

#### 6. **Billing & Finance** (`/api/billing`, `/api/finance`)
- **Invoice generation**: Automatic monthly/quarterly invoices
- **Dynamic pricing**: Real-time rate adjustments based on grid conditions
- **Subscription management**: Different service tiers (Basic, Pro, Enterprise)
- **Payment tracking**: Process payments and update account balances
- **Financial reporting**: Revenue analytics, customer lifetime value (CLV)

**Rate Plan Types**:
- **Time-of-Use (TOU)**: Different rates for peak/off-peak/shoulder periods
- **Capacity charges**: Fixed $/kW/month for peak demand
- **Network charges**: Fixed infrastructure fees
- **Ancillary services**: Payment for grid support services (frequency regulation)

#### 7. **DISCOM Integration** (`/api/discom`)
- **Request management**: Respond to grid operator requests for demand response
- **Compliance reporting**: Report participation and performance
- **Regulatory compliance**: Maintain records for utility commission audits
- **Interconnection**: Coordinate with distribution network operators
- **Event management**: Handle emergency grid events and curtailment requests

#### 8. **Rate Plans & Subscriptions** (`/api/plans`, `/api/subscriptions`)
- **Plan templates**: Pre-configured pricing and service levels
- **Custom plans**: Create organization-specific rate structures
- **Usage tracking**: Monitor consumption against subscription limits
- **Auto-scaling**: Upgrade/downgrade based on usage patterns
- **Overage handling**: Define overage charges or blocking rules

### Data Models

#### User Document
```javascript
{
  _id: ObjectId,
  email: "user@example.com",
  password_hash: "bcrypt_hash",
  organization_id: ObjectId,
  role: "admin|manager|user",
  name: "John Doe",
  created_at: ISODate,
  updated_at: ISODate
}
```

#### Device Document
```javascript
{
  _id: ObjectId,
  device_id: "SOLAR-001",
  type: "solar_inverter|battery|ev_charger|smart_meter",
  organization_id: ObjectId,
  location: { lat: 40.7128, lon: -74.0060 },
  capacity: { power_kw: 10, energy_kwh: 50 },
  status: "online|offline|error",
  last_data: ISODate,
  capabilities: {
    can_charge: true,
    can_discharge: true,
    supports_droop_control: true
  },
  metadata: { manufacturer: "Fronius", model: "Primo" }
}
```

#### Telemetry Document (Time-Series)
```javascript
{
  _id: ObjectId,
  device_id: "SOLAR-001",
  timestamp: ISODate,
  power_kw: 5.2,
  energy_kwh: 1234.56,
  soc_percent: 75,
  temperature_c: 28,
  status: "healthy",
  created_at: ISODate
}
```

#### Settlement Entry (Ledger)
```javascript
{
  _id: ObjectId,
  period: "2025-01",
  customer_id: ObjectId,
  debit_account: "250-001", // Asset account
  credit_account: "400-001", // Revenue account
  energy_kwh: 500,
  rate_per_kwh: 0.12,
  amount: 60.00,
  currency: "USD",
  description: "Energy generation - January 2025",
  created_at: ISODate,
  verified_by: ObjectId
}
```

#### Dispatch Record
```javascript
{
  _id: ObjectId,
  vpp_id: ObjectId,
  dispatch_id: "DISP-20250107-001",
  timestamp: ISODate,
  devices: [
    { device_id: "BATT-001", target_power_kw: 5, ramp_rate: 2 },
    { device_id: "BATT-002", target_power_kw: -3, ramp_rate: 1 }
  ],
  reason: "frequency_regulation|peak_shaving|revenue_optimization",
  status: "pending|executing|completed|failed",
  feedback: [
    { device_id: "BATT-001", actual_power_kw: 4.8, status: "success" }
  ]
}
```

### API Endpoints Summary

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/login` | POST | User authentication |
| `/api/devices` | GET/POST | List/create devices |
| `/api/devices/{id}` | GET/PUT/DELETE | Device CRUD |
| `/api/telemetry` | POST | Ingest device data |
| `/api/telemetry/live` | GET | Real-time dashboard data |
| `/api/orchestrate/dispatch` | POST | Send control signals |
| `/api/ledger` | GET | View settlement entries |
| `/api/ledger/trial-balance` | GET | Generate trial balance |
| `/api/billing/invoices` | GET | View invoices |
| `/api/billing/run` | POST | Generate monthly invoices |
| `/api/finance/analytics` | GET | Financial dashboard |
| `/api/plans` | GET/POST | Manage rate plans |
| `/api/subscriptions` | GET/POST | Manage subscriptions |
| `/api/discom/requests` | GET | View grid requests |
| `/api/discom/request` | POST | Respond to requests |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- pnpm (or npm)
- MongoDB 7.0+
- Docker & Docker Compose (optional)

### Installation

```bash
# Clone repository
git clone https://github.com/beingsage/eaas---energy-as-a-service.git
cd eaas---energy-as-a-service

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
pnpm dev
```

### Environment Variables

```env
# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/energy_os
MONGODB_DB=energy_os

# Authentication
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRY=7d

# API Configuration
API_PORT=3000
NODE_ENV=development

# Third-party Integrations
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

# Feature Flags
ENABLE_VPP_OPTIMIZATION=true
ENABLE_DYNAMIC_PRICING=true
```

---

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t energy-os:v1 .
```

### Run Container
```bash
docker run -p 3000:3000 \
  -e MONGODB_URI="mongodb://mongo:27017" \
  -e JWT_SECRET="your_secret" \
  energy-os:v1
```

### Docker Compose (Full Stack)
```bash
docker-compose up -d
```

---

## 📊 Dashboard Features

### Real-Time Dashboard
- **Live energy charts**: Track generation vs. consumption in real-time
- **Device status**: Quick health check of all connected devices
- **VPP performance**: Dispatch effectiveness and revenue metrics
- **Alerts**: Instant notifications for anomalies and errors

### Admin Panel
- **User management**: Create users, assign roles, manage permissions
- **Device configuration**: Register devices, set capabilities, configure alerts
- **Rate plans**: Create and manage pricing models
- **Financial reports**: View revenue, costs, and profitability
- **System logs**: Audit trail of all operations

### Customer Portal
- **Energy usage**: Breakdown by device and time period
- **Billing**: View invoices and payment history
- **Device control**: Manual control and settings for each device
- **Analytics**: Forecasts and optimization recommendations

---

## 🔐 Security Features

- **JWT authentication** with secure token storage
- **Multi-tenant isolation** at database level
- **Role-based access control (RBAC)**
- **API rate limiting** to prevent abuse
- **Encrypted environment variables**
- **MongoDB encryption at rest**
- **HTTPS/TLS for all communications**
- **Audit logging** for compliance

---

## 📈 Performance Considerations

### Scalability
- **Horizontal scaling**: Stateless API design allows multiple instances
- **Database sharding**: Multi-tenant databases can be sharded by organization_id
- **Caching**: Redis integration for telemetry aggregation
- **Message queues**: Background jobs for billing and settlement (optional)

### Monitoring
- **Health checks**: Container and API endpoint health monitoring
- **Metrics**: Prometheus-compatible metrics export
- **Logging**: Structured logging with correlation IDs
- **Alerting**: Critical event notifications

---

## 🎬 Live Demo & Stream

**[Watch the live demo on YouTube →](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**

In the stream, we demonstrate:
- Real-time telemetry visualization
- VPP orchestration with multiple devices
- Dynamic pricing and settlement calculations
- Admin panel operations
- Mobile-responsive dashboard

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Support & Contact

- **Email**: support@energy-os.com
- **Issues**: [GitHub Issues](https://github.com/beingsage/eaas---energy-as-a-service/issues)
- **Documentation**: [Wiki](https://github.com/beingsage/eaas---energy-as-a-service/wiki)

---

## 🎯 Roadmap

- [ ] GraphQL API support
- [ ] Machine learning demand forecasting
- [ ] Blockchain-based settlement verification
- [ ] Mobile native app (iOS/Android)
- [ ] Advanced grid services (synthetic inertia)
- [ ] P2P energy trading marketplace
- [ ] Carbon offset tracking and trading

---

**Built with ❤️ for the clean energy revolution**
