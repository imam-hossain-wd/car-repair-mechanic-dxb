// components/MobileFloatingButtons.jsx
"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MobileFloatingButtons() {
    const { numberCallLink, whatsappCallLink } = SiteConfig;

    return (
        <div className="w-full fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
            <div className="w-full flex justify-center items-center gap-5">
                <Link href={whatsappCallLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <Button className="flex items-center rounded justify-center gap-2 py-5 px-6  bg-green-600 shadow-lg text-lg border border-white">
                        <MessageCircle className="h-8 w-8 text-white" />
                        Whatsapp
                    </Button>
                </Link>


                {/* Call Button */}
                <Link
                    href={numberCallLink}
                    className=""
                    aria-label="Call Now"
                >
                    <Button className="flex items-center rounded justify-center py-5 px-6 bg-primary shadow-lg text-lg border gap-2 border-white">
                        <Phone className="h-8 w-8 text-white" />

                        Call Now
                    </Button>
                </Link>
            </div>
        </div>
    );
}