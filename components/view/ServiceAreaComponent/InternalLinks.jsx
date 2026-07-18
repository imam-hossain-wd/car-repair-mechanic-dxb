// src/components/view/ServiceAreaComponent/InternalLinks/InternalLinks.jsx

"use client";

import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Battery,
  Wind,
  Brackets as Brake,
  Settings,
  Droplets,
  Car,
  MapPin,
  ExternalLink,
  Shield,
  Clock,
  Star,
} from "lucide-react";

export function InternalLinks({ area }) {
  const internalLinks = area?.internalLinksSection?.links || [];
  const nearbyAreas = area?.nearbyAreasSection?.areas || [];
  const name = area?.name || "Al Karama";
  const city = area?.city || "Dubai";
  const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";

  // Service icon mapping
  const getServiceIcon = (serviceName) => {
    const name = serviceName?.toLowerCase() || "";
    if (name.includes("battery")) return Battery;
    if (name.includes("ac")) return Wind;
    if (name.includes("brake")) return Brake;
    if (name.includes("diagnostic")) return Settings;
    if (name.includes("oil")) return Droplets;
    if (name.includes("mechanic")) return Wrench;
    return Wrench;
  };

  return (
    <section className="w-full py-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              EXPLORE OUR SERVICES
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {area?.internalLinksSection?.title ||
              `Explore More Car Repair Services in ${city}`}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {area?.internalLinksSection?.subtitle ||
              `Professional automotive repair and mobile mechanic solutions available across ${city}.`}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - Service Links */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Our Professional Services
                </h3>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  Complete car repair solutions across {city}
                </p>
              </div>
              
              <div className="p-6">
                {internalLinks.length > 0 ? (
                  <div className="space-y-3">
                    {internalLinks.map((link, idx) => {
                      const IconComponent = getServiceIcon(link.name);
                      return (
                        <Link
                          key={idx}
                          href={link.href}
                          className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                {link.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                Available in {name} & nearby areas
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  // Default service links if no data provided
                  <div className="space-y-3">
                    {[
                      { name: "Car Battery Replacement Dubai", href: "/dubai/services/car-battery-replacement", icon: Battery },
                      { name: "Mobile Mechanic Dubai", href: "/dubai/services/mobile-mechanic", icon: Wrench },
                      { name: "Car AC Repair Dubai", href: "/dubai/services/car-ac-repair", icon: Wind },
                      { name: "Brake Pad Replacement Dubai", href: "/dubai/services/brake-pad-replacement", icon: Brake },
                      { name: "Car Diagnostics Dubai", href: "/dubai/services/car-diagnostics", icon: Settings },
                      { name: "Roadside Assistance Dubai", href: "/dubai/services/roadside-assistance", icon: Car },
                    ].map((link, idx) => {
                      const IconComponent = link.icon;
                      return (
                        <Link
                          key={idx}
                          href={link.href}
                          className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                {link.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                Available in {name} & nearby areas
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Nearby Areas & Quick Links */}
          <div>
            {/* Nearby Areas Card */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Nearby Areas We Serve
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Mobile mechanic services available in these locations
                </p>
              </div>
              
              <div className="p-6">
                {nearbyAreas.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {nearbyAreas.map((areaItem, idx) => (
                      <Link
                        key={idx}
                        href={`/dubai/area-we-serve/${areaItem.slug}`}
                        className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                          {areaItem.name}
                        </span>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary ml-auto" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  // Default nearby areas
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name: "Al Karama", slug: "al-karama" },
                      { name: "Bur Dubai", slug: "bur-dubai" },
                      { name: "Oud Metha", slug: "oud-metha" },
                      { name: "Al Mankhool", slug: "al-mankhool" },
                      { name: "Al Jafiliya", slug: "al-jafiliya" },
                      { name: "Dubai Healthcare City", slug: "dubai-healthcare-city" },
                    ].map((areaItem, idx) => (
                      <Link
                        key={idx}
                        href={`/dubai/area-we-serve/${areaItem.slug}`}
                        className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                          {areaItem.name}
                        </span>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary ml-auto" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Emergency Service Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/3 rounded-2xl p-6 border border-primary/10 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">24/7 Emergency Service</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Fast response time of {responseTime} minutes across {name} and surrounding areas
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs text-gray-500">Available 24 hours, 7 days a week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Quick Links */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Why Choose Fix Car Dubai?
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">11+ years of automotive experience</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">5,000+ satisfied customers across Dubai</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Google verified with 4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Free warranty on all repairs</span>
                </div>
              </div>

              <Link
                href="/dubai/book-appointment"
                className="flex items-center justify-center gap-2 w-full mt-6 bg-primary text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                <Car className="w-4 h-4" />
                Book Mobile Mechanic
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-6 md:p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Need Emergency Car Repair in {name}?
              </h3>
              <p className="text-gray-300 text-sm">
                Our mobile mechanics are ready to assist you 24/7
              </p>
            </div>
            <Link
              href="/dubai/book-appointment"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Emergency Mechanic
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema for Internal Links */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": area?.internalLinksSection?.title || `Car Repair Services in ${city}`,
            "description": area?.internalLinksSection?.subtitle || `Professional mobile mechanic and car repair services across ${city}`,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://fix-car-dubai.com'}`
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Area We Serve",
                  "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://fix-car-dubai.com'}/dubai/area-we-serve`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": name,
                  "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://fix-car-dubai.com'}/dubai/area-we-serve/${area?.slug}`
                }
              ]
            }
          })
        }}
      />
    </section>
  );
}

// Import missing icon
const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);