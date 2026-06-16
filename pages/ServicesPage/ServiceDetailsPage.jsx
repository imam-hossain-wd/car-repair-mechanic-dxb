// components/ServiceDetailsPage.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Shield,
  Clock,
  MapPin,
  Zap,
  Droplet,
  Settings,
  Fan,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Award,
  Users,
  Truck,
  Calendar,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Navigation,
  Headphones,
  Battery,
  Wind,
  Car,
  Gauge,
  ThumbsUp,
  TrendingUp
} from "lucide-react";
import { SiteConfig } from "@/app/siteConfig";


export function ServiceDetailsPage({ service }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { displayNumber, numberCallLink, whatsappCallLink, city } = SiteConfig;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Get service icon
  const getServiceIcon = () => {
    const iconMap = {
      battery: Battery,
      ac: Wind,
      oil: Droplet,
      engine: Settings,
      brake: Car,
      transmission: Gauge,
      radiator: Fan,
      abs: Shield,
      fuel: Zap,
      starter: Zap,
      alternator: Battery,
      detailing: Sparkles,
      emergency: Headphones
    };

    const matchedKey = Object.keys(iconMap).find(key =>
      service?.title?.toLowerCase().includes(key) ||
      service?.name?.toLowerCase().includes(key)
    );

    const Icon = matchedKey ? iconMap[matchedKey] : Wrench;
    return <Icon className="h-8 w-8" />;
  };

  // Quick stats
  const quickStats = [
    { icon: Clock, value: "15-30 min", label: "Response Time" },
    { icon: Shield, value: "12 Months", label: "Warranty" },
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Star, value: "4.9/5", label: "Rating" },
  ];

  // Service benefits
  const benefits = [
    "Certified & experienced mechanics",
    "Genuine parts with warranty",
    "Transparent pricing",
    "24/7 emergency support",
    "Mobile service at your doorstep",
    "Free vehicle inspection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      
      {/* Hero Section - Cinematic */}
      <section className="relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          {service?.service_image ? (
            <Image
              src={service.service_image}
              alt={service?.title || "Service"}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-32 z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/dubai/services" className="hover:text-white transition-colors">Services</Link>
              <span>›</span>
              <span className="text-white font-medium">{service?.title || "Service Details"}</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Premium Service
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {service?.title || "Professional Car Repair Service"}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-6">
              {service?.intro?.subheading || "Expert car repair service at your doorstep in Dubai"}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-white">{stat.value}</span>
                    <span className="text-xs text-white/60">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href={numberCallLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
              <Link
                href={whatsappCallLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 text-sm border border-white/20">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white dark:text-gray-950" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Service Overview */}
            <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {getServiceIcon()}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service?.intro?.heading || "Service Overview"}
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {service?.intro?.content || "Professional car repair service delivered to your doorstep in Dubai."}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service?.features?.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-primary/5 transition-all group">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-6 border border-primary/10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service?.whyChooseUs?.points?.slice(0, 6).map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      {index % 2 === 0 ? <Wrench className="h-4 w-4 text-primary" /> : <Shield className="h-4 w-4 text-primary" />}
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{point.replace('✅', '').trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Our Process
              </h2>
              <div className="space-y-4">
                {service?.ourProcess?.steps?.map((step, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{step?.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{step?.description}</p>
                      </div>
                    </div>
                    {index < service?.ourProcess?.steps?.length - 1 && (
                      <div className="absolute left-5 top-14 w-0.5 h-4 bg-primary/20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            {service?.faq?.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-primary" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {service.faq.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
                      >
                        <span className="font-medium text-gray-900 dark:text-white text-sm">{item.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="h-4 w-4 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-5 pb-4 pt-1 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-5 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    Service Information
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Starting Price</span>
                    <span className="text-lg font-bold text-primary">{service?.price || "AED 199+"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{service?.duration || "30-60 min"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Warranty</span>
                    <span className="text-sm font-medium text-green-600">{service?.warranty || "6 Months"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Availability</span>
                    <span className="text-sm font-medium text-green-600">24/7</span>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="p-5 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Service Areas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {SiteConfig.serviceAreas?.slice(0, 8).map((area, index) => (
                      <Link
                        key={index}
                        href={area.href}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-5 bg-gradient-to-r from-primary/10 to-primary/5">
                  <Link
                    href={numberCallLink}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 group"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Book Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-center text-xs text-gray-500 mt-2">Free estimate • No obligation</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <ThumbsUp className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">100% Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                  <Truck className="h-4 w-4 text-primary" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">Mobile Service</span>
                </div>
              </div>
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
            "@type": "Service",
            "name": service?.title || "Car Repair Service",
            "description": service?.intro?.content || "Professional car repair service in Dubai",
            "provider": {
              "@type": "AutoRepair",
              "name": SiteConfig.brandName,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": SiteConfig.city,
                "addressCountry": "UAE"
              }
            },
            "areaServed": SiteConfig.city,
            "serviceType": service?.title || "Auto Repair",
            "offers": {
              "@type": "Offer",
              "price": service?.price || "199",
              "priceCurrency": "AED",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </div>
  );
}