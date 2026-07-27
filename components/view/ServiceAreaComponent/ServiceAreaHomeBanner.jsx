"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock3,
  Star,
  ShieldCheck,
  Award,
  Zap,
} from "lucide-react";

import { SiteConfig } from "@/config/siteConfig";
import { Hero } from "@/utils/assets";

export function ServiceAreaHomeBanner({ area }) {

  return (
    <section className="relative w-full bg-gray-900">
      {/* Background Image Container */}
      <div className="relative w-full h-160 md:h-120 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Hero?.serviceHero}
            alt={`Professional mobile car repair and emergency roadside assistance service in ${area?.name} Dubai`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Dark Gradient Overlay - Professional & Readable */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/85 to-gray-900/70" />

        {/* Secondary Gradient for Depth */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60" />

        {/* Main Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="min-h-230 md:min-h-200 lg:min-h-190 flex flex-col justify-center">
            <div className="max-w-4xl -mt-40">

              {/* Trust Badge - Top Indicator */}
              <div className="mb-3 -mt-20">
                <div className="inline-flex items-center gap-2.5 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-gray-200 tracking-wide">
                    {area?.hero?.badge || "24/7 Emergency Mobile Mechanic"}
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight lg:leading-tight">
                {area?.hero?.title ||
                  `24/7 Car Repair & Mobile Mechanic Service in ${area?.name} Dubai`
                }
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-3 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                {area?.hero?.subtitle ||
                  `Professional on-site car repair, emergency battery replacement, roadside assistance, diagnostics, AC repair, oil change, brake service, and mobile mechanic support across ${area?.name}.`
                }
              </p>

              {/* CTA Buttons Section */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                {/* Primary Call Button */}
                <Link
                  href={SiteConfig?.numberCallLink}
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-base sm:text-lg px-4 py-2 rounded-xl transition-colors duration-200 shadow-xl"
                  aria-label={`Call ${area?.name} mobile mechanic - 24/7 emergency service`}
                >
                  <Phone className="w-5 h-5 text-white" />
                  Call Mobile Mechanic
                </Link>

                {/* Secondary WhatsApp Button */}
                <Link
                  href={SiteConfig?.whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700  text-white font-semibold text-sm px-4 py-2 rounded-xl transition-colors duration-200"
                  aria-label={`WhatsApp ${area?.name} mobile mechanic for emergency car repair`}
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  {area?.hero?.ctaSecondary || "WhatsApp Now"}
                </Link>
              </div>

              {area?.coordinates && (
                <div className="hidden" aria-hidden="true">
                  <span itemProp="latitude">{area.coordinates.lat}</span>
                  <span itemProp="longitude">{area.coordinates.lng}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}