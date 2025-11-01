import React from "react";
import { ArrowRight } from "lucide-react";

interface Feature {
  img: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    img: "/icons/lightning.svg",
    title: "Intelligent Rainbow Connection",
    desc: "Ditto manages multiple P2P and IP-based transports at the same time and optimizes your sync for speed based on available bandwidth.",
  },
  {
    img: "/icons/cloud.svg",
    title: "Opportunistic Cloud Sync",
    desc: "Opportunistically sync with Ditto Server whenever a device within the mesh has internet.",
  },
  {
    img: "/icons/link.svg",
    title: "Bidirectional Cloud Connector",
    desc: "Bidirectionally sync from Ditto Server to your existing systems.",
  },
  {
    img: "/icons/layers.svg",
    title: "Cross-Platform Support",
    desc: "Build and sync across your preferred languages, frameworks, and platforms.",
  },
  {
    img: "/icons/check.svg",
    title: "Conflict Resolution with CRDTs",
    desc: "Simultaneous and offline changes are automatically resolved.",
  },
  {
    img: "/icons/search.png",
    title: "Expressive query system",
    desc: "Find what you need with advanced filters, sorting, transactions.",
  },
  {
    img: "/icons/reactive.svg",
    title: "Reactive Design Patterns",
    desc: "No more polling code for changes, register queries and get updates in real-time.",
  },
  {
    img: "/icons/lock.svg",
    title: "Bring your own authentication",
    desc: "Whether it's JWT, OAuth 2.0 or SAML. Bring your own identity providers.",
  },
];

const CoreFeatures: React.FC = () => {
  return (
    <section className="relative bg-white text-gray-900 px-6 lg:px-10 py-20">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Section (Sticky) */}
        <div className="lg:col-span-1 self-start lg:sticky top-24">
          <h2 className="text-3xl md:text-4xl font-Kairos font-bold leading-tight mb-8">
            Core <br /> Features
          </h2>

        <button className="group flex items-center text-normal gap-2 px-2 py-1 md:py-1 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105">
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
      className="w-5 h-5 absolute  transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0  group-hover:opacity-100"
    />
  </div>

  SEE THE FULL PLATFORM
</button>


                 <button className="px-6 py-2 bg-white mt-3 text-base font-medium text-gray-900 transition-colors border border-gray-200 md:py-2 rounded-xl hover:bg-gray-200 hover:text-gray-700">
              READ THE DOCS
            </button>
        </div>

        {/* Right Section (Features Grid) */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-18 gap-y-24">
          {features.map((f, idx) => (
            <div
              key={idx}
              className=" relative"
            >
              {/* Short Left Border Line */}
              {/* <span className="absolute left-0 top-28 h-6 border-l-4 border-gray-200" /> */}

              {/* Content */}
              <div className="flex flex-col items-start ">
         <div className="flex flex-row border-b-2 space-x-5 items-center border-gray-200 pb-5 mb-5 w-full">
                <div className="bg-gray-100 p-3 rounded-sm flex items-center justify-center w-14 h-14">
                  <img src={f.img} alt={f.title} className="w-6 h-6 object-contain" />
                </div>
            
                  <h3 className="font-semibold text-base mb-1">{f.title}</h3>
                
            </div>
                  <div>        
               <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p></div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
