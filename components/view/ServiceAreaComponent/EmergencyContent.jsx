// src/components/view/ServiceAreaComponent/EmergencyContentSection/EmergencyContentSection.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  AlertTriangle,
  Battery,
  Wind,
  Activity,
  Brake,
  Thermometer,
  Zap,
  Wrench,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Car,
  Settings,
  AlertCircle,
} from "lucide-react";
import { Hero, homebanner } from "@/utils/assets";

export function EmergencyContent({ area }) {
  const emergencyServices = area?.emergencyContentSection?.emergencyServices || [];
  const name = area?.name || "Al Karama";
  const city = area?.city || "Dubai";
  const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";

  return (
    <section className="w-full py-6 bg-gradient-to-br from-red-50 via-orange-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-1.5 mb-5">
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              24/7 EMERGENCY RESPONSE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {area?.emergencyContentSection?.title ||
              `24/7 Emergency Roadside Assistance in ${name}`}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-4">
            {area?.emergencyContentSection?.heading ||
              `Fast Breakdown Recovery & Mobile Mechanic Support`}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-red-500/50 rounded-full mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN - Content */}
          <div>
            {/* Description Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-red-500 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Critical Emergency Support Available
                  </h3>
                  <p className="text-xs text-gray-500">
                    Average response time: {responseTime} minutes
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {area?.emergencyContentSection?.description ||
                  `Busy roads, heavy traffic congestion, apartment basement parking, and commercial activity in ${name} can quickly turn a minor vehicle issue into a stressful roadside emergency. Our emergency mobile mechanic team provides rapid roadside assistance and on-site vehicle repair across ${name} ${city}.`}
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                {area?.emergencyContentSection?.descriptionTwo ||
                  `We regularly assist customers with dead batteries, engine overheating, non-starting vehicles, AC failures, brake issues, alternator faults, and warning light diagnostics. Our fully equipped mobile repair units are available 24 hours a day for emergency support.`}
              </p>
            </div>

            {/* Emergency Services List */}
            {emergencyServices.length > 0 && (
              <div className="bg-gray-900 rounded-2xl p-6 md:p-8 mb-6">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Our Emergency Services Include:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {emergencyServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Emergency Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Call Now Card */}
              <Link
                href="/dubai/book-appointment"
                className="group bg-primary rounded-xl p-5 text-center hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-bold text-lg mb-1">Call Now</p>
                <p className="text-white/80 text-xs">24/7 Emergency Line</p>
              </Link>

              {/* WhatsApp Support Card */}
              <Link
                href="/dubai/book-appointment"
                className="group bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-5 text-center hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-bold text-lg mb-1">WhatsApp</p>
                <p className="text-white/80 text-xs">Instant Support</p>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Emergency Info & Stats */}
          <div>
            {/* Emergency Response Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
              <div className="aspect-[4/3] relative bg-gray-800">
                <Image
                  src={Hero.serviceHero}
                  alt={`Emergency roadside assistance and mobile mechanic responding to car breakdown in ${name} ${city} - 24/7 support`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
              
              {/* Emergency Response Badge */}
              <div className="absolute top-4 right-4 bg-red-600 rounded-lg px-3 py-1.5 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-bold text-xs">DISPATCHED NOW</span>
                </div>
              </div>

              {/* Response Time Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-white text-xs">Estimated Arrival</p>
                      <p className="text-white font-bold text-lg">{responseTime} Minutes</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-xs">Live Tracking</p>
                    <p className="text-primary font-semibold text-sm">Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Clock, label: "Response Time", value: responseTime, unit: "Minutes", color: "bg-blue-50", iconColor: "text-blue-600" },
                { icon: Car, label: "Cars Rescued", value: "5,000+", unit: "Vehicles", color: "bg-green-50", iconColor: "text-green-600" },
                { icon: Shield, label: "Success Rate", value: "99%", unit: "First Fix", color: "bg-purple-50", iconColor: "text-purple-600" },
                { icon: Activity, label: "Active Mechanics", value: "24/7", unit: "Coverage", color: "bg-orange-50", iconColor: "text-orange-600" },
              ].map((stat, idx) => (
                <div key={idx} className={`${stat.color} rounded-xl p-4 border border-gray-100`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm`}>
                      <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.unit}</p>
                </div>
              ))}
            </div>

            {/* Common Emergency Issues */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                Most Common Emergency Calls in {name}:
              </h3>
              <div className="space-y-3">
                {[
                  { issue: "Dead Battery", percentage: 35, icon: Battery, color: "bg-red-100", textColor: "text-red-700" },
                  { issue: "Flat Tire", percentage: 25, icon: Car, color: "bg-orange-100", textColor: "text-orange-700" },
                  { issue: "AC Failure", percentage: 20, icon: Wind, color: "bg-blue-100", textColor: "text-blue-700" },
                  { issue: "Engine Overheat", percentage: 15, icon: Thermometer, color: "bg-yellow-100", textColor: "text-yellow-700" },
                  { issue: "Electrical Issues", percentage: 5, icon: Settings, color: "bg-purple-100", textColor: "text-purple-700" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-sm text-gray-700">{item.issue}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`${item.color} h-1.5 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee Statement */}
            <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800 text-sm">100% Satisfaction Guarantee</span>
              </div>
              <p className="text-xs text-green-700">
                No hidden charges • OEM quality parts • Warranty on all repairs • Licensed technicians
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-left">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Don&lsquo;t Wait for Emergency</p>
              <p className="text-xl md:text-2xl font-bold">Save Our Number for 24/7 Roadside Assistance</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/dubai/book-appointment"
                className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Save Contact
              </Link>
              <Link
                href="/dubai/services"
                className="bg-red-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-900 transition-colors text-sm flex items-center gap-2 border border-white/20"
              >
                <Wrench className="w-4 h-4" />
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}