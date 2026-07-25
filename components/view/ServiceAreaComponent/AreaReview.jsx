// src/components/view/ServiceAreaComponent/Reviews/Reviews.jsx

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Quote,
  CheckCircle,
  ThumbsUp,
  Calendar,
  User,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export function AreaReview({ area }) {
  const reviews = area?.reviewsSection?.reviews || [];
  const name = area?.name || "Al Karama";
  const city = area?.city || "Dubai";
  const rating = area?.hero?.stats?.find(s => s?.label === "Customer Rating")?.value || "4.9/5";
  
  // Calculate average rating from reviews
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 4.9;
  
  // Count 5-star reviews
  const fiveStarCount = reviews.filter(r => r.rating === 5).length;

  return (
    <section className="w-full py-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
            <ThumbsUp className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              CUSTOMER TESTIMONIALS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {area?.reviewsSection?.title || "What Our Customers Say"}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {area?.reviewsSection?.subtitle ||
              `Real stories from car owners who trusted us with their vehicles in ${name}.`}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Service Badge */}
                <div className="absolute relative">
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                    {review.service}
                  </div>
                </div>

                <div className="p-6">
                  {/* Customer Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'fill-primary text-primary' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/10 rotate-180" />
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10 line-clamp-4">
                      {review.text}
                    </p>
                  </div>

                  {/* Verified Badge */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-500">Verified Customer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Default reviews if no data provided
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Ahmed R.",
                rating: 5,
                service: "Battery Replacement",
                date: "2 days ago",
                text: `Excellent mobile mechanic service in ${name}. My car battery died and they arrived within ${area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15"} minutes. Very professional and fast service.`
              },
              {
                name: "Fatima K.",
                rating: 5,
                service: "Car AC Repair",
                date: "5 days ago",
                text: `Professional AC repair service in ${name}. They fixed my car AC cooling issue on-site. Highly recommend their mobile mechanic service.`
              },
              {
                name: "John D.",
                rating: 5,
                service: "Roadside Assistance",
                date: "1 week ago",
                text: `Great roadside assistance and fair pricing. The mechanic was very knowledgeable and fixed my car quickly. Best car repair service in ${name}.`
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'fill-primary text-primary' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/10 rotate-180" />
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-500">Verified Customer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <ThumbsUp className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-gray-900">98% Satisfaction</p>
              <p className="text-xs text-gray-500">Customer rating</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <User className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-gray-900">5,000+</p>
              <p className="text-xs text-gray-500">Happy customers</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-gray-900">24/7 Support</p>
              <p className="text-xs text-gray-500">Always available</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Google Verified</p>
              <p className="text-xs text-gray-500">Trusted business</p>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `Mobile Car Repair Service in ${name} ${city}`,
            "description": area?.reviewsSection?.title || `Professional mobile car repair service in ${name}`,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating,
              "ratingCount": reviews.length || 50,
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": (reviews.length > 0 ? reviews : [
              { name: "Ahmed R.", rating: 5, text: "Excellent service" },
              { name: "Fatima K.", rating: 5, text: "Professional team" },
              { name: "John D.", rating: 5, text: "Highly recommended" }
            ]).slice(0, 3).map((review) => ({
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
              "reviewBody": review.text || review.comment
            }))
          })
        }}
      />
    </section>
  );
}