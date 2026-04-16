import { useState } from "react";

type ServiceType = "cleaning" | "laundry" | "interior" | "logistics" | null;

interface CleaningData {
  serviceType: string[];
  propertyType: string;
  extras: string[];
  location: string;
  preferredDate: string;
  notes: string;
}

interface LaundryData {
  serviceType: string[];
  items: { [key: string]: string };
  pickupArea: string;
  preferredDate: string;
  notes: string;
}

interface LogisticsData {
  serviceNeeded: string[];
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: string;
  addons: string[];
  notes: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceType>(null);

  const [cleaningData, setCleaningData] = useState<CleaningData>({
    serviceType: [],
    propertyType: "",
    extras: [],
    location: "",
    preferredDate: "",
    notes: ""
  });

  const [laundryData, setLaundryData] = useState<LaundryData>({
    serviceType: [],
    items: {},
    pickupArea: "",
    preferredDate: "",
    notes: ""
  });

  const [logisticsData, setLogisticsData] = useState<LogisticsData>({
    serviceNeeded: [],
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    passengers: "",
    addons: [],
    notes: ""
  });

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    }
    return [...array, item];
  };

  const buildWhatsAppMessage = () => {
    let message = "Hi Rich Living, I'd like to request a quote for:\n\n";

    if (selectedService === "cleaning") {
      message += "🧹 CLEANING SERVICE\n";
      if (cleaningData.serviceType.length > 0) {
        message += `Service: ${cleaningData.serviceType.join(", ")}\n`;
      }
      if (cleaningData.propertyType) {
        message += `Property: ${cleaningData.propertyType}\n`;
      }
      if (cleaningData.extras.length > 0) {
        message += `Extras: ${cleaningData.extras.join(", ")}\n`;
      }
      if (cleaningData.location) {
        message += `Location: ${cleaningData.location}\n`;
      }
      if (cleaningData.preferredDate) {
        message += `Date: ${cleaningData.preferredDate}\n`;
      }
      if (cleaningData.notes) {
        message += `Notes: ${cleaningData.notes}\n`;
      }
    } else if (selectedService === "laundry") {
      message += "👔 LAUNDRY SERVICE\n";
      if (laundryData.serviceType.length > 0) {
        message += `Service: ${laundryData.serviceType.join(", ")}\n`;
      }
      const items = Object.entries(laundryData.items).filter(([_, qty]) => qty);
      if (items.length > 0) {
        message += `Items: ${items.map(([item, qty]) => `${item} (${qty})`).join(", ")}\n`;
      }
      if (laundryData.pickupArea) {
        message += `Pickup: ${laundryData.pickupArea}\n`;
      }
      if (laundryData.preferredDate) {
        message += `Date: ${laundryData.preferredDate}\n`;
      }
      if (laundryData.notes) {
        message += `Notes: ${laundryData.notes}\n`;
      }
    } else if (selectedService === "logistics") {
      message += "🚗 LOGISTICS SERVICE\n";
      if (logisticsData.serviceNeeded.length > 0) {
        message += `Service: ${logisticsData.serviceNeeded.join(", ")}\n`;
      }
      if (logisticsData.pickupLocation) {
        message += `Pickup: ${logisticsData.pickupLocation}\n`;
      }
      if (logisticsData.dropoffLocation) {
        message += `Drop-off: ${logisticsData.dropoffLocation}\n`;
      }
      if (logisticsData.date) {
        message += `Date: ${logisticsData.date}\n`;
      }
      if (logisticsData.time) {
        message += `Time: ${logisticsData.time}\n`;
      }
      if (logisticsData.passengers) {
        message += `Passengers: ${logisticsData.passengers}\n`;
      }
      if (logisticsData.addons.length > 0) {
        message += `Add-ons: ${logisticsData.addons.join(", ")}\n`;
      }
      if (logisticsData.notes) {
        message += `Notes: ${logisticsData.notes}\n`;
      }
    }

    message += "\nPlease send me a quote. Thank you!";
    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    const message = buildWhatsAppMessage();
    window.open(`https://wa.me/233123456789?text=${message}`, "_blank");
  };

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <section className="bg-navy text-off-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-6xl mb-4">Lifestyle Services</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Select your service and provide details. We'll prepare a personalized quote for you.
          </p>
        </div>
      </section>

      {/* Service Selection */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-heading text-2xl text-navy mb-8 text-center">Choose Your Service</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <button
            onClick={() => setSelectedService("cleaning")}
            className={`p-6 border-2 transition-all ${
              selectedService === "cleaning"
                ? "border-gold bg-gold/5"
                : "border-border hover:border-gold/50"
            }`}
          >
            <div className="text-4xl mb-2">✨</div>
            <div className="text-sm text-navy font-medium">Cleaning</div>
          </button>

          <button
            onClick={() => setSelectedService("laundry")}
            className={`p-6 border-2 transition-all ${
              selectedService === "laundry"
                ? "border-gold bg-gold/5"
                : "border-border hover:border-gold/50"
            }`}
          >
            <div className="text-4xl mb-2">👔</div>
            <div className="text-sm text-navy font-medium">Laundry</div>
          </button>

          <button
            onClick={() => setSelectedService("interior")}
            className={`p-6 border-2 transition-all ${
              selectedService === "interior"
                ? "border-gold bg-gold/5"
                : "border-border hover:border-gold/50"
            }`}
          >
            <div className="text-4xl mb-2">🏡</div>
            <div className="text-sm text-navy font-medium">Interior Design</div>
          </button>

          <button
            onClick={() => setSelectedService("logistics")}
            className={`p-6 border-2 transition-all ${
              selectedService === "logistics"
                ? "border-gold bg-gold/5"
                : "border-border hover:border-gold/50"
            }`}
          >
            <div className="text-4xl mb-2">🚗</div>
            <div className="text-sm text-navy font-medium">Logistics</div>
          </button>
        </div>

        {/* Cleaning Form */}
        {selectedService === "cleaning" && (
          <div className="bg-card p-8 md:p-10 animate-fade-in">
            <h3 className="font-heading text-2xl text-navy mb-6">Cleaning Service Details</h3>

            <div className="space-y-8">
              {/* Service Type */}
              <div>
                <label className="block text-sm text-navy mb-3">Service Type</label>
                <div className="flex flex-wrap gap-2">
                  {["Regular cleaning", "Deep cleaning", "Move-in / move-out cleaning", "Office cleaning", "Post-event cleaning"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setCleaningData({
                        ...cleaningData,
                        serviceType: toggleArrayItem(cleaningData.serviceType, type)
                      })}
                      className={`px-4 py-2 text-sm border transition-all ${
                        cleaningData.serviceType.includes(type)
                          ? "border-gold bg-gold text-navy"
                          : "border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm text-navy mb-3">Property Type</label>
                <select
                  value={cleaningData.propertyType}
                  onChange={(e) => setCleaningData({ ...cleaningData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">Select property type</option>
                  <option value="Studio">Studio</option>
                  <option value="1 bedroom">1 bedroom</option>
                  <option value="2 bedroom">2 bedroom</option>
                  <option value="3 bedroom">3 bedroom</option>
                  <option value="4+ bedroom">4+ bedroom</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Extras */}
              <div>
                <label className="block text-sm text-navy mb-3">Additional Services</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Kitchen deep clean", "Bathroom deep clean", "Inside fridge", "Inside oven", "Balcony", "Windows", "Ironing", "Other"].map((extra) => (
                    <label key={extra} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cleaningData.extras.includes(extra)}
                        onChange={() => setCleaningData({
                          ...cleaningData,
                          extras: toggleArrayItem(cleaningData.extras, extra)
                        })}
                        className="w-4 h-4 text-gold focus:ring-gold border-border"
                      />
                      <span className="text-sm text-muted-foreground">{extra}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm text-navy mb-3">Location</label>
                <input
                  type="text"
                  value={cleaningData.location}
                  onChange={(e) => setCleaningData({ ...cleaningData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="e.g., East Legon, Accra"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm text-navy mb-3">Preferred Date</label>
                <input
                  type="date"
                  value={cleaningData.preferredDate}
                  onChange={(e) => setCleaningData({ ...cleaningData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm text-navy mb-3">Additional Notes</label>
                <textarea
                  value={cleaningData.notes}
                  onChange={(e) => setCleaningData({ ...cleaningData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  placeholder="Any specific requirements or preferences..."
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 px-6 py-4 bg-gold text-navy hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Discuss on WhatsApp
                </button>
                <button
                  className="px-6 py-4 border-2 border-navy text-navy hover:bg-navy/5 transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Laundry Form */}
        {selectedService === "laundry" && (
          <div className="bg-card p-8 md:p-10 animate-fade-in">
            <h3 className="font-heading text-2xl text-navy mb-6">Laundry Service Details</h3>

            <div className="space-y-8">
              {/* Service Type */}
              <div>
                <label className="block text-sm text-navy mb-3">Service Type</label>
                <div className="flex flex-wrap gap-2">
                  {["Wash and fold", "Ironing", "Wash and iron", "Collection and delivery", "Dry-cleaning coordination"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setLaundryData({
                        ...laundryData,
                        serviceType: toggleArrayItem(laundryData.serviceType, type)
                      })}
                      className={`px-4 py-2 text-sm border transition-all ${
                        laundryData.serviceType.includes(type)
                          ? "border-gold bg-gold text-navy"
                          : "border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Item Categories */}
              <div>
                <label className="block text-sm text-navy mb-3">Item Categories (optional quantity)</label>
                <div className="space-y-3">
                  {["Shirts", "Trousers", "Dresses", "Suits", "Bedsheets", "Duvet covers", "Towels", "Curtains", "Other"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <label className="flex-1 flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!!laundryData.items[item]}
                          onChange={(e) => {
                            const newItems = { ...laundryData.items };
                            if (e.target.checked) {
                              newItems[item] = "1";
                            } else {
                              delete newItems[item];
                            }
                            setLaundryData({ ...laundryData, items: newItems });
                          }}
                          className="w-4 h-4 text-gold focus:ring-gold border-border"
                        />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </label>
                      {laundryData.items[item] !== undefined && (
                        <input
                          type="text"
                          value={laundryData.items[item]}
                          onChange={(e) => setLaundryData({
                            ...laundryData,
                            items: { ...laundryData.items, [item]: e.target.value }
                          })}
                          className="w-20 px-3 py-2 text-sm border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Qty"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup Area */}
              <div>
                <label className="block text-sm text-navy mb-3">Pickup Area</label>
                <input
                  type="text"
                  value={laundryData.pickupArea}
                  onChange={(e) => setLaundryData({ ...laundryData, pickupArea: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="e.g., East Legon, Accra"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm text-navy mb-3">Preferred Date</label>
                <input
                  type="date"
                  value={laundryData.preferredDate}
                  onChange={(e) => setLaundryData({ ...laundryData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm text-navy mb-3">Additional Notes</label>
                <textarea
                  value={laundryData.notes}
                  onChange={(e) => setLaundryData({ ...laundryData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  placeholder="Any specific requirements or preferences..."
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 px-6 py-4 bg-gold text-navy hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Discuss on WhatsApp
                </button>
                <button
                  className="px-6 py-4 border-2 border-navy text-navy hover:bg-navy/5 transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Interior Design - Simple CTA */}
        {selectedService === "interior" && (
          <div className="bg-card p-8 md:p-10 text-center animate-fade-in">
            <div className="text-6xl mb-6">🏡</div>
            <h3 className="font-heading text-2xl text-navy mb-4">Interior Design Consultation</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our interior design service is tailored to your specific needs. Let's discuss your vision, style preferences, and project scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a
                href="https://wa.me/233123456789?text=Hi, I'd like to discuss Interior Design services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-gold text-navy hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Discuss on WhatsApp
              </a>
              <button className="px-6 py-4 border-2 border-navy text-navy hover:bg-navy/5 transition-colors">
                Request Consultation
              </button>
            </div>
          </div>
        )}

        {/* Logistics Form */}
        {selectedService === "logistics" && (
          <div className="bg-card p-8 md:p-10 animate-fade-in">
            <h3 className="font-heading text-2xl text-navy mb-6">Logistics Service Details</h3>

            <div className="space-y-8">
              {/* Service Needed */}
              <div>
                <label className="block text-sm text-navy mb-3">Service Needed</label>
                <div className="flex flex-wrap gap-2">
                  {["Airport pickup", "Airport drop-off", "Driver service", "Local transport", "Car with driver", "Errands and coordination", "Other"].map((service) => (
                    <button
                      key={service}
                      onClick={() => setLogisticsData({
                        ...logisticsData,
                        serviceNeeded: toggleArrayItem(logisticsData.serviceNeeded, service)
                      })}
                      className={`px-4 py-2 text-sm border transition-all ${
                        logisticsData.serviceNeeded.includes(service)
                          ? "border-gold bg-gold text-navy"
                          : "border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-sm text-navy mb-3">Pickup Location</label>
                <input
                  type="text"
                  value={logisticsData.pickupLocation}
                  onChange={(e) => setLogisticsData({ ...logisticsData, pickupLocation: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="e.g., Kotoka International Airport"
                />
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="block text-sm text-navy mb-3">Drop-off Location</label>
                <input
                  type="text"
                  value={logisticsData.dropoffLocation}
                  onChange={(e) => setLogisticsData({ ...logisticsData, dropoffLocation: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="e.g., East Legon, Accra"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-navy mb-3">Date</label>
                  <input
                    type="date"
                    value={logisticsData.date}
                    onChange={(e) => setLogisticsData({ ...logisticsData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm text-navy mb-3">Time</label>
                  <input
                    type="time"
                    value={logisticsData.time}
                    onChange={(e) => setLogisticsData({ ...logisticsData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Number of Passengers */}
              <div>
                <label className="block text-sm text-navy mb-3">Number of Passengers</label>
                <input
                  type="text"
                  value={logisticsData.passengers}
                  onChange={(e) => setLogisticsData({ ...logisticsData, passengers: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="e.g., 2 adults"
                />
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm text-navy mb-3">Add-ons</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Return trip", "Wait and return", "Multiple stops", "Luggage assistance", "Child seat if available", "Other"].map((addon) => (
                    <label key={addon} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={logisticsData.addons.includes(addon)}
                        onChange={() => setLogisticsData({
                          ...logisticsData,
                          addons: toggleArrayItem(logisticsData.addons, addon)
                        })}
                        className="w-4 h-4 text-gold focus:ring-gold border-border"
                      />
                      <span className="text-sm text-muted-foreground">{addon}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm text-navy mb-3">Additional Notes</label>
                <textarea
                  value={logisticsData.notes}
                  onChange={(e) => setLogisticsData({ ...logisticsData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  placeholder="Any specific requirements or preferences..."
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 px-6 py-4 bg-gold text-navy hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Discuss on WhatsApp
                </button>
                <button
                  className="px-6 py-4 border-2 border-navy text-navy hover:bg-navy/5 transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {/* No Service Selected */}
        {!selectedService && (
          <div className="text-center py-12 text-muted-foreground">
            <p>Select a service above to begin your enquiry</p>
          </div>
        )}
      </section>

      {/* Contact Footer */}
      <section className="bg-stone/30 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Prefer to speak directly? Contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/233123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark transition-colors"
            >
              WhatsApp: +233 123 456 789
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a href="tel:+233123456789" className="text-gold hover:text-gold-dark transition-colors">
              Call: +233 123 456 789
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a href="mailto:hello@richliving.com" className="text-gold hover:text-gold-dark transition-colors">
              hello@richliving.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
