// components/ServiceArea/WhyDriversChooseUs.jsx
"use client";

import {
  Clock,
  Users,
  Wrench,
  Shield,
  Award,
  ThumbsUp,
  Zap,
  Star,
  Truck,
  Headphones,
  CheckCircle2,
  Sparkles,
  Gauge,
  MapPin
} from "lucide-react";

export function WhyDriversChooseUs({ area }) {
  const areaName = area?.name || "Dubai";

  const reasons = [
    {
      icon: Clock,
      title: "15–30 Minute Arrival",
      description: `Our mobile mechanics are strategically positioned across ${areaName} to reach you within 15–30 minutes, ensuring you're never stranded for long.`,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500",
      badge: "Fastest in Dubai"
    },
    {
      icon: Users,
      title: "Certified Mobile Automotive Technicians",
      description: `All our mechanics are fully certified, licensed, and insured with 5+ years of hands-on experience repairing all vehicle makes and models.`,
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-500",
      badge: "5+ Years Experience"
    },
    {
      icon: Gauge,
      title: "Dealer-Level Computer Diagnostics",
      description: `We use advanced dealer-level diagnostic scanners to accurately identify engine, transmission, ABS, and electrical system faults on-site.`,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
      badge: "Advanced Technology"
    },
    {
      icon: Shield,
      title: "12-Month Warranty on All Repairs",
      description: `Every repair comes with comprehensive warranty coverage. Battery replacements include 2 years warranty, and major repairs are covered for up to 12 months.`,
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-500",
      badge: "Full Warranty"
    },
    {
      icon: Award,
      title: "4.9/5 Google Rating & 500+ Reviews",
      description: `Drivers in ${areaName} trust us with their vehicles. Our 4.9/5 rating reflects our commitment to quality service and customer satisfaction.`,
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-600",
      badge: "Top Rated"
    },
    {
      icon: Truck,
      title: "Fully Equipped Mobile Service Units",
      description: `Our service vans carry professional tools, genuine parts, and advanced equipment to handle most repairs on-site without requiring towing.`,
      color: "from-cyan-500/20 to-cyan-500/5",
      iconColor: "text-cyan-500",
      badge: "Mobile Workshop"
    },
    {
      icon: Headphones,
      title: "24/7 Emergency Roadside Support",
      description: `We're available 365 days a year, 24 hours a day. Whether it's day or night, our team is ready to assist with any roadside emergency.`,
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-500",
      badge: "Always Available"
    },
    {
      icon: Sparkles,
      title: "Transparent & Upfront Pricing",
      description: `No hidden fees. We provide clear estimates before starting any repair, so you know exactly what to expect.`,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      badge: "No Hidden Charges"
    }
  ];

  // Quick comparison stats
  const comparisonStats = [
    { label: "Average Response Time", value: "15-30 min", icon: Clock },
    { label: "Customer Rating", value: "4.9/5", icon: Star },
    { label: "Years Experience", value: "13+ Years", icon: Award },
    { label: "Warranty Coverage", value: "Up to 2 Years", icon: Shield },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <ThumbsUp className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Why Drivers in{' '}
            <span className="text-primary">{areaName}</span> Choose Us
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
            Thousands of drivers trust us with their vehicles. Here&lsquo;s why:
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {comparisonStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <Icon className="h-5 w-5 text-primary mx-auto mb-1.5" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${reason.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-5 w-5 ${reason.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Badge */}
                    <div className="inline-block text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded mb-1">
                      {reason.badge}
                    </div>
                    
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mt-10 p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Licensed & Insured</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Genuine Parts</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Warranty Included</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Free Inspection</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Drivers in {areaName} choose Car Repair Mechanic Dubai for our fast 15-30 minute response time, 
            certified mobile automotive technicians, dealer-level computer diagnostics, 
            12-month warranty on all repairs, 4.9/5 Google rating, fully equipped mobile service units, 
            24/7 emergency roadside support, and transparent upfront pricing.
          </p>
        </div>
      </div>
    </section>
  );
}