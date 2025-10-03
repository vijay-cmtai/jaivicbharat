// src/components/dashboard/sections/ProfileSettings.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ProfileSettings = ({ user }) => {
  // TODO: Add state and a function to handle form submission
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // 1. Get form data
    // 2. Dispatch a new Redux thunk (e.g., updateUser)
    // 3. Show a toast on success/error
    console.log("Updating profile...");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Profile Settings
      </h2>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your personal details here. Email address cannot be changed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" defaultValue={user.fullName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue={user.email}
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue={user.phone || ""} />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
