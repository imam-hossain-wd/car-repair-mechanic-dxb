
import { brandLogo } from '@/utils/assets'
import { Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <div className="group relative">
            <div className="flex items-center gap-2.5">

                <Image  src={brandLogo.logo} alt="Car Repair Mechanic Dubai Logo" width={1000} height={1000} quality={100} className="w-48 h-18" />
            </div>
        </div>
    )
}
