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
  swift: `// initialize Initech with your account credentials
let initech = Initech(...)
try initech.startSync()

// insert data into your local data store
try await initech.store.execute(
    query: "INSERT INTO cars DOCUMENTS ({ 'color': 'blue' })")

// listen for change to your local data store
try initech.store.registerObserver(
    query: "SELECT * FROM cars"){ result in
    /* Update UI */
};

// sync only the data your device cares about
try initech.sync.registerSubscription(query: "SELECT * FROM cars")`,
  
  kotlin: `// initialize Initech with your account credentials
val initech = Initech(DefaultAndroidInitechDependencies(context))
initech.startSync()

// insert data into your local data store
initech.store.execute("INSERT INTO cars DOCUMENTS ({ 'color': 'blue' })")

// listen for change to your local data store
initech.store.registerObserver("SELECT * FROM cars") { result ->
    /* Update UI */
}

// sync only the data your device cares about
initech.sync.registerSubscription("SELECT * FROM cars")`,

  javascript: `// initialize Initech with your account credentials
const initech = new Initech(...)
initech.startSync()

// insert data into your local data store
await initech.store.execute("INSERT INTO cars DOCUMENTS ({ 'color': 'blue' })")

// listen for change to your local data store
initech.store.registerObserver("SELECT * FROM cars", (result) => {
  /* Update UI */
})

// sync only the data your device cares about
initech.sync.registerSubscription("SELECT * FROM cars")`,

  csharp: `// initialize Initech with your account credentials
var initech = new Initech(...);
initech.StartSync();

// insert data into your local data store
await initech.Store.ExecuteAsync("INSERT INTO cars DOCUMENTS ({ 'color': 'blue' })");

// listen for change to your local data store
var observer = initech.Store.RegisterObserver("SELECT * FROM cars", (result) => {
    // handle change
});

// sync only the data your device cares about
initech.Sync.RegisterSubscription("SELECT * FROM cars");`,

  cpp: `// initialize Initech with your account credentials
Initech initech = Initech(...);
initech.start_sync();

initech.get_store().execute("INSERT INTO cars DOCUMENTS ({ 'color': 'blue' })");

// listen for change to your local data store
auto observer = initech.get_store().register_observer("SELECT * FROM cars",
  [&](QueryResult result) {
    /* handle change */
  });

// sync only the data your device cares about
auto subscription = initech.sync().register_subscription("SELECT * FROM cars");`,

  rust: `// initialize Initech with your account credentials
let initech = Initech::new(config);
initech.start_sync()?;

initech.store().execute("INSERT INTO cars DOCUMENTS ({ 'color': 'blue' })", None);

// listen for change to your local data store
let observer = initech.store().register_observer("SELECT * from cars", None, move |result: QueryResult| {
    // handle change
});

// sync only the data your device cares about
let subscription = initech.sync().register_subscription("SELECT * FROM cars", None);`
};

const languages = ["SWIFT", "KOTLIN", "JAVASCRIPT", "C#", "C++", "RUST"];


const EdgeInfrastructure: React.FC = () => {

  const [activeLang, setActiveLang] = useState("SWIFT");


  return (
    <section className=" bg-white text-gray-900 px-6 lg:px-8 py-24">
      

      {/* Header */}
      <div className="max-w-5xl mb-20">
        <h2 className="text-4xl md:text-5xl font-Kairos font-semibold leading-tight">
          Harness the full power of your existing <br />
          mobile and edge infrastructure
        </h2>
        <p className="text-gray-600 mt-4 text-base max-w-2xl">
          More WiFi isn't the answer. Your mobile and edge devices are more powerful than you realize, 
          capable of advanced networking without the need for new devices, hardware, or networking setups.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative grid md:grid-cols-2 gap-0 border border-gray-200 max-w-full mx-auto overflow-hidden">
            <img src="/border.svg" className='right-0 top-0 absolute w-2 h-2' alt="" />
            <img src="/border.svg" className='left-0 rotate-269 top-0 absolute w-2 h-2' alt="" />
            <img src="/border.svg" className='bottom-0 right-0 rotate-90 absolute w-2 h-2' alt="" />
            <img src="/border.svg" className='bottom-0 left-0 rotate-180 absolute w-2 h-2' alt="" />
            <img src="/border.svg" className='hidden md:block bottom-[49%] left-0 rotate-180 absolute w-2 h-2' alt="" />
                        <img src="/border.svg" className='hidden md:block left-0 rotate-269 top-[51%] absolute w-2 h-2' alt="" />
<img src="/border.svg" className='hidden md:block right-[50%] top-[51%] absolute w-2 h-2' alt="" />
<img src="/border.svg" className='hidden md:block left-[49.4%] rotate-90 top-[50.15%] absolute w-2 h-2' alt="" />
  <img src="/border.svg" className='hidden md:block right-[50%] top-0 absolute w-2 h-2' alt="" />
  <img src="/border.svg" className='hidden md:block left-[50%] rotate-269 -top-px absolute w-2 h-2' alt="" />
  <img src="/border.svg" className='hidden md:block -bottom-px right-[50%] rotate-90 absolute w-2 h-2' alt="" />
  <img src="/border.svg" className='hidden md:block bottom-0 left-[50%] rotate-180 absolute w-2 h-2' alt="" />
        {/* LEFT COLUMN */}
        <div className="flex flex-col divide-y divide-gray-200 border-r border-gray-200">
           
          {/* Card 1 */}
          <div className="md:p-20 p-4 flex flex-col justify-between">
            <div className="md:max-w-sm max-w-xs">
              <h3 className="text-xl md:text-[30px] font-Kairos font-semibold mb-10">
                Develop in your preferred language or framework.
              </h3>
              <p className="text-gray-600 text-base mb-14">
                Our APIs embrace reactive principles with excellent support for Flutter, React, SwiftUI,
                Jetpack Compose, and more.
              </p>
            </div>

            {/* Tech Logos Carousel */}
            <div className="relative overflow-hidden lg:w-92">
  {/* Left gradient fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10" />

  {/* Right gradient fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10" />

  {/* Scrolling logos */}
  <motion.div
    className="flex space-x-10"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
  >
    {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
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
          <div className="md:p-20 p-4 ">
            <div className="md:max-w-[350px] max-w-xs">
            <h3 className="text-xl md:text-3xl font-Kairos font-semibold mb-12 ">
              Peer-to-Peer sync across all your platforms.
            </h3></div>
            <p className="text-gray-600 max-w-xs text-base mb-18">
              Ditto’s all-in-one platform has everything you need to build reliable systems that can 
              maintain interoperability across diverse device types and platforms.
            </p>

            <div className="flex space-x-6 opacity-40">
              <img src="/logos/apple.svg" alt="Apple" className="h-10" />
              <img src="/logos/android.svg" alt="Android" className="h-10" />
              <img src="/logos/windows.svg" alt="Windows" className="h-10" />
              <img src="/logos/earth.svg" alt="Windows" className="h-10" />
              <img src="/logos/linux.svg" alt="Linux" className="h-10" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN card 3 (Code Card) */}
        <div className="md:p-16 py-20 p-4 flex flex-col justify-start">
          <h3 className="text-xl md:text-3xl font-Kairos max-w-xs font-semibold mb-14">
            Bridge connectivity gaps without added hardware or complexity.
          </h3>
          <p className="text-gray-600 md:max-w-md max-w-[300px]  text-base  mb-16">
            Once Ditto is installed in your applications, write a few simple queries, and watch your mobile 
            and edge devices automatically form mesh networks and share data directly without the need for 
            servers or access points.
          </p>

          {/* Code Box */}
          <div className="bg-black md:w-full w-74 overflow-x-scroll text-white p-5 rounded-3xl text-sm font-mono leading-relaxed">
            {/* Tabs */}
            <div className="flex space-x-3 text-xs  text-gray-400 mb-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`${
                    activeLang === lang
                      ? "bg-white text-black"
                      : "hover:text-gray-200"
                  } px-2 py-1 border  border-gray-700 rounded transition`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Code Box */}
            <pre className="text-gray-300 border border-gray-700 rounded-lg p-4 overflow-y-scroll whitespace-pre-wrap h-80 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
              {codeSnippets[activeLang.toLowerCase().replace("#", "sharp").replace("++", "pp")]}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeInfrastructure;
