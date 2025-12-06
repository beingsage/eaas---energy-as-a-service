"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-serif font-bold text-lg">Energy OS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/plans" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Plans
          </Link>
          <Link href="/configure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Configure
          </Link>
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link href="/devices" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Devices
          </Link>
          <Link href="/ledger" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Ledger
          </Link>
          <Link href="/vpp" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            VPP
          </Link>
          <Link href="/finance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Finance
          </Link>
          <Link href="/discom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            DISCOM
          </Link>
          <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Admin
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="/plans" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              Plans
            </Link>
            <Link href="/configure" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              Configure
            </Link>
            <Link href="/dashboard" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              Dashboard
            </Link>
            <Link href="/devices" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              Devices
            </Link>
            <Link href="/ledger" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              Ledger
            </Link>
            <Link href="/vpp" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              VPP
            </Link>
            <Link href="/finance" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              Finance
            </Link>
            <Link href="/discom" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              DISCOM
            </Link>
            <Link href="/admin" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              Admin
            </Link>
            <hr className="border-border" />
            <Button variant="ghost" asChild className="justify-start">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
