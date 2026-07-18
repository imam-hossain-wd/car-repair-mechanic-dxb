// src/components/view/ServiceAreaComponent/AreaServicesGrid/AreaServicesGrid.jsx

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Battery,
  Wrench,
  Wind,
  Brackets as Brake,
  Settings,
  Droplets,
  Zap,
  Thermometer,
  Car,
  Gauge,
  Key,
  Filter,
  Sun,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

export function AreaServicesGrid({ area }) {
  const services = area?.servicesGridSection?.services || [];
  const name = area?.name || "Al Karama";
  const city = area?.city || "Dubai";

  // Service icon mapping
  const getServiceIcon = (serviceName) => {
    const name = serviceName?.toLowerCase() || "";
    if (name.includes("battery")) return Battery;
    if (name.includes("ac") || name.includes("cooling")) return Wind;
    if (name.includes("brake")) return Brake;
    if (name.includes("diagnostic") || name.includes("engine")) return Settings;
    if (name.includes("oil")) return Droplets;
    if (name.includes("alternator")) return Zap;
    if (name.includes("radiator") || name.includes("cooling")) return Thermometer;
    if (name.includes("transmission") || name.includes("gear")) return Gauge;
    return Wrench;
  };


//*********************************************  IconComponent  */
  // Service color mapping
  const getServiceColor = (index) => {
    const colors = [
      "bg-blue-50 border-blue-200",
      "bg-green-50 border-green-200",
      "bg-purple-50 border-purple-200",
      "bg-orange-50 border-orange-200",
      "bg-red-50 border-red-200",
      "bg-teal-50 border-teal-200",
      "bg-indigo-50 border-indigo-200",
      "bg-pink-50 border-pink-200",
    ];
    return colors[index % colors.length];
  };

  const getIconColor = (index) => {
    const colors = [
      "text-blue-600",
      "text-green-600",
      "text-purple-600",
      "text-orange-600",
      "text-red-600",
      "text-teal-600",
      "text-indigo-600",
      "text-pink-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              COMPREHENSIVE SOLUTIONS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {area?.servicesGridSection?.title ||
              `Our Car Repair Services in ${name} ${city}`}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {area?.servicesGridSection?.subtitle ||
              `Professional mobile mechanic and emergency roadside assistance services available anywhere in ${name}.`}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        {services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const IconComponent = getServiceIcon(service.name);
              const cardColor = getServiceColor(idx);
              const iconColor = getIconColor(idx);
              
              return (
                <Link
                  key={idx}
                  href={`/dubai/services/${service.slug || service.name?.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group block bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Icon Section */}
                    <div className={`w-14 h-14 ${cardColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                      <IconComponent className={`w-7 h-7 ${iconColor}`} />
                    </div>

                    {/* Service Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.description ||
                        `Professional ${service.name?.toLowerCase()} service in ${name} by certified mobile mechanics.`}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {[
                        "24/7 Availability",
                        "On-Site Service",
                        "Certified Mechanics",
                      ].slice(0, 2).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-xs text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all duration-200">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              );
            })}
          </div>
        ) : (
          // Default services if no data provided
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Car Battery Replacement", slug: "car-battery-replacement", description: "24/7 emergency battery replacement service for all vehicle brands and models." },
              { name: "Mobile Mechanic Service", slug: "mobile-mechanic", description: "Professional on-site mechanic support at your home, office, or roadside location." },
              { name: "Car AC Repair", slug: "car-ac-repair", description: "Advanced AC diagnostics, gas refill, compressor inspection, and cooling repair service." },
              { name: "Brake Pad Replacement", slug: "brake-pad-replacement", description: "Complete brake inspection and brake pad replacement service." },
              { name: "Engine Diagnostics", slug: "car-diagnostics", description: "Computerized vehicle diagnostics and warning light scanning." },
              { name: "Oil Change Service", slug: "oil-change", description: "Fast engine oil and oil filter replacement service." },
              { name: "Alternator Repair", slug: "alternator-repair", description: "Professional alternator testing and charging system repair." },
              { name: "Radiator Repair", slug: "radiator-repair", description: "Cooling system inspection and radiator repair service." },
            ].map((service, idx) => {
              const IconComponent = getServiceIcon(service.name);
              const cardColor = getServiceColor(idx);
              const iconColor = getIconColor(idx);
              
              return (
                <Link
                  key={idx}
                  href={`/dubai/services/${service.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className={`w-14 h-14 ${cardColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                      <IconComponent className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        <span className="text-xs text-gray-500">24/7 Availability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        <span className="text-xs text-gray-500">On-Site Service</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all duration-200">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Service Highlights Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fast Response */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Fast Response Time</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Average {area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20"} minute arrival across {name}
                </p>
              </div>
            </div>

            {/* Certified Mechanics */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Certified Mechanics</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Highly trained technicians with 11+ years of experience
                </p>
              </div>
            </div>

            {/* Warranty Support */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Warranty Support</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All repairs backed by comprehensive warranty
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href="/dubai/services"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            Need a specific service? Call us for immediate assistance
          </p>
        </div>
      </div>

      {/* JSON-LD Schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `Car Repair Services in ${name} ${city}`,
            "description": area?.servicesGridSection?.title || `Professional mobile car repair services in ${name}`,
            "numberOfItems": services.length || 8,
            "itemListElement": (services.length ? services : [
              { name: "Car Battery Replacement" },
              { name: "Mobile Mechanic Service" },
              { name: "Car AC Repair" },
              { name: "Brake Pad Replacement" },
              { name: "Engine Diagnostics" },
              { name: "Oil Change Service" },
              { name: "Alternator Repair" },
              { name: "Radiator Repair" }
            ]).map((service, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "name": service.name,
              "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://fix-car-dubai.com'}/dubai/services/${service.slug || service.name?.toLowerCase().replace(/\s+/g, '-')}`
            }))
          })
        }}
      />
    </section>
  );
}

// Import missing icons
const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);