// app/dubai/contact/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Navigation,
  User,
  Wrench,
  Star,
} from "lucide-react";
import { SiteConfig } from "@/app/siteConfig";
import { Maps } from "@/components/view/Maps/Maps";

export const metadata = {
  title: "Contact Us | 24/7 Car Repair Service in Dubai",
  description: "Get in touch with our expert team. Call us, WhatsApp, email, or visit our location. 24/7 emergency mobile car repair service across Dubai.",
  keywords: "contact car repair dubai, mobile mechanic contact, emergency car service dubai",
  alternates: {
    canonical: "https://carrepairmechanic.ae/dubai/contact",
  },
};

export default function ContactPage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    location,
    mapsLink,
    operatingHours,
    city,
    socialLinks
  } = SiteConfig;

  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Call",
      value: displayNumber,
      link: numberCallLink,
      color: "bg-green-500",
      description: "24/7 Emergency Support",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: displayNumber,
      link: whatsappCallLink,
      color: "bg-green-600",
      description: "Instant Response",
      action: "Chat Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: email,
      link: `mailto:${email}`,
      color: "bg-blue-500",
      description: "Response within 2 hours",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: location,
      link: mapsLink,
      color: "bg-red-500",
      description: "Get Directions",
      action: "Open Maps"
    }
  ];


  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">

      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-primary/10 via-primary/5 to-transparent pt-10 pb-8 md:pt-14 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full mb-4">
              <Phone className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                24/7 Support
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our team is ready to assist you 24/7. Reach out through any channel below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <div className="container mx-auto px-4 -mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {contactMethods?.map((method, index) => {
            const Icon = method.icon;
            return (
              <Link
                key={index}
                href={method.link}
                target={method.icon === MapPin ? "_blank" : undefined}
                rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group relative bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl bg-primary/20 bg-opacity-10`}>
                    <Icon className="h-5 w-5 text-primary" />
                    {/* <Icon className={`h-5 w-5 ${method.color.replace('bg-', 'text-')}`} /> */}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{method.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{method.description}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1 truncate">{method.value}</p>
                    <span className="inline-block mt-2 text-xs text-primary font-medium group-hover:underline">
                      {method.action} →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Send className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Send us a Message</h2>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Fill out the form and we&apos;ll get back to you within 2 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Ahmed Ali"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Describe your car issue or service needed..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === "sending" ? (
                  <>Sending...</>
                ) : formStatus === "success" ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Response Time Note */}
            <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-gray-400">
              <Clock className="h-3 w-3" />
              <span>Response within 2 hours</span>
            </div>
          </div>

          {/* Right Column - Info & Map */}
          <div className="space-y-4">
            {/* Business Hours */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Operating Hours</h3>
              </div>
              <div className="space-y-1.5">
                {operatingHours?.slice(0, 7).map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{schedule.day}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>



            {/* Map Preview */}
            {/* <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-4 pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Our Location</h3>
                </div>
                <p className="text-xs text-gray-500 mb-2">{location}</p>
              </div>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <div className="h-40 bg-gray-100 dark:bg-gray-800 relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-all text-xs bg-white/90 px-2 py-1 rounded">View on Map</span>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-3">Connect With Us</p>
            <div className="flex justify-center gap-3">
              {socialLinks?.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-6 p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl border border-red-500/20 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-red-500 rounded-full animate-pulse">
                <Phone className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Emergency Roadside Assistance?</span>
            </div>
            <a href={`tel:${displayNumber}`} className="text-primary font-bold text-sm">
              Call Now: {displayNumber}
            </a>
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
              "telephone": displayNumber,
              "email": email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Karama",
                "addressLocality": city,
                "addressCountry": "UAE"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": displayNumber,
                "contactType": "customer service",
                "availableLanguage": ["English", "Arabic", "Urdu", "Hindi"],
                "areaServed": city
              },
              "sameAs": socialLinks?.map(link => link.href)
            })
          }}
        />
      </div>

      <Maps />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}