import { useState } from "react";
import { User, CreditCard, Activity, Settings as SettingsIcon, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UserPanel = () => {
  const userData = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    membershipType: "Gold Subscriber",
    memberSince: "January 2025",
    avatar: "👤",
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        {/* Profile Header */}
        <Card className="glass-card mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-5xl">
                {userData.avatar}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-display font-bold mb-2">{userData.name}</h1>
                <p className="text-muted-foreground mb-1">{userData.email}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground font-semibold">
                    {userData.membershipType}
                  </span>
                  <span className="text-muted-foreground">Member since {userData.memberSince}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="membership">Membership</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardDescription>Programs Joined</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-display font-bold text-secondary">3</div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardDescription>Total Donations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-display font-bold text-accent">₹12,500</div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardDescription>Impact Score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-display font-bold text-primary">850</div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest engagements with Jaivic Bharat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Joined #OneOrganicSwitch program", date: "March 15, 2025" },
                    { action: "Donated ₹5,000 to Community Wellness", date: "March 10, 2025" },
                    { action: "Downloaded Farmer Toolkit", date: "March 5, 2025" },
                  ].map((activity, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                      <span className="font-medium">{activity.action}</span>
                      <span className="text-sm text-muted-foreground">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="membership">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Membership Details</CardTitle>
                <CardDescription>Manage your subscription and benefits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium">Current Plan</span>
                    <span className="font-bold text-accent">{userData.membershipType}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium">Renewal Date</span>
                    <span>January 15, 2026</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium">Monthly Credits</span>
                    <span>50 / 100 used</span>
                  </div>
                </div>
                <Button variant="premium" size="lg" className="w-full">
                  Upgrade Membership
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Complete history of your participation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Activity timeline coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your profile and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2" size={20} />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="mr-2" size={20} />
                    Notification Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="mr-2" size={20} />
                    Payment Methods
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default UserPanel;
