// components/WorkGallery.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    X,
    ChevronLeft,
    ChevronRight,
    Camera,
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
} from "lucide-react";
import { galleryData } from "@/data/workingGellery";





export function WorkGallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
    }, []);

    // Filter images based on category
    const filteredImages = selectedCategory === "All"
        ? galleryData
        : galleryData.filter(img => img.category === selectedCategory);

    // Open lightbox
    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        // eslint-disable-next-line react-hooks/immutability
        document.body.style.overflow = "hidden";
    };

    // Close lightbox
    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
        setIsAutoPlay(false);
    };

    // Navigate through images
    const navigateImage = (direction) => {
        const newIndex = direction === "next"
            ? (currentIndex + 1) % filteredImages.length
            : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    // Keyboard navigation
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImage, currentIndex, filteredImages]);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlay || !selectedImage) return;
        const interval = setInterval(() => {
            navigateImage("next");
        }, 4000);
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAutoPlay, selectedImage, currentIndex]);



    return (
        <section className="py-5 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
                        <Camera className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            Our Work Gallery
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        See Our <span className="text-primary">Car Repair</span> Work
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Browse through our recent projects and see how we&apos;ve helped thousands of customers across Dubai
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {galleryData?.slice(0,8).map((image, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            onMouseEnter={() => setHoveredId(image.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-4/3 overflow-hidden">
                                {image.image ? (
                                    <Image
                                        src={image.image}
                                        alt={image.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                                        <div className="text-4xl">🔧</div>
                                    </div>
                                )}

                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${hoveredId === image.id ? "opacity-100" : "opacity-0"
                                    }`}>
                                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                        <div className="flex items-center gap-2 text-xs text-primary mb-1">
                                            <Clock className="h-3 w-3" />
                                            <span>{image.date}</span>
                                            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                                            <MapPin className="h-3 w-3" />
                                            <span>{image.location}</span>
                                        </div>
                                        <h3 className="text-lg font-bold">{image.title}</h3>
                                        <p className="text-sm text-white/80 line-clamp-2">{image.description}</p>
                                        <button
                                            onClick={() => openLightbox(image, index)}
                                            className="mt-3 inline-flex items-center gap-1 px-4 py-1.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-all"
                                        >
                                            <Maximize2 className="h-3.5 w-3.5" />
                                            View Full
                                        </button>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
                                        <Wrench className="h-2.5 w-2.5" />
                                        {image.category}
                                    </span>
                                </div>

                                {/* Featured Badge */}
                                {image.featured && (
                                    <div className="absolute top-3 right-3">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
                                            <Sparkles className="h-2.5 w-2.5" />
                                            Featured
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Info Bar */}
                            <div className="p-3 bg-white dark:bg-gray-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">
                                            {image.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{image.location}</p>
                                    </div>
                                    <button
                                        onClick={() => openLightbox(image, index)}
                                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all"
                                        aria-label="View image"
                                    >
                                        <Maximize2 className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Ready to Get Your Car Fixed?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Join 5,000+ satisfied customers who trust us with their vehicles
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all hover:scale-105"
                            >
                                View Our Services
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/gallery"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all hover:scale-105"
                            >
                                View All Works
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-50"
                            aria-label="Close lightbox"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Navigation */}
                        <button
                            onClick={() => navigateImage("prev")}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                        <button
                            onClick={() => navigateImage("next")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </button>

                        {/* Image Container */}
                        <div className="relative max-w-5xl w-full mx-4">
                            <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden">
                                {selectedImage.image ? (
                                    <Image
                                        src={selectedImage.image}
                                        alt={selectedImage.title}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 90vw, 80vw"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                        <div className="text-6xl">🔧</div>
                                    </div>
                                )}

                                {/* Image Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                                            <div className="flex items-center gap-3 text-sm text-white/60 mt-1">
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
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                                                aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
                                            >
                                                {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                            </button>
                                            <button
                                                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                                                aria-label="Share"
                                            >
                                                <Share2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
                                {currentIndex + 1} / {filteredImages.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}



