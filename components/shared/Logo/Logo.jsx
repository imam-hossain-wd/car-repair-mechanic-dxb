
import { Wrench } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href="/" className="group relative">
            <div className="flex items-center gap-2.5">
                {/* Icon with animation */}
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transition-all duration-500"></div>
                    <div className="relative  w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center bg-primary shadow-lg -skew-x-8">
                        <Wrench className="h-4 w-4 md:h-6 md:w-6  text-white" />
                    </div>
                </div>

                {/* Text Logo */}
                <div className="flex flex-col">
                    <span className="text-sm md:text-base font-black tracking-tight text-primary">
                        Car Repair
                    </span>
                    <span className="text-primary text-sm md:text-base font-black tracking-tight -mt-1">
                        <span className="">Mechanic</span> Dubai
                    </span>
                </div>
            </div>

            {/* Underline effect on hover */}
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-primary/0 via-primary to-primary/0 scale-x-100 transition-transform duration-500"></div>
        </Link>
    )
}
