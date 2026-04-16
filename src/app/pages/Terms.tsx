export default function Terms() {
  return (
    <div className="bg-off-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-heading text-4xl md:text-5xl text-navy mb-8">Terms of use</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <em>Last updated: 16 April 2026</em>
          </p>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using Rich Living's website and services, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Use of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rich Living provides property listing information and lifestyle service coordination. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Property listings for rent and sale</li>
              <li>Service enquiry coordination</li>
              <li>Property viewings and consultations</li>
              <li>Lifestyle service arrangements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Property Listings</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All property information is provided in good faith and is believed to be accurate at the time of publication. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Properties are subject to availability</li>
              <li>Prices and terms may change without notice</li>
              <li>Property viewings must be arranged in advance</li>
              <li>Final agreements are subject to property owner approval</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Service Enquiries</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you submit an enquiry for our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>You agree to provide accurate information</li>
              <li>We will respond within a reasonable timeframe</li>
              <li>Quotes are estimates and may vary based on specific requirements</li>
              <li>Final pricing and terms are confirmed before service delivery</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The content, design, and materials on this website are protected by copyright and other intellectual property rights. You may not reproduce, distribute, or use any content without our written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rich Living acts as a facilitator between clients and property owners/service providers. We strive to ensure quality but are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Changes to property availability or terms</li>
              <li>Service provider performance</li>
              <li>Any indirect or consequential damages</li>
              <li>Accuracy of third-party information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Provide accurate and truthful information</li>
              <li>Respect scheduled appointments and viewings</li>
              <li>Communicate professionally with our team and service providers</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to refuse service or terminate access to our services for any reason, including violation of these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These terms are governed by and construed in accordance with the laws of Ghana. Any disputes shall be resolved in the courts of Ghana.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-stone/30 p-6 rounded-sm">
              <p className="text-muted-foreground mb-2">Email: hello@richliving.com</p>
              <p className="text-muted-foreground mb-2">Phone: +233 123 456 789</p>
              <p className="text-muted-foreground">WhatsApp: +233 123 456 789</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-navy mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may revise these terms from time to time. The most current version will always be posted on this page. Continued use of our services after changes constitutes acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
