// src/components/view/ServiceAreaComponent/FAQ/FAQ.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Star,
  ThumbsUp,
  Shield,
  Car,
  MapPin,
  Award,
} from "lucide-react";

export function ServiceAreaFaq({ area }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = area?.faqSection?.faqs || [];
  const name = area?.name || "Al Karama";
  const city = area?.city || "Dubai";
  const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";
  const rating = area?.hero?.stats?.find(s => s?.label === "Customer Rating")?.value || "4.9/5";

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Quick answers data
  const quickAnswers = [
    { question: "Response Time", answer: responseTime, icon: Clock },
    { question: "Service Hours", answer: "24/7 Emergency", icon: Clock },
    { question: "Customer Rating", answer: rating, icon: Star },
    { question: "Coverage Area", answer: name, icon: MapPin },
  ];

  return (
    <section className="w-full py-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {area?.faqSection?.title || "Frequently Asked Questions"}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {area?.faqSection?.subtitle ||
              `Answers to common questions about our mobile mechanic and car repair services in ${name} ${city}.`}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Quick Answers Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickAnswers.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 text-center border border-gray-100"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs text-gray-500 mb-1">{item.question}</p>
              <p className="text-sm font-bold text-gray-900">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - FAQ Accordion */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Most Common Questions
              </h3>
              
              <div className="space-y-4">
                {faqs.length > 0 ? (
                  faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                          {faq.question}
                        </span>
                        {openIndex === idx ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openIndex === idx && (
                        <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  // Default FAQs based on area data
                  <>
                    {[
                      {
                        question: `Do you provide emergency car battery replacement in ${name}?`,
                        answer: `Yes, we provide 24/7 emergency car battery replacement service across ${name} ${city}. Our mobile mechanics can reach you within ${responseTime} minutes.`
                      },
                      {
                        question: `How quickly can your mobile mechanic reach ${name}?`,
                        answer: `Our average response time in ${name} is approximately ${responseTime} minutes depending on traffic conditions and your exact location.`
                      },
                      {
                        question: `Do you provide roadside assistance near major landmarks in ${name}?`,
                        answer: `Yes, we provide roadside assistance, battery replacement, diagnostics, and mobile mechanic services near all major landmarks in ${name} including BurJuman, Mankhool Road, and residential areas.`
                      },
                      {
                        question: `Can you repair car AC problems on-site?`,
                        answer: `Yes, our mobile mechanics provide on-site AC diagnostics, gas refill, compressor inspection, and complete cooling repair services at your location.`
                      },
                      {
                        question: `Do you provide vehicle diagnostics service in ${name}?`,
                        answer: `Yes, we use advanced diagnostic scanners to identify engine, electrical, battery, transmission, and AC system faults accurately.`
                      },
                      {
                        question: `Which vehicle brands do you repair?`,
                        answer: `We repair all major vehicle brands including Toyota, Nissan, Mitsubishi, Hyundai, Kia, Honda, BMW, Mercedes-Benz, Audi, Lexus, Ford, Chevrolet, and more.`
                      },
                    ].map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(idx)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                            {faq.question}
                          </span>
                          {openIndex === idx ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {openIndex === idx && (
                          <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Help & Support */}
          <div>
            {/* Contact Support Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/3 rounded-2xl p-6 md:p-8 border border-primary/10 mb-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
                <p className="text-gray-500 text-sm">
                  Our customer support team is available 24/7 to assist you
                </p>
              </div>
              
              <div className="space-y-3">
                <Link
                  href="/dubai/book-appointment"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call Us Now</p>
                      <p className="text-sm font-bold text-gray-900">24/7 Emergency Line</p>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 rotate-[-90deg]" />
                </Link>

                <Link
                  href="https://wa.me/971501234567"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp Support</p>
                      <p className="text-sm font-bold text-gray-900">Instant Messaging</p>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 rotate-[-90deg]" />
                </Link>

                <Link
                  href="mailto:info@fixcardubai.com"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email Us</p>
                      <p className="text-sm font-bold text-gray-900">info@fixcardubai.com</p>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 rotate-[-90deg]" />
                </Link>
              </div>
            </div>

            {/* Service Guarantee Card */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-center mb-8">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-gray-300 text-sm mb-4">
                We stand behind every repair with our comprehensive warranty
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-gray-300">24/7 Emergency Support</span>
              </div>
            </div>

            {/* Quick Service Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-primary" />
                Quick Service Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Average Response Time</span>
                  <span className="text-sm font-semibold text-gray-900">{responseTime}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Service Availability</span>
                  <span className="text-sm font-semibold text-gray-900">24 Hours / 7 Days</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Customer Rating</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-gray-900">{rating}</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-500">Coverage Area</span>
                  <span className="text-sm font-semibold text-gray-900">{name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Can&apos;t find your question?</p>
                <p className="text-sm text-gray-500">We&apos;re here to help with any specific concerns</p>
              </div>
            </div>
            <Link
              href="/dubai/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema for FAQ Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": `Frequently Asked Questions - Mobile Car Repair in ${name} ${city}`,
            "description": area?.faqSection?.title || `Common questions about mobile mechanic and car repair services in ${name}`,
            "mainEntity": (faqs.length > 0 ? faqs : [
              { question: `Do you provide emergency car battery replacement in ${name}?`, answer: `Yes, we provide 24/7 emergency car battery replacement service across ${name}.` },
              { question: `How quickly can your mobile mechanic reach ${name}?`, answer: `Our average response time in ${name} is approximately ${responseTime} minutes.` },
              { question: `Do you provide roadside assistance near major landmarks?`, answer: `Yes, we provide services near all major landmarks in ${name}.` },
              { question: `Can you repair car AC problems on-site?`, answer: `Yes, our mobile mechanics provide on-site AC diagnostics and repair.` },
              { question: `Do you provide vehicle diagnostics service?`, answer: `Yes, we use advanced diagnostic scanners for accurate fault detection.` },
              { question: `Which vehicle brands do you repair?`, answer: `We repair all major vehicle brands including Toyota, Nissan, BMW, Mercedes-Benz, and more.` }
            ]).map((faq, idx) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}