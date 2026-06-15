import { Loading } from "@/components/shared/Loading/Loading";
import LogoSquare from "@/components/shared/Logo/LogoR";
import { AboutUs } from "@/components/view/AboutUs/AboutUs";
import { BatteriesWeProvide } from "@/components/view/BatteriesWeProvide/BatteriesWeProvide";
import { CarBrandsWeServe } from "@/components/view/CarBrandsWeServe/CarBrandsWeServe";
import { ClientReviews } from "@/components/view/ClientReviews/ClientReviews";
import { EmergancyServices } from "@/components/view/EmergancyServices/EmergancyServices";
import { FAQ } from "@/components/view/FAQ/FAQ";
import { FeaturedServices } from "@/components/view/FeaturedServices/FeaturedServices";
// import { Hero } from "@/components/view/Hero/hero";  
import { HomeHero } from "@/components/view/Hero/HomeHero";
import { QuickPriceGuide } from "@/components/view/QuickPriceGuide/QuickPriceGuide";
import { StillHasQuestionSection } from "@/components/view/StillHasQuestionSection/StillHasQuestionSection";
import { WhyChooseUs } from "@/components/view/WhyChooseUs/WhyChooseUs";

const HomePage = () => {

  return (
    <div>
      <HomeHero />
    
      {/* <EmergancyServices />
      <QuickPriceGuide /> */}
      <FeaturedServices />
      <AboutUs />
      <WhyChooseUs />
      <CarBrandsWeServe />
      <BatteriesWeProvide />
      <FAQ />
      <ClientReviews />
      <StillHasQuestionSection />
    </div>
  );
};

export default HomePage;
