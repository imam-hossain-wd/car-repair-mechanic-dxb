import { services } from "@/data/services/services";


export const getServicesNameSlug = () => {
  return services.map(service => ({
    name: service.name,
    slug: service.slug
  }))
};
// import { services } from "@/data/services/services";


// export const getServicesNameSlug = () => {
//   return services.map(service => ({
//     name: service.name,
//     icon: service.service_image
//   }))
// };

// import { serviceAeas } from "@/data/servicearea";


// export const getServiceAreasNameSlug = () => {
//   return serviceAeas.map(area => ({
//     name: area.name,
//     slug: area.slug
//   }));
// };

// import { services } from "@/data/services/services";
// import { serviceAeas } from "@/data/servicearea";



// amr aikne 2ta function ase ekta services name and icon provide kore services teke map kore , r ekta service areas name and slug provide kore 
// amr teke ekta function lagbe jeta amk services name dibe and service name er pasher service areas takbe,, jemon name : car repair(service name) al karama(service areas name), sate amr service icon soho lagbe