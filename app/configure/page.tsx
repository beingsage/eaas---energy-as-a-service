"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Sun, Battery, Zap, ArrowRight, TrendingDown, Leaf } from "lucide-react"
import Link from "next/link"
import { mockPlans, touRates } from "@/lib/mock-data"

function ConfigureContent() {
  const searchParams = useSearchParams()
  const planId = searchParams.get("plan")

  const basePlan = mockPlans.find((_, i) => `res-${i}` === planId || `com-${i}` === planId) || mockPlans[1]

  const [capacity, setCapacity] = useState(basePlan.capacity_kw)
  const [batteryEnabled, setBatteryEnabled] = useState(basePlan.battery_kwh > 0)
  const [batterySize, setBatterySize] = useState(basePlan.battery_kwh || 5)
  const [evCharging, setEvCharging] = useState(false)
  const [touOptimization, setTouOptimization] = useState(true)
  const [contractLength, setContractLength] = useState(24)

  // Calculate pricing
  const pricing = useMemo(() => {
    const basePrice = capacity * 300 // ₹300 per kW base
    const batteryPrice = batteryEnabled ? batterySize * 150 : 0 // ₹150 per kWh
    const evPrice = evCharging ? 500 : 0
    const touDiscount = touOptimization ? -200 : 0
    const contractDiscount = contractLength >= 36 ? -0.1 : contractLength >= 24 ? -0.05 : 0

    const subtotal = basePrice + batteryPrice + evPrice + touDiscount
    const monthly = Math.round(subtotal * (1 + contractDiscount))

    return {
      basePrice,
      batteryPrice,
      evPrice,
      touDiscount,
      contractDiscount: Math.round(subtotal * contractDiscount),
      monthly,
      yearly: monthly * 12,
    }
  }, [capacity, batteryEnabled, batterySize, evCharging, touOptimization, contractLength])

  // Calculate savings
  const savings = useMemo(() => {
    const avgGridRate = 7.5 // ₹/kWh
    const solarRate = 4.5
    const dailyGeneration = capacity * 4.5 // 4.5 peak sun hours average
    const monthlyGeneration = dailyGeneration * 30
    const monthlySavings = monthlyGeneration * (avgGridRate - solarRate)
    const exportRevenue = batteryEnabled
      ? monthlyGeneration * 0.15 * touRates.peak.rate // 15% export during peak
      : monthlyGeneration * 0.25 * 3 // 25% export at feed-in rate

    return {
      monthlyGeneration: Math.round(monthlyGeneration),
      monthlySavings: Math.round(monthlySavings + exportRevenue),
      yearlySavings: Math.round((monthlySavings + exportRevenue) * 12),
      carbonOffset: Math.round(monthlyGeneration * 0.82), // kg CO2 per kWh
    }
  }, [capacity, batteryEnabled])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">Configure Your System</h1>
          <p className="text-muted-foreground">Customize your solar installation to match your energy needs</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Solar Capacity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <Sun className="h-5 w-5 text-primary" />
                  Solar Capacity
                </CardTitle>
                <CardDescription>Choose the size of your solar installation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>System Size</Label>
                    <span className="font-medium">{capacity} kW</span>
                  </div>
                  <Slider
                    value={[capacity]}
                    onValueChange={(v) => setCapacity(v[0])}
                    min={1}
                    max={25}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 kW</span>
                    <span>25 kW</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">{Math.round(capacity * 4.5 * 30)} kWh</div>
                    <div className="text-muted-foreground">Monthly Generation</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">{Math.round(capacity * 6)} m²</div>
                    <div className="text-muted-foreground">Roof Area Needed</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">{Math.round(capacity * 3)} panels</div>
                    <div className="text-muted-foreground">~330W Panels</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Battery Storage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <Battery className="h-5 w-5 text-primary" />
                  Battery Storage
                </CardTitle>
                <CardDescription>Add battery backup for power during outages and TOU optimization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="battery-toggle">Enable Battery Storage</Label>
                  <Switch id="battery-toggle" checked={batteryEnabled} onCheckedChange={setBatteryEnabled} />
                </div>
                {batteryEnabled && (
                  <>
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Battery Capacity</Label>
                        <span className="font-medium">{batterySize} kWh</span>
                      </div>
                      <Slider
                        value={[batterySize]}
                        onValueChange={(v) => setBatterySize(v[0])}
                        min={5}
                        max={20}
                        step={5}
                        className="w-full"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center text-sm">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium">{Math.round(batterySize / 0.8)} hours</div>
                        <div className="text-muted-foreground">Backup Duration</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium">{batterySize * 0.9} kW</div>
                        <div className="text-muted-foreground">Max Discharge</div>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Add-ons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <Zap className="h-5 w-5 text-primary" />
                  Add-ons & Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <Label>EV Charging Ready</Label>
                    <p className="text-sm text-muted-foreground">Pre-wired for Level 2 EV charger installation</p>
                  </div>
                  <Switch checked={evCharging} onCheckedChange={setEvCharging} />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <Label>TOU Optimization</Label>
                    <p className="text-sm text-muted-foreground">AI-powered time-of-use rate optimization</p>
                  </div>
                  <Switch checked={touOptimization} onCheckedChange={setTouOptimization} />
                </div>
                <div className="pt-4">
                  <div className="flex justify-between mb-2">
                    <Label>Contract Length</Label>
                    <span className="font-medium">{contractLength} months</span>
                  </div>
                  <Slider
                    value={[contractLength]}
                    onValueChange={(v) => setContractLength(v[0])}
                    min={12}
                    max={60}
                    step={12}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>12 months</span>
                    <span>60 months (5% off)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Panel */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-serif">Your Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Solar ({capacity} kW)</span>
                    <span>₹{pricing.basePrice.toLocaleString()}</span>
                  </div>
                  {batteryEnabled && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Battery ({batterySize} kWh)</span>
                      <span>₹{pricing.batteryPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {evCharging && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">EV Ready</span>
                      <span>₹{pricing.evPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {touOptimization && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>TOU Discount</span>
                      <span>-₹200</span>
                    </div>
                  )}
                  {pricing.contractDiscount < 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Contract Discount</span>
                      <span>₹{pricing.contractDiscount.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Monthly Total</span>
                    <span className="text-xl">₹{pricing.monthly.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    ₹{pricing.yearly.toLocaleString()}/year
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingDown className="h-4 w-4 text-green-600" />
                    <span>Save ₹{savings.monthlySavings.toLocaleString()}/month</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Offset {savings.carbonOffset.toLocaleString()} kg CO2/month</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <Link
                    href={`/checkout?capacity=${capacity}&battery=${batteryEnabled ? batterySize : 0}&ev=${evCharging}&tou=${touOptimization}&contract=${contractLength}`}
                  >
                    Continue to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Site survey required. Final pricing may vary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function ConfigurePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <ConfigureContent />
    </Suspense>
  )
}
