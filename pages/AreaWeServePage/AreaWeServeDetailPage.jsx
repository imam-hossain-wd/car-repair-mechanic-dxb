import { AreaOverview } from "@/components/view/ServiceAreaComponent/AreaOverview";
import { AreaReview } from "@/components/view/ServiceAreaComponent/AreaReview";
import { AreaServicesGrid } from "@/components/view/ServiceAreaComponent/AreaServicesGrid";
import { AreasWeHelpDrivers } from "@/components/view/ServiceAreaComponent/AreasWeHelpDrivers";
import { CommonCarProblems } from "@/components/view/ServiceAreaComponent/CommonCarProblems";
import { CustomerProblems } from "@/components/view/ServiceAreaComponent/CustomerProblems";
import { EmergencyContent } from "@/components/view/ServiceAreaComponent/EmergencyContent";
import { HowWeSolveProblemsCompact, HowWeSolveProblemsMinimal } from "@/components/view/ServiceAreaComponent/HowWeSolveProblems";
import { InternalLinks } from "@/components/view/ServiceAreaComponent/InternalLinks";
import { NearbyLandmarks } from "@/components/view/ServiceAreaComponent/NearbyLandmarks";
import { OurRepairProcess } from "@/components/view/ServiceAreaComponent/OurRepairProcess";
import { ServiceAreaFaq } from "@/components/view/ServiceAreaComponent/ServiceAreaFaq";
import { ServiceAreaHomeBanner } from "@/components/view/ServiceAreaComponent/ServiceAreaHomeBanner";
import { AreaServices } from "@/components/view/ServiceAreaComponent/ServiceCard/AreaServices";
import { WhatWeCanDoForDrivers } from "@/components/view/ServiceAreaComponent/WhatWeCanDoForDrivers";
import { WhyChooseUs } from "@/components/view/ServiceAreaComponent/WhyChooseUs";
import { WhyDriversChooseUs } from "@/components/view/ServiceAreaComponent/WhyDriversChooseUs";



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
            <OurRepairProcess
                area={area}
            />

            <AreaServices
                area={area}
            />

            <CommonCarProblems
                area={area}
            />
            <HowWeSolveProblemsMinimal
                area={area}
            />
            <AreasWeHelpDrivers
                area={area}
            />
            <WhyDriversChooseUs
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