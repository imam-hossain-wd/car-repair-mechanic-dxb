// components/FullPageGallery.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid,
  Maximize2,
  Heart,
  Share2,
  Clock,
  MapPin,
  Wrench,
  Sparkles,
  Play,
  Pause,
  ArrowRight,
  Camera,
  Filter,
  Search,
  LayoutGrid,
  List,
  TrendingUp,
  Star,
  Calendar
} from "lucide-react";

import { galleryData } from "@/data/workingGellery";




// Get unique categories
const categories = ["All", ...new Set(galleryData.map(item => item.category))];

export default function WorkingGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid, list
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest, popular, rating

  // Filter and sort images
  const filteredImages = galleryData
    .filter(img => {
      const matchesCategory = selectedCategory === "All" || img.category === selectedCategory;
      const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           img.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           img.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           img.service.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "popular") return b.views - a.views;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const openLightbox = (image, index) => {
    const actualIndex = filteredImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setCurrentIndex(actualIndex);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
    setIsAutoPlay(false);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === "next"
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") navigateImage("prev");
        if (e.key === "ArrowRight") navigateImage("next");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  useEffect(() => {
    if (!isAutoPlay || !selectedImage) return;
    const interval = setInterval(() => {
      navigateImage("next");
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full mb-4">
              <Camera className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Our Work Gallery
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-primary">Car Repair</span> Portfolio
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our recent projects and see how we've helped thousands of customers across Dubai
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-xl font-bold text-primary">{galleryData.length}+</div>
                <div className="text-xs text-gray-500">Projects Completed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-xl font-bold text-primary">5000+</div>
                <div className="text-xs text-gray-500">Happy Customers</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-xl font-bold text-primary">50+</div>
                <div className="text-xs text-gray-500">Service Areas</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-xl font-bold text-primary">13+</div>
                <div className="text-xs text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
              {/* Categories */}
              <div className="flex overflow-x-auto gap-1.5 pb-1 md:pb-0 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">No projects found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-primary mb-1">
                        <Clock className="h-3 w-3" />
                        <span>{image.date}</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        <MapPin className="h-3 w-3" />
                        <span>{image.location}</span>
                      </div>
                      <h3 className="text-sm font-bold line-clamp-1">{image.title}</h3>
                      <button
                        onClick={() => openLightbox(image, index)}
                        className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-primary hover:bg-primary/90 text-white text-xs font-medium rounded-lg transition-all"
                      >
                        <Maximize2 className="h-3 w-3" />
                        View
                      </button>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
                      <Wrench className="h-2.5 w-2.5" />
                      {image.category}
                    </span>
                  </div>
                  {image.featured && (
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
                        <Sparkles className="h-2.5 w-2.5" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {image.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-0.5">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        {image.rating}
                      </span>
                      <span>•</span>
                      <span>{image.views} views</span>
                    </div>
                    <button
                      onClick={() => openLightbox(image, index)}
                      className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all"
                    >
                      <Maximize2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Results Count */}
        <div className="text-center text-sm text-gray-500 mt-6">
          Showing {filteredImages.length} of {galleryData.length} projects
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 text-center border border-primary/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Need Car Repair Service?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Join 5,000+ satisfied customers who trust us with their vehicles
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/dubai/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all hover:scale-105"
              >
                View Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dubai/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-primary text-gray-700 dark:text-white rounded-xl font-medium transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-50"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-w-6xl w-full mx-4">
            <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-white/60 mt-1 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {selectedImage.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {selectedImage.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Wrench className="h-3.5 w-3.5" />
                        {selectedImage.service}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                        {selectedImage.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                    >
                      {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}