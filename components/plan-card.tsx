import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Plan } from "@/lib/types"

interface PlanCardProps {
  plan: Plan
  showConfigure?: boolean
}

export function PlanCard({ plan, showConfigure = true }: PlanCardProps) {
  return (
    <Card className={`relative flex flex-col ${plan.popular ? "border-primary border-2" : "border-border"}`}>
      {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
      <CardHeader>
        <CardTitle className="font-serif">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6">
          <span className="text-4xl font-bold font-serif">₹{plan.monthly_price.toLocaleString()}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <div className="space-y-2 text-sm mb-6">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Capacity</span>
            <span className="font-medium">{plan.capacity_kw} kW</span>
          </div>
          {plan.battery_kwh > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Battery</span>
              <span className="font-medium">{plan.battery_kwh} kWh</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Energy Rate</span>
            <span className="font-medium">₹{plan.price_per_kwh}/kWh</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Export Rate</span>
            <span className="font-medium">₹{plan.export_rate}/kWh</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">SLA Uptime</span>
            <span className="font-medium">{plan.sla_uptime}%</span>
          </div>
        </div>
        <ul className="space-y-2">
          {plan.features.slice(0, 5).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {plan.features.length > 5 && (
            <li className="text-sm text-muted-foreground">+{plan.features.length - 5} more features</li>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        {showConfigure ? (
          <Button className="w-full" asChild>
            <Link href={`/configure?plan=${plan._id}`}>Configure Plan</Link>
          </Button>
        ) : (
          <Button className="w-full" asChild>
            <Link href={`/checkout?plan=${plan._id}`}>Select Plan</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
