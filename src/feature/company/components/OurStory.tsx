import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Images Grid */}
        <div className="flex-1 grid gap-5">
          <div className="grid grid-cols-11 gap-5 w-full">
            <Image
              draggable={false}
              src={"/assets/company/our-story/img2.jpg"}
              width={800}
              height={350}
              alt="Meeting"
              className="col-span-6 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
            <Image
              draggable={false}
              src={"/assets/company/our-story/img1.png"}
              width={1000}
              height={350}
              alt="Meeting"
              className="col-span-5 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
          </div>
          <div className="grid grid-cols-11 gap-5 w-full">
            <Image
              draggable={false}
              src={"/assets/company/our-story/img3.jpg"}
              width={1000}
              height={350}
              alt="Meeting"
              className="col-span-5 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
            <Image
              draggable={false}
              src={"/assets/company/our-story/img7.jpg"}
              width={400}
              height={350}
              alt="Meeting"
              className="col-span-6 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
          </div>
          <div className="grid grid-cols-11 gap-5 w-full">
            <Image
              draggable={false}
              src={"/assets/company/our-story/img5.png"}
              width={800}
              height={350}
              alt="Meeting"
              className="col-span-6 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
            <Image
              draggable={false}
              src={"/assets/company/our-story/img6.jpg"}
              width={800}
              height={350}
              alt="Meeting"
              className="col-span-5 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-5/12 space-y-6 text-start!">
          <h1 className="section-title lg:text-[40px]! text-white!">
            Our Story
          </h1>
          <div className="space-y-8 text-gray leading-relaxed section-subtitle text-[#EBEBEB]! lg:text-lg!">
            <p>
              <span className="font-medium">We are Sparktech, a proud concern of Betopia Group.</span> The agency was founded with the guiding hands of <span className="font-medium">Muhammad Monir Hossain (CEO, Betopia Group)</span> and <span className="font-medium">Rakibul Islam Shiku (Chief Technology Officer, Betopia Group)</span>, who served as the General Manager at the time of inception. Their vision immediately set a new milestone in the tech industry. Today, Sparktech is guided by our honorable <span className="font-medium">Farvez Hossain (General Manager, Sparktech Agency)</span>.

            </p>
            <p>
              Our collective is dedicated to building reliable, scalable, and human-centered digital solutions engineered for the future. Our evolution began in <span className="font-medium">2023</span> with just <span className="font-medium">6 pioneering team members</span>, growing to  <span className="font-medium">48 specialized engineers by 2024</span>. Today, in <span className="font-medium">2025</span>, innovation defines us, with <span className="font-medium"> over 650 dedicated professionals</span> pushing boundaries and upholding the highest standards.
            </p>
            <p>
              With deep roots in the United States and Bangladesh, our global presence is our strength, providing the cultural insight and technical expertise needed to engineer platforms that resonate worldwide and accelerate client growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
