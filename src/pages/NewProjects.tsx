import React, { useState, useEffect, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers } from "lucide-react";
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

// Define the shape of the filters state
interface FilterState {
  search?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: string;
  property_type?: string;
  minYearBuilt?: number;
}

const NewProjects = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Selectors to get data from the Redux store
  const { user } = useAppSelector((state: RootState) => state.auth);
  const { properties, isLoading } = useAppSelector(
    (state: RootState) => state.properties
  );
  const { itemIds: wishlistedIds } = useAppSelector(
    (state: RootState) => state.wishlist
  );

  const [filters, setFilters] = useState<Partial<FilterState>>({});

  // Effect to fetch properties and wishlist data
  useEffect(() => {
    // Hardcoded filter for "New Projects" (built in the last year)
    const minYearBuilt = new Date().getFullYear() - 1;
    const queryFilters: Partial<FilterState> = {
      ...filters,
      minYearBuilt: minYearBuilt,
    };
    dispatch(getProperties(queryFilters));

    // Fetch wishlist only if the user is logged in
    if (user) {
      dispatch(getWishlist());
    }
  }, [dispatch, filters, user]);

  // Memoized values for filter dropdowns to avoid recalculation
  const availableCities = useMemo(() => {
    // Ensure properties is an array before trying to map over it.
    if (!Array.isArray(properties)) return [];

    // **FIX APPLIED HERE**
    const cities = properties
      // 1. Use optional chaining (?.) to safely access p.location.city.
      //    If p.location is undefined, this will result in `undefined` instead of an error.
      .map((p: Property) => p.location?.city)
      // 2. Filter out any `undefined`, `null`, or empty string values from the array.
      .filter((city): city is string => Boolean(city));

    // Return a unique set of cities.
    return [...new Set(cities)];
  }, [properties]);

  const availablePropTypes = useMemo(() => {
    if (!Array.isArray(properties)) return [];

    // Applying the same safety pattern here for robustness.
    const propTypes = properties
      .map((p: Property) => p.property_type)
      .filter((type): type is string => Boolean(type));

    return [...new Set(propTypes)];
  }, [properties]);

  // Handler to toggle a property in the wishlist
  const handleToggleWishlist = (propertyId: string) => {
    if (!user) {
      toast.error("Please log in to save properties to your wishlist.");
      navigate("/auth");
      return;
    }
    dispatch(toggleWishlist(propertyId));
  };

  // Update filters state when filters component changes
  const handleFiltersChange = (newFilters: Partial<FilterState>) => {
    setFilters(newFilters);
  };

  // Clear all applied filters
  const handleClearFilters = () => {
    setFilters({});
  };

  // Navigate to property detail page on click
  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  const heroBackgroundImage =
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/11/new-projects-in-pune_0_1200.jpg";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackgroundImage})`,
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <Layers className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">New Projects</h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Discover the latest properties launching across India
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4">
          <PropertyFilters
            onFiltersChange={handleFiltersChange}
            cities={availableCities}
            propertyTypes={availablePropTypes}
          />
        </div>
      </section>

      {/* Properties Listing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground">
                {isLoading && properties.length === 0
                  ? "Searching..."
                  : `${properties.length} New Projects Found`}
              </h2>
              <p className="text-muted-foreground mt-2">
                Explore brand new properties with modern amenities
              </p>
            </div>
          </div>

          {/* Loading Skeleton */}
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
            // Properties Grid
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

          {/* No Results Message */}
          {!isLoading && properties.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No New Projects Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting filters or check back later for new listings.
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

export default NewProjects;
