import { AreaOverview } from "@/components/view/ServiceAreaComponent/AreaOverview";
import { AreaServicesGrid } from "@/components/view/ServiceAreaComponent/AreaServicesGrid";
import { CustomerProblems } from "@/components/view/ServiceAreaComponent/CustomerProblems";
import { EmergencyContent } from "@/components/view/ServiceAreaComponent/EmergencyContent";
import { NearbyLandmarks } from "@/components/view/ServiceAreaComponent/NearbyLandmarks";
import { ServiceAreaFaq } from "@/components/view/ServiceAreaComponent/ServiceAreaFaq";
import { ServiceAreaHomeBanner } from "@/components/view/ServiceAreaComponent/ServiceAreaHomeBanner";
import { WhyChooseUs } from "@/components/view/ServiceAreaComponent/WhyChooseUs";


export default function AreaWeServeDetailPage({
    area,
}) {

    return (
        <div className="">
            <ServiceAreaHomeBanner
                area={area}
            />
            <AreaOverview
                area={area}
            />

            <EmergencyContent
                area={area}
            />
            <AreaServicesGrid
                area={area}
            />
            <WhyChooseUs
                area={area}
            />
            <CustomerProblems
                area={area}
            />
            <NearbyLandmarks
                area={area}
            />
            <ServiceAreaFaq
        area={area}
      />

      
        </div>
    );
}