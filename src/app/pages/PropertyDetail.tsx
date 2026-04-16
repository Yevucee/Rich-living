import { useParams, Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function PropertyDetail() {
  const { id } = useParams();

  // In a real app, this would fetch from an API
  const properties = {
    "1": {
      title: "Modern Villa with Pool",
      location: "East Legon, Accra",
      price: "$4,500/month",
      type: "For Rent",
      bedrooms: 4,
      bathrooms: 3,
      size: "320 sqm",
      furnished: "Fully Furnished",
      status: "Available",
      description: "An exceptional modern villa located in the prestigious East Legon neighborhood. This stunning property features contemporary architecture, spacious living areas, and a beautiful outdoor pool area perfect for entertaining. The home has been meticulously maintained and offers luxurious finishes throughout.",
      image: "https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      galleryLink: "https://photos.google.com/share/example",
      amenities: [
        "Swimming Pool",
        "Modern Kitchen",
        "Air Conditioning",
        "Generator",
        "Parking for 3 vehicles",
        "24/7 Security",
        "Garden",
        "Staff Quarters",
        "WiFi Ready",
        "Water Storage"
      ]
    },
    "2": {
      title: "Luxury Contemporary Home",
      location: "Airport Residential, Accra",
      price: "$3,800/month",
      type: "For Rent",
      bedrooms: 3,
      bathrooms: 2,
      size: "280 sqm",
      furnished: "Fully Furnished",
      status: "Available",
      description: "Beautiful contemporary home in the sought-after Airport Residential area. This property combines modern design with practical living spaces, ideal for professionals and families seeking quality accommodation in a prime location.",
      image: "https://images.unsplash.com/photo-1760067537640-6ffab10b27d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      galleryLink: "https://photos.google.com/share/example2",
      amenities: [
        "Air Conditioning",
        "Modern Kitchen",
        "Generator",
        "Parking for 2 vehicles",
        "24/7 Security",
        "Garden",
        "WiFi Ready",
        "Water Storage"
      ]
    },
    "3": {
      title: "Elegant Family Residence",
      location: "Cantonments, Accra",
      price: "$5,200/month",
      type: "For Rent",
      bedrooms: 5,
      bathrooms: 4,
      size: "400 sqm",
      furnished: "Fully Furnished",
      status: "Available",
      description: "Spacious and elegant family home in the exclusive Cantonments neighborhood. This residence offers generous living spaces, a well-appointed kitchen, and beautifully landscaped gardens, providing the perfect setting for refined family living.",
      image: "https://images.unsplash.com/photo-1758448500596-ce0e0239f1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      galleryLink: "https://photos.google.com/share/example3",
      amenities: [
        "Swimming Pool",
        "Modern Kitchen",
        "Air Conditioning",
        "Generator",
        "Parking for 4 vehicles",
        "24/7 Security",
        "Large Garden",
        "Staff Quarters",
        "Home Office",
        "WiFi Ready",
        "Water Storage"
      ]
    }
  };

  const property = properties[id as keyof typeof properties];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-navy mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-gold hover:text-gold-dark transition-colors">
            ← Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Details */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/properties" className="inline-flex items-center text-muted-foreground hover:text-navy transition-colors mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-navy text-off-white text-sm">
                {property.type}
              </span>
              <span className={`px-4 py-2 text-sm ${
                property.status === "Available"
                  ? "bg-gold/10 text-gold-dark"
                  : "bg-muted text-muted-foreground"
              }`}>
                {property.status}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl text-navy mb-4">
              {property.title}
            </h1>

            <div className="flex items-center text-muted-foreground mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.location}
            </div>

            <p className="font-heading text-3xl text-navy mb-8">
              {property.price}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pb-10 border-b border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Bedrooms</p>
                <p className="text-xl text-navy">{property.bedrooms}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Bathrooms</p>
                <p className="text-xl text-navy">{property.bathrooms}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Size</p>
                <p className="text-xl text-navy">{property.size}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Furnished</p>
                <p className="text-xl text-navy">{property.furnished}</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-heading text-2xl text-navy mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-heading text-2xl text-navy mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={property.galleryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone/50 text-navy hover:bg-stone transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Full Gallery
              </a>
            </div>
          </div>

          {/* Sidebar - Contact */}
          <div className="lg:col-span-1">
            <div className="bg-card p-8 sticky top-32">
              <h3 className="font-heading text-2xl text-navy mb-6">Interested?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Get in touch to arrange a viewing or request more information about this property.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/233123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-gold text-navy hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enquire on WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="w-full px-6 py-3 bg-navy text-off-white hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
                >
                  Request a Callback
                </Link>

                <Link
                  to="/contact"
                  className="w-full px-6 py-3 border-2 border-navy text-navy hover:bg-navy/5 transition-colors flex items-center justify-center gap-2"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Need assistance?</p>
                <a href="tel:+233123456789" className="text-navy hover:text-gold transition-colors">
                  +233 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
