export default function About() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <section className="bg-navy text-off-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-6xl mb-4">About Rich Living</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Your trusted partner for premium properties and lifestyle services in Accra
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6 text-center">
          Who We Are
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Rich Living is a premium property and lifestyle services brand dedicated to helping clients find quality homes and arrange essential services throughout Accra, Ghana.
          </p>
          <p>
            We understand that finding the right property and settling into a new city can be challenging. That's why we've built a service that combines verified property listings with comprehensive lifestyle support, making your transition seamless and stress-free.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-stone/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8">
              <h3 className="font-heading text-2xl text-navy mb-3">Premium Properties</h3>
              <p className="text-muted-foreground leading-relaxed">
                Curated rental and sale properties across Accra's most desirable neighborhoods. Every listing is personally verified and quality-checked.
              </p>
            </div>
            <div className="bg-card p-8">
              <h3 className="font-heading text-2xl text-navy mb-3">Lifestyle Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                From cleaning and laundry to interior design and logistics, we provide the services you need to live comfortably in Accra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6 text-center">
          Our Mission
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
          To provide discerning clients with trusted access to quality properties and professional lifestyle services, delivered with integrity, local expertise, and genuine care.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy text-off-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl mb-12 text-center">
            Why Clients Trust Rich Living
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Verified Quality</h3>
              <p className="text-stone text-sm leading-relaxed">
                Every property and service provider is personally vetted to ensure the highest standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Local Expertise</h3>
              <p className="text-stone text-sm leading-relaxed">
                Deep knowledge of Accra's neighborhoods, market, and trusted service providers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Personal Service</h3>
              <p className="text-stone text-sm leading-relaxed">
                Dedicated support and clear communication throughout your property journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
          Ready to Work Together?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're looking for a property or need lifestyle services, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/233123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold text-navy hover:bg-gold-dark transition-colors"
          >
            Contact Us on WhatsApp
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border-2 border-navy text-navy hover:bg-navy/5 transition-colors"
          >
            Send an Enquiry
          </a>
        </div>
      </section>
    </div>
  );
}
