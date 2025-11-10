import React, { useState } from "react";
import { motion } from "framer-motion";

const techLogos = [
  "/logos/react.svg",
  "/logos/flutter.svg",
  "/logos/swift.svg",
  "/logos/kotlin.svg",
  "/logos/js.svg",
  "/logos/cpp.svg",
  "/logos/java.svg",
];

const codeSnippets = {
  swift: `// Initialize Initech SDK
let initech = Initech(configuration: .default)
try initech.startSync()

// Store data locally
try await initech.store.execute(
    query: "INSERT INTO devices DOCUMENTS ({ 'status': 'active' })")

// Observe live changes
try initech.store.registerObserver(
    query: "SELECT * FROM devices") { result in
    /* Update UI dynamically */
}

// Sync only relevant data
try initech.sync.registerSubscription(query: "SELECT * FROM devices")`,

  kotlin: `// Initialize Initech SDK
val initech = Initech(DefaultAndroidInitechDependencies(context))
initech.startSync()

// Store local data
initech.store.execute("INSERT INTO devices DOCUMENTS ({ 'status': 'active' })")

// Observe real-time updates
initech.store.registerObserver("SELECT * FROM devices") { result ->
    /* Update UI dynamically */
}

// Sync only what matters
initech.sync.registerSubscription("SELECT * FROM devices")`,

  javascript: `// Initialize Initech SDK
const initech = new Initech(config)
initech.startSync()

// Store data locally
await initech.store.execute("INSERT INTO devices DOCUMENTS ({ 'status': 'active' })")

// Subscribe to live data updates
initech.store.registerObserver("SELECT * FROM devices", (result) => {
  /* Update UI dynamically */
})

// Sync only targeted data
initech.sync.registerSubscription("SELECT * FROM devices")`,

  csharp: `// Initialize Initech SDK
var initech = new Initech(...);
initech.StartSync();

// Store data locally
await initech.Store.ExecuteAsync("INSERT INTO devices DOCUMENTS ({ 'status': 'active' })");

// Observe live updates
var observer = initech.Store.RegisterObserver("SELECT * FROM devices", (result) => {
    // Handle UI update
});

// Sync only relevant data
initech.Sync.RegisterSubscription("SELECT * FROM devices");`,

  cpp: `// Initialize Initech SDK
Initech initech = Initech(...);
initech.start_sync();

// Insert local data
initech.get_store().execute("INSERT INTO devices DOCUMENTS ({ 'status': 'active' })");

// Observe local store updates
auto observer = initech.get_store().register_observer("SELECT * FROM devices",
  [&](QueryResult result) {
    /* Handle update */
  });

// Sync only relevant data
auto subscription = initech.sync().register_subscription("SELECT * FROM devices");`,

  rust: `// Initialize Initech SDK
let initech = Initech::new(config);
initech.start_sync()?;

// Store local data
initech.store().execute("INSERT INTO devices DOCUMENTS ({ 'status': 'active' })", None);

// Observe data changes
let observer = initech.store().register_observer("SELECT * FROM devices", None, move |result: QueryResult| {
    // Handle change
});

// Selective sync
let subscription = initech.sync().register_subscription("SELECT * FROM devices", None);`
};

const languages = ["SWIFT", "KOTLIN", "JAVASCRIPT", "C#", "C++", "RUST"];

const EdgeInfrastructure: React.FC = () => {
  const [activeLang, setActiveLang] = useState("SWIFT");

  return (
   <section className="px-6 lg:px-24 py-16 sm:py-12 bg-white">
  <div className="max-w-8xl mx-auto">

      {/* Header */}
      <div className="max-w-5xl mb-12">
        <h2 className="text-4xl md:text-[51px] font-Kairos  leading-tight">
          Powering Innovation with Modern Engineering
        </h2>
        <p className="text-gray-600 mt-4 text-base  max-w-2xl">
          At Initech, we combine proven engineering practices with emerging
          technologies to design scalable, secure, and future-ready digital
          ecosystems. Our technology stack reflects agility, performance, and a
          commitment to continuous innovation.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative grid md:grid-cols-2 gap-0 border border-gray-200 max-w-full mx-auto overflow-hidden rounded-2xl">
        {/* LEFT COLUMN */}
        <div className="flex flex-col divide-y divide-gray-200 border-r border-gray-200">
          {/* Card 1 */}
          <div className="md:p-20 p-4 flex flex-col justify-between">
            <div className="md:max-w-sm max-w-xs">
              <h3 className="text-xl md:text-[30px] font-Kairos  mb-10">
                Our Core Tech Stack
              </h3>
              <p className="text-gray-600 text-sm font-inter mb-14">
                We leverage cutting-edge frameworks, languages, and tools across
                cloud, mobile, and edge environments — enabling rapid development,
                seamless integrations, and reliable scalability.
              </p>
            </div>

            {/* Tech Logos Carousel */}
            <div className="relative overflow-hidden lg:w-92">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
              <motion.div
                className="flex space-x-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {[...techLogos, ...techLogos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="Tech Logo"
                    className="h-18 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:p-20 p-4">
            <div className="md:max-w-[350px] max-w-xs">
              <h3 className="text-xl md:text-3xl font-Kairos mb-12">
                Our Development Approach
              </h3>
            </div>
            <p className="text-gray-600 max-w-sm font-inter text-sm mb-18">
              We embrace agile methodologies and DevOps practices to deliver
              faster releases, stronger collaboration, and continuous improvement.
              Every solution we build is designed with security, scalability, and
              adaptability in mind.
            </p>

            <div className="flex space-x-6 opacity-40">
              <img src="/logos/apple.svg" alt="Apple" className="h-10" />
              <img src="/logos/android.svg" alt="Android" className="h-10" />
              <img src="/logos/windows.svg" alt="Windows" className="h-10" />
              <img src="/logos/earth.svg" alt="Web" className="h-10" />
              <img src="/logos/linux.svg" alt="Linux" className="h-10" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Code Section) */}
        <div className="md:p-16 py-20 p-4 flex flex-col justify-start">
          <h3 className="text-xl md:text-3xl font-Kairos max-w-xs  mb-14">
            Advanced Tech Stack in Action
          </h3>
          <p className="text-gray-600 md:max-w-md max-w-[330px] font-inter text-sm mb-16">
            Our SDKs and APIs empower developers to create connected applications
            that sync intelligently across devices — reducing latency, improving
            resilience, and removing infrastructure complexity.
          </p>

          {/* Code Box */}
          <div className="bg-black md:w-full w-74 overflow-x-scroll text-white p-5 rounded-3xl text-sm font-mono leading-relaxed">
            {/* Tabs */}
            <div className="flex space-x-3 text-xs text-gray-400 mb-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`${
                    activeLang === lang
                      ? "bg-white text-black"
                      : "hover:text-gray-200"
                  } px-2 py-1 border border-gray-700 rounded transition`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Code Box */}
            <pre className="text-gray-300 border border-gray-700 rounded-lg p-4 overflow-y-scroll whitespace-pre-wrap h-80 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
              {codeSnippets[
                activeLang.toLowerCase().replace("#", "sharp").replace("++", "pp")
              ]}
            </pre>
          </div>
        </div>
      </div>
      </div>
</section>

  );
};

export default EdgeInfrastructure;
