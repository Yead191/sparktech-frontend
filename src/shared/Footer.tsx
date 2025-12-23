import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaDribbble, FaFacebookF } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import {
  IoLogoPinterest,
  IoLogoYoutube,
  IoMailUnreadSharp,
} from "react-icons/io5";
import { MdLocalPhone, MdLocationOn } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Upbutton from "./Upbutton";

const socialMedias = [
  { name: "Facebook", icon: <FaFacebookF />, link: "#" },
  { name: "Linkedin", icon: <FaLinkedin />, link: "#" },
  { name: "Instagram", icon: <RiInstagramFill />, link: "#" },
  { name: "Behance", icon: <FaSquareBehance />, link: "#" },
  { name: "Dribble", icon: <FaDribbble />, link: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#072a08] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/footerbg.png')" }}>
      <div className="relative z-10  mx-auto  py-16 lg:pt-24 lg:pb-3">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: Logo & Description & Deck */}
          <div className="flex flex-col items-start space-y-8">
            <div className="space-y-6">
              <Image
                src="/fullLogo.png" // Assuming this is the logo with text "Sparktech Agency"
                width={200}
                height={120}
                alt="Sparktech Agency"
                className="w-auto h-[102px] object-cover"
              />
              <p className="max-w-[370px] text-gray-300 text-sm md:text-[16px] leading-relaxed">
                Sparktech Agency is a software company dedicated to building reliable, scalable, and human-centered digital solutions engineered for the future.
              </p>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col lg:items-center items-start">
            <div className="space-y-6">
              <h3 className="text-white text-lg font-medium">For Contact</h3>
              <div className="space-y-4 text-[16px]">
                <a href="mailto:info@sparktech.agency" className="flex items-center gap-3 text-gray-300 hover:text-[#9ACA3C] transition-colors">
                  <IoMailUnreadSharp className="text-xl shrink-0" />
                  <span className="text-[16px]">info@sparktech.agency</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MdLocalPhone className="text-xl shrink-0" />
                  <span className="text-[16px]">+924-6789786</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300 max-w-[280px]">
                  <MdLocationOn className="text-xl shrink-0 mt-0.5" />
                  <span className="text-[16px]">Aqua Tower 43, Mohakhali C/A, Level - 7, 8, 9, 10 & 11, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Social Platforms */}
          <div className="flex flex-col lg:items-start items-start lg:pl-12">
            <h3 className="text-white text-lg font-medium mb-6">Our Social Platforms</h3>
            <ul className="space-y-2">
              {socialMedias.map((social, index) => (
                <li key={index}>
                  <Link href={social.link} className="flex items-center gap-3 text-gray-300 hover:text-[#9ACA3C] transition-colors group">
                    <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#9ACA3C] group-hover:text-black transition-colors text-xs p-1">
                      {social.icon}
                    </span>
                    <span className="text-[16px]">{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container pt-12">
          <a
            href="/pdf/company-desk.pdf"
            download
            className="group flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#9ACA3C] flex items-center justify-center transition-transform group-hover:scale-110">
              <Download className="text-black w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-light text-xl underline decoration-1 underline-offset-4 decoration-white">Company Deck</span>
              <span className="text-[#8EA18E] text-lg pt-1">PDF, 3MB</span>
            </div>
          </a>
        </div>
        <div className=" flex-center  w-full h-[350px] px-0 ">
          <Image
            src="/spark.png"
            width={1400}
            height={450}
            alt="logo"
            draggable={false}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container">
          <div className="flex justify-end ">
            <p> <Upbutton /></p>
          </div>
          <div className="mt-5 pt-3 border-t border-white/10 flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <p className="text-[#B3B8B5] font-light">
              © Copyright 2025 Sparktech agency All Rights Reserved. | Powered by Sparktech
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
