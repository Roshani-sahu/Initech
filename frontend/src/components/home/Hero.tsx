import React from "react";

const Hero = () => {
  return (
    <section className="relative h-auto px-4 overflow-x-hidden md:py-8 bg-dotted animate-dots sm:px-6 lg:px-8">
      <div className="relative max-w-full mx-auto">
        {/* Hero Content */}
        <div className="mb-16">
          <h1 className="text-5xl mb-2 font-extralight font-Kairos text-black sm:text-6xl lg:text-[100px]">
            Resilient Edge Device
            <br />
            Connectivity.
          </h1>

          <h2 className="md:mb-8 text-5xl font-light font-Kairos text-[#0A0A0A66] sm:text-6xl lg:text-[100px]">
            Servers & Cloud
            <br />
            <div className="flex flex-col gap-4 md:flex-row">
              <span>Optional.</span>
              <div className="max-w-md mt-5 mb-12 text-lg text-black font-extralight">
                The only offline-first database with
                <br />
                built-in peer-to-peer networking
              </div>
            </div>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center text-base gap-2 px-2 py-1 md:py-2 font-medium text-gray-900 transition-colors bg-[#EAF044] rounded-xl hover:bg-yellow-400">
              <img src="/icon.svg" alt="" />
              TRY DITTO FOR FREE
            </button>
            <button className="px-6 py-2 text-base font-medium text-gray-900 transition-colors border border-gray-200 md:py-3 rounded-xl hover:bg-gray-200 hover:text-gray-700">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>

        {/* ✅ Fixed Logos Carousel Section */}
        <div className="pb-10 mt-10">
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-around w-[200%] sm:w-full gap-6 sm:gap-10 px-4 sm:px-8 flex-shrink-0"
                >
                  {/* Logipad */}
                  <div className="flex-shrink-0 text-gray-700">
                    <svg className="h-6 sm:h-8 md:h-10" viewBox="0 0 140 40" fill="none">
                      <text
                        x="0"
                        y="30"
                        fontSize="30"
                        fontWeight="700"
                        fill="currentColor"
                      >
                        Logipad
                      </text>
                    </svg>
                  </div>

                  {/* Japan Airlines */}
                  <div className="flex-shrink-0 text-gray-800">
                    <svg className="h-6 sm:h-8 md:h-10" viewBox="0 0 200 40" fill="none">
                      <circle cx="20" cy="20" r="10" fill="currentColor" />
                      <text
                        x="40"
                        y="28"
                        fontSize="20"
                        fontWeight="700"
                        fill="currentColor"
                      >
                        JAPAN AIRLINES
                      </text>
                    </svg>
                  </div>

                  {/* Chick-fil-A */}
                  <div className="flex-shrink-0 text-gray-800">
                    <svg className="h-6 sm:h-8 md:h-10" viewBox="0 0 130 40" fill="none">
                      <text
                        x="0"
                        y="30"
                        fontSize="28"
                        fontWeight="500"
                        fill="currentColor"
                        fontFamily="cursive"
                      >
                        Chick-fil-A
                      </text>
                    </svg>
                  </div>

                  {/* ANA */}
                  <div className="flex-shrink-0 text-gray-800">
                    <svg className="h-6 sm:h-8 md:h-10" viewBox="0 0 120 40" fill="none">
                      <text
                        x="0"
                        y="30"
                        fontSize="30"
                        fontWeight="700"
                        fill="currentColor"
                      >
                        ANA
                      </text>
                      <rect
                        x="75"
                        y="22"
                        width="30"
                        height="4"
                        fill="currentColor"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
