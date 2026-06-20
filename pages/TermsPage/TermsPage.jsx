/* eslint-disable react-hooks/set-state-in-effect */
// components/TermsPage.jsx
"use client";

import { useState, useEffect } from "react";
import {
  FileCheck,
  Shield,
  CheckCircle,
  Calendar,
  Mail,
  Phone
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    description: "By using our services, you agree to these terms and conditions.",
    items: [
      "You agree to be bound by these terms",
      "You must be at least 18 years old to use our services",
      "You are responsible for maintaining the confidentiality of your account",
      "You agree to provide accurate and complete information"
    ]
  },
  {
    id: "services",
    title: "Services Provided",
    description: "We provide professional car repair and maintenance services.",
    items: [
      "Mobile car repair and maintenance services",
      "Battery replacement and diagnostics",
      "AC repair and maintenance",
      "Oil change and engine services",
      "Brake repair and replacement"
    ]
  },
  {
    id: "payments",
    title: "Payments and Pricing",
    description: "Clear and transparent pricing for all services.",
    items: [
      "All prices are inclusive of applicable taxes",
      "Payment is due upon service completion",
      "We accept multiple payment methods",
      "Service charges are non-refundable"
    ]
  },
  {
    id: "responsibilities",
    title: "Customer Responsibilities",
    description: "You are responsible for providing accurate information.",
    items: [
      "Provide accurate vehicle information",
      "Ensure safe parking for service",
      "Be present during service appointment",
      "Review and confirm service details"
    ]
  },
  {
    id: "liability",
    title: "Liability",
    description: "Limitations on our liability.",
    items: [
      "We are not liable for pre-existing conditions",
      "We provide services with reasonable care",
      "We are not responsible for third-party damages",
      "Our liability is limited to service charges"
    ]
  }
];

export function TermsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { brandName, displayNumber, email, location, url } = SiteConfig;
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  useEffect(() => {
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
              <FileCheck className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Terms & Conditions
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of <span className="text-primary">Service</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {currentDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Welcome to {brandName}. These Terms of Service govern your use of our car repair services. 
              By using our services, you agree to these terms.
            </p>
          </div>

          {/* Terms Sections */}
          {termsSections.map((section, index) => (
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
                  <Shield className="h-6 w-6 text-primary" />
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
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-xl">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have any questions about these terms, please contact us:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
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
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 space-y-2">
            <p>These Terms are effective as of {currentDate}</p>
            <p>We reserve the right to update these terms at any time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}