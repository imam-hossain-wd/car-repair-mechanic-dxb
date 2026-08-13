import { serviceAreas } from "@/data/servicearea";



export const getServiceAreasNameSlug = () => {
  return serviceAreas.map(area => ({
    name: area.name,
    slug: area.slug
  }));
};