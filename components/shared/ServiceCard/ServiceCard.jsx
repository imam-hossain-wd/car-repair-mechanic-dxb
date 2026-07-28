"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Sparkles, Zap, Star, Eye, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";

export const ServiceCard = ({ service, featured = false }) => {

  return (
    <div className={`
      group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
      transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
      ${featured ? 'ring-2 ring-primary shadow-xl shadow-primary/20' : 'border border-gray-100 dark:border-gray-800 shadow-lg'}
    `}>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Border Glow */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-500 ${featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

      {/* Badges Container */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start">
        <div className="flex flex-wrap gap-1.5">
          {/* Emergency Badge */}
          {service.emergency && (
            <div className="flex items-center gap-1 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              <Zap className="h-2.5 w-2.5" />
              24/7 Emergency
            </div>
          )}

          {/* Premium Badge */}
          {service.premium && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              <Sparkles className="h-2.5 w-2.5" />
              Premium
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {/* Featured Badge */}
          {featured && (
            <div className="flex items-center gap-1 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              <Star className="h-2.5 w-2.5 fill-white" />
              Popular
            </div>
          )}

          {/* Popular Badge */}
          {service.popular && !featured && (
            <div className="flex items-center gap-1 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              🔥 Popular
            </div>
          )}
        </div>
      </div>

      {/* Banner Image with Logo Overlay */}
      <div className="relative w-full h-[150px] bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Banner Image */}
        {service?.service_banner && 
          <Image
            src={service.service_banner}
            alt={service.name || "Service Banner"}
            fill
            className="object-cover h-40 w-full"
          />
     }

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Logo Overlay - Centered on Image */}
        <div className="absolute bottom-3 left-3">
          <div className="relative inline-flex p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-xl border border-white">
            <Image
              src={service?.service_image || service?.service_banner}
              alt={service.name || "Service Logo"}
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 md:p-5 relative z-10">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {service?.name || service?.title || "Service"}
          </h3>
        </div>

        {/* Features / What's Included */}
        <div className="mb-3">
          <div className="space-y-1.5">
            {service?.features?.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
          <Link
            href={`/services/${service?.slug}`}
            className="flex-1"
          >
            <Button
              variant="outline"
              className="w-full rounded-xl border-primary/20 text-primary hover:bg-primary hover:text-white transition-all group/btn"
            >
              <Eye className="h-4 w-4 mr-1.5" />
              <span>View Details</span>
            </Button>
          </Link>

          <Link
            href={SiteConfig?.numberCallLink}
            className="flex-1"
          >
            <Button
              className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white transition-all"
            >
              <Phone className="h-4 w-4 mr-1.5" />
              <span>Call Now</span>
            </Button>
          </Link>
        </div>

        {/* Optional: Pricing hint */}
        {service?.price && (
          <div className="mt-2 text-center">
            <span className="text-xs text-gray-500">Starting from</span>
            <span className="text-sm font-bold text-primary ml-1">{service.price}</span>
          </div>
        )}
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};