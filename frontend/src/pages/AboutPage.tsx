import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/Header";
import Impact from "../components/about/Impact";
// import OurImpact from "../components/about/new";
import Footer from "../components/Footer";
import DotGrid from "../components/home/DOTGRID";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  // Heart, 
  Lightbulb,
  Shield,
  // Zap,
  Globe,
  CheckCircle
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />
      <AboutHero />
      <StorySection />
      <MissionVisionValues />
      <StatsSection />
      {/* <Impact/> */}
      {/* <OurImpact/> */}
   
    
      {/* <TeamSection /> */}
      {/* <WhyChooseUs /> */}
      <TimelineSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function AboutHero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  return (
    <section className="relative px-2 sm:px-6 lg:px-8 py-16 sm:py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="mb-6"
        >
          {/* <motion.span 
            className="inline-block px-4 py-2 bg-[#EAF044] rounded-full text-sm font-semibold text-black mb-6"
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.3 }}
          >
            About Initech
          </motion.span> */}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 80
          }}
          className="md:text-7xl text-5xl text-black font-Kairos mb-8 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building the Future,
          </motion.span>
          <br />
          <motion.span 
            className="text-[#5D5D5D]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            One Innovation at a Time
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto md:text-xl text-lg text-[#5D5D5D] font-inter leading-relaxed"
        >
          We're a passionate team of innovators, engineers, and strategists dedicated to transforming businesses through cutting-edge technology and creative solutions.
        </motion.p>
      </motion.div>

      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-[#EAF044] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
}

function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <section ref={ref} className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <motion.div className="mb-6">
             
              <motion.h2 
                className="text-4xl md:text-5xl font-Kairos font-normal text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>
            </motion.div>
            
            <div className="space-y-6 text-lg text-[#5D5D5D] leading-relaxed font-inter">
              <motion.div
                className="p-4 bg-gray-50 rounded-xl border-l-4 border-black-400 hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <strong className="text-black">Founded with Vision:</strong> We bridge the gap between innovative technology and real-world business challenges, growing from a small startup to a trusted technology partner worldwide.
              </motion.div>
              
              <motion.div
                className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#EAF044] hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <strong className="text-black">From Passion to Purpose:</strong> What started as a passion project has evolved into a full-service digital solutions company, helping 200+ clients transform operations and achieve measurable growth.
              </motion.div>
              
              <motion.div
                className="p-4 bg-gray-50 rounded-xl border-l-4 border-gray-400 hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <strong className="text-black">Today's Excellence:</strong> We combine expertise in web development, mobile applications, AI/ML, IoT, and strategic consulting to exceed expectations.
              </motion.div>
            </div>

           
          </motion.div>

          {/* Right - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
            style={{ rotateX }}
          >
            <div className="relative h-[500px] bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <img 
                src="/ourstory.jpg" 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Mission",
      subtitle: "Our Purpose",
      description: "Empowering businesses with innovative technology solutions that drive growth and competitive advantage.",
      features: [
        "Cutting-edge technology solutions",
        "Long-term strategic partnerships",
        "Scalable business solutions",
        "Innovation-driven approach"
      ],
      gradient: "from-slate-600 to-gray-800",
      bgColor: "bg-slate-50",
      accentColor: "text-slate-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Vision",
      subtitle: "Our Future",
      description: "To be the world's most trusted technology partner, shaping the future of digital innovation.",
      features: [
        "Industry-leading solutions",
        "Global presence & impact",
        "Culture of excellence",
        "Accessible technology"
      ],
      gradient: "from-[#EAF044] to-yellow-400",
      bgColor: "bg-yellow-50",
      accentColor: "text-yellow-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Values",
      subtitle: "Our Principles",
      description: "The core principles that guide everything we do and define who we are as a company.",
      features: [
        "Innovation & creativity",
        "Integrity & transparency",
        "Excellence in delivery",
        "Customer-first mindset"
      ],
      gradient: "from-gray-700 to-black",
      bgColor: "bg-gray-50",
      accentColor: "text-gray-700"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #EAF044 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #3B82F6 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-Kairos font-normal text-black mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Drives Us
          </motion.h2>
          <motion.p 
            className="text-lg text-[#5D5D5D] max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our mission, vision, and values shape our approach to every project
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <motion.div
                className={`relative h-full ${card.bgColor} rounded-3xl p-8 border border-gray-100 overflow-hidden cursor-pointer`}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Static Icon */}
                <div className={`w-16 h-16 bg-linear-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                  {card.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div className="mb-4">
                    <motion.p 
                      className={`text-sm font-semibold ${card.accentColor} mb-1`}
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {card.subtitle}
                    </motion.p>
                    <motion.h3 
                      className="text-2xl font-Kairos font-bold text-black"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.title}
                    </motion.h3>
                  </motion.div>

                  <motion.p 
                    className="text-[#5D5D5D] leading-relaxed mb-6"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className={`w-2 h-2 bg-linear-to-r ${card.gradient} rounded-full`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                          animate={{
                            scale: hoveredCard === index ? [1, 1.2, 1] : 1
                          }}
                        />
                        <span className="text-sm text-[#5D5D5D] group-hover:text-black transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100"
                  style={{ color: card.gradient.includes('EAF044') ? '#EAF044' : card.gradient.includes('blue') ? '#3B82F6' : '#374151' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating particles animation */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-current rounded-full opacity-20"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  style={{ color: card.gradient.includes('EAF044') ? '#EAF044' : card.gradient.includes('blue') ? '#3B82F6' : '#374151' }}
                />
                <motion.div
                  className="absolute top-8 right-8 w-1 h-1 bg-current rounded-full opacity-30"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                  style={{ color: card.gradient.includes('EAF044') ? '#EAF044' : card.gradient.includes('blue') ? '#3B82F6' : '#374151' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <motion.p 
            className="text-lg text-[#5D5D5D] mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Ready to experience the difference our values make?
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-linear-to-r from-[#EAF044] to-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(234, 240, 68, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "150+", label: "Happy Clients" },
    { value: "15+", label: "Countries Served" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #EAF044 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-Kairos font-normal text-black mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="text-lg text-[#5D5D5D] max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Measurable results that speak to our commitment to excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Static Checkmark Icon */}
              <div className="w-16 h-16 bg-[#EAF044] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              
              <motion.div 
                className="text-4xl font-bold text-black mb-2 font-Kairos group-hover:text-[#EAF044] transition-colors duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: idx * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              
              <motion.div 
                className="text-[#5D5D5D] text-sm md:text-base font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// function TeamSection() {
//   const teamMembers = [
//     {
//       role: "Leadership",
//       description: "Experienced executives driving strategic vision and growth"
//     },
//     {
//       role: "Engineering",
//       description: "Skilled developers building robust, scalable solutions"
//     },
//     {
//       role: "Design",
//       description: "Creative minds crafting beautiful user experiences"
//     },
//     {
//       role: "Strategy",
//       description: "Consultants guiding digital transformation journeys"
//     }
//   ];

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <motion.h2 
//             className="text-4xl md:text-6xl font-Kairos font-normal text-black mb-6"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Meet Our Team
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-[#5D5D5D] max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             A diverse group of talented individuals united by a passion for technology and innovation. We're builders, thinkers, and problem-solvers committed to your success.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 50, rotateY: -20 }}
//               whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
//               transition={{ 
//                 duration: 0.6, 
//                 delay: idx * 0.1,
//                 type: "spring",
//                 stiffness: 80
//               }}
//               viewport={{ once: true, margin: "-50px" }}
//               whileHover={{ 
//                 y: -10,
//                 transition: { duration: 0.3 }
//               }}
//               className="group"
//             >
//               <motion.div 
//                 className="relative h-64 bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 group-hover:shadow-xl transition-shadow"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.1, 1],
//                       rotate: [0, 5, -5, 0]
//                     }}
//                     transition={{ 
//                       duration: 4, 
//                       repeat: Infinity,
//                       delay: idx * 0.5
//                     }}
//                   >
//                     <Users className="w-16 h-16 text-[#5D5D5D]" />
//                   </motion.div>
//                 </div>
                
//                 {/* Hover overlay */}
//                 <motion.div 
//                   className="absolute inset-0 bg-[#EAF044] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                 />
//               </motion.div>
//               <motion.h3 
//                 className="text-xl font-Kairos font-normal text-black mb-2"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.1 + 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 {member.role}
//               </motion.h3>
//               <motion.p 
//                 className="text-[#5D5D5D] text-sm"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: idx * 0.1 + 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 {member.description}
//               </motion.p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-lg text-[#5D5D5D] mb-6">
//             Want to be part of our journey?
//           </p>
//           <motion.button 
//             className="group flex items-center text-normal gap-2 px-6 py-3 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105 mx-auto"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="w-10 h-10 bg-[#0A0A0A1A] hover:bg-black transition-all duration-500 ease-in-out rounded-lg flex items-center justify-center relative overflow-hidden">
//               <img
//                 src="/11.svg"
//                 alt="white icon"
//                 className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform group-hover:translate-x-full group-hover:opacity-0"
//               />
//               <img
//                 src="/1.png"
//                 alt="black icon"
//                 className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
//               />
//             </div>
//             JOIN OUR TEAM
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function WhyChooseUs() {
//   const reasons = [
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Proven Expertise",
//       description: "Years of experience delivering successful projects across industries and technologies."
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Quality Assurance",
//       description: "Rigorous testing and quality control processes ensure flawless execution."
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Dedicated Support",
//       description: "Our team is always available to assist you throughout your journey."
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Scalable Solutions",
//       description: "Built to grow with your business, handling increasing demands seamlessly."
//     },
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: "Innovation First",
//       description: "We stay ahead of trends, bringing you the latest technology and methodologies."
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Client-Centric",
//       description: "Your success is our priority. We go above and beyond to exceed expectations."
//     }
//   ];

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-Kairos font-normal text-black mb-4">
//             Why Choose Initech?
//           </h2>
//           <p className="text-lg text-[#5D5D5D] max-w-2xl mx-auto">
//             We combine technical excellence with business acumen to deliver exceptional results
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reasons.map((reason, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 50, scale: 0.8 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ 
//                 duration: 0.6, 
//                 delay: idx * 0.1,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               viewport={{ once: true, margin: "-50px" }}
//               whileHover={{ 
//                 y: -10,
//                 boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
//                 transition: { duration: 0.3 }
//               }}
//               className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
//             >
//               {/* Animated background on hover */}
//               <motion.div
//                 className="absolute inset-0 bg-linear-to-br from-[#EAF044] to-yellow-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//               />

//               <motion.div 
//                 className="w-16 h-16 bg-[#EAF044] rounded-xl flex items-center justify-center mb-6 relative z-10"
//                 whileHover={{ 
//                   scale: 1.1, 
//                   rotate: [0, -10, 10, 0],
//                   transition: { duration: 0.5 }
//                 }}
//               >
//                 <div className="text-black">{reason.icon}</div>
//               </motion.div>
//               <motion.h3 
//                 className="text-xl font-Kairos font-normal text-black mb-3 relative z-10"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.1 + 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 {reason.title}
//               </motion.h3>
//               <motion.p 
//                 className="text-[#5D5D5D] leading-relaxed relative z-10"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: idx * 0.1 + 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 {reason.description}
//               </motion.p>

//               {/* Corner decoration */}
//               <motion.div
//                 className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#EAF044] rounded-full opacity-0 group-hover:opacity-20"
//                 initial={{ scale: 0 }}
//                 whileHover={{ scale: 1 }}
//                 transition={{ duration: 0.4 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function TimelineSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    { year: "2019", title: "Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2020", title: "First 50 Clients", description: "Rapidly grew our client base across multiple industries" },
    { year: "2022", title: "Global Expansion", description: "Extended our services to clients in 15+ countries" },
    { year: "2024", title: "200+ Projects", description: "Reached a major milestone in project delivery and client success" },
    { year: "2025", title: "Innovation Lab", description: "Launched dedicated R&D for emerging technologies" },
  ];

  return (
    <section ref={ref} className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <motion.p 
            className="text-lg text-[#5D5D5D] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Key milestones that define our growth and success
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - background */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200" />
          
          {/* Timeline line - animated progress */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#EAF044] origin-top"
            style={{ height: lineHeight }}
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div 
                    className="bg-gray-50 rounded-2xl p-6 inline-block"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                      backgroundColor: "#FFF"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-4xl font-normal text-[#EAF044] mb-2 font-Kairos"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: idx * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {milestone.year}
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-Kairos font-normal text-black mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {milestone.title}
                    </motion.h3>
                    <motion.p 
                      className="text-[#5D5D5D]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {milestone.description}
                    </motion.p>
                  </motion.div>
                </div>

                <motion.div 
                  className="w-12 h-12 bg-[#EAF044] rounded-full flex items-center justify-center shrink-0 relative z-10 border-4 border-white shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: idx * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-black rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3
                    }}
                  />
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="relative flex flex-col mb-10 items-center justify-center mx-auto h-[360px] bg-black text-center overflow-hidden w-[88%] md:w-[88%] rounded-2xl"
      aria-label="Ready to Transform Your Business"
    >
      {/* Animated Dotted Background Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
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

      {/* Main Content */}
      <div className="relative z-20 px-6">
        <h1 className="text-[#F6F6F6] text-3xl sm:text-4xl md:text-5xl font-Kairos tracking-tight leading-snug max-w-3xl mx-auto">
          Ready to Transform <span className="text-[#EAF044]">Your Business?</span>
        </h1>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EAF044] text-black font-semibold text-base md:text-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#EAF044]/50"
          >
            {/* Animated Icon */}
            <div className="w-9 h-9 bg-[#0A0A0A1A] group-hover:bg-black transition-all duration-300 rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="/11.svg"
                alt="White icon"
                className="w-5 h-5 absolute transition-all duration-300 transform group-hover:translate-x-full group-hover:opacity-0"
              />
              <img
                src="/1.png"
                alt="Black icon"
                className="w-5 h-5 absolute transition-all duration-300 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </section>
  );
}
