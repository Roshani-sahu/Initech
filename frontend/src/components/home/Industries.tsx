import React from "react";
import { 
  Stethoscope, 
  GraduationCap, 
  ShoppingCart, 
  Factory, 
  Briefcase, 
  Antenna, 
  Truck, 
  HardHat, 
  Megaphone 
} from "lucide-react";

interface Industry {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const industries: Industry[] = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "We develop services, tools, and systems to provide patients and staff with up-to-date software.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "E-learning solutions that make education flexible, engaging, and highly efficient.",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    desc: "We build stronger connections with customers through web and mobile applications with superior shopping experience and 24/7 availability.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Comprehensive software solutions for supply chain management, inventory management, warehouses, production monitoring, process automation, and more.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    desc: "We develop CRM, management tools, billing products, document management systems, and more. Our solutions are built for professionals by professionals.",
  },
  {
    icon: Antenna,
    title: "Telecoms",
    desc: "We enhance global communication by building solutions for network management, customer experience, IoT, security, automation, and analytics.",
  },
  // {
  //   icon: Truck,
  //   title: "Logistics & Transportation",
  //   desc: "Software for freight reservation, transportation management, and streamlined supply chain operations to keep goods and business moving.",
  // },
  {
    icon: HardHat,
    title: "Engineering & Construction",
    desc: "From advanced BIM solutions and cost estimation tools to IoT integration, we lay the foundation for the construction industry.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Advertising",
    desc: "We build effective Client relationships with marketing automation tools that help optimize strategies, gather insights, and achieve brave goals.",
  },
];

const Industries: React.FC = () => {
  return (
    <section className="px-6 lg:px-24 py-16 sm:py-12 bg-white">
  <div className="max-w-8xl mx-auto">

      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Section (Sticky) */}
        <div className="lg:col-span-1 self-start lg:sticky top-24">
          <h2 className="text-3xl md:text-4xl font-Kairos font-bold leading-tight mb-8">
            <span className="text-black">Industries</span> 
            <br />
            we help
          </h2>

          <a href="mailto:support@initech.com" className="group flex items-center text-normal gap-2 px-3 py-1 md:py-2 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105">
            <div className="w-10 h-10 bg-[#0A0A0A1A] hover:bg-black transition-all duration-500 ease-in-out rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* White Icon (initially visible) */}
              <img
                src="/11.svg"
                alt="white icon"
                className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform group-hover:translate-x-full group-hover:opacity-0"
              />

              {/* Black Icon (slides in on hover) */}
              <img
                src="/1.png"
                alt="black icon"
                className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
            CONTACT US
          </a>

          {/* <button className="px-6 py-2 bg-white mt-3 text-base font-medium text-gray-900 transition-colors border border-gray-200 md:py-2 rounded-xl hover:bg-gray-200 hover:text-gray-700">
            CONTACT US
          </button> */}
        </div>

        {/* Right Section (Industries Grid) */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-18 gap-y-24">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={idx}
                className="relative"
              >
                {/* Content */}
                <div className="flex flex-col items-start">
                <div className="flex flex-row border-b-2 space-x-5 items-center border-gray-200 pb-5 mb-5 w-full">
                  <div className="relative bg-gray-100 p-3 rounded-sm flex items-center justify-center w-14 h-14 overflow-hidden">
                    <IconComponent 
                      className="w-8 h-8 text-black relative z-10" 
                      strokeWidth={2}
                    />
                    {/* Pixelated overlay effect */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `
                          linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)
                        `,
                        backgroundSize: '4px 4px',
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>                    <h3 className="font-semibold text-[#0A0A0A] text-base mb-1">{industry.title}</h3>
                  </div>
                  <div>        
                    <p className="text-sm text-[#5D5D5D] font-inter leading-relaxed">{industry.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
</section>

  );
};

export default Industries;
