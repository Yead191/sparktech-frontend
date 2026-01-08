"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import RotatingEarthBg from "./RotatingEarthBg";

interface serviceBannerProps {
  isPrimary?: boolean; 
  isBG?: boolean;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function PageBanner({
  isPrimary = false, 
  isBG = false,
  title,
  subtitle,
  children = null,
}: serviceBannerProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (isPrimary && imgRef.current) {
      gsap.to(imgRef.current, {
        rotate: -360,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    }
  }, [isPrimary]);

  return (
    <section
      className={`relative min-h-[70vh] 2xl:min-h-[70vh] px-4  ${
        isPrimary || isBG ? "bg-spark" : "bg-[#EFEDF0]"
      } flex flex-col justify-center ${
        children ? "lg:pt-16" : "pt-0"
      } items-center  text-center   lg:rounded-b-[90px]  relative overflow-hidden z-10`}
    >
      <div className="z-10 bg-transparent">
        <h1
          className={`${
            isPrimary || isBG ? "text-[#FDFDFD]" : "text-[#121212]"
          } font-semibold text-4xl md:text-5xl 2xl:text-[64px] mb-6`}
        >
          {title}
        </h1>
        <p className="text-[#999999] leading-[150%] max-w-[880px] text-sm lg:text-base">
          {subtitle}
        </p>
        {children && <div className="mt-12 2xl:mt-[60px]">{children}</div>}
      </div>

      {isPrimary && (
        <>
          <Image
            ref={imgRef}
            src="/assets/banner-bg.png"
            alt="rocket"
            width={1000}
            height={800}
            draggable={false}
            className="absolute lg:w-[66%] 2xl:w-[52%] bottom-0 left-1/2 -translate-x-1/2 translate-y-[54%] -z-10 opacity-55"
          />

          {/* Black gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-56 pointer-events-none z-10 bg-linear-to-t from-[#041504] to-transparent"></div>
        </>
      )} 

      {isBG && ( 
              <div className="absolute top-[43%] flex items-end justify-center">
        <div className="w-full h-full rounded-full animate-spin-slow">
          <img
            src="/earth.png"
            alt="Earth Background"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      )}
    </section>
  );
}
