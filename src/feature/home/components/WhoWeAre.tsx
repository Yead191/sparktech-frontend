"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoWrapperRef.current) return;

    gsap.fromTo(
      videoWrapperRef.current,
      {
        scale: 1,
        borderRadius: "16px",
        pin: true,
      },
      {
        scale: 1.2,
        borderRadius: "16px",
        ease: "none",
        scrollTrigger: {
          trigger: videoWrapperRef.current,
          start: "50% 50%",
          end: "+=100%",
          scrub: true,
          pin: true,
          // pinSpacing: false,
          anticipatePin: 1,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-[#041504] to-[#09320A]">
      <div className="container pt-20 pb-16 lg:pt-[140px] lg:pb-[73px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <p className="text-[32px] font-semibold text-primary pb-6">
              Sparktech
            </p>
            <p className="section-title font-bold text-[#FDFDFD]!">
              Who We Are?
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-[#D1D1D1] font-normal lg:text-xl max-w-xl">
              We are the Sparktech team: a collaborative group of engineers,
              designers, and strategists. We approach every challenge with
              empathy, united by a passion for building digital solutions that
              are intuitively human-centered, profoundly reliable, and expertly
              engineered to unlock your potential.
            </p>

            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-primary font-medium border border-primary py-4 px-6 rounded-full hover:bg-primary hover:text-white transition-all"
            >
              View More <GoArrowRight size={22} />
            </Link>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className=" w-full py-10">
          <div
            ref={videoWrapperRef}
            className="relative w-full h-full overflow-hidden bg-black rounded-2xl"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              draggable={false}
            >
              <source
                src="https://res.cloudinary.com/dnallbxxa/video/upload/v1766578516/spark-video_1_phuyfz.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
