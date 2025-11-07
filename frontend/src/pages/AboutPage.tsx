import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Heart, 
  Lightbulb,
  Shield,
  Zap,
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
      <TeamSection />
      <WhyChooseUs />
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
    <section className="relative px-4 sm:px-6 lg:px-8 py-32 sm:py-40 bg-linear-to-b from-white to-gray-50 overflow-hidden">
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
          <motion.span 
            className="inline-block px-4 py-2 bg-[#EAF044] rounded-full text-sm font-semibold text-black mb-6"
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.3 }}
          >
            About Initech
          </motion.span>
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
          className="max-w-4xl mx-auto md:text-2xl text-lg text-[#5D5D5D] font-Kairos leading-relaxed"
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
    <section ref={ref} className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-Kairos font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>
            <div className="space-y-6 text-lg text-[#5D5D5D] leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Founded with a vision to bridge the gap between innovative technology and real-world business challenges, Initech has grown from a small startup to a trusted technology partner for businesses worldwide.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                What started as a passion project by a group of tech enthusiasts has evolved into a full-service digital solutions company. We've helped over 200+ clients transform their operations, enhance customer experiences, and achieve measurable growth.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Today, we combine expertise in web development, mobile applications, AI/ML, IoT, and strategic consulting to deliver solutions that don't just meet expectations—they exceed them.
              </motion.p>
            </div>

            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {['200+ Projects Delivered', '50+ Team Members', '15+ Countries Served'].map((text, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#EAF044]" />
                  </motion.div>
                  <span className="text-black font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>
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
            <motion.div 
              className="relative h-[500px] bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.5 }}
            >
              {/* Placeholder for team photo or office image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Users className="w-20 h-20 text-[#5D5D5D] mx-auto mb-4" />
                  <p className="text-[#5D5D5D] text-lg">Team Photo Placeholder</p>
                  <p className="text-[#5D5D5D] text-sm mt-2">Add your company image here</p>
                </motion.div>
              </div>
              
              {/* Decorative badge */}
              <motion.div 
                className="absolute top-8 right-8 bg-[#EAF044] rounded-full p-6 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">5+</div>
                  <div className="text-xs text-black">Years</div>
                </div>
              </motion.div>

              {/* Floating particles */}
              <motion.div
                className="absolute w-4 h-4 bg-[#EAF044] rounded-full"
                style={{ left: '20%', top: '30%' }}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-blue-400 rounded-full"
                style={{ right: '25%', top: '50%' }}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const content = {
    mission: {
      icon: <Target className="w-12 h-12" />,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
      points: [
        "Deliver exceptional value through cutting-edge technology",
        "Build long-term partnerships based on trust and results",
        "Stay ahead of technological trends and innovations",
        "Provide solutions that scale with your business"
      ]
    },
    vision: {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Our Vision",
      description: "To be the world's most trusted technology partner, recognized for transforming businesses and shaping the future of digital innovation.",
      points: [
        "Lead the industry in innovative digital solutions",
        "Expand our global presence and impact",
        "Foster a culture of continuous learning and excellence",
        "Make advanced technology accessible to all businesses"
      ]
    },
    values: {
      icon: <Heart className="w-12 h-12" />,
      title: "Our Values",
      description: "The principles that guide everything we do and define who we are as a company.",
      points: [
        "Innovation: We embrace creativity and push boundaries",
        "Integrity: We act with honesty and transparency",
        "Excellence: We deliver quality in every project",
        "Collaboration: We believe in teamwork and partnership",
        "Customer-First: Your success is our success"
      ]
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-Kairos font-bold text-black mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-[#5D5D5D] max-w-2xl mx-auto">
            Our mission, vision, and values shape our approach to every project
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(["mission", "vision", "values"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-medium text-lg transition-all ${
                activeTab === tab
                  ? "bg-[#EAF044] text-black shadow-lg scale-105"
                  : "bg-white text-[#5D5D5D] hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-20 h-20 bg-[#EAF044] rounded-2xl flex items-center justify-center mb-6">
                {content[activeTab].icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-Kairos font-bold text-black mb-4">
                {content[activeTab].title}
              </h3>
              <p className="text-lg text-[#5D5D5D] leading-relaxed">
                {content[activeTab].description}
              </p>
            </div>

            <div className="space-y-4">
              {content[activeTab].points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-[#EAF044] rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-[#0A0A0A] text-base leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: <Award className="w-8 h-8" />, value: "200+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, value: "150+", label: "Happy Clients" },
    { icon: <Globe className="w-8 h-8" />, value: "15+", label: "Countries Served" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #EAF044 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              className="text-center"
            >
              <motion.div 
                className="w-16 h-16 bg-[#EAF044] rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-black">{stat.icon}</div>
              </motion.div>
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-[#EAF044] mb-2 font-Kairos"
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
                className="text-white text-sm md:text-base"
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

function TeamSection() {
  const teamMembers = [
    {
      role: "Leadership",
      description: "Experienced executives driving strategic vision and growth"
    },
    {
      role: "Engineering",
      description: "Skilled developers building robust, scalable solutions"
    },
    {
      role: "Design",
      description: "Creative minds crafting beautiful user experiences"
    },
    {
      role: "Strategy",
      description: "Consultants guiding digital transformation journeys"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-Kairos font-bold text-black mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-lg text-[#5D5D5D] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A diverse group of talented individuals united by a passion for technology and innovation. We're builders, thinkers, and problem-solvers committed to your success.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <motion.div 
                className="relative h-64 bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 group-hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: idx * 0.5
                    }}
                  >
                    <Users className="w-16 h-16 text-[#5D5D5D]" />
                  </motion.div>
                </div>
                
                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-[#EAF044] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
              </motion.div>
              <motion.h3 
                className="text-xl font-Kairos font-semibold text-black mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {member.role}
              </motion.h3>
              <motion.p 
                className="text-[#5D5D5D] text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                {member.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[#5D5D5D] mb-6">
            Want to be part of our journey?
          </p>
          <motion.button 
            className="group flex items-center text-normal gap-2 px-6 py-3 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-[#0A0A0A1A] hover:bg-black transition-all duration-500 ease-in-out rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="/11.svg"
                alt="white icon"
                className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform group-hover:translate-x-full group-hover:opacity-0"
              />
              <img
                src="/1.png"
                alt="black icon"
                className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
            JOIN OUR TEAM
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Proven Expertise",
      description: "Years of experience delivering successful projects across industries and technologies."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure flawless execution."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Our team is always available to assist you throughout your journey."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Built to grow with your business, handling increasing demands seamlessly."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay ahead of trends, bringing you the latest technology and methodologies."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We go above and beyond to exceed expectations."
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-Kairos font-bold text-black mb-4">
            Why Choose Initech?
          </h2>
          <p className="text-lg text-[#5D5D5D] max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-[#EAF044] to-yellow-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />

              <motion.div 
                className="w-16 h-16 bg-[#EAF044] rounded-xl flex items-center justify-center mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <div className="text-black">{reason.icon}</div>
              </motion.div>
              <motion.h3 
                className="text-xl font-Kairos font-semibold text-black mb-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {reason.title}
              </motion.h3>
              <motion.p 
                className="text-[#5D5D5D] leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {reason.description}
              </motion.p>

              {/* Corner decoration */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#EAF044] rounded-full opacity-0 group-hover:opacity-20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
          <motion.h2 
            className="text-4xl md:text-6xl font-Kairos font-bold text-black mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
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
                      className="text-4xl font-bold text-[#EAF044] mb-2 font-Kairos"
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
                      className="text-2xl font-Kairos font-semibold text-black mb-2"
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
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-linear-to-br from-[#0A0A0A] to-gray-900 overflow-hidden">
      {/* Animated background particles */}
      <motion.div
        className="absolute w-96 h-96 bg-[#EAF044] rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ bottom: '10%', right: '10%' }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-Kairos font-bold text-white mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            Ready to Transform
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[#EAF044]"
          >
            Your Business?
          </motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Join hundreds of successful businesses that have trusted Initech to bring their vision to life. Let's create something amazing together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            className="group flex items-center text-normal gap-2 px-6 py-4 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 bg-[#0A0A0A1A] hover:bg-black transition-all duration-500 ease-in-out rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="/11.svg"
                alt="white icon"
                className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform group-hover:translate-x-full group-hover:opacity-0"
              />
              <img
                src="/1.png"
                alt="black icon"
                className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
            START YOUR PROJECT
          </motion.button>

          <motion.button 
            className="px-8 py-4 bg-transparent text-base font-medium text-white transition-colors border-2 border-gray-600 rounded-xl hover:bg-white hover:text-gray-900 hover:border-white"
            whileHover={{ scale: 1.05, borderColor: "#EAF044" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            SCHEDULE A CALL
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute w-3 h-3 bg-[#EAF044] rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0
          }}
          style={{ left: '15%', bottom: '20%' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full"
          animate={{
            y: [0, -40, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1
          }}
          style={{ right: '20%', top: '30%' }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-blue-400 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 2
          }}
          style={{ left: '25%', top: '40%' }}
        />
      </div>
    </section>
  );
}
