import React from "react";

const ResilientConnectivity: React.FC = () => {
  return (
    <section className="relative w-[96%] mx-auto bg-[#0A0A0A] text-white py-20 my-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-6 lg:px-4 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Left Section */}
        <div className="">
          <p className="text-sm tracking-widest text-gray-400 mb-4 uppercase">
            THE MISSING LINK
          </p>

          <h2 className="md:text-5xl text-4xl max-w-4xl font-Kairos font-semibold leading-tight ">
            Ditto’s <span className="text-white">resilient connectivity</span>
          </h2>

          <h3 className="md:text-5xl text-4xl font-extralight max-w-lg font-Kairos text-[#9C9C9C] mb-10">
            - the missing link in your enterprise architecture
          </h3>

          <p className="text-[#9C9C9C] text-base leading-relaxed max-w-2xl">
            Improving overall connectivity with peer-to-peer sync and mesh networking 
            eliminates bottlenecks and maximizes these fundamental qualities for your business.
          </p>
        </div>

        {/* Right Section — Circular Graph */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Outer Circle */}
          <div className="relative w-[420px] h-[420px] rounded-full border border-dashed border-[#F6F6F6] flex items-center justify-center">

            {/* Middle Circle */}
            <div className="w-[260px] h-[260px] rounded-full border border-dashed border-gray-600 flex items-center justify-center text-center">
              {/* Center Content */}
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

            {/* Small Circles */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResilientConnectivity;
