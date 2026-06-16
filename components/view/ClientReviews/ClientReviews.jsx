// components/ClientReviews.jsx
"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Phone, MessageCircle, Wrench, Eye } from "lucide-react";
import { SiteConfig } from "@/app/siteConfig";
import Link from "next/link";
import { reviews } from "@/data/reviews";



export function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { displayNumber, whatsappCallLink, brandName, city } = SiteConfig;
  
  const reviewsPerView = 4;
  const totalSlides = Math.ceil(reviews.length / reviewsPerView);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);
  
  const currentReviews = reviews.slice(
    currentIndex * reviewsPerView,
    (currentIndex + 1) * reviewsPerView
  );
  
  // Aggregate rating for SEO
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <section className="py-5 bg-linear-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-0.5 rounded-full mb-2">
            <Star className="h-3 w-3 text-primary fill-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Client Reviews
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          
          <div className="w-12 h-0.5 bg-primary mx-auto my-2"></div>
          
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {averageRating}
            </span>
            <span className="text-xs text-gray-500">
              ({totalReviews}+ reviews)
            </span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 border border-gray-200 dark:border-gray-700"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 border border-gray-200 dark:border-gray-700"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentReviews.map((review, idx) => (
              <div
                key={review.id}
                className="bg-white h-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 "
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-3">
                  <Quote className="h-6 w-6 text-primary/30" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3 line-clamp-3">
                  &quot;{review?.review}&quot;
                </p>
                
                {/* Service Tag */}
                <div className="mb-2">
                  <span className="inline-block px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded">
                    {review.service}
                  </span>
                </div>
                
                {/* Customer Info */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{review.avatar}</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">
                          {review.name}
                        </p>
                        <p className="text-[10px] text-gray-500">{review.location}</p>
                      </div>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-[10px] text-green-600 dark:text-green-400">✓ Verified</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-5">
            {[...Array(totalSlides)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  currentIndex === idx
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8">
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <Link
              href={`tel:${displayNumber}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 text-sm"
            >
              <Eye className="h-4 w-4" />
              View All Reviews
            </Link>
          </div>
         
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": SiteConfig.brandName,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": averageRating,
                "reviewCount": totalReviews,
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": reviews.map(review => ({
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": review.rating,
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": review.name
                },
                "reviewBody": review.review,
                "datePublished": review.date
              }))
            })
          }}
        />
      </div>
    </section>
  );
}