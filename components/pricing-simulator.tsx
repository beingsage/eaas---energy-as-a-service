"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sun, Moon, Clock, TrendingUp, Zap, Leaf } from "lucide-react"

interface PricingSimulatorProps {
  solarCapacity: number
  batteryCapacity: number
  monthlyConsumption?: number
}

const touRates = {
  peak: { start: 18, end: 22, rate: 8.5, label: "Peak" },
  standard: { start: 6, end: 18, rate: 6.0, label: "Standard" },
  offPeak: { start: 22, end: 6, rate: 4.0, label: "Off-Peak" },
}

const exportRate = 3.5 // INR per kWh

export function PricingSimulator({ solarCapacity, batteryCapacity, monthlyConsumption = 500 }: PricingSimulatorProps) {
  const [consumption, setConsumption] = useState(monthlyConsumption)
  const [hasBattery, setHasBattery] = useState(batteryCapacity > 0)
  const [touOptimization, setTouOptimization] = useState(true)

  const calculations = useMemo(() => {
    // Daily solar generation estimate (5 peak sun hours average in India)
    const dailySolarGeneration = solarCapacity * 5 // kWh per day
    const monthlySolarGeneration = dailySolarGeneration * 30

    // Without solar (baseline)
    const avgRate = 6.5 // weighted average
    const withoutSolarCost = consumption * avgRate

    // With solar (self-consumption model)
    const selfConsumption = Math.min(monthlySolarGeneration * 0.6, consumption * 0.7) // 60% direct use
    const gridImport = consumption - selfConsumption
    const excessGeneration = Math.max(0, monthlySolarGeneration - selfConsumption)

    // TOU optimization with battery
    let touSavings = 0
    if (hasBattery && touOptimization) {
      // Assume 30% of consumption can be shifted from peak to off-peak
      const shiftableLoad = consumption * 0.3
      touSavings = shiftableLoad * (touRates.peak.rate - touRates.offPeak.rate)
    }

    // Calculate costs
    const gridCost = gridImport * avgRate
    const exportCredit = excessGeneration * exportRate
    const withSolarCost = Math.max(0, gridCost - exportCredit - touSavings)

    // Monthly savings
    const monthlySavings = withoutSolarCost - withSolarCost
    const savingsPercentage = (monthlySavings / withoutSolarCost) * 100

    // Carbon offset (0.82 kg CO2 per kWh for Indian grid)
    const carbonOffset = monthlySolarGeneration * 0.82

    return {
      monthlySolarGeneration: Math.round(monthlySolarGeneration),
      selfConsumption: Math.round(selfConsumption),
      gridImport: Math.round(gridImport),
      excessGeneration: Math.round(excessGeneration),
      withoutSolarCost: Math.round(withoutSolarCost),
      withSolarCost: Math.round(withSolarCost),
      exportCredit: Math.round(exportCredit),
      touSavings: Math.round(touSavings),
      monthlySavings: Math.round(monthlySavings),
      savingsPercentage: Math.round(savingsPercentage),
      carbonOffset: Math.round(carbonOffset),
      annualSavings: Math.round(monthlySavings * 12),
    }
  }, [consumption, solarCapacity, hasBattery, touOptimization])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Savings Simulator
        </CardTitle>
        <CardDescription>Estimate your savings based on consumption and TOU rates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Monthly Consumption</Label>
              <span className="font-medium">{consumption} kWh</span>
            </div>
            <Slider value={[consumption]} onValueChange={(v) => setConsumption(v[0])} min={100} max={2000} step={50} />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>100 kWh</span>
              <span>2000 kWh</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Battery Storage</Label>
              <p className="text-sm text-muted-foreground">
                {batteryCapacity > 0 ? `${batteryCapacity} kWh capacity` : "Not included"}
              </p>
            </div>
            <Switch checked={hasBattery} onCheckedChange={setHasBattery} disabled={batteryCapacity === 0} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>TOU Optimization</Label>
              <p className="text-sm text-muted-foreground">Shift load to off-peak hours</p>
            </div>
            <Switch checked={touOptimization} onCheckedChange={setTouOptimization} disabled={!hasBattery} />
          </div>
        </div>

        {/* TOU Rate Display */}
        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Time-of-Use Rates
          </h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-amber-600 mb-1">
                <Sun className="h-4 w-4" />
                <span>Peak</span>
              </div>
              <p className="font-bold">₹{touRates.peak.rate}/kWh</p>
              <p className="text-xs text-muted-foreground">6 PM - 10 PM</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                <Zap className="h-4 w-4" />
                <span>Standard</span>
              </div>
              <p className="font-bold">₹{touRates.standard.rate}/kWh</p>
              <p className="text-xs text-muted-foreground">6 AM - 6 PM</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                <Moon className="h-4 w-4" />
                <span>Off-Peak</span>
              </div>
              <p className="font-bold">₹{touRates.offPeak.rate}/kWh</p>
              <p className="text-xs text-muted-foreground">10 PM - 6 AM</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <Tabs defaultValue="monthly">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg text-center">
                <p className="text-sm text-red-700 dark:text-red-300 mb-1">Without Solar</p>
                <p className="text-2xl font-bold text-red-600">₹{calculations.withoutSolarCost.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                <p className="text-sm text-green-700 dark:text-green-300 mb-1">With Solar</p>
                <p className="text-2xl font-bold text-green-600">₹{calculations.withSolarCost.toLocaleString()}</p>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">Monthly Savings</p>
              <p className="text-4xl font-bold text-primary">₹{calculations.monthlySavings.toLocaleString()}</p>
              <Badge variant="secondary" className="mt-2">
                {calculations.savingsPercentage}% reduction
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Annual Savings</p>
                <p className="text-xl font-bold text-green-600">₹{calculations.annualSavings.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carbon Offset</p>
                <p className="text-xl font-bold text-green-600 flex items-center justify-center gap-1">
                  <Leaf className="h-5 w-5" />
                  {calculations.carbonOffset} kg
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="breakdown" className="space-y-3 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Solar Generation</span>
              <span className="font-medium">{calculations.monthlySolarGeneration} kWh</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Self-Consumption</span>
              <span className="font-medium">{calculations.selfConsumption} kWh</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Grid Import</span>
              <span className="font-medium">{calculations.gridImport} kWh</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Export to Grid</span>
              <span className="font-medium">{calculations.excessGeneration} kWh</span>
            </div>
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Export Credit</span>
                <span className="font-medium text-green-600">-₹{calculations.exportCredit}</span>
              </div>
              {calculations.touSavings > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">TOU Optimization</span>
                  <span className="font-medium text-green-600">-₹{calculations.touSavings}</span>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
