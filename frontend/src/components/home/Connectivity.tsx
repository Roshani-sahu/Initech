import React from "react";

const ResilientConnectivity: React.FC = () => {
  return (
    <section className="px-6 lg:px-24 py-16 sm:py-12 bg-white">
  <div className="max-w-8xl mx-auto">

      <div className="w-8 h-7 bg-white transition-all duration-500 ease-in-out absolute top-0 -left-2 group-hover:scale-125 group-hover:translate-x-1"></div>

      <div className="container mx-auto px-6 md:px-6 lg:px-4 flex flex-col md:flex-row items-start  justify-between gap-16">

        {/* Left Section */}
        <div className="flex-1 mt-10">
          <p className="text-sm tracking-widest font-aeonik text-gray-400 mb-5 uppercase">
            Building on Strong Values
          </p>

          <h2 className="md:text-5xl text-4xl max-w-3xl font-Kairos font-semibold leading-tight mb-6">
            Our Core Principles at{" "}
            <span className="text-gray-400">Initech</span>
          </h2>

          <p className="text-[#9C9C9C] text-base leading-relaxed max-w-2xl">
            At Initech, our foundation is built on principles that shape how we
            innovate, collaborate, and deliver value to clients across the
            globe.
          </p>
        </div>

        {/* Right Section — Circular Graph */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Outer Circle */}
          {/* <div className="relative w-[420px] h-[420px] rounded-full border border-dashed border-[#F6F6F6] flex items-center justify-center">

         
            <div className="w-[260px] h-[260px] rounded-full border border-dashed border-gray-600 flex items-center justify-center text-center">
              
              <div>
                <div className="flex justify-center mb-2">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <p className="font-medium">Edge Native Connectivity</p>
                <p className="text-sm text-gray-500 mt-1 leading-snug">
                  Powered by Peer-to-Peer<br />and Mesh Networking
                </p>
              </div>
            </div>

            
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-300">
              Latency
            </div>

            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-300">
              Resilience
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[120px] h-[120px] rounded-full border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-300">
              Mobility
            </div>

            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-300">
              Scalability
            </div>

            <div className="absolute left-[15%] bottom-[10%] transform -translate-x-1/2 translate-y-1/2 w-[120px] h-[120px] rounded-full border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-300">
              Simplicity
            </div>
          </div> */}
          <img src="/generated-image.png" className="w-[450px] rounded-xl" alt="" />
        </div>
      </div>
      <div className="w-8 h-7 bg-white transition-all duration-500 ease-in-out absolute bottom-0 -right-2 group-hover:scale-125 group-hover:translate-x-1"></div>

      </div>
</section>

  );
};

export default ResilientConnectivity;
