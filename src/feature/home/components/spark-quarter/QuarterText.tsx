import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
interface QuarterTextProps {
  name: string;
  quote: string;
  title: string;
}
export default function QuarterText({ name, quote, title }: QuarterTextProps) {
  return (
    <div className="h-[190px] md:h-auto lg:mb-12 max-w-[542px]">
      <p className="text-primary font-medium mb-3 text-3xl">{title}</p>
      <h2
        className={`section-title  lg:text-[48px]! mb-2.5 ${poppins.className}`}
      >
        {name}
      </h2>
      <p className="text-[#8c8989]  text-lg md:text-xl ps-2">{quote}</p>
    </div>
  );
}
