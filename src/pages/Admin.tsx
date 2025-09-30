import { useState } from "react";
import { Users, DollarSign, Briefcase, TrendingUp, Settings, FileText, Menu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: TrendingUp },
    { id: "users", label: "Users", icon: Users },
    { id: "donations", label: "Donations", icon: DollarSign },
    { id: "investors", label: "Investors", icon: Briefcase },
    { id: "media", label: "Media", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    { label: "Total Members", value: "10,247", change: "+12%" },
    { label: "Active Donors", value: "2,341", change: "+8%" },
    { label: "Funds Raised (Month)", value: "₹5.2L", change: "+23%" },
    { label: "Ongoing Projects", value: "18", change: "+3" },
  ];

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-primary/95 border-r border-accent/20 p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
              <span className="text-xl">🌿</span>
            </div>
            <div>
              <h2 className="font-display font-bold">Jaivic Bharat</h2>
              <p className="text-xs text-primary-foreground/60">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    selectedMenu === item.id
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/10"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">Dashboard</h1>
            <p className="text-primary-foreground/70">Welcome back! Here's what's happening.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-primary-foreground/5 border-accent/20">
                <CardHeader className="pb-2">
                  <CardDescription className="text-primary-foreground/60">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card className="bg-primary-foreground/5 border-accent/20">
            <CardHeader>
              <CardTitle className="text-primary-foreground">Recent Signups</CardTitle>
              <CardDescription className="text-primary-foreground/60">
                Latest member registrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Rajesh Kumar", type: "Subscriber", date: "2 hours ago" },
                  { name: "Priya Sharma", type: "Donor", date: "5 hours ago" },
                  { name: "Amit Patel", type: "Investor", date: "1 day ago" },
                  { name: "Sunita Devi", type: "Advertiser", date: "2 days ago" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-accent/10 last:border-0">
                    <div>
                      <p className="font-medium text-primary-foreground">{user.name}</p>
                      <p className="text-sm text-primary-foreground/60">{user.type}</p>
                    </div>
                    <span className="text-sm text-primary-foreground/60">{user.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Admin;
