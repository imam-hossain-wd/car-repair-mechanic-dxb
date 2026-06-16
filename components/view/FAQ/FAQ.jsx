// components/FAQ.jsx
"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageCircle,
  Shield,
  Clock,
  Wrench,
  Car,
  Battery,
  MapPin,
  Star
} from "lucide-react";
import { SiteConfig } from "@/app/siteConfig";
import { faqData } from "@/data/faq";



// Group FAQs by category
const categories = [...new Set(faqData.map(faq => faq.category))];
const popularFAQs = faqData.filter(faq => faq.popular === true);

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const { brandName, displayNumber, city, email } = SiteConfig;

  const filteredFAQs = activeCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py- bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-0.5 rounded-full mb-2">
            <HelpCircle className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              FAQ
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          
          <div className="w-12 h-0.5 bg-primary mx-auto my-2"></div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our services
          </p>
        </div>



        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-2.5 py-1 text-md rounded transition-all duration-200 ${
              activeCategory === "All"
                ? "bg-primary text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/20"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2.5 py-1 text-md rounded transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="w-container md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200"
              // className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 pr-2">
                  <div className="shrink-0">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform duration-200 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-4 pb-3 pt-0 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700">
                  {faq.answer}
                  {faq.category === "Emergency" && (
                    <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                      <a 
                        href={`tel:${SiteConfig.displayNumber}`}
                        className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                      >
                        <Phone className="h-3 w-3" />
                        Call Emergency: {SiteConfig.displayNumber}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": brandName,
              "telephone": displayNumber,
              "email": email,
              "areaServed": city,
              "openingHours": "Mo-Su 00:00-23:59",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": displayNumber,
                "contactType": "customer service",
                "availableLanguage": ["English", "Arabic", "Urdu", "Hindi"]
              }
            })
          }}
        />
      </div>
    </section>
  );
}