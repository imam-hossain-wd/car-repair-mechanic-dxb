// import { SiteConfig } from "@/config/siteConfig"; // Adjust this import path based on your folder structure
// import { serviceAeas } from "@/data/servicearea";
// // import { blogPosts } from "@/data/blogsData";
// import { services } from "@/data/services/services";
// // Adjust this import path based on your folder structure

// export default async function sitemap() {
//   const baseUrl = SiteConfig.url.endsWith("/")
//     ? SiteConfig.url.slice(0, -1)
//     : SiteConfig.url;

//     console.log(baseUrl, 'baseUrl')

//   // 1. Core Static Routes
//   const staticRoutes = [
//     { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
//     { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
//     { url: `${baseUrl}/area-we-serve`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
//     { url: `${baseUrl}/brands`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
//     { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
//     { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
//     { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
//     { url: `${baseUrl}/vehicles-we-serve`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
//     { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
//     { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
//     // { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
//   ];

//   // 2. Dynamic Service Routes (Derived from fullServices)
//   const serviceRoutes = services.map((service) => ({
//     url: `${baseUrl}/services/${service.slug}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly",
//     priority: 0.9, // High priority as these generate leads
//   }));

//   // 3. Dynamic Area We Serve Routes (Derived from fullServices)
//   const areaRoutes = serviceAeas.map((area) => ({
//     url: `${baseUrl}/area-we-serve/${area.slug}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly",
//     priority: 0.9,
//   }));


//   // 4. Dynamic Blog Post Routes
//   // const blogRoutes = blogPosts.map((post) => ({
//   //   url: `${baseUrl}/blogs/${post.slug}`,
//   //   lastModified: new Date(post.date), // Uses actual publication date for better accuracy
//   //   changeFrequency: "monthly",
//   //   priority: 0.6,
//   // }));

//   // Combine all routes into a single flattened array
//   return [
//     ...staticRoutes,
//     ...serviceRoutes,
//     ...areaRoutes,
//     // ...blogRoutes,
//   ];
// }

import { SiteConfig } from "@/config/siteConfig"; // Adjust this import path based on your folder structure
import { serviceAreas } from "@/data/servicearea";
import { services } from "@/data/services/services";
// import { blogPosts } from "@/data/blogsData";

export default async function sitemap() {
  const baseUrl = SiteConfig.url.endsWith("/")
    ? SiteConfig.url.slice(0, -1)
    : SiteConfig.url;

  // ১. একটি নির্দিষ্ট ফলব্যাক তারিখ তৈরি করুন যা বারবার পরিবর্তন হবে না
  const SITE_LAUNCH_OR_LAST_BUILD_DATE = new Date("2024-01-01");

  // ২. Core Static Routes (নির্দিষ্ট পেজের প্রকৃত পরিবর্তনের ওপর ভিত্তি করে তারিখ সেট করুন)
  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 }, // হোমপেজ প্রতিনিয়ত আপডেট হলে new Date() রাখা যায়
    { url: `${baseUrl}/services`, lastModified: new Date("2024-02-01"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/area-we-serve`, lastModified: new Date("2024-02-01"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/brands`, lastModified: SITE_LAUNCH_OR_LAST_BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: SITE_LAUNCH_OR_LAST_BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date("2024-01-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/terms`, lastModified: new Date("2024-01-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vehicles-we-serve`, lastModified: SITE_LAUNCH_OR_LAST_BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: SITE_LAUNCH_OR_LAST_BUILD_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: SITE_LAUNCH_OR_LAST_BUILD_DATE, changeFrequency: "monthly", priority: 0.5 },
    // { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
  ];

  // ৩. Dynamic Service Routes 
  // (service.updatedAt বা service.createdAt চেক করবে, না থাকলে ফলব্যাক তারিখ ব্যবহার করবে)
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.updatedAt 
      ? new Date(service.updatedAt) 
      : (service.createdAt ? new Date(service.createdAt) : SITE_LAUNCH_OR_LAST_BUILD_DATE),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // ৪. Dynamic Area We Serve Routes
  const areaRoutes = serviceAreas.map((area) => ({
    url: `${baseUrl}/area-we-serve/${area.slug}`,
    lastModified: area.updatedAt 
      ? new Date(area.updatedAt) 
      : (area.createdAt ? new Date(area.createdAt) : SITE_LAUNCH_OR_LAST_BUILD_DATE),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // ৫. Dynamic Blog Post Routes (যদি ভবিষ্যতে চালু করেন)
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blogs/${post.slug}`,
  //   lastModified: new Date(post.updatedAt || post.date),
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // }));

  // সব রুট একসাথে মার্চ করে রিটার্ন করা হচ্ছে
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    // ...blogRoutes,
  ];
}