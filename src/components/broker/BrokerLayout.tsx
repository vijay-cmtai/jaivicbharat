import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Building, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  { title: "Dashboard", href: "/broker/dashboard", icon: LayoutDashboard },
  { title: "My Properties", href: "/broker/properties", icon: Building },
  { title: "Enquiries", href: "/broker/enquiries", icon: Mail },
  { title: "Profile", href: "/broker/profile", icon: User },
];
const BrokerLayout = () => {
  return (
    <div className="flex h-full">
      <aside className="w-64 flex-shrink-0 border-r bg-gray-100/40 p-4">
        <h2 className="text-2xl font-bold mb-8">Broker Panel</h2>
        <nav className="flex flex-col space-y-2">
          {sidebarNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  isActive && "bg-muted text-primary"
                )
              }
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-background overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default BrokerLayout;
