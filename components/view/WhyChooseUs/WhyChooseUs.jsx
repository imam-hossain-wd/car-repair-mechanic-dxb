import {
  Zap,
  Shield,
  Clock,
  ThumbsUp,
  Award,
  Truck,
  Users,
  BadgeCheck
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";


export function WhyChooseUs() {
  const { brandName = "Car Repair Mechanic", city = "Dubai", phone = "+971500000000" } = SiteConfig || {};

  const reasons = [
    {
      icon: Zap,
      title: "Rapid Response",
      description: `Average 5-15 minute arrival time across ${city}. We value your emergency needs.`,
      highlight: "Fastest in Dubai",
    },
    {
      icon: Shield,
      title: "Certified Experts",
      description: "All mobile mechanics are licensed professionals with 5+ years experience.",
      highlight: "Fully Licensed",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Day or night, weekend or holiday, our roadside team is on standby.",
      highlight: "365 Days/Year",
    },
    {
      icon: BadgeCheck,
      title: "Warranty Guarantee",
      description: "All on-site repairs come with a comprehensive labor & parts warranty.",
      highlight: "Up to 12 Months",
    },
    {
      icon: Truck,
      title: "Doorstep Mobile Service",
      description: "Complete repair equipment brought to your home, office, or roadside location.",
      highlight: "Doorstep Delivery",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction First",
      description: "5,000+ satisfied vehicle owners with a 4.9/5 rating across UAE review platforms.",
      highlight: "Top Rated",
    }
  ];

  const quickFacts = [
    { label: "Fastest On-Site Arrival", value: "5-15 min", icon: Clock },
    { label: "Top-Rated Service", value: "4.9/5", icon: Award },
    { label: "Vehicles Serviced", value: "5000+", icon: Users },
    { label: "Service Warranty", value: "12 Months", icon: Shield },
  ];

  // Schema.org Structured Data for Local Business SEO Signal
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": brandName,
    "areaServed": city,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000"
    }
  };

  return (
    <section
      className="py-5 bg-gray-50 dark:bg-gray-800/50"
      aria-label="Why Choose Our Mobile Car Repair Services"
    >
      {/* Structural SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">


          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
            <span className="text-primary">Why Choose </span>{brandName}?
          </h2>

          {/* <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div> */}

          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            We combine certified mechanic expertise, advanced diagnostic equipment, and 24/7 mobile convenience directly across {city}.
          </p>
        </div>

        {/* Quick Facts Metric Cards */}
        <ul className="w-auto md:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-5 list-none p-0">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <li
                key={index}
                className="bg-white flex justify-center items-center  rounded-xl p-4 text-center border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-left">
                  <div className="text-xl font-black text-gray-900 dark:text-white tracking-tight">{fact.value}</div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">{fact.label}</div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Value Proposition Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-4 border border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary text-white">
                      <Icon className="h-6 w-6 text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-2.5 py-1 rounded-full">
                      {reason.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}