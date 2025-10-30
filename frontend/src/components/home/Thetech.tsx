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
    <section className="relative max-w-full px-6 sm:px-4 py-16 sm:py-12 mx-auto overflow-hidden">
      {/* Header */}
      <div className="md:mb-16 mb-10 text-center sm:text-left ">
        <h1 className="md:mb-9 mb-3 md:text-6xl text-4xl text-black font-Kairos">
          The Tech
        </h1>
        <p className="max-w-[500px] md:text-2xl text-lg text-[#5D5D5D] font-Kairos mx-auto sm:mx-0">
          Take a quick look at the core technology powering our peer-to-peer and cloud sync plans.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 sm:gap-8 items-start">
        {/* Left Column */}
        <div className="md:space-y-16  space-y-8 order-2 lg:order-1">
          <p className="md:mb-10 text-sm font-semibold tracking-widest text-black mb-6">
            FOUNDATIONAL TECHNOLOGY
          </p>

          {Object.keys(features).map((key) => (
            <div
              key={key}
              onClick={() => setActive(key)}
              className={`cursor-pointer transition-all duration-500 max-w-xl pt-5 
  ${
    active === key
      ? "border-t border-black opacity-100"
      : "border-t border-[#0A0A0A1A] opacity-70 hover:border-black hover:opacity-100"
  }`}
            >
              <h3
                className={`md:my-5 mb-2 md:text-3xl text-2xl font-Kairos transition-all duration-300 ${
                  active === key ? "text-[#0A0A0A]" : "text-[#5D5D5D]"
                }`}
              >
                {features[key].title}
              </h3>
              <p
                className={`md:text-base text-base leading-relaxed transition-all duration-300 ${
                  active === key ? "text-[#0A0A0A]" : "text-[#5D5D5D]"
                }`}
              >
                {features[key].text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative flex items-center justify-center w-full max-w-xl bg-gray-100  aspect-4/3  overflow-hidden p-4 sm:p-2">
          
            <AnimatePresence mode="wait">

              <motion.img
                key={active}
                src={features[active].image}
                alt={features[active].title}
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute object-contain w-full h-full "
              />
              
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
