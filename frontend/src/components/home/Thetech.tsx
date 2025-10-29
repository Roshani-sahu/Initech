import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TechSection />
    </main>
  );
}

function TechSection() {
  const [active, setActive] = useState("offline");

  const features = {
    offline: {
      title: "Offline-first mobile database",
      
      text: "Even when devices are completely offline, they can always read, write, and process data",
      image: "/phoneimg.webp",
    },
    crdt: {
      title: "CRDT-powered conflict resolution",
      text: "To resolve concurrency conflicts that appear in decentralized models, as well as enable delta-based sync, Ditto harnesses the power of conflict-free replicated data type (CRDT) technology",
      image: "/phonelap.webp",
    },
  };

  return (
    <section className="relative max-w-15xl px-8 py-20 mx-auto overflow-hidden">
      {/* Header */}
      <div className="mb-16">
        <h1 className="mb-6 text-6xl text-black font-Kairos">The Tech</h1>
        <p className="max-w-lg text-2xl text-[#5D5D5D] font-Kairos">
          Take a quick look at the core technology powering our peer-to-peer and cloud sync plans.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid items-start grid-cols-2 ">
        {/* Left Column */}
        <div className="space-y-12">
          <p className="mb-20 text-sm font-semibold tracking-widest text-black">
            FOUNDATIONAL TECHNOLOGY
          </p>
          <div className="h-px mb-8 bg-gray-300"></div>

          {/* Feature buttons */}
          {Object.keys(features).map((key) => (
            <div
              key={key}
              onClick={() => setActive(key)}
              className={`cursor-pointer transition-all duration-500 border-t border-[#0A0A0A1A] pt-5 ${
                active === key ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <h3
                className={`mb-4 text-3xl font-Kairos transition-all duration-300 ${
                  active === key ? "text-[#0A0A0A]" : "text-[#5D5D5D]"
                }`}
              >
                {features[key].title}
              </h3>
              <p
                className={`text-xl leading-relaxed transition-all duration-300 ${
                  active === key ? "text-[#0A0A0A]" : "text-[#5D5D5D]"
                }`}
              >
                {features[key].text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center">
          {/* Enlarged image container */}
          <div className="relative flex items-center justify-center w-full max-w-3xl p-4 bg-gray-150 rounded-[2.5rem] aspect-[4/3] shadow-lg ml-[30px]mt-[-80px]  z-10 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={features[active].image}
                alt={features[active].title}
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute object-contain w-[400%] h-[400%] rounded-2xl"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
