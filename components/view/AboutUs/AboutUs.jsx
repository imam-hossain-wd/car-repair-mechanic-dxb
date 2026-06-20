// components/AboutUs.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  Shield,
  Truck,
  ThumbsUp,
  Target,
  Heart,
  Briefcase,
  MapPin
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function AboutUs() {
  const { 
    brandName, 
    description, 
    location, 
    city, 
    country, 
    displayNumber,
    coordinate,
    operatingHours 
  } = SiteConfig;

  // Core values data
  const coreValues = [
    { icon: Target, title: "Our Mission", text: "Deliver premium mobile car repair services with transparency, expertise, and 24/7 reliability across Dubai." },
    { icon: Heart, title: "Our Vision", text: "To be Dubai's most trusted on-demand car repair network, setting new standards in automotive convenience." },
    { icon: Users, title: "Our Promise", text: "Certified mechanics, genuine parts, transparent pricing, and service warranty on all repairs." }
  ];

  // Key stats
  const keyStats = [
    { value: "13+", label: "Years of Excellence", icon: Award },
    { value: "5000+", label: "Vehicles Repaired", icon: Wrench },
    { value: "24/7", label: "Emergency Support", icon: Clock },
    { value: "100%", label: "Customer Satisfaction", icon: ThumbsUp }
  ];

  // Service highlights
  const serviceHighlights = [
    "Mobile service at your doorstep",
    "Certified & experienced mechanics",
    "Genuine parts with warranty",
    "Transparent pricing structure",
    "24/7 emergency response",
    "Free vehicle inspection"
  ];

  return (
    <section className="py-5 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Wrench className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              About Us
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Dubai&apos;s Most Trusted
            <span className="text-primary"> Mobile Car Repair</span>
          </h1>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {description || `Professional on-demand car repair service serving ${city}, ${country} with 13+ years of automotive excellence.`}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            
            {/* Main Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Why {brandName}?
              </h2>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded with a mission to revolutionize car repair in {city}, we bring professional 
                  automotive expertise directly to your doorstep. Our certified mechanics combine 
                  traditional craftsmanship with modern diagnostic technology.
                </p>
                <p>
                  With over 13 years of industry experience, we&apos;ve successfully serviced 5,000+ vehicles 
                  across {city}, earning a reputation for reliability, transparency, and technical excellence.
                </p>
                <p>
                  Operating 24/7, we ensure that whether you&apos;re stranded on {city} roads or need 
                  scheduled maintenance at home, help is just a phone call away.
                </p>
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Serving all {city} areas</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Hours</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">24/7 Emergency</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">365 days a year</p>
                </div>
              </div>
            </div>

            {/* Service Highlights Grid */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What Sets Us Apart
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Values */}
          <div className="space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {keyStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-linear-to-br from-primary/5 to-primary/10 rounded-xl p-5 text-center border border-primary/20"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="shrink-0">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Fully Licensed & Insured</span>
              </div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO & GEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": brandName,
              "description": description,
              "image": "https://carrepairmechanic.ae/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Karama",
                "addressLocality": city,
                "addressRegion": "Dubai",
                "addressCountry": country
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": coordinate?.split(",")[0],
                "longitude": coordinate?.split(",")[1]
              },
              "telephone": displayNumber,
              "openingHours": "Mo-Su 00:00-23:59",
              "openingHoursSpecification": operatingHours?.map(hour => ({
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": hour.day,
                "opens": "00:00",
                "closes": "23:59"
              })),
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": city,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": city,
                  "addressCountry": country
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Repair Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery Replacement" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oil Change" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brake Repair" } }
                ]
              },
              "review": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "523",
                "bestRating": "5",
                "worstRating": "1"
              },
              "foundingDate": "2011",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": "25" },
              "founder": { "@type": "Person", "name": "Md Bappi" }
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
              "description": description,
              "url": SiteConfig.url,
              "telephone": displayNumber,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressRegion": "Dubai",
                "addressCountry": country,
                "postalCode": "00000"
              },
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": city,
                "containedInPlace": {
                  "@type": "City",
                  "name": city
                }
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": coordinate?.split(",")[0],
                  "longitude": coordinate?.split(",")[1]
                },
                "geoRadius": "50000"
              },
              "availableLanguage": ["English", "Arabic", "Urdu", "Hindi"],
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "currenciesAccepted": "AED"
            })
          }}
        />

        {/* FAQ Schema for AEO (Answer Engine Optimization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `Is ${brandName} available 24/7 in ${city}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, ${brandName} provides 24/7 emergency car repair service across all areas of ${city}, ${country}. Our mobile mechanics are available 365 days a year.`
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast is your mobile car repair service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our average response time is 15-30 minutes within Dubai. We prioritize emergency calls and provide estimated arrival times when you book."
                  }
                },
                {
                  "@type": "Question",
                  "name": `Do you service all areas of ${city}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, we serve all major areas of ${city} including Al Karama, Business Bay, Damac Hills, Dubai Silicon Oasis, Al Rigga, and 50+ other locations across the city.`
                  }
                },
                {
                  "@type": "Question",
                  "name": "What car brands do you repair?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We repair all major car brands including Toyota, Nissan, Honda, BMW, Mercedes-Benz, Audi, Lexus, Ford, Chevrolet, and all other makes and models."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide warranty on repairs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all our repairs come with warranty. Battery replacement includes 2 years warranty, AC repair includes 6 months, and major repairs include 1 year warranty."
                  }
                }
              ]
            })
          }}
        />

        {/* Geo Location Meta Data */}
        <div className="sr-only" aria-hidden="true">
          <span itemScope itemType="https://schema.org/AutoRepair">
            <span itemProp="name">{brandName}</span>
            <span itemProp="areaServed">{city}, {country}</span>
            <span itemProp="address">{location}</span>
            <span itemProp="telephone">{displayNumber}</span>
            <span itemProp="openingHours">24/7</span>
          </span>
        </div>
      </div>
    </section>
  );
}