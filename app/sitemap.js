import { SiteConfig } from "@/config/siteConfig"; // Adjust this import path based on your folder structure
import { serviceAeas } from "@/data/servicearea";
// import { blogPosts } from "@/data/blogsData";
import { services } from "@/data/services/services";
// Adjust this import path based on your folder structure

export default async function sitemap() {
  const baseUrl = SiteConfig.url.endsWith("/")
    ? SiteConfig.url.slice(0, -1)
    : SiteConfig.url;

    console.log(baseUrl, 'baseUrl')

  // 1. Core Static Routes
  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/area-we-serve`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/brands`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vehicles-we-serve`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    // { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
  ];

  // 2. Dynamic Service Routes (Derived from fullServices)
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9, // High priority as these generate leads
  }));

  // 3. Dynamic Area We Serve Routes (Derived from fullServices)
  const areaRoutes = serviceAeas.map((area) => ({
    url: `${baseUrl}/area-we-serve/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));


  // 4. Dynamic Blog Post Routes
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blogs/${post.slug}`,
  //   lastModified: new Date(post.date), // Uses actual publication date for better accuracy
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // }));

  // Combine all routes into a single flattened array
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    // ...blogRoutes,
  ];
}