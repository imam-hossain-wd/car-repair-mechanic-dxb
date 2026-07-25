import { AreaOverview } from "@/components/view/ServiceAreaComponent/AreaOverview";
import { AreaReview } from "@/components/view/ServiceAreaComponent/AreaReview";
import { AreaServicesGrid } from "@/components/view/ServiceAreaComponent/AreaServicesGrid";
import { CommonCarProblems } from "@/components/view/ServiceAreaComponent/CommonCarProblems";
import { CustomerProblems } from "@/components/view/ServiceAreaComponent/CustomerProblems";
import { EmergencyContent } from "@/components/view/ServiceAreaComponent/EmergencyContent";
import { InternalLinks } from "@/components/view/ServiceAreaComponent/InternalLinks";
import { NearbyLandmarks } from "@/components/view/ServiceAreaComponent/NearbyLandmarks";
import { ServiceAreaFaq } from "@/components/view/ServiceAreaComponent/ServiceAreaFaq";
import { ServiceAreaHomeBanner } from "@/components/view/ServiceAreaComponent/ServiceAreaHomeBanner";
import { WhatWeCanDoForDrivers } from "@/components/view/ServiceAreaComponent/WhatWeCanDoForDrivers";
import { WhyChooseUs } from "@/components/view/ServiceAreaComponent/WhyChooseUs";


export default function AreaWeServeDetailPage({
    area,
}) {

    return (
        <div className="">
            <ServiceAreaHomeBanner
                area={area}
            />
            <WhatWeCanDoForDrivers
                area={area}
            />
            <CommonCarProblems
                area={area}
            />
        </div>
    );
}


    //  <AreaOverview
    //             area={area}
    //         />
    //         <EmergencyContent
    //             area={area}
    //         />
    //         <AreaServicesGrid
    //             area={area}
    //         />
    //         <WhyChooseUs
    //             area={area}
    //         />
    //         <CustomerProblems
    //             area={area}
    //         />
    //         <NearbyLandmarks
    //             area={area}
    //         />
    //         <ServiceAreaFaq
    //             area={area}
    //         />
    //         <InternalLinks
    //             area={area}
    //         />
    //         <AreaReview
    //             area={area}
    //         />