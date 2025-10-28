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
        <p className="max-w-lg text-2xl text-[#5D5D5D] font-Kairos " >
          Take a quick look at the core technology powering our peer-to-peer and cloud sync plans.
        </p>
      </div>
      {/* Main Content */}
      <div className="grid items-start grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Foundational Technology */}
          <div>
            <p className="mb-20 text-sm font-semibold tracking-widest text-black">FOUNDATIONAL TECHNOLOGY</p>
            <div className="h-px mb-8 bg-gray-300"></div>

            {/* Offline-first mobile database */}
            <div className="mb-12">
              <h3 className="mb-4 text-2xl font-aeonik text-[#0A0A0A]">Offline-first mobile database</h3>
              <p className="text-xl leading-relaxed text-[#0A0A0A]">
                Even when devices are completely offline, they can always read, write, and process data
              </p>
            </div>

            {/* CRDT-powered conflict resolution */}
            <div className="border-t border-[#0A0A0A1A] pt-5">
              <h3 className="max-w-xs mb-4 text-4xl font-semibold text-[#5D5D5D] font-Kairos">CRDT-powered conflict resolution</h3>
              <p className="max-w-xl text-xl leading-relaxed text-[#5D5D5D]">
                To resolve concurrency conflicts that appear in decentralized models, as well as enable delta-based
                sync, Ditto harnesses the power of conflict-free replicated data type (CRDT) technology
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center w-full max-w-sm p-8 bg-gray-100 rounded-3xl aspect-square">
            {/* Phone mockup */}
            <div className="relative flex flex-col items-center justify-center w-48 p-4 bg-white border-8 border-gray-200 shadow-lg h-96 rounded-3xl">
              {/* Phone screen content */}
              <div className="w-full space-y-3">
                {/* Header placeholder */}
                <div className="w-3/4 h-6 mx-auto bg-gray-200 rounded"></div>

                {/* List items with checkmarks */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-1 h-4 bg-gray-200 rounded"></div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-yellow-300 rounded-full">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
