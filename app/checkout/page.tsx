"use client"

import { useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, FileText, CreditCard, MapPin, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const config = {
    capacity: Number(searchParams.get("capacity")) || 5,
    battery: Number(searchParams.get("battery")) || 5,
    ev: searchParams.get("ev") === "true",
    tou: searchParams.get("tou") !== "false",
    contract: Number(searchParams.get("contract")) || 24,
  }

  const monthly = config.capacity * 300 + config.battery * 150 + (config.ev ? 500 : 0) - (config.tou ? 200 : 0)

  const steps = [
    { id: 1, name: "Site Details", icon: MapPin },
    { id: 2, name: "KYC Verification", icon: Shield },
    { id: 3, name: "Agreement", icon: FileText },
    { id: 4, name: "Payment", icon: CreditCard },
  ]

  async function handleComplete() {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/dashboard?welcome=true")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/configure">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Configure
          </Link>
        </Button>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className={`flex items-center gap-2 ${step >= s.id ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step > s.id
                        ? "bg-primary text-primary-foreground"
                        : step === s.id
                          ? "border-2 border-primary"
                          : "border-2 border-muted"
                    }`}
                  >
                    {step > s.id ? <Check className="h-4 w-4" /> : s.id}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">{s.name}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-12 sm:w-24 h-0.5 mx-2 ${step > s.id ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Site Details</CardTitle>
                  <CardDescription>Where will we install your solar system?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="42, MG Road" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Bangalore" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="Karnataka" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" placeholder="560038" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="load">Sanctioned Load (kW)</Label>
                    <Input id="load" type="number" placeholder="5" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meter">Electricity Meter Number</Label>
                    <Input id="meter" placeholder="KA-BLR-2024-XXXX" required />
                  </div>
                  <Button className="w-full mt-4" onClick={() => setStep(2)}>
                    Continue to KYC
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">KYC Verification</CardTitle>
                  <CardDescription>We need to verify your identity for the subscription</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="aadhaar">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="aadhaar">Aadhaar</TabsTrigger>
                      <TabsTrigger value="pan">PAN Card</TabsTrigger>
                    </TabsList>
                    <TabsContent value="aadhaar" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="aadhaar">Aadhaar Number</Label>
                        <Input id="aadhaar" placeholder="XXXX XXXX XXXX" maxLength={14} />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        An OTP will be sent to your Aadhaar-linked mobile number
                      </p>
                    </TabsContent>
                    <TabsContent value="pan" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="pan">PAN Number</Label>
                        <Input id="pan" placeholder="ABCDE1234F" maxLength={10} />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-4">Upload Documents</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Electricity Bill (last 3 months)</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Property Document</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button className="flex-1" onClick={() => setStep(3)}>
                      Verify & Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Service Agreement</CardTitle>
                  <CardDescription>Review and sign the Energy-as-a-Service agreement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg h-64 overflow-y-auto text-sm font-mono">
                    <h4 className="font-bold mb-2">ENERGY OS - SERVICE AGREEMENT</h4>
                    <p className="mb-4">Contract Reference: EOS-2024-XXXX</p>

                    <p className="mb-2">
                      <strong>1. SERVICE DESCRIPTION</strong>
                    </p>
                    <p className="mb-4">
                      Energy OS shall install, maintain, and operate a {config.capacity} kW solar photovoltaic system{" "}
                      {config.battery > 0 ? `with ${config.battery} kWh battery storage` : ""} at the Customer premises.
                    </p>

                    <p className="mb-2">
                      <strong>2. TERM</strong>
                    </p>
                    <p className="mb-4">
                      This agreement shall be for a period of {config.contract} months from the date of system
                      commissioning.
                    </p>

                    <p className="mb-2">
                      <strong>3. SERVICE FEE</strong>
                    </p>
                    <p className="mb-4">
                      Customer agrees to pay a monthly service fee of INR {monthly.toLocaleString()} plus applicable
                      taxes and energy consumption charges as per the agreed tariff schedule.
                    </p>

                    <p className="mb-2">
                      <strong>4. SERVICE LEVEL AGREEMENT</strong>
                    </p>
                    <p className="mb-4">
                      Energy OS guarantees 98% system uptime. For each percentage point below the guaranteed uptime,
                      Customer shall receive a credit equal to 5% of the monthly service fee.
                    </p>

                    <p className="mb-2">
                      <strong>5. NET METERING</strong>
                    </p>
                    <p className="mb-4">
                      Energy OS shall assist Customer in obtaining net metering approval from the local DISCOM. Export
                      credits shall be applied to Customer invoices at the agreed export rate.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="agree" checked={agreed} onCheckedChange={(v) => setAgreed(v as boolean)} />
                    <Label htmlFor="agree" className="text-sm leading-relaxed">
                      I have read and agree to the Service Agreement, Terms of Service, and Privacy Policy. I authorize
                      Energy OS to process my application for net metering with the local DISCOM.
                    </Label>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-4">E-Signature</h4>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <p className="text-sm text-muted-foreground mb-2">Sign here using your mouse or touch screen</p>
                      <div className="h-24 bg-white rounded border border-border" />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button className="flex-1" disabled={!agreed} onClick={() => setStep(4)}>
                      Sign & Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Payment</CardTitle>
                  <CardDescription>Complete your subscription with the first months payment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>First Month Service Fee</span>
                      <span>₹{monthly.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Security Deposit (Refundable)</span>
                      <span>₹{(monthly * 2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>GST (18%)</span>
                      <span>₹{Math.round(monthly * 0.18).toLocaleString()}</span>
                    </div>
                    <div className="border-t border-border my-2 pt-2 flex justify-between font-medium">
                      <span>Total Due Today</span>
                      <span>₹{Math.round(monthly * 3.18).toLocaleString()}</span>
                    </div>
                  </div>

                  <Tabs defaultValue="card">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">Card</TabsTrigger>
                      <TabsTrigger value="upi">UPI</TabsTrigger>
                      <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" type="password" />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="upi" className="mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="upi">UPI ID</Label>
                        <Input id="upi" placeholder="yourname@upi" />
                      </div>
                    </TabsContent>
                    <TabsContent value="netbanking" className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        You will be redirected to your banks website to complete the payment.
                      </p>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(3)}>
                      Back
                    </Button>
                    <Button className="flex-1" onClick={handleComplete} disabled={loading}>
                      {loading ? "Processing..." : `Pay ₹${Math.round(monthly * 3.18).toLocaleString()}`}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    Payments are processed securely. Your card details are encrypted and never stored.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Solar System</span>
                    <span>{config.capacity} kW</span>
                  </div>
                  {config.battery > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Battery Storage</span>
                      <span>{config.battery} kWh</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contract Term</span>
                    <span>{config.contract} months</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Monthly Fee</span>
                    <span>₹{monthly.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary">Included</Badge>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Professional installation</li>
                    <li>• Real-time monitoring</li>
                    <li>• Maintenance & support</li>
                    <li>• Net metering assistance</li>
                    {config.tou && <li>• TOU optimization</li>}
                    {config.ev && <li>• EV charger ready</li>}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
