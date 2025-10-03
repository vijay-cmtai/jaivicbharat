// src/pages/UserPanel.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/redux/features/authSlice/authSlice";
import type { RootState } from "@/redux/store";

// Layout Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

// Section Components (CORRECTED PATHS BASED ON YOUR IMAGE)
import { DashboardOverview } from "@/components/dashboard/sections/DashboardOverview";
import { ProfileSettings } from "@/components/dashboard/sections/ProfileSettings";
// import { SecuritySettings } from "@/components/dashboard/sections/SecuritySettings";
// TODO: Import your role-specific section components here as you create them

const UserPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!user) {
      navigate("/join"); // Redirect to login/join if not authenticated
    }
  }, [user, navigate]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  // Loading state while user is being fetched from Redux state
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading Your Dashboard...</p>
      </div>
    );
  }

  // A helper function to render the correct content component
  const renderActiveContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview user={user} />;
      case "profile":
        return <ProfileSettings user={user} />;
      case "security":
        return ;
      // Add cases for role-specific tabs
      // case 'campaigns': return <AdvertiserCampaigns />;
      // case 'subscription': return <SubscriberDetails />;
      // ... and so on
      default:
        return <DashboardOverview user={user} />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto py-4 px-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.fullName}`}
                />
                <AvatarFallback>
                  {user.fullName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  My Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Welcome back, {user.fullName}
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </header>

        <main className="container mx-auto py-10 px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Sidebar Navigation */}
            <DashboardSidebar
              user={user}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* Main Content Area */}
            <div className="flex-1">{renderActiveContent()}</div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default UserPanel;
