import React, { useState, useEffect, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Home } from "lucide-react"; // Changed Icon to Home
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getProperties,
  Property,
} from "@/redux/features/properties/propertySlice";
import {
  getWishlist,
  toggleWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import { RootState } from "@/redux/store";
import { toast } from "sonner";

interface FilterState {
  search?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: string;
  property_type?: string;
}

const Buy = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state: RootState) => state.auth);
  const { properties, isLoading } = useAppSelector(
    (state: RootState) => state.properties
  );
  const { itemIds: wishlistedIds } = useAppSelector(
    (state: RootState) => state.wishlist
  );

  const [filters, setFilters] = useState<Partial<FilterState>>({});

  useEffect(() => {
    // Fetch properties with transaction_type set to 'buy'
    const queryFilters: Partial<FilterState> & { transaction_type: string } = {
      ...filters,
      transaction_type: "buy",
    };
    dispatch(getProperties(queryFilters));

    if (user) {
      dispatch(getWishlist());
    }
  }, [dispatch, filters, user]);

  // **FIX APPLIED HERE**
  const availableCities = useMemo(() => {
    if (!Array.isArray(properties)) return [];

    const cities = properties
      // Use optional chaining (?.) to safely access nested properties
      .map((p: Property) => p.location?.city)
      // Filter out any resulting falsy values (undefined, null, "")
      .filter((city): city is string => Boolean(city));

    // Return an array of unique city names
    return [...new Set(cities)];
  }, [properties]);

  const availablePropTypes = useMemo(() => {
    if (!Array.isArray(properties)) return [];

    const propTypes = properties
      .map((p: Property) => p.property_type)
      .filter((type): type is string => Boolean(type));

    return [...new Set(propTypes)];
  }, [properties]);

  const handleToggleWishlist = (propertyId: string) => {
    if (!user) {
      toast.error("Please log in to save properties to your wishlist.");
      navigate("/auth");
      return;
    }
    dispatch(toggleWishlist(propertyId));
  };

  const handleFiltersChange = (newFilters: Partial<FilterState>) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  const heroBackgroundImage =
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2146&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative bg-cover bg-center py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackgroundImage})`,
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <Home className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Properties for Sale
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Find and buy your dream home from our curated listings
          </p>
        </div>
      </section>

      <section className="py-8 border-b sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4">
          <PropertyFilters
            onFiltersChange={handleFiltersChange}
            cities={availableCities}
            propertyTypes={availablePropTypes}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground">
                {isLoading && properties.length === 0
                  ? "Searching..."
                  : `${properties.length} Properties Found`}
              </h2>
              <p className="text-muted-foreground mt-2">
                Explore homes for sale that fit your needs
              </p>
            </div>
          </div>

          {isLoading && properties.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-muted"></div>
                  <CardContent className="p-4 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div
                  key={property._id}
                  className="cursor-pointer"
                  onClick={() => handlePropertyClick(property._id)}
                >
                  <PropertyCard
                    property={property}
                    isWishlisted={wishlistedIds.includes(property._id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                </div>
              ))}
            </div>
          )}
          {!isLoading && properties.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Properties Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more results
                </p>
                <Button variant="outline" onClick={handleClearFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Buy;
