// components/ServiceCard.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Sparkles, Zap, Star, Eye, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServiceCard = ({ service, featured = false }) => {

  const benefits = ["Warranty Included", "Free Inspection", "Quality Service"]


  return (
    <div className={`
      group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
      transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
      ${featured ? 'ring-2 ring-primary shadow-xl shadow-primary/20' : 'border border-gray-100 dark:border-gray-800 shadow-lg'}
    `}>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Border Glow */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary/0 via-primary to-primary/0 transition-all duration-500 ${featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

      {/* Badges Container */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
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
            <div className="flex items-center gap-1 bg-linear-to-r from-amber-400 to-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
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
              Featured
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

      <div className="p-5 md:p-6 relative z-10">
        {/* Icon with Glass Effect */}
        <div className="relative mb-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative inline-flex p-3.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/10">
            <Image
              src={service?.service_image}
              alt={service.name}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
            {service?.name}
          </h3>
        </div>

        {/* What's Included */}
        <div className="mb-2">
          {/* <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            What&apos;s Included
          </p> */}
          <div className="space-y-1.5">
            {service?.features?.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Benefits Tags */}
        {/* <div className="flex flex-col flex-wrap gap-1.5 mb-2">
          {benefits.map((benefit, index) => (
            <span key={index} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {benefit}
            </span>
          ))}
        </div> */}



        {/* Pricing & Action */}
        {/* <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Starting from</p>
          <p className="text-lg font-bold text-primary">{service.price}</p>
        </div>

        <Link
          href={`/dubai/services/${service.slug}`}
          className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-primary/20 text-sm"
        >
          <span>Book Now</span>
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div> */}


        <div className="flex justify-around mt-4">
          <Link className="" href={`services/${service?.slug}`}>
            <Button className="rounded w-24">
              <Eye className="h-4 w-4 text-white group-hover/action:text-white" />
              <span>
                View
              </span>
            </Button>
          </Link>


          <Button className="rounded">
            <Phone className="h-4 w-4 text-white group-hover/action:text-white" />
            <span>
              Call Now
            </span>
          </Button>
        </div>
      </div>
    </div >
  );
};