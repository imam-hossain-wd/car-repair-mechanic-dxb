// components/FeaturedServices.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Battery,
  Wind,
  Droplet,
  CircleStop,
  Activity,
  Circle,
  Clock,
  Shield,
  MapPin,
  Phone,
  ChevronRight,
  Wrench,
  Calendar,
  Users,
  ThumbsUp,
  Truck
} from "lucide-react";
import { SiteConfig } from "@/app/siteConfig";
import { Button } from "@/components/ui/button";

// Icon mapping for services
const serviceIcons = {
  "battery-replacement": Battery,
  "ac-repair-service": Wind,
  "oil-change": Droplet,
  "brake-repair": CircleStop,
  "engine-diagnostics": Activity,
  "tire-replacement": Circle,
  "alternator-repair": Battery,
  "starter-motor-repair": Wrench,
  "suspension-repair": Truck,
  "cooling-system-repair": Wind,
  "transmission-service": Wrench,
  "full-car-maintenance": Shield,
};

export function FeaturedServices() {
  const { fullServices, displayNumber, numberCallLink } = SiteConfig;

  // Get featured services
  const featuredServices = fullServices?.filter(service => service.featured === true) || [];

  // Service highlights for quick stats
  const serviceHighlights = [
    { icon: Clock, label: "30 Min Response", value: "Fast Service" },
    { icon: Shield, label: "12 Months Warranty", value: "On All Repairs" },
    { icon: Users, label: "5000+", value: "Happy Customers" },
    { icon: ThumbsUp, label: "100%", value: "Satisfaction" },
  ];

  // Pricing guide
  const pricingGuide = [
    { service: "Battery Replacement", price: "From AED 250", time: "30 min" },
    { service: "AC Repair", price: "From AED 199", time: "1 hour" },
    { service: "Oil Change", price: "From AED 180", time: "30 min" },
    { service: "Brake Repair", price: "From AED 350", time: "1.5 hours" },
  ];

  return (
    <section className="py-5 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Wrench className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              Our Services
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Car Repair
            <span className="text-primary"> Services</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Comprehensive automotive solutions delivered to your doorstep.
            Certified mechanics using advanced diagnostic tools.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredServices.map((service) => {
            const Icon = serviceIcons[service.slug] || Wrench;
            return (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>

                {/* Emergency Badge */}
                {service.emergency && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      24/7 Emergency
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Service Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Duration</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Price</span>
                      <span className="font-bold text-primary">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Warranty</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {service.warranty}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/dubai/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-primary text-white rounded-lg transition-all duration-300 group/link"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Car Repair Services in Dubai",
              "description": "Professional automotive repair and maintenance services",
              "numberOfItems": featuredServices.length,
              "itemListElement": featuredServices.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": service.name,
                "description": service.description,
                "url": `https://carrepairmechanic.ae/dubai/services/${service.slug}`,
                "offers": {
                  "@type": "Offer",
                  "price": service.price.replace("From AED ", ""),
                  "priceCurrency": "AED",
                  "availability": "https://schema.org/InStock"
                }
              }))
            })
          }}
        />

        <Link className="flex justify-center items-center w-auto h-auto" href="/dubai/services">
          <Button classname="w-50 h-20">View All Services</Button>
        </Link>
      </div>
    </section>
  );
}