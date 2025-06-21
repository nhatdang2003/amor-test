import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import { headers } from 'next/headers'

const trajanPro3 = localFont({
    src: './../../../public/fonts/Trajan_Pro_3.otf',
})

async function getDeviceType() {
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || ''
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

    return {
        isMobile,
        image: {
            src: isMobile ? "/banner-about-mobile.png" : "/banner-about.png",
            width: isMobile ? 226 : 399,
            height: isMobile ? 317 : 556,
            alt: isMobile ? "Amor mobile banner" : "Amor desktop banner"
        }
    }
}

const About = async () => {
    const { image } = await getDeviceType()

    return (
        <div className='bg-[#FFEEE2]'>
            <div className="w-full relative flex flex-col justify-center items-center pt-[80px]">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-cover"
                    priority
                />
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