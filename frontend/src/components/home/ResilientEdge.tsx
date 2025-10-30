import DotGrid from "../home/DOTGRID"; // 👈 your animated dotted background component

const ResilientEdge = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center mx-auto h-[540px] bg-black text-center overflow-hidden"
      style={{ width: "96%", position: "relative" }}
    >
      {/* 🟣 Animated Dotted Background Layer */}
      <div className="absolute inset-0 z-10">
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#333333"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* ✅ Hero Content */}
      <div className="relative z-20 px-6">
        <h1 className="text-[#F6F6F6] text-4xl sm:text-5xl md:text-6xl font-Kairos font-bold tracking-tight leading-tight">
          Resilient Edge Device Connectivity.
        </h1>

        <p className="mt-4 text-[#9C9C9C] text-2xl font-Kairos md:text-6xl font-semibold">
          Servers & Cloud Optional.
        </p>

        {/* 🎯 Buttons Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-[#EAF044] text-black font-medium text-sm md:text-base transition-transform duration-300 hover:scale-105">
            {/* Animated Icon with hover effect */}
            <div className="w-10 h-10 bg-[#0A0A0A1A] group-hover:bg-black transition-all duration-300 rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="/11.svg"
                alt="white icon"
                className="w-5 h-5 absolute transition-all duration-300 transform group-hover:translate-x-full group-hover:opacity-0"
              />
              <img
                src="/1.png"
                alt="black icon"
                className="w-5 h-5 absolute transition-all duration-300 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
            START FOR FREE
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-600 text-white font-semibold text-sm md:text-base transition-all duration-300 hover:bg-gray-900  bg-black hover:text-white">
            SCHEDULE A DEMO
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResilientEdge;
