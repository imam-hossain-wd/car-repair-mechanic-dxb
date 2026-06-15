
import { Wrench } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <div className="w-[50%] h-[50%] m-auto my-60">
            <Link href="/" className="group relative">
            <div className="flex items-center gap-2.5">
                {/* Icon with animation */}
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transition-all duration-500"></div>
                    <div className="relative w-18 h-18 rounded-xl flex items-center justify-center bg-primary shadow-lg -skew-x-14">
                        <Wrench className="h-12 w-12  text-white" />
                    </div>
                </div>

                {/* Text Logo */}
                <div className="flex flex-col ml-1">
                    <span className="text-4xl font-black tracking-tight text-primary">
                        Car Repair
                    </span>
                    <span className="text-primary text-4xl font-black tracking-tight ">
                        <span className="">Mechanic</span> Dubai
                    </span>
                </div>
            </div>

            {/* Underline effect on hover */}
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 w-[50%] bg-linear-to-r from-primary/0 via-primary to-primary/0 scale-x-100 transition-transform duration-500"></div>
        </Link>
        </div>
    )
}
