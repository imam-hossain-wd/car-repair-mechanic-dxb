
"use client";
// app/dubai/area-we-serve/page.jsx
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Shield, 
  Wrench,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";


export default function ServiceAreaPage() {
  const { serviceAreas, displayNumber, city, brandName } = SiteConfig;

  // Group areas by district
  const centralDubai = serviceAreas?.filter(area => 
    ["Al Karama", "Al Rigga", "Al Raffa", "Zaa'beel First", "Business Bay"].includes(area.name)
  ) || [];
  
  const residentialDubai = serviceAreas?.filter(area => 
    ["Damac Hills", "Damac Hills 2", "Dubai Silicon Oasis", "Dubai Maria", "Al Rashidiya", "Nadd Al Hamar"].includes(area.name)
  ) || [];
  
  const waterfrontDubai = serviceAreas?.filter(area => 
    ["Dubai Creek", "Dubai Festival City", "Dubai Maria"].includes(area.name)
  ) || [];
  
  const deiraAreas = serviceAreas?.filter(area => 
    ["Al Rigga", "Al Raffa", "Al Jadaf", "Nadd Shamma"].includes(area.name)
  ) || [];

  const popularAreas = serviceAreas?.slice(0, 8) || [];
  const totalAreas = serviceAreas?.length || 0;

  // Features stats
  const stats = [
    { value: totalAreas, label: "Service Locations", icon: MapPin },
    { value: "15-30", label: "Min Response Time", icon: Clock },
    { value: "24/7", label: "Emergency Service", icon: Phone },
    { value: "100%", label: "Coverage", icon: Navigation },
  ];

  // Service promises
  const promises = [
    { icon: Shield, text: "Certified Mechanics" },
    { icon: Clock, text: "On-Time Arrival" },
    { icon: Wrench, text: "Full Equipment" },
    { icon: Star, text: "Best Price Guarantee" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-primary/10 via-primary/5 to-transparent py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full mb-4">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Service Coverage
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Car Repair Service Areas in <span className="text-primary">{city}</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Professional mobile car repair service available across {totalAreas}+ locations in {city}. 
              We come to your doorstep with 15-30 minute response time.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-700">
                    <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Location Map Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Navigation className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Coverage Area</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                We serve all major areas across {city}, providing doorstep car repair and maintenance services.
                Our mobile mechanics are strategically located for rapid response.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Covering {totalAreas}+ locations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>15-30 minute average response</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24/7 emergency service available</span>
                </div>
              </div>
              <a
                href={`tel:${displayNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
              >
                <Phone className="h-4 w-4" />
                Call for Immediate Service
              </a>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center min-h-75">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-3">
                  <MapPin className="h-12 w-12 text-primary" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  📍 Serving all areas of {city}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {totalAreas}+ locations | 24/7 availability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Areas Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Popular Service <span className="text-primary">Areas</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Most requested locations with fastest response times
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-sm text-primary font-medium">{popularAreas.length}+ locations</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularAreas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  {area.responseTime && (
                    <span className="text-[10px] font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">
                      {area.responseTime}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
                  {area.highlight || "Full car repair services available"}
                </p>
                <div className="flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categorized Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Complete <span className="text-primary">Coverage</span> Across {city}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Central Dubai */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🏙️</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Central Dubai</h3>
                <span className="text-xs text-gray-500">({centralDubai.length})</span>
              </div>
              <div className="space-y-2">
                {centralDubai.map((area, idx) => (
                  <Link
                    key={idx}
                    href={area.href}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary">
                      {area.name}
                    </span>
                    <span className="text-xs text-gray-400">{area.responseTime || "15-20 min"}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Residential Areas */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🏡</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Residential Communities</h3>
                <span className="text-xs text-gray-500">({residentialDubai.length})</span>
              </div>
              <div className="space-y-2">
                {residentialDubai.map((area, idx) => (
                  <Link
                    key={idx}
                    href={area.href}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary">
                      {area.name}
                    </span>
                    <span className="text-xs text-gray-400">{area.responseTime || "18-25 min"}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Waterfront Areas */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🌊</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Waterfront & Marina</h3>
                <span className="text-xs text-gray-500">({waterfrontDubai.length})</span>
              </div>
              <div className="space-y-2">
                {waterfrontDubai.map((area, idx) => (
                  <Link
                    key={idx}
                    href={area.href}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary">
                      {area.name}
                    </span>
                    <span className="text-xs text-gray-400">{area.responseTime || "20-25 min"}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Deira & Old Dubai */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🕌</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Deira & Old Dubai</h3>
                <span className="text-xs text-gray-500">({deiraAreas.length})</span>
              </div>
              <div className="space-y-2">
                {deiraAreas.map((area, idx) => (
                  <Link
                    key={idx}
                    href={area.href}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary">
                      {area.name}
                    </span>
                    <span className="text-xs text-gray-400">{area.responseTime || "16-22 min"}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service Promises */}
        <div className="bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl p-6 mb-12">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">What We Promise</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Professional service guaranteed at every location</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {promises.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <div key={index} className="flex items-center gap-2 justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">{promise.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Our team is ready to serve you at any location in {city}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${displayNumber}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now: {displayNumber}
            </a>
            <Link
              href="/dubai/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-primary text-gray-700 dark:text-white rounded-lg font-medium transition-all"
            >
              <Calendar className="h-4 w-4" />
              Schedule Service
            </Link>
          </div>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": brandName,
              "description": `Professional mobile car repair service available across ${totalAreas} locations in ${city}`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressCountry": "UAE"
              },
              "areaServed": serviceAreas.map(area => ({
                "@type": "City",
                "name": area.name,
                "containedInPlace": {
                  "@type": "City",
                  "name": city
                }
              })),
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": SiteConfig.latitude,
                  "longitude": SiteConfig.longitude
                },
                "geoRadius": "50000"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />

        {/* LocalBusiness Schema for GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": brandName,
              "telephone": displayNumber,
              "areaServed": serviceAreas.map(area => area.name),
              "availableService": ["Battery Replacement", "AC Repair", "Oil Change", "Brake Repair", "Engine Diagnostics"],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"]
            })
          }}
        />

        {/* FAQ Schema for Voice Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `What areas in ${city} do you serve?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We serve ${totalAreas}+ locations across ${city} including ${popularAreas.slice(0, 5).map(a => a.name).join(", ")} and many more areas.`
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast is your mobile car repair service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our average response time is 15-30 minutes across all service areas in Dubai. We prioritize emergency calls."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is 24/7 service available in all areas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, we provide 24/7 emergency car repair service across all ${totalAreas} locations in ${city}.`
                  }
                }
              ]
            })
          }}
        />
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}