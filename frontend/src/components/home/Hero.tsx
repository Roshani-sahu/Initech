
const Hero = () => {
  return (
    <section className="relative min-h-screen px-4 py-8 overflow-x-hidden bg-dotted animate-dots sm:px-6 lg:px-8">
      {/* 🔹 Animated dotted background */}

      <div className="relative max-w-full mx-auto">
        {/* Hero Content */}
        <div className="mb-16">
          {/* Main Heading */}
          <h1 className="text-5xl mb-2 font-extralight font-Kairos  text-black sm:text-6xl lg:text-[100px]">
            Resilient Edge Device
            <br />Connectivity.
          </h1>

          {/* Subheading */}
          <h2 className="mb-8 text-5xl font-light font-Kairos  text-[#0A0A0A66] sm:text-6xl lg:text-[100px]">
            Servers & Cloud
            <br />
            <div className="flex flex-row gap-4"> <span> Optional. </span> <div className="max-w-md mt-5 mb-12 text-lg text-black font-extralight">
            The only offline-first database with
            <br />
            built-in peer-to-peer networking
          </div>
          </div>
            
          </h2>

          {/* Description */}
         

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center text-base gap-2 px-2 py-2 font-medium text-gray-900 transition-colors bg-[#EAF044] rounded-xl hover:bg-[#EAF044]">
             
              <img src="/icon.svg" alt="" />  
              TRY DITTO FOR FREE
            </button>
            <button className="px-6 py-3 text-base font-medium text-gray-900 transition-colors border border-gray-200 rounded-xl hover:bg-gray-200 hover:text-gray-700">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>

        {/* Logos Carousel Section */}
        <div className="pb-10 ">
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-around min-w-full gap-16 px-8"
                >
                  {/* Logipad */}
                  <div className="flex items-center justify-center text-gray-600">
                    <svg className="h-8" viewBox="0 0 120 40" fill="none">
                      <text
                        x="0"
                        y="30"
                        fontSize="24"
                        fontWeight="600"
                        fill="currentColor"
                      >
                        Logipad
                      </text>
                    </svg>
                  </div>

                  {/* Japan Airlines */}
                  <div className="flex items-center justify-center text-gray-900">
                    <svg className="h-8" viewBox="0 0 140 40" fill="none">
                      <circle cx="15" cy="20" r="8" fill="currentColor" />
                      <text
                        x="30"
                        y="26"
                        fontSize="16"
                        fontWeight="600"
                        fill="currentColor"
                      >
                        JAPAN AIRLINES
                      </text>
                    </svg>
                  </div>

                  {/* Chick-fil-A */}
                  <div className="flex items-center justify-center text-gray-900">
                    <svg className="h-10" viewBox="0 0 100 40" fill="none">
                      <text
                        x="0"
                        y="28"
                        fontSize="22"
                        fontWeight="400"
                        fill="currentColor"
                        fontFamily="cursive"
                      >
                        Chick-fil-A
                      </text>
                    </svg>
                  </div>

                  {/* ANA */}
                  <div className="flex items-center justify-center text-gray-700">
                    <svg className="h-10" viewBox="0 0 100 40" fill="none">
                      <text
                        x="0"
                        y="28"
                        fontSize="28"
                        fontWeight="700"
                        fill="currentColor"
                      >
                        ANA
                      </text>
                      <rect
                        x="65"
                        y="18"
                        width="30"
                        height="4"
                        fill="currentColor"
                        opacity="0.5"
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
