import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Properties() {
  const [activeTab, setActiveTab] = useState<"rent" | "sale">("rent");
  const [filters, setFilters] = useState({
    location: "all",
    bedrooms: "all",
    availability: "all"
  });

  const allProperties = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      location: "East Legon",
      price: "$4,500/month",
      type: "rent",
      bedrooms: 4,
      bathrooms: 3,
      size: "320 sqm",
      image: "https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available"
    },
    {
      id: 2,
      title: "Luxury Contemporary Home",
      location: "Airport Residential",
      price: "$3,800/month",
      type: "rent",
      bedrooms: 3,
      bathrooms: 2,
      size: "280 sqm",
      image: "https://images.unsplash.com/photo-1760067537640-6ffab10b27d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available"
    },
    {
      id: 3,
      title: "Elegant Family Residence",
      location: "Cantonments",
      price: "$5,200/month",
      type: "rent",
      bedrooms: 5,
      bathrooms: 4,
      size: "400 sqm",
      image: "https://images.unsplash.com/photo-1758448500596-ce0e0239f1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available"
    },
    {
      id: 4,
      title: "Luxury Resort-Style Villa",
      location: "East Legon",
      price: "$6,800/month",
      type: "rent",
      bedrooms: 6,
      bathrooms: 5,
      size: "500 sqm",
      image: "https://images.unsplash.com/photo-1757439402115-c3c496fe81ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available"
    },
    {
      id: 5,
      title: "Contemporary Executive Home",
      location: "Labone",
      price: "$4,200/month",
      type: "rent",
      bedrooms: 4,
      bathrooms: 3,
      size: "340 sqm",
      image: "https://images.unsplash.com/photo-1760072513442-9872656c1b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "unavailable"
    },
    {
      id: 6,
      title: "Premium Townhouse",
      location: "Osu",
      price: "$650,000",
      type: "sale",
      bedrooms: 3,
      bathrooms: 2,
      size: "220 sqm",
      image: "https://images.unsplash.com/photo-1775241195232-cc7ea6e1a0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available"
    },
    {
      id: 7,
      title: "Modern Apartment Complex",
      location: "Ridge",
      price: "$850,000",
      type: "sale",
      bedrooms: 4,
      bathrooms: 3,
      size: "300 sqm",
      image: "https://images.unsplash.com/photo-1773895313936-d14ca8561dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available"
    },
    {
      id: 8,
      title: "Spacious Garden Estate",
      location: "Cantonments",
      price: "$3,900/month",
      type: "rent",
      bedrooms: 5,
      bathrooms: 4,
      size: "420 sqm",
      image: "https://images.unsplash.com/photo-1762117360890-5eacdbb07b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available",
      availableFrom: "May 15, 2026"
    },
    {
      id: 9,
      title: "Luxury Penthouse",
      location: "Airport Residential",
      price: "$1,200,000",
      type: "sale",
      bedrooms: 4,
      bathrooms: 4,
      size: "380 sqm",
      image: "https://images.unsplash.com/photo-1775241186452-c3d99b09f223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "available"
    }
  ];

  const filteredProperties = allProperties.filter(property => {
    if (property.type !== activeTab) return false;
    if (filters.location !== "all" && property.location !== filters.location) return false;
    if (filters.bedrooms !== "all" && property.bedrooms.toString() !== filters.bedrooms) return false;
    if (filters.availability !== "all" && property.status !== filters.availability) return false;
    return true;
  });

  const locations = ["all", ...Array.from(new Set(allProperties.map(p => p.location)))];
  const bedroomOptions = ["all", ...Array.from(new Set(allProperties.map(p => p.bedrooms.toString()))).sort()];

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <section className="bg-navy text-off-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-6xl mb-4">Properties</h1>
          <p className="text-lg text-stone max-w-2xl">
            Browse our curated selection of premium properties throughout Accra. Each listing is personally verified to ensure quality and authenticity.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("rent")}
              className={`px-6 py-4 font-heading text-lg relative transition-colors ${
                activeTab === "rent"
                  ? "text-navy after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold"
                  : "text-muted-foreground hover:text-navy"
              }`}
            >
              For Rent
            </button>
            <button
              onClick={() => setActiveTab("sale")}
              className={`px-6 py-4 font-heading text-lg relative transition-colors ${
                activeTab === "sale"
                  ? "text-navy after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold"
                  : "text-muted-foreground hover:text-navy"
              }`}
            >
              For Sale
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-stone/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-muted-foreground mb-2">Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full px-4 py-2 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc === "all" ? "All Locations" : loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-2">Bedrooms</label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full px-4 py-2 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {bedroomOptions.map(bed => (
                  <option key={bed} value={bed}>
                    {bed === "all" ? "Any" : `${bed} Bedrooms`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-2">Availability</label>
              <select
                value={filters.availability}
                onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                className="w-full px-4 py-2 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-sm text-muted-foreground mb-8">
          Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              className="group bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs px-3 py-1 bg-navy text-off-white">
                    {property.type === "rent" ? "For Rent" : "For Sale"}
                  </span>
                  <span className={`text-xs px-3 py-1 ${
                    property.status === "available"
                      ? "bg-gold/10 text-gold-dark"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {property.status === "available"
                      ? property.availableFrom ? `From ${property.availableFrom}` : "Available"
                      : "Unavailable"
                    }
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-navy mb-2">{property.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{property.location}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{property.bedrooms} bed</span>
                  <span>•</span>
                  <span>{property.bathrooms} bath</span>
                  <span>•</span>
                  <span>{property.size}</span>
                </div>
                <p className="font-heading text-2xl text-navy">{property.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">No properties match your filters</p>
            <button
              onClick={() => setFilters({ type: "all", location: "all", bedrooms: "all", availability: "all" })}
              className="text-navy hover:text-gold transition-colors border-b border-navy hover:border-gold pb-1"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
