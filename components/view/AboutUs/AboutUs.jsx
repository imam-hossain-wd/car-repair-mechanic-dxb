// components/AboutUs.jsx
"use client";

import {
  Wrench,
  Users,
  Award,
  Clock,
  CheckCircle,
  Shield,
  ThumbsUp,
  Target,
  Heart,
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
        <div className="max-w-3xl mx-auto text-center mb-8">

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dubai&apos;s Most Trusted
            <span className="text-primary"> Mobile Mechanics</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Left Column - Main Content */}
          <div className="space-y-4">

            {/* Main Description */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Why <span className="text-primary">{brandName} ?</span>
              </h2>
              <div className="space-y-2 text-gray-600 text-sm md:text-lg
              leading-relaxed">
                <p>Founded to revolutionize car care in Dubai, we bring certified mechanic expertise directly to your home, office, or roadside. Combining 13+ years of experience with state-of-the-art diagnostic tools, we&lsquo;ve successfully serviced 5,000+ vehicles across the UAE. Operating 24/7, expert help is always just a phone call away.</p>
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

            {/* Core Values */}
            <div className="space-y-4">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-3 p-4 bg-primary/10 dark:bg-gray-800 rounded-xl border border-primary/20 dark:border-gray-700">
                    <div className="shrink-0">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{value.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}