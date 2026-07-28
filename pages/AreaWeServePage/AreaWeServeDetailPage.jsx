import { AreasWeHelpDrivers } from "@/components/view/ServiceAreaComponent/AreasWeHelpDrivers";
import { CommonCarProblems } from "@/components/view/ServiceAreaComponent/CommonCarProblems";
import { CTABanner } from "@/components/view/ServiceAreaComponent/CTABanner";
import { FAQSection } from "@/components/view/ServiceAreaComponent/FAQSection";
import { HowWeSolveProblemsMinimal } from "@/components/view/ServiceAreaComponent/HowWeSolveProblems";
import { OurRepairProcess } from "@/components/view/ServiceAreaComponent/OurRepairProcess";
import { ServiceAreaHomeBanner } from "@/components/view/ServiceAreaComponent/ServiceAreaHomeBanner";
import { AreaServices } from "@/components/view/ServiceAreaComponent/ServiceCard/AreaServices";
import { Available247For } from "@/components/view/ServiceAreaComponent/vailable247For";
import { WhatWeCanDoForDrivers } from "@/components/view/ServiceAreaComponent/WhatWeCanDoForDrivers";
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
            <Available247For
                area={area}
            />

            <FAQSection
                area={area}
            />
            <CTABanner
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