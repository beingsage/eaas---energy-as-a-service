import { Header } from "@/components/header"
import { PlanCard } from "@/components/plan-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockPlans } from "@/lib/mock-data"

export const metadata = {
  title: "Plans | Energy OS",
  description: "Choose your energy subscription plan",
}

export default function PlansPage() {
  const residentialPlans = mockPlans.filter((p) => p.tier === "residential")
  const commercialPlans = mockPlans.filter((p) => p.tier === "commercial")
  const enterprisePlans = mockPlans.filter((p) => p.tier === "enterprise")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Choose Your Energy Plan</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From residential rooftops to enterprise grid solutions, we have a plan that fits your energy needs and
            budget.
          </p>
        </div>

        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>

          <TabsContent value="residential">
            <div className="grid md:grid-cols-3 gap-6">
              {residentialPlans.map((plan, index) => (
                <PlanCard key={index} plan={{ ...plan, _id: `res-${index}` }} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {commercialPlans.map((plan, index) => (
                <PlanCard key={index} plan={{ ...plan, _id: `com-${index}` }} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enterprise">
            <div className="max-w-xl mx-auto">
              {enterprisePlans.map((plan, index) => (
                <PlanCard key={index} plan={{ ...plan, _id: `ent-${index}` }} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Comparison Table */}
        <section className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Plan Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  {mockPlans.slice(0, 4).map((plan, i) => (
                    <th key={i} className="text-center py-3 px-4 font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Solar Capacity</td>
                  {mockPlans.slice(0, 4).map((plan, i) => (
                    <td key={i} className="text-center py-3 px-4">
                      {plan.capacity_kw} kW
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Battery Storage</td>
                  {mockPlans.slice(0, 4).map((plan, i) => (
                    <td key={i} className="text-center py-3 px-4">
                      {plan.battery_kwh > 0 ? `${plan.battery_kwh} kWh` : "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Monthly Price</td>
                  {mockPlans.slice(0, 4).map((plan, i) => (
                    <td key={i} className="text-center py-3 px-4">
                      ₹{plan.monthly_price.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Energy Rate</td>
                  {mockPlans.slice(0, 4).map((plan, i) => (
                    <td key={i} className="text-center py-3 px-4">
                      ₹{plan.price_per_kwh}/kWh
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">SLA Uptime</td>
                  {mockPlans.slice(0, 4).map((plan, i) => (
                    <td key={i} className="text-center py-3 px-4">
                      {plan.sla_uptime}%
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
