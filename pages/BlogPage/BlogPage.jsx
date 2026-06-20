// app/dubai/blog/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  Clock,  
  Search,
  ArrowRight,
  TrendingUp,
  Wrench,
  Battery,
  Wind,
  Droplet,
  Shield,
  Car,
  Phone,
  ChevronRight,
  BookOpen,
  Eye,
  Sparkles,
  Filter
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import { blogPosts } from "@/data/blogsData";





// Categories with counts
const categories = [
  { name: "All", slug: "all", count: blogPosts.length, icon: BookOpen },
  { name: "Battery", slug: "battery", count: blogPosts.filter(p => p.category === "Battery").length, icon: Battery },
  { name: "AC Repair", slug: "ac-repair", count: blogPosts.filter(p => p.category === "AC Repair").length, icon: Wind },
  { name: "Oil Change", slug: "oil-change", count: blogPosts.filter(p => p.category === "Oil Change").length, icon: Droplet },
  { name: "Brake Repair", slug: "brake-repair", count: blogPosts.filter(p => p.category === "Brake Repair").length, icon: Shield },
  { name: "General", slug: "general", count: blogPosts.filter(p => p.category === "General").length, icon: Car },
  { name: "Diagnostics", slug: "diagnostics", count: blogPosts.filter(p => p.category === "Diagnostics").length, icon: Wrench }
];

// Popular posts
const popularPosts = blogPosts.filter(post => post.popular).slice(0, 4);

export default function BlogPage() {
  const { brandName, displayNumber, city } = SiteConfig;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMore = visiblePosts < filteredPosts.length;

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pt-10 pb-8 md:pt-14 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mt-10">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full mb-4">
              <BookOpen className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Expert Insights
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Car Repair <span className="text-primary">Blog</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expert tips, maintenance guides, and automotive insights from Dubai&apos;s leading mobile mechanics
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <div className="sticky top-16 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Categories - Horizontal Scroll */}
            <div className="flex overflow-x-auto gap-1.5 pb-1 w-full md:w-auto scrollbar-hide">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setVisiblePosts(6);
                    }}
                    className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === category.name
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    <span>{category.name}</span>
                    <span className={`text-[10px] ${selectedCategory === category.name ? "text-white/80" : "text-gray-400"}`}>
                      ({category.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-2">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No posts found</h3>
                <p className="text-sm text-gray-500">Try adjusting your search or category filter</p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {displayedPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="grid md:grid-cols-3 gap-4 p-4">
                        {/* Image Placeholder */}
                        <div className="md:col-span-1">
                          <div className="relative h-48 md:h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-4xl">🔧</span>
                            </div>
                            {post.popular && (
                              <div className="absolute top-2 left-2">
                                <div className="flex items-center gap-1 bg-yellow-500 text-white px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                                  <TrendingUp className="h-2.5 w-2.5" />
                                  Popular
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2">
                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{post.views} views</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            <Link href={`/blogs/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h2>

                          {/* Excerpt */}
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Author & Tags */}
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="h-3 w-3 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs font-medium text-gray-900 dark:text-white">{post.author}</p>
                                <p className="text-[10px] text-gray-500">{post.authorRole}</p>
                              </div>
                            </div>
                            <Link
                              href={`/dubai/blog/${post.slug}`}
                              className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:gap-2 transition-all"
                            >
                              Read More
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center mt-8">
                    <button
                      onClick={loadMore}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl font-medium text-sm transition-all"
                    >
                      Load More Articles
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Popular Posts */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Popular Posts</h3>
              </div>
              <div className="space-y-3">
                {popularPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/dubai/blog/${post.slug}`}
                    className="group flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center text-xl">
                      🔧
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-gray-500">{post.readTime}</span>
                        <span className="text-[10px] text-gray-400">•</span>
                        <span className="text-[10px] text-gray-500">{post.views} views</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories List */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Categories</h3>
              </div>
              <div className="space-y-1.5">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setVisiblePosts(6);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-all ${
                        selectedCategory === category.name
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-xs">{category.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Newsletter</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Get the latest car tips straight to your inbox
              </p>
              <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Emergency CTA */}
            <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border border-green-200 dark:border-green-900 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-xs font-semibold text-green-600">Emergency?</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Need immediate assistance?
              </p>
              <a
                href={`tel:${displayNumber}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-primary"
              >
                Call {displayNumber}
                <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Car Repair Blog Dubai",
            "description": "Expert car maintenance tips and repair guides",
            "url": "https://carrepairmechanic.ae/dubai/blog",
            "publisher": {
              "@type": "Organization",
              "name": SiteConfig.brandName
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "url": `https://carrepairmechanic.ae/dubai/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "articleSection": post.category
            }))
          })
        }}
      />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}