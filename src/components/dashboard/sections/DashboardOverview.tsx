// src/components/dashboard/sections/DashboardOverview.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DashboardOverview = ({ user }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-6">Overview</h2>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Dashboard!</CardTitle>
          <CardDescription>
            Here's a quick look at your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Hello, <span className="font-semibold">{user.fullName}</span>!
          </p>
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-sm text-secondary-foreground">
              Your current role is:{" "}
              <span className="font-medium uppercase">{user.role}</span>.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              From this panel, you can manage your profile, view your
              activities, and update your security settings.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
