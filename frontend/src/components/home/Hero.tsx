import DotGrid from './DOTGRID';
const Hero = () => {
  return (
    <section
      className="relative h-auto px-4 overflow-hidden md:py-8 sm:px-6 lg:px-8"
      style={{ width: "100%", position: "relative" }}
    >
      {/* 🟣 DotGrid as background layer */}
      <div className="absolute -top-20 -left-10 right-0 bottom-0 -z-10">
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#d1d5db"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* ✅ Hero Content */}
      <div className="relative mt-24 px-12 max-w-full mx-auto z-10">
        {/* Hero Content */}
        <div className="mb-16">
          <h2 className="text-5xl mb-2 font-extralight font-Kairos text-black sm:text-6xl lg:text-[100px]">
            Empowering Innovation
            <br />
            Through Smart Technology.
          </h2>

          <h4 className="md:mb-8 text-4xl font-light font-Kairos text-[#0A0A0A66] sm:text-5xl lg:text-[70px]">
            Seamless Experiences.
            <br />
            Scalable Systems. 
            <div className="max-w-md mt-6 mb-12 text-lg text-black font-extralight">
              Initech builds intelligent, future-ready software solutions that help
              businesses innovate faster and scale smarter.
            </div>
          </h4>


          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="group flex items-center text-base gap-2 px-2 py-1 md:py-2 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105">
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

              TALK TO AN EXPERT
            </button>

            {/* <button className="px-6 py-2 bg-white text-base font-medium text-gray-900 transition-colors border border-gray-200 md:py-4 rounded-xl hover:bg-gray-200 hover:text-gray-700">
              SCHEDULE A DEMO
            </button> */}
          </div>
        </div>

        {/* ✅ Fixed Logos Carousel Section */}
        
      </div>
    </section>
  );
};

export default Hero;
