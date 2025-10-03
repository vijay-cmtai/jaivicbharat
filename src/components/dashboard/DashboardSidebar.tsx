// src/components/dashboard/DashboardSidebar.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  Shield,
  Megaphone,
  Star,
  Wallet,
  History,
} from "lucide-react";

export const DashboardSidebar = ({ user, activeTab, setActiveTab }) => {
  const commonLinks = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "profile", label: "Profile Settings", icon: User },
    { id: "security", label: "Security", icon: Shield },
  ];

  const roleLinks = {
    advertiser: [{ id: "campaigns", label: "My Campaigns", icon: Megaphone }],
    subscriber: [{ id: "subscription", label: "My Subscription", icon: Star }],
    investor: [{ id: "portfolio", label: "My Portfolio", icon: Wallet }],
    donor: [{ id: "history", label: "Donation History", icon: History }],
  };

  const links = [...commonLinks, ...(roleLinks[user.role] || [])];

  return (
    <aside className="w-full md:w-64">
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Button
            key={link.id}
            variant="ghost"
            className={cn(
              "w-full justify-start text-base p-6",
              activeTab === link.id && "bg-muted hover:bg-muted font-bold"
            )}
            onClick={() => setActiveTab(link.id)}
          >
            <link.icon className="mr-3 h-5 w-5" />
            {link.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
};
