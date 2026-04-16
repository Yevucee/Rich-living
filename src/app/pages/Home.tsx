import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      location: "East Legon, Accra",
      price: "$4,500/month",
      type: "For Rent",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "Available"
    },
    {
      id: 2,
      title: "Luxury Contemporary Home",
      location: "Airport Residential, Accra",
      price: "$3,800/month",
      type: "For Rent",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1760067537640-6ffab10b27d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "Available"
    },
    {
      id: 3,
      title: "Elegant Family Residence",
      location: "Cantonments, Accra",
      price: "$5,200/month",
      type: "For Rent",
      bedrooms: 5,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1758448500596-ce0e0239f1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "Available"
    }
  ];

  const services = [
    {
      name: "Cleaning",
      description: "Professional cleaning services for homes and offices, from regular maintenance to deep cleaning.",
      icon: "✨"
    },
    {
      name: "Laundry",
      description: "Premium wash, fold, and ironing services with convenient collection and delivery.",
      icon: "👔"
    },
    {
      name: "Interior Design",
      description: "Expert consultation and styling support to transform your space into a refined home.",
      icon: "🏡"
    },
    {
      name: "Logistics",
      description: "Reliable airport pickup, driver services, and local transport coordination.",
      icon: "🚗"
    }
  ];

  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Luxury modern home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-tight">
            Premium Living in Accra
          </h1>
          <p className="text-lg md:text-xl mb-10 text-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover quality properties and trusted lifestyle services. Rich Living connects you with premium homes and comprehensive support throughout Accra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="px-8 py-4 bg-gold text-navy hover:bg-gold-dark transition-colors"
            >
              View Properties
            </Link>
            <a
              href="https://wa.me/233123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-off-white text-off-white hover:bg-off-white/10 transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-navy mb-6">
          Your Trusted Partner in Accra
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Rich Living is a premium property and lifestyle services brand dedicated to helping clients find quality homes and arrange essential services throughout Accra. We combine local expertise with professional service to ensure a seamless experience.
        </p>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl text-navy mb-3">Featured Properties</h2>
            <p className="text-muted-foreground">Curated homes for discerning clients</p>
          </div>
          <Link
            to="/properties"
            className="hidden md:block text-navy hover:text-gold transition-colors border-b border-navy hover:border-gold pb-1"
          >
            View All Properties →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              className="group bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs px-3 py-1 bg-navy text-off-white">{property.type}</span>
                  <span className="text-xs px-3 py-1 bg-gold/10 text-gold-dark">{property.status}</span>
                </div>
                <h3 className="font-heading text-2xl text-navy mb-2">{property.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{property.location}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{property.bedrooms} bed</span>
                  <span>•</span>
                  <span>{property.bathrooms} bath</span>
                </div>
                <p className="font-heading text-2xl text-navy">{property.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <Link
            to="/properties"
            className="text-navy hover:text-gold transition-colors border-b border-navy hover:border-gold pb-1"
          >
            View All Properties →
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-stone/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-navy mb-4">
              Lifestyle Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support to make your life in Accra effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-2xl text-navy mb-3">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-navy text-off-white hover:bg-navy-light transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-navy mb-2">Verified Listings</h3>
            <p className="text-sm text-muted-foreground">All properties are personally verified and quality-checked</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-navy mb-2">Personal Support</h3>
            <p className="text-sm text-muted-foreground">Dedicated assistance throughout your property journey</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-navy mb-2">Local Knowledge</h3>
            <p className="text-sm text-muted-foreground">Expert understanding of Accra's neighborhoods and services</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-navy mb-2">Clear Communication</h3>
            <p className="text-sm text-muted-foreground">Straightforward, responsive dialogue at every step</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-off-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-stone mb-10 max-w-2xl mx-auto">
            Whether you're searching for the perfect property or need lifestyle services, we're here to help. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/233123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-navy hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+233123456789"
              className="px-8 py-4 bg-transparent border-2 border-off-white text-off-white hover:bg-off-white/10 transition-colors"
            >
              Call +233 123 456 789
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-off-white text-off-white hover:bg-off-white/10 transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
