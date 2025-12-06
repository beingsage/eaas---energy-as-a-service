"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  Users,
  Zap,
  Activity,
  Search,
  MoreHorizontal,
  UserCheck,
  UserX,
  Mail,
  Download,
  RefreshCw,
  Server,
  Database,
  AlertTriangle,
  CheckCircle2,
  IndianRupee,
} from "lucide-react"

interface AdminUser {
  id: string
  name: string
  email: string
  role: "customer" | "operator" | "admin" | "discom"
  status: "active" | "suspended" | "pending"
  subscriptions: number
  totalRevenue: number
  joinedAt: Date
}

interface SystemMetric {
  name: string
  value: string
  change: number
  status: "healthy" | "warning" | "critical"
}

const mockUsers: AdminUser[] = [
  {
    id: "u1",
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    role: "customer",
    status: "active",
    subscriptions: 1,
    totalRevenue: 35940,
    joinedAt: new Date("2024-01-15"),
  },
  {
    id: "u2",
    name: "Priya Sharma",
    email: "priya@example.com",
    role: "customer",
    status: "active",
    subscriptions: 2,
    totalRevenue: 71880,
    joinedAt: new Date("2024-02-20"),
  },
  {
    id: "u3",
    name: "Tech Park Ltd",
    email: "admin@techpark.com",
    role: "customer",
    status: "active",
    subscriptions: 1,
    totalRevenue: 539940,
    joinedAt: new Date("2024-03-10"),
  },
  {
    id: "u4",
    name: "Grid Ops Team",
    email: "ops@energyos.in",
    role: "operator",
    status: "active",
    subscriptions: 0,
    totalRevenue: 0,
    joinedAt: new Date("2024-01-01"),
  },
  {
    id: "u5",
    name: "Amit Patel",
    email: "amit@example.com",
    role: "customer",
    status: "suspended",
    subscriptions: 1,
    totalRevenue: 17970,
    joinedAt: new Date("2024-04-05"),
  },
]

const systemMetrics: SystemMetric[] = [
  { name: "API Response Time", value: "124ms", change: -8, status: "healthy" },
  { name: "Database Load", value: "34%", change: 5, status: "healthy" },
  { name: "Message Queue", value: "1.2K", change: 12, status: "healthy" },
  { name: "Error Rate", value: "0.02%", change: -15, status: "healthy" },
]

export default function AdminPage() {
  const [users, setUsers] = useState<AdminUser[]>(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  const filteredUsers = users.filter((u) => {
    if (roleFilter !== "all" && u.role !== roleFilter) return false
    if (
      searchTerm &&
      !u.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !u.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false
    return true
  })

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter((u) => u.status === "active").length,
    totalRevenue: users.reduce((sum, u) => sum + u.totalRevenue, 0),
    totalSubscriptions: users.reduce((sum, u) => sum + u.subscriptions, 0),
  }

  const toggleUserStatus = (userId: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId ? { ...u, status: u.status === "active" ? ("suspended" as const) : ("active" as const) } : u,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Platform Administration
            </h1>
            <p className="text-muted-foreground">Manage users, subscriptions, and system settings</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">Total Users</span>
              </div>
              <div className="text-2xl font-bold font-serif">{stats.totalUsers}</div>
              <p className="text-xs text-green-600">+12% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Zap className="h-4 w-4" />
                <span className="text-sm">Active Subscriptions</span>
              </div>
              <div className="text-2xl font-bold font-serif">{stats.totalSubscriptions}</div>
              <p className="text-xs text-green-600">+8% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <IndianRupee className="h-4 w-4" />
                <span className="text-sm">Total Revenue</span>
              </div>
              <div className="text-2xl font-bold font-serif">₹{(stats.totalRevenue / 100000).toFixed(1)}L</div>
              <p className="text-xs text-green-600">+23% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Activity className="h-4 w-4" />
                <span className="text-sm">System Health</span>
              </div>
              <div className="text-2xl font-bold font-serif text-green-600">99.9%</div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="system">System Health</TabsTrigger>
            <TabsTrigger value="logs">Activity Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            {/* Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="customer">Customer</SelectItem>
                      <SelectItem value="operator">Operator</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="discom">DISCOM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Subscriptions</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.status === "active"
                                ? "default"
                                : user.status === "suspended"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.subscriptions}</TableCell>
                        <TableCell className="font-mono">₹{user.totalRevenue.toLocaleString()}</TableCell>
                        <TableCell>
                          {user.joinedAt.toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => toggleUserStatus(user.id)}>
                              {user.status === "active" ? (
                                <UserX className="h-4 w-4" />
                              ) : (
                                <UserCheck className="h-4 w-4" />
                              )}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Subscription Overview</CardTitle>
                <CardDescription>All active and pending subscriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { plan: "Solar Plus", count: 12, revenue: 359400, growth: 15 },
                    { plan: "Solar Pro", count: 8, revenue: 527200, growth: 22 },
                    { plan: "Solar Starter", count: 15, revenue: 269820, growth: 8 },
                    { plan: "Commercial Basic", count: 3, revenue: 467640, growth: 30 },
                    { plan: "Commercial Premium", count: 1, revenue: 539880, growth: 0 },
                  ].map((sub) => (
                    <div key={sub.plan} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{sub.plan}</p>
                        <p className="text-sm text-muted-foreground">{sub.count} active subscriptions</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{(sub.revenue / 1000).toFixed(0)}K/mo</p>
                        <p className="text-xs text-green-600">+{sub.growth}% growth</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Server className="h-5 w-5" />
                    System Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {systemMetrics.map((metric) => (
                    <div key={metric.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        {metric.status === "healthy" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : metric.status === "warning" ? (
                          <AlertTriangle className="h-5 w-5 text-amber-600" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        )}
                        <div>
                          <p className="font-medium">{metric.name}</p>
                          <p className="text-sm text-muted-foreground">{metric.value}</p>
                        </div>
                      </div>
                      <Badge variant={metric.change < 0 ? "default" : "secondary"}>
                        {metric.change > 0 ? "+" : ""}
                        {metric.change}%
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Database Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "MongoDB", status: "connected", size: "2.4 GB", queries: "1.2K/min" },
                    { name: "Redis Cache", status: "connected", size: "512 MB", queries: "8.5K/min" },
                    { name: "TimeSeries DB", status: "connected", size: "15.8 GB", queries: "450/min" },
                  ].map((db) => (
                    <div key={db.name} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{db.name}</span>
                        <Badge variant="default" className="bg-green-600">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          {db.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Size: </span>
                          <span>{db.size}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Queries: </span>
                          <span>{db.queries}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Activity Logs</CardTitle>
                <CardDescription>Recent platform activity and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "2 min ago", event: "New subscription created", user: "rajesh@example.com", type: "info" },
                    {
                      time: "15 min ago",
                      event: "Net metering application approved",
                      user: "admin@energyos.in",
                      type: "success",
                    },
                    { time: "1 hour ago", event: "VPP dispatch executed", user: "system", type: "info" },
                    { time: "2 hours ago", event: "Payment received", user: "priya@example.com", type: "success" },
                    { time: "3 hours ago", event: "Device offline alert", user: "system", type: "warning" },
                    { time: "5 hours ago", event: "User account suspended", user: "admin@energyos.in", type: "error" },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          log.type === "success"
                            ? "bg-green-500"
                            : log.type === "warning"
                              ? "bg-amber-500"
                              : log.type === "error"
                                ? "bg-red-500"
                                : "bg-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{log.event}</p>
                        <p className="text-xs text-muted-foreground">{log.user}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{log.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
