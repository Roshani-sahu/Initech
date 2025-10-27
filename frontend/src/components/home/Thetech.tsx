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
    <section className="relative max-w-7xl px-8 py-20 mx-auto overflow-hidden">
      {/* Header */}
      <div className="mb-16">
        <h1 className="mb-6 text-6xl text-black font-Kairos">The Tech</h1>
        <p className="max-w-md text-xl text-[#5D5D5D] font-Kairos">
          Take a quick look at the core technology powering our peer-to-peer and cloud sync plans.
        </p>
      </div>

      {/* Main content */}
      <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div className="space-y-16">
          <p className="text-sm font-semibold tracking-widest text-gray-600">
            FOUNDATIONAL TECHNOLOGY
          </p>
          <div className="h-px mb-8 bg-gray-300"></div>

          {/* Feature Buttons */}
          <div className="space-y-12">
            {Object.entries(features).map(([key, item]) => (
              <div
                key={key}
                onClick={() => setActive(key)}
                className="cursor-pointer group"
              >
                <h3
                  className={`mb-4 text-3xl font-aeonik transition-colors duration-500 ${
                    active === key
                      ? "text-black"
                      : "text-[#BFBFBF] group-hover:text-[#555]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xl max-w-xl transition-all duration-500 ${
                    active === key ? "text-[#0A0A0A]" : "text-[#BFBFBF]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        {/* Right column */}
{/* Right column */}
<div className="relative flex items-center justify-center bg-[">
  {/* Background Container */}
  <motion.div
    layoutId="bg"
    className="absolute inset-0 w-[120%] h-[120%] bg-[#F7F8FA] rounded-[2rem] -z-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
  />

  {/* Image Section */}
  <AnimatePresence mode="wait">
    <motion.div
      key={active}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.97 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative flex justify-center items-center w-full max-w-3xl"
    >
      <img
        src={features[active].image}
        alt={features[active].title}
        className="object-contain w-[85%] h-auto"
      />
    </motion.div>
  </AnimatePresence>
</div>


      </div>
    </section>
  );
}
