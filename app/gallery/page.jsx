// app/dubai/gallery/page.jsx
import WorkingGalleryPage from "@/pages/WorkingGalleryPage/WorkingGalleryPage";
import { siteMetadata } from "@/seo/siteMetadata/siteMetadata";

// export const metadata = {
//   title: "Car Repair Gallery | Our Work in Dubai",
//   description: "Browse through our portfolio of car repair services in Dubai. See our work on battery replacement, AC repair, brake service, and more.",
//   alternates: {
//     canonical: "https://carrepairmechanic.com/gallery",
//   }
// };

export const metadata = siteMetadata.contact

export default function GalleryPage() {
  return <WorkingGalleryPage />;
}