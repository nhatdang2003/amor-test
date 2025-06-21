import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const trajanPro3 = localFont({
    src: './../../../public/fonts/Trajan_Pro_3.otf',
})

const About = () => {

    return (
        <div className='bg-[#FFEEE2]'>
            <div className="w-full relative flex flex-col justify-center items-center pt-[80px]">
                <Image src="/banner-about.png" alt="banner" width={399} height={556} className="object-cover hidden md:block" />
                <Image src="/banner-about-mobile.png" alt="banner" width={226} height={317} className="object-cover block md:hidden" />
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