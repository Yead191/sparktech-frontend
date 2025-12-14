import React from "react";
import LogoMarquee from "./LogoMarquee";

const SuccessfulProject = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 lg:py-[100px]">
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h1 className="section-title">
          {/* Our Successful <span className="text-primary">Project</span>   */}
          Trusted by industry leaders <span className="text-primary">Worldwide</span>
        </h1>
        <p className="section-subtitle mt-6">
          At Sparktech, we don't just complete projects; we engineer scalable, human-centered solutions that define new industry standards and drive measurable client success.
        </p>
      </div>

      <LogoMarquee />
    </div>
  );
};

export default SuccessfulProject;
