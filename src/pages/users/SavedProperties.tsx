import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import PropertyCard from "@/components/PropertyCard";

const SavedProperties = () => {
  const savedProperties = [
    {
      id: "prop-205",
      title: "Sea View Apartment in Mumbai",
      price: 25000000,
      location: "Juhu",
      area: "Mumbai",
      bedrooms: 4,
      bathrooms: 4,
      sqft: 2200,
      status: "sale" as const,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
      isVerified: true,
    },
    {
      id: "prop-310",
      title: "Cozy Cottage for Rent in Lonavala",
      price: 80000,
      location: "Near Tiger Point",
      area: "Lonavala",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      status: "rent" as const,
      type: "Cottage",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2e0?w=500",
      agent: {
        name: "Anita Desai",
        phone: "9123456789",
      },
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Properties</CardTitle>
        <CardDescription>
          Here are the properties you have saved for later.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {savedProperties.map((prop) => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </CardContent>
    </Card>
  );
};

export default SavedProperties;
