import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Libre_Baskerville, IBM_Plex_Mono, Libre_Baskerville as V0_Font_Libre_Baskerville, IBM_Plex_Mono as V0_Font_IBM_Plex_Mono, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _libreBaskerville = V0_Font_Libre_Baskerville({ subsets: ['latin'], weight: ["400","700"] })
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Energy OS | Your Energy, Orchestrated",
  description:
    "Subscribe to clean energy. Track every kilowatt. Settle transparently. Energy OS transforms how you consume, store, and trade power.",
  generator: "Energy OS",
  keywords: ["solar", "energy", "EaaS", "battery storage", "net metering", "clean energy", "India"],
}

export const viewport: Viewport = {
  themeColor: "#a67c52",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
