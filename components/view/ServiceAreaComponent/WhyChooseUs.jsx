// src/components/view/ServiceAreaComponent/WhyChooseUs/WhyChooseUs.jsx

"use client";

import Link from "next/link";
import {
  Shield,
  Clock,
  Wrench,
  Star,
  ThumbsUp,
  Award,
  Users,
  Truck,
  CreditCard,
  MapPin,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export function WhyChooseUs({ area }) {
  const whyChooseItems = area?.whyChooseUsSection?.items || [];
  const name = area?.name || "Al Karama";
  const city = area?.city || "Dubai";
  const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";

  // Professional trust indicators
  const trustIndicators = [
    { icon: Shield, label: "Fully Licensed", description: "Government approved & insured" },
    { icon: Award, label: "11+ Years Experience", description: "Serving Dubai since 2014" },
    { icon: Users, label: "5,000+ Happy Customers", description: "Across Dubai" },
    { icon: Star, label: "4.9/5 Rating", description: "Google verified reviews" },
  ];

  return (
    <section className="w-full py-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              WHY TRUST US
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {area?.whyChooseUsSection?.title ||
              `Why Drivers in ${name} Choose Fix Car Dubai`}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {area?.whyChooseUsSection?.subtitle ||
              `Reliable mobile mechanic and emergency car repair services trusted by drivers across ${city}.`}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - Why Choose Items Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyChooseItems.length > 0 ? (
                whyChooseItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      {idx === 0 && <Clock className="w-6 h-6 text-primary" />}
                      {idx === 1 && <Users className="w-6 h-6 text-primary" />}
                      {idx === 2 && <Wrench className="w-6 h-6 text-primary" />}
                      {idx === 3 && <Shield className="w-6 h-6 text-primary" />}
                      {idx === 4 && <CreditCard className="w-6 h-6 text-primary" />}
                      {idx === 5 && <MapPin className="w-6 h-6 text-primary" />}
                      {(idx > 5) && <CheckCircle className="w-6 h-6 text-primary" />}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                // Default why choose items
                <>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Response Across {name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our mobile mechanics can reach most locations in {name} within {responseTime} minutes.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Experienced Automotive Technicians</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Highly trained mechanics with experience handling all major vehicle brands.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Diagnostic Equipment</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Professional diagnostic scanners and repair tools for accurate fault detection.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Emergency Availability</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Available day and night for emergency roadside assistance and breakdown support.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Honest recommendations with no hidden repair charges.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">On-Site Repair Convenience</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We repair your car at home, office, roadside, or basement parking.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Trust Indicators & CTA */}
          <div>
            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {trustIndicators.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time Promise Card */}
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-6 mb-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-4">
                <Clock className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-semibold">GUARANTEED RESPONSE</span>
              </div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{responseTime} Minutes</p>
              <p className="text-white/90 text-sm">Average arrival time across {name}</p>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-4">
                <div className="bg-white h-1.5 rounded-full" style={{ width: "95%" }}></div>
              </div>
              <p className="text-white/80 text-xs mt-2">95% of calls responded within target time</p>
            </div>

            {/* Customer Satisfaction Card */}
            <div className="bg-gray-900 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Customer Satisfaction</p>
                  <p className="text-3xl font-bold text-white">98%</p>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <ThumbsUp className="w-4 h-4 text-primary" />
                <span>Based on 5,000+ verified customer reviews</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Experience the Difference?</h3>
              <p className="text-gray-500 text-sm mb-5">
                Join thousands of satisfied customers who trust us with their vehicles
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/dubai/book-appointment"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </Link>
                <Link
                  href="/dubai/reviews"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <Star className="w-4 h-4" />
                  Read Customer Reviews
                </Link>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="mt-6 flex items-center justify-center gap-2 text-center">
              <Shield className="w-4 h-4 text-green-600" />
              <p className="text-xs text-gray-500">
                100% Satisfaction Guarantee • No Hidden Fees • Warranty on All Repairs
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "11+", label: "Years Experience", suffix: "" },
              { value: "5,000+", label: "Cars Serviced", suffix: "" },
              { value: responseTime, label: "Min Response Time", suffix: "min" },
              { value: "24/7", label: "Emergency Support", suffix: "" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JSON-LD Schema for Why Choose Us */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": `Fix Car Dubai - ${name} Mobile Car Repair`,
            "description": area?.whyChooseUsSection?.title || `Why drivers in ${name} choose our mobile car repair service`,
            "areaServed": name,
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "AED",
            "serviceArea": {
              "@type": "City",
              "name": name
            },
            "hasMap": "https://maps.app.goo.gl/rGwVC9pAheuhCscm7",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "5000+",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
    </section>
  );
}