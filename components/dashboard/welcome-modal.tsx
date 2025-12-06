"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap } from "lucide-react"

interface WelcomeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WelcomeModal({ open, onOpenChange }: WelcomeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-serif">Welcome to Energy OS!</DialogTitle>
          <DialogDescription className="text-base">
            Your subscription is now active. Here&apos;s what happens next:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">1</span>
            </div>
            <div>
              <p className="font-medium">Site Survey Scheduled</p>
              <p className="text-sm text-muted-foreground">
                Our team will contact you within 24 hours to schedule a site visit.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">2</span>
            </div>
            <div>
              <p className="font-medium">Installation (3-5 days)</p>
              <p className="text-sm text-muted-foreground">Professional installation by certified technicians.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">3</span>
            </div>
            <div>
              <p className="font-medium">Go Live</p>
              <p className="text-sm text-muted-foreground">
                Start generating clean energy and tracking savings in real-time.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-center">
            <Zap className="h-4 w-4 inline mr-1" />
            Meanwhile, explore the dashboard with simulated data to see how your system will work.
          </p>
        </div>

        <Button className="w-full" onClick={() => onOpenChange(false)}>
          Explore Dashboard
        </Button>
      </DialogContent>
    </Dialog>
  )
}
