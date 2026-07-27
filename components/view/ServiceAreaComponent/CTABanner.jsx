// components/ServiceArea/CTABanner.jsx
"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Shield,
  Clock
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function CTABanner({ area }) {
  const areaName = area?.name || "Dubai";
  const { displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

  const features = [
    { icon: Phone, label: "Call Us", value: "24/7 Support" },
    { icon: MessageCircle, label: "WhatsApp", value: "Quick Response" },
    { icon: Shield, label: "Warranty", value: "All Repairs" },
    { icon: Clock, label: "Open 24/7", value: "365 Days" },
  ];

  return (
    <section className="py-5 bg-gray-50 dark:bg-gray-900/50">
      <div className="container md:w-[90%] mx-auto px-4">
        
        <div className="">
          {/* Main Card */}
          <div className="relative bg-linear-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border border-primary/20 overflow-hidden">
            
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Need Car Repair in{' '}
                  <span className="text-primary">{areaName}</span>?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  We&lsquo;re here 24/7 to help you get back on the road
                </p>
              </div>

              {/* Features */}
              <div className="w-full md:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm"
                    >
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900 dark:text-white">
                          {feature.label}
                        </p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">
                          {feature.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href={numberCallLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-xs md:text-sm  w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  {displayNumber}
                </Link>
                
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-xs w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Call Car Repair Mechanic Dubai for emergency car repair in {areaName}. 
            Available 24/7 with warranty on all repairs. Contact us via phone or WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}