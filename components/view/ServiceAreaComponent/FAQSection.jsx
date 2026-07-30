// components/ServiceArea/FAQSection.jsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";


export function FAQSection({ area }) {
  const [openIndex, setOpenIndex] = useState(null);
  const areaName = area?.name || "Dubai";
  const faqs = area?.faqSection?.faqs || [];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-5 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              FAQ
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Quick answers to common questions about our mobile car repair services in {areaName}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 group"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-white group-hover:text-primary transition-colors pr-2">
                  {faq.question}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""}`} />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-5 pb-4 pt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-700">
                  {faq.answer}
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

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Frequently asked questions about mobile car repair services in {areaName}. 
            Learn about emergency service, battery replacement, warranty, and more.
          </p>
        </div>
      </div>
    </section>
  );
}