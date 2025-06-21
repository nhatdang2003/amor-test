"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const trajanPro3 = localFont({
    src: './../../../public/fonts/Trajan_Pro_3.otf',
})

const About = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const checkDevice = () => {
            const userAgent = navigator.userAgent
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
            setIsMobile(mobile)
            setIsLoaded(true)
        }

        checkDevice()
        window.addEventListener('resize', checkDevice)
        return () => window.removeEventListener('resize', checkDevice)
    }, [])

    // Prevent hydration mismatch with fixed skeleton
    if (!isLoaded) {
        return (
            <div className='bg-[#FFEEE2]'>
                <div className="w-full relative flex flex-col justify-center items-center pt-[80px]">
                    <div className="w-[399px] h-[556px] bg-gray-200 animate-pulse rounded"></div>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-[#FFEEE2]'>
            <div className="w-full relative flex flex-col justify-center items-center pt-[80px]">
                {isMobile ? (
                    <Image
                        src="/banner-about-mobile.png"
                        alt="Amor mobile banner"
                        width={226}
                        height={317}
                        className="object-cover"
                        priority
                    />
                ) : (
                    <Image
                        src="/banner-about.png"
                        alt="Amor desktop banner"
                        width={399}
                        height={556}
                        className="object-cover"
                        priority
                    />
                )}
                <p className={`mt-10 text-[#824435] text-center z-10 text-2xl font-semibold md:text-[40px] leading-9 md:leading-[56px] uppercase ${trajanPro3.className}`}>
                    Mến chào quý khách,<br />
                    Tôi là Ty Anh Nguyễn
                </p>
            </div>
            <div className="h-[1000px]" />
        </div >
    )
}

export default About