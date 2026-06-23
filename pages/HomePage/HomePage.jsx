import { AboutUs } from "@/components/view/AboutUs/AboutUs";
import { BatteriesWeProvide } from "@/components/view/BatteriesWeProvide/BatteriesWeProvide";
import { CarBrandsWeServe } from "@/components/view/CarBrandsWeServe/CarBrandsWeServe";
import { ClientReviews } from "@/components/view/ClientReviews/ClientReviews";
import { FAQ } from "@/components/view/FAQ/FAQ";
import { FeaturedServices } from "@/components/view/FeaturedServices/FeaturedServices";
import { HomeHero } from "@/components/view/Hero/HomeHero";
import { Maps } from "@/components/view/Maps/Maps";
import { StillHasQuestionSection } from "@/components/view/StillHasQuestionSection/StillHasQuestionSection";
import { WhyChooseUs } from "@/components/view/WhyChooseUs/WhyChooseUs";
import { WorkGallery } from "@/components/view/WorkGallery/WorkGallery";


const HomePage = () => {

  return (
    <div>
      <HomeHero />
      <FeaturedServices />
      <AboutUs />
      <WhyChooseUs />
      <CarBrandsWeServe />
      <BatteriesWeProvide />
      <WorkGallery />
      <FAQ />
      <ClientReviews />
      <Maps />
      <StillHasQuestionSection />
    </div>
  );
};

export default HomePage;
