import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen px-4 py-8 overflow-hidden bg-gray-50 sm:px-6 lg:px-8">
      {/* 🔹 Animated dotted background */}
      <div className="absolute inset-0 -z-10 bg-dotted animate-dots"></div>

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
            <br />Optional.
          </h2>

          {/* Description */}
          <p className="max-w-md mb-12 text-lg text-gray-900">
            The only offline-first database with
            <br />
            built-in peer-to-peer networking
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 font-semibold text-gray-900 transition-colors bg-yellow-300 rounded-md hover:bg-yellow-400">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              TRY DITTO FOR FREE
            </button>
            <button className="px-6 py-3 font-medium text-gray-900 transition-colors hover:text-gray-700">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>

        {/* Logos Carousel Section */}
        <div className="pt-12 border-t border-gray-300">
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

      {/* 🔹 Inline Tailwind custom styles */}
      <style jsx>{`
        /* Dotted background pattern */
        .bg-dotted {
          background-image: radial-gradient(#d1d5db 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* Hover animation effect */
        .bg-dotted:hover {
          animation: pulseDots 6s linear infinite;
        }

        @keyframes pulseDots {
          0% {
            background-size: 24px 24px;
            background-position: 0 0;
          }
          50% {
            background-size: 28px 28px;
            background-position: 4px 4px;
          }
          100% {
            background-size: 24px 24px;
            background-position: 0 0;
          }
        }

        /* Continuous background floating motion */
        @keyframes dots {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        .animate-dots {
          animation: dots 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
