import { PiHandshake, PiUsersThreeDuotone } from "react-icons/pi";
import { FaLaptopCode, FaSmile } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { GiGlobe } from "react-icons/gi";
import { BrainCircuit, ChartColumnBig } from "lucide-react";

const members = [
  { name: "Sarah Lee", img: "/assets/hero/members/user1.jpg" },
  { name: "Mithila Khan", img: "/assets/hero/members/user2.jpg" },
  { name: "Nadir Hossain", img: "/assets/hero/members/user3.jpg" },
  { name: "Asaduzzaman", img: "/assets/hero/members/user4.jpg" },
];
const BoostBusinessData = [
  {
    title: "Average Revenue Growth",
    value: "2xReal Growth",
    description:
      "Real Results. We don't just write software; we strategically engineer it to make a measurable difference on your bottom line and accelerate your growth.",
    icon: <ChartColumnBig />,
  },
  {
    title: "Team Growth",
    value: "650+",
    description:
      "Our Talent is Your Advantage. As our highly skilled team expands, we guarantee the dedicated capacity and consistent expertise needed to confidently scale your most ambitious projects.",
    icon: <PiUsersThreeDuotone className="" />,
  },
  {
    title: "Global Presence",
    value: "10+",
    description:
      "Designing for Everyone. Our experience across 10+ global locations means we build intuitive, reliable platforms that truly connect with diverse users, wherever they are.",
    icon: <GiGlobe className="" />,
  },
  {
    title: "Talents Retained",
    value: "98%",
    description:
      "Consistency You Can Trust. We invest deeply in our people. When you work with us, you benefit from stable teams and deep, long-term knowledge of your project.",
    icon: <BrainCircuit className="" />,
  },
];

const statsData = [
  {
    id: 1,
    icon: <PiHandshake />,
    value: "2000+",
    title: "Clients",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    value: "5000+",
    title: "Successful Project",
  },
  {
    id: 3,
    icon: <FaAward />,
    value: "80%",
    title: "Repeat Business",
  },
  {
    id: 4,
    icon: <FaSmile />,
    value: "99%",
    title: "Customer Satisfaction",
  },
];

const OurEvolutionData = [
  {
    color: "#6D8F2B",
    children: (
      <div >
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">2023</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3">
          <span className="font-medium"> The Foundation is Engineered. </span> <br />
          A vision sparked—and SparkTech was founded with 6 <span className="font-medium"> pioneering team members. </span> Our mission was clear: to empower businesses through technology that's fast, reliable, and future-ready. We focused on crafting smart digital solutions that deliver real impact from day one.
        </p>
      </div>
    ),
  },
  {
    color: "#6D8F2B",
    children: (
      <div>
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">2024</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3">
          <span className="font-medium">Scaling with Precision. </span> <br />
          Growth became our fuel, expanding the team to <span className="font-medium">48 specialized engineers and architects. </span> We amplified our capabilities—from scalable web and app development to AI integration—building strategic partnerships and transforming ambitious ideas into digital experiences that truly scale.
        </p>
      </div>
    ),
  },
  {
    color: "#6D8F2B",
    children: (
      <div>
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">2025</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3 ">
          <span className="font-medium"> Defining Industry Standards. </span> <br />
          Innovation defines who we are today. Our collective has grown to <span className="font-medium"> over 650 dedicated professionals. </span> We continue to push boundaries with intelligent solutions that merge strategic design and technical precision, making noise and shaping the future of digital product engineering.
        </p>
      </div>
    ),
  },
  {
    color: "#6D8F2B",
    children: (
      <div>
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">In Future</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3 ">
          As we move forward, our focus is on sustainability, innovation, and human-centered technology.
          SparkTec aims to lead the next wave of digital evolution — building smarter, faster, and more connected experiences for the world.
        </p>
      </div>
    ),
  },
];

export { members, statsData, BoostBusinessData, OurEvolutionData };
