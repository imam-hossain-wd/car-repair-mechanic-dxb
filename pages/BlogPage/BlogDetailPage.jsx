// components/BlogDetailPage.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  Share2,
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  BookOpen,
  TrendingUp,
  Sparkles,
//   Facebook,
//   Twitter,
//   Linkedin,
  Link2,
  CheckCircle,
  Wrench,
  ScanFace,
  Bird,
  BirdIcon,
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import { blogPosts } from "@/data/blogsData";

export default function BlogDetailPage({ blog }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(blog?.likes || 0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { displayNumber, whatsappCallLink, brandName, city } = SiteConfig;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  if (!blog) return null;

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(post => post.category === blog.category && post.id !== blog.id)
    .slice(0, 3);

  // Get popular posts
  const popularPosts = blogPosts
    .filter(post => post.popular && post.id !== blog.id)
    .slice(0, 3);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard?.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Reading progress
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [progress, setProgress] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/dubai/blog" 
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              <BookOpen className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{blog.author}</p>
                  <p className="text-xs text-gray-400">{blog.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{blog.views} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {blog.tags?.map((tag, index) => (
                <span key={index} className="text-xs bg-white/50 dark:bg-gray-800/50 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content - 8 columns */}
          <div className="lg:col-span-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              
              {/* Featured Image Placeholder */}
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🔧</div>
                </div>
                {blog.popular && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      <TrendingUp className="h-3 w-3" />
                      Popular
                    </div>
                  </div>
                )}
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                {/* Sample content - Replace with actual content */}
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    In this comprehensive guide, we&apos;ll explore everything you need to know about {blog.category.toLowerCase()} 
                    maintenance and repair. Whether you&apos;re a car enthusiast or a daily driver, these tips will help you 
                    keep your vehicle in top condition.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Key Takeaways</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Learn the early warning signs of {blog.category.toLowerCase()} issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Discover preventive maintenance tips for long-term reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Understand when to seek professional help</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Common Problems & Solutions</h3>
                  <p>
                    Dubai&apos;s unique climate and driving conditions can take a toll on your vehicle. Here are some 
                    common issues we see and how to address them:
                  </p>
                  <ul>
                    <li><strong>Overheating:</strong> Regular coolant checks and radiator maintenance</li>
                    <li><strong>Battery Drain:</strong> Regular testing and cleaning of terminals</li>
                    <li><strong>AC Issues:</strong> Annual gas refill and system check</li>
                  </ul>
                  
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 my-6">
                    <h4 className="font-bold text-primary mb-2">💡 Pro Tip from Our Experts</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      &quot;Regular maintenance is the key to avoiding expensive repairs. Schedule a check-up 
                      every 5,000 km or 6 months, whichever comes first.&ldquo;
                    </p>
                    <p className="text-sm text-gray-500 mt-2">— {blog.author}, {blog.authorRole}</p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">When to Call a Professional</h3>
                  <p>
                    While some maintenance can be done at home, certain signs indicate it&apos;s time to call 
                    the experts. If you notice any of these warning signs, don&apos;t hesitate to contact 
                    a certified mechanic:
                  </p>
                  <ul>
                    <li>Unusual noises or vibrations</li>
                    <li>Dashboard warning lights</li>
                    <li>Decreased performance or fuel efficiency</li>
                    <li>Visible fluid leaks</li>
                  </ul>
                </div>
              </div>

              {/* Engagement Section */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        isLiked 
                          ? "bg-red-50 dark:bg-red-950/30 text-red-500 border border-red-200" 
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500" : ""}`} />
                      <span>{likesCount}</span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      <Share2 className="h-4 w-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Share on:</span>
                    <button className="p-2 bg-[#1877F2]/10 text-[#1877F2] rounded-full hover:bg-[#1877F2] hover:text-white transition-all">
                      <ScanFace className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all">
                      <Bird className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full hover:bg-[#0A66C2] hover:text-white transition-all">
                      <BirdIcon className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-all">
                      <Link2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Section */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-2xl">
                    {blog.author?.charAt(0) || "A"}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">{blog.author}</h4>
                    <p className="text-sm text-gray-500">{blog.authorRole} at {brandName}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Expert in {blog.category} with {blog.popular ? "over 8 years" : "extensive"} experience in Dubai&apos;s automotive industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sticky Sidebar */}
            <div className="sticky top-24 space-y-6">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Related Posts
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/dubai/blog/${post.slug}`}
                        className="group flex gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                      >
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center text-2xl">
                          🔧
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
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
              )}

              {/* Emergency CTA */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-950/10 rounded-xl p-5 border border-red-200 dark:border-red-800 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-bold text-red-600">Emergency?</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Need immediate assistance? We&apos;re here 24/7.
                </p>
                <a
                  href={`tel:${displayNumber}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-all w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  Call {displayNumber}
                </a>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Newsletter</h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  Get expert car tips straight to your inbox
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

              {/* Book Service CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Need Professional Service?</h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  Book a certified mechanic at your doorstep
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all text-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                  <Link
                    href="/dubai/contact"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}