// app/dubai/about/page.jsx
"use client";

import { 
  Wrench, 
  Users, 
  Award, 
  Clock, 
  Shield,
  Target,
  Heart,
  CheckCircle,
  Phone,
  Star,
  MapPin,
  Truck,
  Battery,
  Wind,
  Droplet,
  CircleStop,
  Quote,
  Sparkles,
  Handshake,
  Rocket,
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";


export default function AboutPage() {
  const { brandName, displayNumber, city, country, location, email, whatsappCallLink } = SiteConfig;

  // Core values data
  const coreValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide premium, transparent, and convenient mobile car repair services that set new standards in Dubai's automotive industry.",
      gradient: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To become Dubai's most trusted automotive partner, known for excellence, innovation, and unwavering customer commitment.",
      gradient: "from-red-500/20 to-red-600/10"
    },
    {
      icon: Handshake,
      title: "Our Values",
      description: "Integrity, expertise, transparency, and customer-first approach in every repair we undertake.",
      gradient: "from-green-500/20 to-green-600/10"
    },
    {
      icon: Rocket,
      title: "Our Promise",
      description: "24/7 availability, certified mechanics, genuine parts, and service warranty on all repairs.",
      gradient: "from-purple-500/20 to-purple-600/10"
    }
  ];

  // Milestones
  const milestones = [
    { year: "2011", title: "Founded in Dubai", description: "Started with a vision to transform car repair", icon: Target },
    { year: "2015", title: "Expanded Fleet", description: "Grew to 15+ mobile service vans", icon: Truck },
    { year: "2020", title: "5000+ Customers", description: "Reached milestone of satisfied clients", icon: Users },
    { year: "2024", title: "Premium Service", description: "Launched luxury & EV specialist services", icon: Award }
  ];

  // Stats
  const stats = [
    { value: "13+", label: "Years of Excellence", icon: Award, color: "from-yellow-500 to-orange-500" },
    { value: "5000+", label: "Happy Customers", icon: Users, color: "from-green-500 to-emerald-500" },
    { value: "50+", label: "Service Locations", icon: MapPin, color: "from-blue-500 to-cyan-500" },
    { value: "24/7", label: "Emergency Support", icon: Clock, color: "from-red-500 to-pink-500" },
    { value: "100%", label: "Customer Satisfaction", icon: Star, color: "from-yellow-500 to-amber-500" },
    { value: "40+", label: "Car Brands", icon: Wrench, color: "from-purple-500 to-indigo-500" }
  ];

  // Services we excel at
  const specialties = [
    { icon: Battery, name: "Battery Replacement", description: "2 years warranty", popular: true },
    { icon: Wind, name: "AC Repair", description: "6 months warranty", popular: true },
    { icon: Droplet, name: "Oil Change", description: "3 months warranty", popular: true },
    { icon: CircleStop, name: "Brake Service", description: "12 months warranty", popular: true }
  ];

  // Team highlights
  const teamHighlights = [
    { number: "25+", label: "Certified Mechanics", icon: Wrench },
    { number: "15+", label: "Mobile Units", icon: Truck },
    { number: "100%", label: "Licensed & Insured", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* Hero Section - Cinematic */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary/15 via-primary/5 to-transparent pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full mb-4">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                13+ Years of Excellence
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              More Than Just a
              <span className="text-primary block mt-1">Car Repair Service</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;re on a mission to revolutionize mobile car repair in {city}, 
              combining expertise, technology, and genuine care for your vehicle.
            </p>
          </div>
        </div>
      </section>



      {/* Our Story Section - Split Layout */}
      <div className="container mx-auto px-4 mb-12 mt-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left - Content */}
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
                <Quote className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-primary">Our Story</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                From a Vision to {city}&apos;s
                <span className="text-primary"> Most Trusted Brand</span>
              </h2>
            </div>
            
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Founded in 2011, {brandName} began with a simple yet powerful vision — 
                to make professional car repair accessible, transparent, and convenient for every vehicle owner in {city}.
              </p>
              <p>
                What started as a single mobile unit has grown into a fleet of 15+ fully-equipped service vans, 
                serving over 5,000 satisfied customers across 50+ locations. Our journey has been driven by 
                one core belief: quality car repair shouldn&apos;t require a trip to the garage.
              </p>
              <p>
                Today, we&apos;re proud to be {city}&apos;s leading mobile car repair service, trusted by families, 
                businesses, and luxury vehicle owners alike. Our 13+ years of experience, combined with 
                continuous investment in training and technology, ensures every repair meets the highest standards.
              </p>
            </div>
            
            {/* Team Highlights */}
            <div className="flex flex-wrap gap-4 pt-2">
              {teamHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{item.number}</div>
                      <div className="text-[10px] text-gray-500">{item.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Stats/Quote Card */}
          <div className="space-y-4">
            <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">Our Philosophy</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                &quot;We don&apos;t just fix cars — we build trust, one repair at a time. Every vehicle that leaves our 
                care represents our commitment to excellence, safety, and customer satisfaction.&quot;
              </p>
              <div className="mt-4 pt-3 border-t border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">MB</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Md Bappi</p>
                    <p className="text-[10px] text-gray-500">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Our Journey</h3>
              <div className="grid grid-cols-2 gap-3">
                {milestones.map((milestone, idx) => {
                  const Icon = milestone.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-3 w-3 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary">{milestone.year}</div>
                        <div className="text-[11px] font-semibold text-gray-900 dark:text-white">{milestone.title}</div>
                        <div className="text-[10px] text-gray-500">{milestone.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gray-50 dark:bg-gray-900/30 py-12 mb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary">What Drives Us</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${value.gradient} mb-3`}>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            We <span className="text-primary">Excel</span> At
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Specialized services with warranty coverage
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-800 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="inline-flex p-2 rounded-xl bg-primary/10 mb-2 group-hover:bg-primary/20 transition-all">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{specialty.name}</h3>
                <p className="text-[10px] text-gray-500 mt-0.5">{specialty.description}</p>
                {specialty.popular && (
                  <span className="inline-block mt-1 text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-linear-to-r from-primary/10 via-primary/5 to-transparent py-10 mb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Why <span className="text-primary">{city}</span> Chooses Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              "Certified & experienced mechanics",
              "15-30 minute average response time",
              "Genuine parts with warranty",
              "Transparent pricing - no hidden fees",
              "24/7 emergency roadside assistance",
              "Mobile service at your doorstep",
              "Free vehicle inspection & quote",
              "5000+ satisfied customers"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Ready to Experience the Difference?
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Join 5,000+ happy customers who trust us with their vehicles
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${displayNumber}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium text-sm transition-all"
              >
                <Phone className="h-4 w-4" />
                Call {displayNumber}
              </a>
              <a
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium text-sm transition-all"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
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
            "description": `13+ years of mobile car repair excellence in ${city}. 5000+ happy customers, certified mechanics, 24/7 service.`,
            "foundingDate": "2011",
            "foundingLocation": location,
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "25"
            },
            "areaServed": city,
            "sameAs": SiteConfig.socialLinks.map((social) => social.href),
            "knowsLanguage": ["English", "Arabic", "Urdu", "Hindi"],
            "statistics": stats.map(stat => ({
              "@type": "StatisticalValue",
              "name": stat.label,
              "value": stat.value
            }))
          })
        }}
      />

      {/* About Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": brandName,
              "description": "Premier mobile car repair service in Dubai since 2011",
              "foundingDate": "2011",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressCountry": country
              }
            }
          })
        }}
      />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}