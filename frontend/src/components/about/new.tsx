// "use client";

// import { Rocket, Globe, Sparkles, ArrowRight, Play, Pause } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";

// function OurImpact() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

//   const impacts = [
//     {
//       id: 1,
//       icon: Rocket,
//       title: "Digital Transformation",
//       subtitle: "Accelerating Growth",
//       description: "We've revolutionized how businesses operate in the digital age, creating seamless experiences that drive unprecedented growth.",
//       metric: "300%",
//       metricLabel: "Average ROI Increase",
//       gradient: "from-purple-500 via-pink-500 to-red-500",
//       bgColor: "bg-purple-50",
//       projects: ["E-commerce Platform", "AI Analytics", "Cloud Migration"]
//     },
//     {
//       id: 2,
//       icon: Globe,
//       title: "Global Reach",
//       subtitle: "Connecting Worlds",
//       description: "Our solutions span across continents, breaking barriers and creating connections that matter in today's interconnected world.",
//       metric: "50+",
//       metricLabel: "Countries Served",
//       gradient: "from-blue-500 via-cyan-500 to-teal-500",
//       bgColor: "bg-blue-50",
//       projects: ["Global Networks", "Cross-border Solutions", "Cultural Integration"]
//     },
//     {
//       id: 3,
//       icon: Sparkles,
//       title: "Innovation Hub",
//       subtitle: "Future-Ready Solutions",
//       description: "At the forefront of technological advancement, we create tomorrow's solutions today, pushing the boundaries of what's possible.",
//       metric: "100+",
//       metricLabel: "Patents Filed",
//       gradient: "from-yellow-400 via-orange-500 to-red-500",
//       bgColor: "bg-yellow-50",
//       projects: ["AI Research", "Blockchain Tech", "IoT Innovation"]
//     }
//   ];

//   // Auto-rotate functionality
//   useEffect(() => {
//     if (!isPlaying) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % impacts.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isPlaying, impacts.length]);

//   // Mouse tracking
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
//     >
//       {/* Dynamic Background */}
//       <motion.div 
//         className="absolute inset-0 opacity-20"
//         animate={{
//           background: [
//             "radial-gradient(circle at 20% 20%, #EAF044 0%, transparent 50%)",
//             "radial-gradient(circle at 80% 80%, #3B82F6 0%, transparent 50%)",
//             "radial-gradient(circle at 50% 50%, #EF4444 0%, transparent 50%)"
//           ]
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Floating Cursor Follower */}
//       <motion.div
//         className="fixed w-4 h-4 bg-[#EAF044] rounded-full pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: mousePosition.x - 8,
//           y: mousePosition.y - 8,
//         }}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           {/* <motion.div
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
//             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
//           >
//             <Sparkles className="w-5 h-5 text-[#EAF044]" />
//             <span className="text-white font-medium">Our Global Impact</span>
//           </motion.div> */}
          
//           <motion.h1 
//             className="text-5xl md:text-7xl font-Kairos font-bold text-white mb-6 leading-tight"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Transforming
//             <motion.span 
//               className="block bg-gradient-to-r from-[#EAF044] to-yellow-300 bg-clip-text text-transparent"
//               animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               Tomorrow
//             </motion.span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             Discover how we're reshaping industries, empowering communities, and building the future through innovative technology solutions.
//           </motion.p>
//         </motion.div>

//         {/* Interactive 3D Carousel */}
//         <div className="relative h-[600px]  mb-20">
          

//           {/* 3D Cards */}
//           <div className="relative w-full h-full flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               {impacts.map((impact, index) => {
//                 const Icon = impact.icon;
//                 const offset = index - activeIndex;
//                 const absOffset = Math.abs(offset);
                
//                 return (
//                   <motion.div
//                     key={impact.id}
//                     className="absolute w-80 h-96 cursor-pointer"
//                     initial={{ 
//                       x: offset * 300,
//                       z: -absOffset * 100,
//                       opacity: absOffset > 1 ? 0 : 1,
//                       scale: absOffset === 0 ? 1 : 0.8 - absOffset * 0.1
//                     }}
//                     animate={{ 
//                       x: offset * 300,
//                       z: -absOffset * 100,
//                       opacity: absOffset > 1 ? 0 : 1,
//                       scale: absOffset === 0 ? 1 : 0.8 - absOffset * 0.1,
//                       rotateY: offset * 15
//                     }}
//                     transition={{ 
//                       duration: 0.6,
//                       type: "spring",
//                       stiffness: 100
//                     }}
//                     onClick={() => setActiveIndex(index)}
//                     whileHover={{ 
//                       scale: absOffset === 0 ? 1.05 : 0.85,
//                       rotateY: offset * 10
//                     }}
//                     style={{
//                       transformStyle: "preserve-3d",
//                       zIndex: impacts.length - absOffset
//                     }}
//                   >
//                     <motion.div 
//                       className={`w-full h-full rounded-3xl p-8 relative overflow-hidden ${
//                         activeIndex === index 
//                           ? "bg-white shadow-2xl" 
//                           : "bg-white/10 backdrop-blur-sm border border-white/20"
//                       }`}
//                       whileHover={{
//                         boxShadow: activeIndex === index 
//                           ? "0 25px 50px rgba(0,0,0,0.3)" 
//                           : "0 15px 30px rgba(255,255,255,0.1)"
//                       }}
//                     >
//                       {/* Background Gradient */}
//                       <motion.div
//                         className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-${activeIndex === index ? '10' : '5'}`}
//                         animate={{ opacity: activeIndex === index ? 0.1 : 0.05 }}
//                       />
                      
//                       {/* Content */}
//                       <div className="relative z-10 h-full flex flex-col">
//                         <motion.div 
//                           className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${impact.gradient}`}
//                           whileHover={{ rotate: 360, scale: 1.1 }}
//                           transition={{ duration: 0.6 }}
//                         >
//                           <Icon className="w-8 h-8 text-white" />
//                         </motion.div>
                        
//                         <motion.h3 
//                           className={`text-2xl font-bold mb-2 ${
//                             activeIndex === index ? "text-black" : "text-white"
//                           }`}
//                           animate={{ scale: activeIndex === index ? 1 : 0.9 }}
//                         >
//                           {impact.title}
//                         </motion.h3>
                        
//                         <motion.p 
//                           className={`text-sm font-medium mb-4 ${
//                             activeIndex === index ? "text-gray-600" : "text-gray-300"
//                           }`}
//                         >
//                           {impact.subtitle}
//                         </motion.p>
                        
//                         <motion.p 
//                           className={`text-sm leading-relaxed mb-6 flex-grow ${
//                             activeIndex === index ? "text-gray-700" : "text-gray-200"
//                           }`}
//                         >
//                           {impact.description}
//                         </motion.p>

                        
                        
//                         {/* Metric Display */}
//                         <motion.div 
//                           className="mt-auto"
//                           animate={{ opacity: activeIndex === index ? 1 : 0.7 }}
//                         >
//                           <motion.div 
//                             className={`text-4xl font-bold bg-gradient-to-r ${impact.gradient} bg-clip-text text-transparent mb-1`}
//                             animate={{ scale: activeIndex === index ? 1.1 : 1 }}
//                           >
//                             {impact.metric}
//                           </motion.div>
//                           <motion.p 
//                             className={`text-xs ${
//                               activeIndex === index ? "text-gray-500" : "text-gray-400"
//                             }`}
//                           >
//                             {impact.metricLabel}
//                           </motion.p>
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>
//           {/* Control Panel */}
//           <div className=" z-20 flex justify-center  items-center gap-4">
//             {/* <motion.button
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//             </motion.button> */}
            
//             <div className="flex gap-2">
//               {impacts.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     activeIndex === index ? "bg-[#EAF044] scale-125" : "bg-white/30 hover:bg-white/50"
//                   }`}
//                   whileHover={{ scale: 1.2 }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

        

//         {/* Project Showcase */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
//         >
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-2">Featured Projects</h3>
//               <p className="text-gray-300">Explore our latest innovations in {impacts[activeIndex].title.toLowerCase()}</p>
//             </div>
//             <motion.button
//               className="flex items-center gap-2 bg-[#EAF044] text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors"
//               whileHover={{ scale: 1.05, x: 5 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View All
//               <ArrowRight className="w-4 h-4" />
//             </motion.button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {impacts[activeIndex].projects.map((project, index) => (
//               <motion.div
//                 key={project}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
//                 whileHover={{ scale: 1.02, y: -5 }}
//               >
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#EAF044] to-yellow-300 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <span className="text-black font-bold text-lg">{index + 1}</span>
//                 </div>
//                 <h4 className="text-white font-semibold mb-2">{project}</h4>
//                 <p className="text-gray-400 text-sm">Innovative solution driving real impact</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default OurImpact;
