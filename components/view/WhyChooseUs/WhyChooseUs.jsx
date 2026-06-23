// components/WhyChooseUs.jsx
"use client";

import { 
  Zap, 
  Shield, 
  Clock,  
  ThumbsUp, 
  Award,
  Truck,
  Users,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function WhyChooseUs() {
  const { brandName, city } = SiteConfig;

  const reasons = [
    {
      icon: Zap,
      title: "Rapid Response",
      description: `Average 15-30 minute arrival time across ${city}. We value your time.`,
      highlight: "Fastest in Dubai",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Certified Experts",
      description: "All mechanics are certified with 5+ years experience.",
      highlight: "Fully Licensed",
      color: "green"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Day or night, we're always ready to help you get back on road.",
      highlight: "365 Days/Year",
      color: "orange"
    },
    {
      icon: BadgeCheck,
      title: "Warranty Guarantee",
      description: "All repairs come with comprehensive warranty coverage.",
      highlight: "Up to 2 Years",
      color: "purple"
    },
    {
      icon: Truck,
      title: "Mobile Service",
      description: "We come to your location - home, office, or roadside.",
      highlight: "Doorstep Delivery",
      color: "red"
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction First",
      description: "5000+ happy customers with 4.9/5 rating across platforms.",
      highlight: "Top Rated",
      color: "yellow"
    }
  ];

  const quickFacts = [
    { label: "Response Time", value: "15-30 min", icon: Clock },
    { label: "Customer Rating", value: "4.9/5", icon: Award },
    { label: "Vehicles Serviced", value: "5000+", icon: Users },
    { label: "Service Warranty", value: "12 Months", icon: Shield },
  ];

  return (
    <section className="py-5 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Why {brandName}?
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
          
          <p className="text-gray-600 dark:text-gray-300">
            We combine expertise, technology, and convenience to deliver exceptional service
          </p>
        </div>

        {/* Quick Facts Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700"
              >
                <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">{fact.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{fact.label}</div>
              </div>
            );
          })}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {reason.highlight}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-4 bg-primary/5 rounded-xl border border-primary/20 text-center">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            🏆 Trusted by over 5,000 vehicle owners across {city}
          </p>
        </div>
      </div>
    </section>
  );
}