import { serviceAeas } from "@/data/servicearea";


export const getServiceAreasNameSlug = () => {
  return serviceAeas.map(area => ({
    name: area.name,
    slug: area.slug
  }));
};