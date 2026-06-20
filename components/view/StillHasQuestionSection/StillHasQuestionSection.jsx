"use client";

import { SiteConfig } from "@/config/siteConfig";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export function StillHasQuestionSection() {
    return (
        <div className="my-5 w-[92%] md:w-[90%] mx-auto p-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-xl text-center border border-primary/20">
            <h3 className="text-[25px] md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Still have questions?
            </h3>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-5">
                Our team is ready to help you 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                <Link
                    href={`tel:${SiteConfig.displayNumber}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-white text-md md:text-lg font-medium rounded-lg hover:bg-primary/90 transition-all"
                >
                    <Phone className="h-4 w-4 md:h-5 md:w-5" />
                    Call Now
                </Link>
                <Link
                    href={SiteConfig?.whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2 bg-green-600 text-white text-md md:text-lg font-medium rounded-lg hover:bg-green-700 transition-all"
                >
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                    WhatsApp
                </Link>
            </div>
        </div>
    );
}