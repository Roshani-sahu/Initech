import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

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
    webdev: {
      title: "Website Development",
      text: "We build fast, responsive, and scalable websites using modern technologies to create seamless digital experiences.",
      // image: "/webdev.webp",
    },
    appdev: {
      title: "App Development",
      text: "Our team crafts high-performance mobile and cross-platform apps tailored to your business goals and user needs.",
      // image: "/appdev.webp",
    },
    aiml: {
      title: "AI & ML Services",
      text: "Leverage artificial intelligence and machine learning to automate processes, gain insights, and enhance decision-making.",
      // image: "/aiml.webp",
    },
    iot: {
      title: "IoT Solutions",
      text: "We design and deploy IoT ecosystems that connect devices, collect data, and enable intelligent automation.",
      // image: "/iot.webp",
    },
    automation: {
      title: "AI Automations",
      text: "Automate repetitive workflows and boost efficiency using AI-driven automation systems built for scalability.",
      // image: "/automation.webp",
    },
    consultancy: {
      title: "Tech Consultancy",
      text: "Our experts help you define strategies, adopt new technologies, and architect robust, future-ready digital systems.",
      // image: "/consultancy.webp",
    },
  };

  return (
    <section className="px-4 sm:px-6 lg:px-24 py-16 sm:py-12 bg-white">
  <div className="max-w-8xl mx-auto">

      {/* Header */}
      <div className="md:mb-16 mb-10 text-center sm:text-left ">
        <h1 className="md:mb-9 mb-3 md:text-[51px] text-4xl text-black font-Kairos">
           Services we Provide
        </h1>
        <p className="max-w-[700px] md:text-base font-normal text-base text-black font-inter mx-auto sm:mx-0">
          At Initech, we combine design, engineering, and strategy to build scalable digital solutions for modern businesses.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-12 sm:gap-8 items-start">
        {/* Left Column */}
        {/* <div className="md:space-y-16  space-y-8 order-2 lg:order-1"> */}
          {/* <p className="md:mb-10 text-sm font-semibold tracking-widest text-black mb-6">
            FOUNDATIONAL TECHNOLOGY
          </p> */}

          {Object.keys(features).map((key) => (
            <div
              key={key}
              onClick={() => setActive(key)}
              className={`cursor-pointer transition-all duration-500 max-w-xl pt-5 
                ${active === key
                  ? "border-t border-black opacity-100"
                  : "border-t border-black opacity-100"
                }`}
            >
              <h3
                className={`md:my-5 mb-2 md:text-3xl text-2xl font-Kairos transition-all duration-300 ${active === key ? "text-[#0A0A0A]" : "text-[#0A0A0A]"
                  }`}
              >
                {features[key].title}
              </h3>
              <p
                className={`md:text-base font-inter  text-base leading-relaxed transition-all duration-300 ${active === key ? "text-[#0A0A0A]" : "text-[#0A0A0A]"
                  }`}
              >
                {features[key].text}
              </p>
            </div>
          ))}
        {/* </div> */}

        {/* Right Column */}
        {/* <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative flex items-center justify-center w-full max-w-xl bg-gray-100  aspect-4/3  overflow-hidden p-4 sm:p-2">

            <AnimatePresence mode="wait">

              <motion.img
                key={active}
                // src={features[active].image}
                alt={features[active].title}
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute object-contain w-full h-full "
              />

            </AnimatePresence>
          </div>
        </div> */}
      </div>
     </div>
</section>

  );
}
