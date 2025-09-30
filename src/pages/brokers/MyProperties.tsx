import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom"; // useNavigate को आयात करें

const MyProperties = () => {
  const navigate = useNavigate(); // useNavigate हुक का उपयोग करें

  const properties = [
    {
      id: "PROP001",
      name: "Luxury Villa in Mumbai",
      type: "Villa",
      status: "For Sale",
      price: "₹ 5 Cr",
    },
    {
      id: "PROP004",
      name: "Office Space in Pune",
      type: "Commercial",
      status: "For Rent",
      price: "₹ 80,000/mo",
    },
    {
      id: "PROP007",
      name: "1BHK for Students",
      type: "Apartment",
      status: "Rented",
      price: "₹ 15,000/mo",
    },
  ];

  const handleAddNew = () => {
    navigate("/broker/properties/add"); // नए पेज पर नेविगेट करें
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>My Property Listings</CardTitle>
          <CardDescription>
            Manage your properties available for sale or rent.
          </CardDescription>
        </div>
        <Button onClick={handleAddNew}>Add New Property</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Property Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((prop) => (
              <TableRow key={prop.id}>
                <TableCell className="font-medium">{prop.id}</TableCell>
                <TableCell>{prop.name}</TableCell>
                <TableCell>{prop.type}</TableCell>
                <TableCell>{prop.price}</TableCell>
                <TableCell>{prop.status}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MyProperties;
