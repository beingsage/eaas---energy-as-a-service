"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Building2,
  FileText,
  CheckCircle2,
  Clock,
  XCircle,
  AlertTriangle,
  Upload,
  Eye,
  Download,
  Send,
  Search,
  Filter,
  Zap,
  Sun,
  Settings,
} from "lucide-react"

interface DiscomRequest {
  id: string
  applicantName: string
  siteAddress: string
  requestType: "net_metering" | "capacity_increase" | "disconnection"
  status: "submitted" | "under_review" | "approved" | "rejected"
  inverterCapacity_kw: number
  panelCapacity_kwp: number
  exportLimit_kw?: number
  submittedAt: Date
  reviewedAt?: Date
  documents: string[]
  adminNotes?: string
}

const mockRequests: DiscomRequest[] = [
  {
    id: "NM-2024-001",
    applicantName: "Rajesh Kumar",
    siteAddress: "42, MG Road, Indiranagar, Bangalore",
    requestType: "net_metering",
    status: "under_review",
    inverterCapacity_kw: 5,
    panelCapacity_kwp: 6,
    submittedAt: new Date("2024-12-10"),
    documents: ["site_photo.jpg", "inverter_spec.pdf", "electricity_bill.pdf"],
  },
  {
    id: "NM-2024-002",
    applicantName: "Priya Sharma",
    siteAddress: "15, Banjara Hills, Hyderabad",
    requestType: "net_metering",
    status: "approved",
    inverterCapacity_kw: 10,
    panelCapacity_kwp: 12,
    exportLimit_kw: 8,
    submittedAt: new Date("2024-11-25"),
    reviewedAt: new Date("2024-12-05"),
    documents: ["site_photo.jpg", "inverter_spec.pdf", "electricity_bill.pdf"],
    adminNotes: "Approved with 8kW export limit due to transformer capacity",
  },
  {
    id: "NM-2024-003",
    applicantName: "Tech Park Ltd",
    siteAddress: "Electronic City Phase 1, Bangalore",
    requestType: "capacity_increase",
    status: "submitted",
    inverterCapacity_kw: 100,
    panelCapacity_kwp: 120,
    submittedAt: new Date("2024-12-18"),
    documents: ["site_survey.pdf", "load_analysis.xlsx"],
  },
  {
    id: "NM-2024-004",
    applicantName: "Amit Patel",
    siteAddress: "23, Satellite Road, Ahmedabad",
    requestType: "net_metering",
    status: "rejected",
    inverterCapacity_kw: 15,
    panelCapacity_kwp: 18,
    submittedAt: new Date("2024-11-15"),
    reviewedAt: new Date("2024-11-28"),
    documents: ["site_photo.jpg"],
    adminNotes: "Rejected - Transformer at full capacity. Reapply after grid upgrade in Q2 2025",
  },
]

export default function DiscomPage() {
  const [requests, setRequests] = useState<DiscomRequest[]>(mockRequests)
  const [selectedRequest, setSelectedRequest] = useState<DiscomRequest | null>(null)
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [newRequestOpen, setNewRequestOpen] = useState(false)

  const getStatusBadge = (status: DiscomRequest["status"]) => {
    switch (status) {
      case "submitted":
        return (
          <Badge variant="outline">
            <Clock className="h-3 w-3 mr-1" /> Submitted
          </Badge>
        )
      case "under_review":
        return (
          <Badge variant="secondary">
            <Eye className="h-3 w-3 mr-1" /> Under Review
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="default" className="bg-green-600">
            <CheckCircle2 className="h-3 w-3 mr-1" /> Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" /> Rejected
          </Badge>
        )
    }
  }

  const getRequestTypeLabel = (type: DiscomRequest["requestType"]) => {
    switch (type) {
      case "net_metering":
        return "Net Metering"
      case "capacity_increase":
        return "Capacity Increase"
      case "disconnection":
        return "Disconnection"
    }
  }

  const filteredRequests = requests.filter((r) => {
    if (filterStatus !== "all" && r.status !== filterStatus) return false
    if (
      searchTerm &&
      !r.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !r.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false
    return true
  })

  const handleApprove = (requestId: string, exportLimit: number) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId
          ? { ...r, status: "approved" as const, exportLimit_kw: exportLimit, reviewedAt: new Date() }
          : r,
      ),
    )
    setReviewDialogOpen(false)
    setSelectedRequest(null)
  }

  const handleReject = (requestId: string, reason: string) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId ? { ...r, status: "rejected" as const, adminNotes: reason, reviewedAt: new Date() } : r,
      ),
    )
    setReviewDialogOpen(false)
    setSelectedRequest(null)
  }

  const stats = {
    total: requests.length,
    pending: requests.filter((r) => r.status === "submitted" || r.status === "under_review").length,
    approved: requests.filter((r) => r.status === "approved").length,
    rejected: requests.filter((r) => r.status === "rejected").length,
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              DISCOM Regulatory Console
            </h1>
            <p className="text-muted-foreground">Net metering applications and grid connection approvals</p>
          </div>
          <Dialog open={newRequestOpen} onOpenChange={setNewRequestOpen}>
            <DialogTrigger asChild>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                New Application
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="font-serif">Submit Net Metering Application</DialogTitle>
                <DialogDescription>Fill in the details for your grid connection request</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Request Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="net_metering">Net Metering</SelectItem>
                      <SelectItem value="capacity_increase">Capacity Increase</SelectItem>
                      <SelectItem value="disconnection">Disconnection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Inverter Capacity (kW)</Label>
                    <Input type="number" placeholder="5" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Panel Capacity (kWp)</Label>
                    <Input type="number" placeholder="6" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Site Address</Label>
                  <Textarea placeholder="Full installation address" />
                </div>
                <div className="grid gap-2">
                  <Label>Upload Documents</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground mt-1">Site photos, inverter specs, electricity bill</p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewRequestOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setNewRequestOpen(false)}>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <FileText className="h-4 w-4" />
                <span className="text-sm">Total Applications</span>
              </div>
              <div className="text-2xl font-bold font-serif">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Clock className="h-4 w-4 text-amber-500" />
                <span className="text-sm">Pending Review</span>
              </div>
              <div className="text-2xl font-bold font-serif text-amber-600">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Approved</span>
              </div>
              <div className="text-2xl font-bold font-serif text-green-600">{stats.approved}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <XCircle className="h-4 w-4 text-red-500" />
                <span className="text-sm">Rejected</span>
              </div>
              <div className="text-2xl font-bold font-serif text-red-600">{stats.rejected}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="workflow">Approval Workflow</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-4">
            {/* Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="under_review">Under Review</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Applications Table */}
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Application ID</TableHead>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Capacity</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-mono">{request.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{request.applicantName}</p>
                            <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                              {request.siteAddress}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>{getRequestTypeLabel(request.requestType)}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{request.inverterCapacity_kw} kW inverter</p>
                            <p className="text-muted-foreground">{request.panelCapacity_kwp} kWp panels</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {request.submittedAt.toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedRequest(request)
                                setReviewDialogOpen(true)
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            {request.status === "approved" && (
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflow">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Net Metering Approval Workflow</CardTitle>
                <CardDescription>Standard process for grid connection applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Application Submission",
                      desc: "User submits site photos, inverter specs, and electricity bill",
                      icon: Upload,
                    },
                    {
                      step: 2,
                      title: "Document Verification",
                      desc: "DISCOM admin validates submitted documents",
                      icon: FileText,
                    },
                    {
                      step: 3,
                      title: "Technical Assessment",
                      desc: "Grid capacity and transformer load analysis",
                      icon: Settings,
                    },
                    {
                      step: 4,
                      title: "Export Limit Assignment",
                      desc: "Determine maximum export capacity based on grid constraints",
                      icon: Zap,
                    },
                    {
                      step: 5,
                      title: "Grid Authorization",
                      desc: "Webhook sent to enable ledger export",
                      icon: CheckCircle2,
                    },
                  ].map((item, index) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                          {item.step}
                        </div>
                        {index < 4 && <div className="w-0.5 h-12 bg-border" />}
                      </div>
                      <div className="pb-8">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guidelines">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Sun className="h-5 w-5" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Valid electricity connection with the DISCOM",
                      "Rooftop solar capacity up to sanctioned load",
                      "BIS-certified inverters and panels",
                      "Adequate structural strength certification",
                      "No pending dues on electricity account",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Site photographs (rooftop and proposed installation area)",
                      "Inverter and panel technical specifications",
                      "Latest electricity bill (not older than 3 months)",
                      "ID proof and address proof",
                      "Structural stability certificate (for > 10 kW)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-primary mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Processing Time</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Standard applications are processed within 30 working days. Commercial installations may take up
                        to 45 days.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Export Limits</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Export limits are determined by local transformer capacity. Areas with high solar penetration
                        may have reduced limits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Review Dialog */}
      <Dialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="font-serif">Review Application: {selectedRequest?.id}</DialogTitle>
            <DialogDescription>
              {selectedRequest?.applicantName} - {getRequestTypeLabel(selectedRequest?.requestType || "net_metering")}
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Site Address</Label>
                  <p className="text-sm">{selectedRequest.siteAddress}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Current Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedRequest.status)}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Inverter Capacity</Label>
                  <p className="font-medium">{selectedRequest.inverterCapacity_kw} kW</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Panel Capacity</Label>
                  <p className="font-medium">{selectedRequest.panelCapacity_kwp} kWp</p>
                </div>
              </div>

              <div>
                <Label className="text-muted-foreground">Documents</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedRequest.documents.map((doc) => (
                    <Badge key={doc} variant="outline" className="cursor-pointer">
                      <FileText className="h-3 w-3 mr-1" />
                      {doc}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedRequest.adminNotes && (
                <div className="p-4 bg-muted rounded-lg">
                  <Label className="text-muted-foreground">Admin Notes</Label>
                  <p className="text-sm mt-1">{selectedRequest.adminNotes}</p>
                </div>
              )}

              {(selectedRequest.status === "submitted" || selectedRequest.status === "under_review") && (
                <>
                  <div className="border-t pt-4">
                    <Label>Set Export Limit (kW)</Label>
                    <Input type="number" placeholder={String(selectedRequest.inverterCapacity_kw)} className="mt-2" />
                  </div>

                  <div>
                    <Label>Review Notes</Label>
                    <Textarea placeholder="Add notes for the applicant..." className="mt-2" />
                  </div>
                </>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setReviewDialogOpen(false)}>
              Close
            </Button>
            {selectedRequest &&
              (selectedRequest.status === "submitted" || selectedRequest.status === "under_review") && (
                <>
                  <Button
                    variant="destructive"
                    onClick={() => handleReject(selectedRequest.id, "Application rejected")}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button onClick={() => handleApprove(selectedRequest.id, selectedRequest.inverterCapacity_kw)}>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                </>
              )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
