import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Battery, Zap, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { PlanCard } from "@/components/plan-card"
import { mockPlans } from "@/lib/mock-data"

export default function HomePage() {
  const residentialPlans = mockPlans.filter((p) => p.tier === "residential")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Energy as a Service
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Your Energy, Orchestrated
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Subscribe to clean energy. Track every kilowatt. Settle transparently. Energy OS transforms how you consume,
            store, and trade power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/plans">View Plans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">Why Energy OS?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <Sun className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-serif">Distributed Generation</CardTitle>
                <CardDescription>Solar, battery, and grid resources orchestrated as one unified system</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-serif">Transparent Ledger</CardTitle>
                <CardDescription>Every kWh tracked, timestamped, and settled with cryptographic proof</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <Battery className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-serif">Smart Storage</CardTitle>
                <CardDescription>
                  Battery systems that optimize for TOU pricing and maximize your savings
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Residential Plans</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose a plan that fits your energy needs. All plans include installation, monitoring, and maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {residentialPlans.map((plan, index) => (
              <PlanCard key={index} plan={{ ...plan, _id: `plan-${index}` }} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/plans">View All Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Plan", desc: "Select capacity and features" },
              { step: "2", title: "Site Survey", desc: "We assess your property" },
              { step: "3", title: "Installation", desc: "Professional setup in days" },
              { step: "4", title: "Go Live", desc: "Monitor and save instantly" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15MW+", label: "Deployed Capacity" },
              { value: "2,500+", label: "Active Sites" },
              { value: "99.2%", label: "Avg. Uptime" },
              { value: "12Cr+", label: "kWh Settled" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Transform Your Energy?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of customers who have switched to transparent, affordable, and sustainable energy.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="font-serif font-bold text-lg">Energy OS</span>
              </div>
              <p className="text-sm text-muted-foreground">The operating system for distributed energy resources.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/plans" className="hover:text-foreground">
                    Plans
                  </Link>
                </li>
                <li>
                  <Link href="/configure" className="hover:text-foreground">
                    Configure
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    SLA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Energy OS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
