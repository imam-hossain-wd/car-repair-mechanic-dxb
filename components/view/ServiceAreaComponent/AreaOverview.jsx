// src/components/view/ServiceAreaComponent/AreaOverviewSection/AreaOverviewSection.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Wrench,
  Clock,
  Shield,
  Battery,
  Wind,
  Settings,
  Car,
  Target,
  Users,
  ThumbsUp,
} from "lucide-react";
import { Hero } from "@/utils/assets";

export function AreaOverview({ area }) {
  const highlights = area?.overviewSection?.highlights || [];
  const name = area?.name || "Al Karama";
  const city = area?.city || "Dubai";

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {area?.overviewSection?.badge || "WHY CHOOSE US"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {area?.overviewSection?.title ||
              `Trusted Mobile Car Repair Experts in ${name} ${city}`}
          </h2>

          {/* Heading / Subtitle */}
          <p className="text-lg md:text-xl text-primary font-semibold mb-4">
            {area?.overviewSection?.heading ||
              `Professional On-Site Car Repair & Roadside Assistance in ${name}`}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN - Content */}
          <div>
            {/* Description Paragraph 1 */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              {area?.overviewSection?.description ||
                `Fix Car Dubai provides fast, reliable, and professional mobile car repair services throughout ${name} ${city}. Our certified mechanics regularly assist drivers in residential buildings, office parking areas, shopping centers, basement parking facilities, and roadside breakdown locations across the area.`}
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {area?.overviewSection?.descriptionTwo ||
                `We specialize in emergency battery replacement, mobile mechanic service, engine diagnostics, car AC repair, oil change, brake repair, alternator repair, radiator service, and roadside assistance for all major vehicle brands. Whether your car fails to start, overheats in traffic, or experiences electrical issues, our technicians arrive quickly with advanced diagnostic tools and professional repair equipment.`}
            </p>

            {/* Highlights / Key Features List */}
            {highlights.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Why Drivers Trust Our Service
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Emergency Contact CTA */}
            <div className="mt-4 bg-primary/10 rounded-2xl p-5 md:p-6 border border-primary/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Emergency Support</p>
                    <p className="text-xl font-bold text-gray-900">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Image & Stats */}
          <div>
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={Hero?.serviceHero}
                  alt={`Professional mobile car repair and roadside assistance service in ${name} ${city} - certified mechanics working on vehicle`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
              
              {/* Image Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">11+</p>
                    <p className="text-xs text-gray-500">Years</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">5K+</p>
                    <p className="text-xs text-gray-500">Cars</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-gray-500">Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Battery, label: "Battery Replacement", time: "15-20 min" },
                { icon: Wind, label: "AC Repair", time: "30-45 min" },
                { icon: Settings, label: "Diagnostics", time: "15-30 min" },
                { icon: Car, label: "Oil Change", time: "20-30 min" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {service.label}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Average Response: {service.time}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="mt-6 flex items-center justify-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
              <Users className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">5,000+ Happy Customers</span>{" "}
                across {name}
              </p>
              <ThumbsUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>

        {/* Service Area Coverage Note */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            🚗 Serving all major residential and commercial areas in{" "}
            <span className="font-semibold text-gray-700">{name}</span>, including
            near {area?.nearbyLandmarksSection?.landmarks?.[0]?.name || "key landmarks"},
            residential buildings, office parking, shopping centers, and roadside locations.
          </p>
        </div>
      </div>

      {/* JSON-LD Schema for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": `${SiteConfig.brandName} - ${name} Mobile Car Repair`,
            "description": area?.overviewSection?.description || `Professional mobile car repair and roadside assistance service in ${name} ${city}. 24/7 emergency support.`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": name,
              "addressRegion": city,
              "addressCountry": "AE"
            },
            "areaServed": {
              "@type": "City",
              "name": name
            },
            "serviceType": [
              "Mobile Car Repair",
              "Battery Replacement",
              "Roadside Assistance",
              "Car AC Repair",
              "Engine Diagnostics",
              "Oil Change",
              "Brake Repair"
            ],
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "sameAs": [
              "https://maps.app.goo.gl/rGwVC9pAheuhCscm7"
            ]
          })
        }}
      />
    </section>
  );
}