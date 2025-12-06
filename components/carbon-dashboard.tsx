"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Car, Factory, TrendingUp, Award } from "lucide-react"

interface CarbonDashboardProps {
  totalGenerationKwh: number
  totalExportKwh: number
}

export function CarbonDashboard({ totalGenerationKwh = 1250, totalExportKwh = 450 }: CarbonDashboardProps) {
  // Carbon factor for Indian grid: 0.82 kg CO2/kWh
  const carbonFactor = 0.82
  const carbonOffset = totalGenerationKwh * carbonFactor
  const treesEquivalent = Math.round(carbonOffset / 21) // 21 kg CO2 per tree per year
  const carKmEquivalent = Math.round(carbonOffset / 0.12) // 0.12 kg CO2 per km

  // Annual target (assume 12,000 kWh/year for 5kW system)
  const annualTarget = 12000 * carbonFactor
  const progress = (carbonOffset / (annualTarget / 12)) * 100 // monthly progress

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-600" />
          Carbon Impact
        </CardTitle>
        <CardDescription>Your environmental contribution this month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Stat */}
        <div className="text-center p-6 bg-green-50 dark:bg-green-950 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-300 mb-2">CO₂ Emissions Avoided</p>
          <p className="text-5xl font-bold font-serif text-green-600">{carbonOffset.toFixed(0)}</p>
          <p className="text-lg text-green-600">kg CO₂</p>
          <Badge variant="secondary" className="mt-3">
            <Award className="h-3 w-3 mr-1" />
            Green Champion
          </Badge>
        </div>

        {/* Progress to Goal */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Monthly Goal Progress</span>
            <span className="font-medium">{Math.min(100, Math.round(progress))}%</span>
          </div>
          <Progress value={Math.min(100, progress)} className="h-3" />
          <p className="text-xs text-muted-foreground mt-1">Target: {(annualTarget / 12).toFixed(0)} kg CO₂/month</p>
        </div>

        {/* Equivalents */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg text-center">
            <TreePine className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{treesEquivalent}</p>
            <p className="text-xs text-muted-foreground">Trees planted equivalent</p>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <Car className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{carKmEquivalent.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">km of driving avoided</p>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Impact Breakdown</h4>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Factory className="h-4 w-4" />
              Grid Displacement
            </span>
            <span className="font-medium">{(totalGenerationKwh * carbonFactor).toFixed(0)} kg</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              Export Contribution
            </span>
            <span className="font-medium">{(totalExportKwh * carbonFactor).toFixed(0)} kg</span>
          </div>
        </div>

        {/* Certificate */}
        <div className="p-4 border-2 border-dashed border-green-300 dark:border-green-700 rounded-lg text-center">
          <Award className="h-8 w-8 mx-auto text-green-600 mb-2" />
          <p className="font-medium text-green-900 dark:text-green-100">Carbon Credit Certificate</p>
          <p className="text-sm text-green-700 dark:text-green-300">
            Verified offset: {carbonOffset.toFixed(0)} kg CO₂
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Certificate ID: CC-2024-{Math.random().toString(36).substr(2, 8).toUpperCase()}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
