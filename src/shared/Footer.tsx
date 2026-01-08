import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaDribbble, FaFacebookF } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import {
  IoMailUnreadSharp,
} from "react-icons/io5";
import { MdLocalPhone, MdLocationOn } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Upbutton from "./Upbutton";

const socialMedias = [
  { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/sparktechagency0" },
  { name: "Linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/company/sparktechagency/" },
  { name: "Instagram", icon: <RiInstagramFill />, link: "https://www.instagram.com/sparktechagency/" },
  { name: "Behance", icon: <FaSquareBehance />, link: "https://www.behance.net/sparktechagency0" },
  { name: "Dribble", icon: <FaDribbble />, link: "https://dribbble.com/sparktechagency0" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#072a08] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/footerbg.png')" }}>
      <div className="relative z-10  mx-auto  py-10 lg:pt-24 lg:pb-3">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          <div className="flex flex-col items-start space-y-8">
            <div className="space-y-6">
              <Image
                src="/fullLogo.png"
                width={200}
                height={120}
                alt="Sparktech Agency"
                className="w-auto md:h-[92px] h-[82px] object-fill"
              />
              <p className="max-w-[370px] text-gray-300 text-sm md:text-[16px] leading-relaxed">
                Sparktech Agency is a software company dedicated to building reliable, scalable, and human-centered digital solutions engineered for the future.
              </p>
            </div>
          </div>
          {/* Column 2: Contact Info */}
          <div className="flex flex-col lg:items-center items-start">
            <div className="space-y-6">
              <h3 className="text-white md:text-lg text-[16px] font-medium md:mb-5 mb-4">For Contact</h3>
              <div className="space-y-4 text-[16px]">
                <a href="mailto:info@sparktech.agency" className="flex items-center gap-3 text-gray-300 hover:text-[#9ACA3C] transition-colors">
                  <IoMailUnreadSharp className="text-xl shrink-0" />
                  <span className="md:text-[16px] text-sm">info@sparktech.agency</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MdLocalPhone className="text-xl shrink-0" />
                  <span className="md:text-[16px] text-sm">+924-6789786</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300 max-w-[280px]">
                  <MdLocationOn className="text-xl shrink-0 mt-0.5" />
                  <span className="md:text-[16px] text-sm">Aqua Tower 43, Mohakhali C/A, Level - 7, 8, 9, 10 & 11, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-start items-start lg:pl-12">
            <h3 className="text-white md:text-lg text-[16px] font-medium md:mb-5 mb-4">Our Social Platforms</h3>
            <ul className="space-y-2">
              {socialMedias.map((social, index) => (
                <li key={index}>
                  <Link href={social.link} className="flex items-center gap-3 text-gray-300 hover:text-[#9ACA3C] transition-colors group cursor-pointer">
                    <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#9ACA3C] group-hover:text-black transition-colors text-xs p-1">
                      {social.icon}
                    </span>
                    <span className="md:text-[16px] text-sm">{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex-center  w-full md:h-[350px] h-[150px] px-0 md:pt-8 pt-12 ">
          <Image
            src="/spark.png"
            width={1400}
            height={450}
            alt="logo"
            draggable={false}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container pt-5">
          <div className="flex justify-between items-center ">
            <a
              href="/pdf/company-desk.pdf"
              download
              className="group flex items-center gap-4 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#9ACA3C] flex items-center justify-center transition-transform group-hover:scale-110">
                <Download className="text-black w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-light md:text-xl text-lg underline decoration-1 underline-offset-4 decoration-white">Company Deck</span>
                <span className="text-[#8EA18E] md:text-lg text-sm pt-1">PDF, 3MB</span>
              </div>
            </a>
            <p> <Upbutton /></p>
          </div>
          <div className="mt-5 pt-3 border-t border-white/10 flex  justify-center items-center gap-4">
            <p className="text-[#B3B8B5] font-light md:text-[16px] text-xs text-center">
              © Copyright 2025 Sparktech agency All Rights Reserved. | Powered by Sparktech
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
