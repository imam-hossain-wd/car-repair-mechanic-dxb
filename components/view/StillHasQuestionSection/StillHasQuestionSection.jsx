"use client";

import { SiteConfig } from "@/config/siteConfig";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export function StillHasQuestionSection() {
    return (
        <div className="my-8 container md:w-[90%] mx-auto p-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-xl text-center border border-primary/20">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Still have questions?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
                Our team is ready to help you 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-5">
                <Link
                    href={`tel:${SiteConfig.displayNumber}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-lg font-medium rounded-lg hover:bg-primary/90 transition-all"
                >
                    <Phone className="h-5 w-5" />
                    Call Now
                </Link>
                <Link
                    href={`https://wa.me/${SiteConfig.displayNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition-all"
                >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                </Link>
                <Link
                    href={`mailto:${SiteConfig.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-600 text-white text-lg font-medium rounded-lg hover:bg-gray-700 transition-all"
                >
                    <Mail className="h-5 w-5" />
                    Email Us
                </Link>
            </div>
        </div>
    );
}