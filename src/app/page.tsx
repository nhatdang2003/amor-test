import Image from "next/image";
import localFont from "next/font/local";
import { headers } from "next/headers";

const trajanPro3 = localFont({
    src: './../../public/fonts/Trajan_Pro_3.otf',
})

async function getDeviceType() {
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || ''
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

    return {
        isMobile,
        image: {
            src: isMobile ? "/banner-mobile.png" : "/banner.png",
            width: isMobile ? 226 : 399,
            height: isMobile ? 317 : 556,
            alt: isMobile ? "Amor mobile banner" : "Amor desktop banner"
        }
    }
}

export default async function Home() {
    const { image } = await getDeviceType()

    return (
        <div>
            <div className="h-[569px] md:h-[598px] w-full relative flex justify-center items-center">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-cover"
                />
                <p className={`text-white text-center z-10 text-2xl md:text-5xl leading-9 md:leading-17 uppercase ${trajanPro3.className}`}>
                    Amor Thảo Mộc <br /> Nơi Lưu Giữ Bình Yên
                </p>
            </div>
            <div className="h-[1000px]" />
        </div>
    );
}
