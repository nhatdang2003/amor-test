import Image from "next/image";
import localFont from "next/font/local";

const trajanPro3 = localFont({
    src: './../../public/fonts/Trajan_Pro_3.otf',
})

export default function Home() {
    return (
        <div>
            <div className="h-[569px] md:h-[598px] w-full relative flex justify-center items-center">
                <Image src="/banner.png" alt="banner" fill className="object-cover" />
                <p className={`text-white text-center z-50 text-2xl md:text-5xl leading-9 md:leading-17 uppercase ${trajanPro3.className}`}>
                    Amor Thảo Mộc <br /> Nơi Lưu Giữ Bình Yên
                </p>
            </div>
            <div className="h-[1000px]" />
        </div>
    );
}
