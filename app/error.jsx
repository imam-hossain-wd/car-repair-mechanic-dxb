// app/error.jsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home, Phone, Car } from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export default function ErrorPage({ error, reset }) {
  const {  displayNumber, whatsappCallLink } = SiteConfig;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  const errorMessages = {
    "ECONNREFUSED": "Unable to connect to our servers. Please check your internet connection.",
    "TIMEOUT": "Request timed out. Please try again.",
    "NETWORK_ERROR": "Network error occurred. Please check your connection.",
    "DEFAULT": "Something went wrong on our end. Our team has been notified."
  };

  const errorMessage = errorMessages[error?.code] || errorMessages.DEFAULT;

  return (
    <div className="min-h-screen bg-linear-to-br from-red-950 via-gray-900 to-gray-900 flex items-center justify-center px-4">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        
        {/* Error Icon */}
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-red-500" />
              </div>
            </div>
          </div>
          
          {/* Animated Car */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-slide">
            <Car className="h-6 w-6 text-red-500/50" />
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Technical Difficulties
        </h1>
        
        <p className="text-gray-400 mb-2 max-w-md mx-auto">
          {errorMessage}
        </p>
        
        <p className="text-sm text-gray-500 mb-6">
          Error: {error?.message || "Unknown error occurred"}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm border border-white/10"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          
          <a
            href={`tel:${displayNumber}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm"
          >
            <Phone className="h-4 w-4" />
            Contact Support
          </a>
        </div>

        {/* Quick Links */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-400 mb-2">Still need help?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <a
              href={whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-green-600/20 hover:bg-green-600 text-green-400 hover:text-white rounded-lg transition-all text-xs"
            >
              WhatsApp Support
            </a>
            <Link
              href="/dubai/contact"
              className="px-3 py-1.5 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg transition-all text-xs"
            >
              Contact Form
            </Link>
            <Link
              href="/dubai/services"
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-all text-xs"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0%, 100% { transform: translateX(-50%) translateX(0); }
          50% { transform: translateX(-50%) translateX(8px); }
        }
        .animate-slide {
          animation: slide 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}