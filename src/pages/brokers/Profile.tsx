import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BrokerProfile = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Broker Profile</CardTitle>
        <CardDescription>
          Update your public information and contact details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" defaultValue="Sunil Gupta" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="agency">Agency Name</Label>
          <Input id="agency" defaultValue="Gupta Real Estate" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            defaultValue="sunil.gupta@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" defaultValue="9876543210" />
        </div>
        <Button>Update Profile</Button>
      </CardContent>
    </Card>
  );
};

export default BrokerProfile;
