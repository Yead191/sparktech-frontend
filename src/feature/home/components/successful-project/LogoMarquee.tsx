"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logosTop = [
    "/assets/logos/logo1.png",
    "/assets/logos/logo2.png",
    "/assets/logos/logo3.png",
    "/assets/logos/logo4.png",
    "/assets/logos/logo5.jpeg",
    "/assets/logos/logo6.jpeg",
    "/assets/logos/logo7.jpg",
    "/assets/logos/logo8.png",
    "/assets/logos/logo9.png",
    "/assets/logos/logo10.png",
    "/assets/logos/logo11.png",
    "/assets/logos/logo12.png",
    "/assets/logos/logo13.png",
    "/assets/logos/logo14.png",
    "/assets/logos/logo15.png",
];

const logosBottom = [
    "/assets/logos/logo16.png",
    "/assets/logos/logo17.png",
    "/assets/logos/logo18.png",
    "/assets/logos/logo19.png",
    "/assets/logos/logo20.png",
    "/assets/logos/logo21.png",
    "/assets/logos/logo22.png",
    "/assets/logos/logo23.png",
    "/assets/logos/logo24.png",
    "/assets/logos/logo25.png",
    "/assets/logos/logo26.png",
    "/assets/logos/logo27.png",
    "/assets/logos/logo28.png",
    "/assets/logos/logo29.png",
];

// Small logo card component
const LogoCard = ({ src }: { src: string }) => {
    return (
        <div className="mx-6 flex items-center justify-center">
            <Image
                src={src}
                className="w-36 h-20 object-contain  hover:grayscale-0 transition cursor-pointer"
                alt="logo"
                width={200}
                height={100}
            />
        </div>
    );
};
export default function LogoMarquee() {
    return (
        <div className="w-full space-y-9">
            {/* Top Row- left */}
            <Marquee
                pauseOnHover={true}
                speed={50}
                gradient={true}
                autoFill
                direction="right"
            >
                {logosTop?.map((src, i) => (
                    <LogoCard key={i} src={src} />
                ))}
            </Marquee>

            {/* Bottom Row- right */}
            <Marquee
                pauseOnHover={true}
                speed={50}
                gradient={true}
                direction="left"
                autoFill
            >
                {logosBottom?.map((src, i) => (
                    <LogoCard key={i} src={src} />
                ))}
            </Marquee>
        </div>
    );
}