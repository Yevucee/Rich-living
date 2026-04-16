export default function Privacy() {
  return (
    <div className="bg-off-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-heading text-4xl md:text-5xl text-navy mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <em>Last updated: 16 April 2026</em>
          </p>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rich Living (&apos;we&apos;, &apos;our&apos;, or &apos;us&apos;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Name, email address, and phone number</li>
              <li>Property preferences and requirements</li>
              <li>Service enquiries and requests</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Respond to your enquiries and provide requested services</li>
              <li>Send you property listings and service information</li>
              <li>Improve our website and services</li>
              <li>Communicate with you about your enquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl text-navy mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-stone/30 p-6 rounded-sm">
              <p className="text-muted-foreground mb-2">Email: hello@richliving.com</p>
              <p className="text-muted-foreground mb-2">Phone: +233 123 456 789</p>
              <p className="text-muted-foreground">WhatsApp: +233 123 456 789</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-navy mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
