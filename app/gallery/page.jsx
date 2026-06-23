// app/dubai/gallery/page.jsx
import WorkingGalleryPage from "@/pages/WorkingGalleryPage/WorkingGalleryPage";

export const metadata = {
  title: "Car Repair Gallery | Our Work in Dubai",
  description: "Browse through our portfolio of car repair services in Dubai. See our work on battery replacement, AC repair, brake service, and more.",
  alternates: {
    canonical: "https://carrepairmechanic.com/gallery",
  }
};

export default function GalleryPage() {
  return <WorkingGalleryPage />;
}