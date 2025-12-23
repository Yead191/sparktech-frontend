import { members } from "@/constants/home-data";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="banner"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20  overflow-hidden bg-[#ffffff]"
    >
      {/* Content Wrapper */}
      <div className=" container mx-auto text-center space-y-8">

        {/* Background Video (behind content only) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[220px] h-[220px] md:w-[300px] md:h-[800px] lg:w-[960px] lg:h-[760px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover "
            >
              <source src="/video/STA_Logo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4 z-20 relative">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-[950px] mx-auto">
            <span>Empowering Business Growth Through Smart, </span>
            <span className="text-primary">Scalable Software.</span>
          </h1>
        </div>

        {/* Social proof */}
        <div
          className="
            flex items-center justify-center gap-4 py-4 px-6 rounded-full 
            backdrop-blur-sm shadow-sm 
            border border-white/80 w-fit mx-auto
          "
        >
          <div className="flex -space-x-3 relative">
            {members.map((m, i) => (
              <div
                key={i}
                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-3"
              >
                <Image
                  src={m?.img}
                  height={80}
                  width={80}
                  alt={m?.name}
                  className="border-2 border-white shadow-md hover:z-50 object-cover rounded-full h-10 w-10"
                />
              </div>
            ))}
          </div>

          <div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-xs lg:text-sm font-semibold text-[#121212] text-nowrap">
              2000+ Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
