// components/PrivacyPage.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Clock,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Sparkles,
  Server,
  Cookie,
  Fingerprint,
  Globe,
  UserCheck,
  AlertCircle,
  ShieldCheck,
  FileCheck,
  Calendar,
  Link2
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

const privacySections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    description: "We collect information to provide better services to our customers.",
    items: [
      "Personal identification information (Name, email address, phone number)",
      "Vehicle information (Make, model, year, VIN)",
      "Service history and repair records",
      "Location data for mobile service delivery",
      "Payment information for service transactions",
      "Communication preferences and feedback"
    ]
  },
  {
    id: "how-we-use-information",
    icon: Users,
    title: "How We Use Your Information",
    description: "We use your information to deliver exceptional service and improve our offerings.",
    items: [
      "To provide and maintain our car repair services",
      "To notify you about service appointments and updates",
      "To improve our services and customer experience",
      "To process payments and prevent fraudulent transactions",
      "To send you promotional offers and service reminders",
      "To comply with legal obligations and regulations"
    ]
  },
  {
    id: "information-sharing",
    icon: Globe,
    title: "Information Sharing",
    description: "We respect your privacy and do not sell your personal information.",
    items: [
      "We do not sell, trade, or rent your personal information",
      "Information shared with trusted service partners for service delivery",
      "Legal disclosure when required by law",
      "With your explicit consent for specific purposes",
      "To protect our rights and prevent fraud"
    ]
  },
  {
    id: "data-security",
    icon: Shield,
    title: "Data Security",
    description: "We implement robust security measures to protect your data.",
    items: [
      "Industry-standard encryption for data transmission",
      "Secure servers with firewall protection",
      "Regular security audits and vulnerability assessments",
      "Access controls and authentication protocols",
      "Data backup and disaster recovery procedures",
      "Employee training on data privacy and security"
    ]
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies Policy",
    description: "We use cookies to enhance your browsing experience.",
    items: [
      "Essential cookies for website functionality",
      "Analytics cookies to understand user behavior",
      "Preference cookies to remember your settings",
      "You can control cookie preferences in your browser",
      "Third-party cookies from trusted partners"
    ]
  },
  {
    id: "your-rights",
    icon: ShieldCheck,
    title: "Your Rights",
    description: "You have control over your personal information.",
    items: [
      "Access and request copies of your personal data",
      "Request corrections to inaccurate information",
      "Request deletion of your personal data",
      "Opt-out of marketing communications",
      "Withdraw consent at any time",
      "Lodge a complaint with data protection authorities"
    ]
  }
];

const quickLinks = [
  { label: "Information We Collect", href: "#information-we-collect" },
  { label: "How We Use Information", href: "#how-we-use-information" },
  { label: "Information Sharing", href: "#information-sharing" },
  { label: "Data Security", href: "#data-security" },
  { label: "Cookies Policy", href: "#cookies" },
  { label: "Your Rights", href: "#your-rights" }
];

export function PrivacyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("information-we-collect");
  const { brandName, displayNumber, email, location, url } = SiteConfig;
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full mb-4">
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Privacy Policy
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Your Privacy <span className="text-primary">Matters</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring transparency in how we handle your personal information.
            </p>

            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {currentDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            { icon: ShieldCheck, label: "GDPR Compliant" },
            { icon: Lock, label: "SSL Encrypted" },
            { icon: FileCheck, label: "Data Protected" },
            { icon: UserCheck, label: "Your Rights" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-700">
                <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-900 dark:text-white">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Quick Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Link2 className="h-4 w-4 text-primary" />
                Quick Navigation
              </h3>
              <nav className="space-y-1.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                      activeSection === link.href.replace('#', '')
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveSection(link.href.replace('#', ''))}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="bg-primary/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    Questions about privacy?
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs text-primary font-medium hover:underline"
                  >
                    Contact Privacy Team
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Introduction */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At {brandName}, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your personal information when you use our services. We are 
                committed to protecting your personal data and ensuring transparency in our data practices.
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-primary">📌 Note:</strong> By using our services, you agree to the 
                  collection and use of information in accordance with this policy.
                </p>
              </div>
            </div>

            {/* Privacy Sections */}
            {privacySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 scroll-mt-20 transition-all duration-500 hover:shadow-lg ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {section.description}
                      </p>
                      <ul className="space-y-2.5">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Us About Privacy</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions, concerns, or requests regarding your privacy, please contact us:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Us</p>
                    <a href={`mailto:${email}`} className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Us</p>
                    <a href={`tel:${displayNumber}`} className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                      {displayNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Visit Us</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Website</p>
                    <a href={url} className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                      {url}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-xs text-gray-500 space-y-2">
              <p>This Privacy Policy is effective as of {currentDate}</p>
              <p>We reserve the right to update this policy at any time. Please check back regularly.</p>
              <div className="flex items-center justify-center gap-4 pt-2">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>•</span>
                <Link href="/dubai/contact" className="hover:text-primary transition-colors">Contact</Link>
                <span>•</span>
                <Link href="/dubai/about" className="hover:text-primary transition-colors">About</Link>
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
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": `Privacy Policy for ${brandName} - Dubai's leading car repair service`,
            "url": `${url}/dubai/privacy`,
            "about": {
              "@type": "Thing",
              "name": "Privacy Policy"
            },
            "dateModified": new Date().toISOString().split('T')[0],
            "isAccessibleForFree": true,
            "inLanguage": "en-US"
          })
        }}
      />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .scroll-mt-20 {
          scroll-margin-top: 5rem;
        }
      `}</style>
    </div>
  );
}