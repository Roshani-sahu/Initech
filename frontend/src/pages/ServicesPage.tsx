import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  technologies?: string[];
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesSection />
      <ServiceDetails />
      <CTASection />
      <Footer />
    </main>
  );
}

function ServicesHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF044] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-6 py-2 bg-[#EAF044] rounded-full"
        >
          <span className="text-sm font-semibold text-[#0A0A0A] uppercase tracking-wider">
            ✦ Professional Services
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:text-8xl text-6xl text-black font-Kairos font-bold mb-8 leading-tight"
        >
          Innovative Solutions <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A0A0A] via-gray-700 to-[#0A0A0A]">
            For Modern Business
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto md:text-2xl text-xl text-[#5D5D5D] font-Kairos leading-relaxed mb-12"
        >
          Transform your vision into reality with our comprehensive suite of technology services. 
          From concept to deployment, we craft solutions that drive growth and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 font-inter"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-[#5D5D5D] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [active, setActive] = useState("webdev");

  const services: Record<string, ServiceDetail> = {
    webdev: {
      title: "Website Development",
      description: "We build fast, responsive, and scalable websites using modern technologies to create seamless digital experiences that drive engagement and conversion.",
      features: [
        "Custom responsive web design",
        "Progressive Web Applications (PWA)",
        "E-commerce platforms",
        "Content Management Systems",
        "Performance optimization",
        "SEO-friendly architecture"
      ],
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    appdev: {
      title: "App Development",
      description: "Our team crafts high-performance mobile and cross-platform apps tailored to your business goals and user needs, ensuring seamless experiences across all devices.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "Intuitive UI/UX design",
        "Real-time data synchronization",
        "Push notifications & analytics",
        "App store optimization"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    aiml: {
      title: "AI & ML Services",
      description: "Leverage artificial intelligence and machine learning to automate processes, gain insights, and enhance decision-making with intelligent systems that learn and adapt.",
      features: [
        "Predictive analytics & forecasting",
        "Natural Language Processing",
        "Computer vision solutions",
        "Recommendation systems",
        "Model training & deployment",
        "AI integration & consulting"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI API"]
    },
    iot: {
      title: "IoT Solutions",
      description: "We design and deploy IoT ecosystems that connect devices, collect data, and enable intelligent automation for smart and efficient operations.",
      features: [
        "Device connectivity & management",
        "Real-time data collection",
        "Cloud infrastructure setup",
        "Edge computing solutions",
        "Security & authentication",
        "Data analytics & visualization"
      ],
      technologies: ["MQTT", "AWS IoT", "Azure IoT", "Arduino", "Raspberry Pi"]
    },
    automation: {
      title: "AI Automations",
      description: "Automate repetitive workflows and boost efficiency using AI-driven automation systems built for scalability, reducing costs and human error.",
      features: [
        "Workflow automation",
        "Intelligent process automation",
        "Chatbots & virtual assistants",
        "Document processing",
        "Email & communication automation",
        "Custom automation scripts"
      ],
      technologies: ["Python", "Zapier", "Make", "n8n", "RPA tools"]
    },
    consultancy: {
      title: "Tech Consultancy",
      description: "Our experts help you define strategies, adopt new technologies, and architect robust, future-ready digital systems that align with your business objectives.",
      features: [
        "Digital transformation strategy",
        "Technology assessment & audit",
        "System architecture design",
        "Cloud migration planning",
        "Security & compliance review",
        "Team training & workshops"
      ],
      technologies: ["AWS", "Azure", "GCP", "DevOps", "Microservices"]
    },
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:mb-20 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-5 py-2 bg-gray-100 rounded-full"
          >
            <span className="text-sm font-semibold text-[#0A0A0A] uppercase tracking-wider">
              ⚡ Our Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:mb-6 mb-4 md:text-7xl text-5xl text-black font-Kairos font-bold"
          >
            What We Offer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto md:text-xl text-lg text-[#5D5D5D] font-inter leading-relaxed"
          >
            At Initech, we combine design, engineering, and strategy to build scalable digital solutions that propel modern businesses forward.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Service List */}
          <div className="space-y-4">
            {Object.keys(services).map((key, idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActive(key)}
                className={`group cursor-pointer transition-all duration-500 py-6 px-6 rounded-2xl border-2 ${
                  active === key 
                    ? "bg-[#0A0A0A] border-[#0A0A0A] shadow-2xl scale-[1.02]" 
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className={`md:text-3xl text-2xl font-Kairos font-bold transition-all duration-300 ${
                      active === key ? "text-white" : "text-[#0A0A0A]"
                    }`}
                  >
                    {services[key].title}
                  </h3>
                  <span className={`text-3xl transition-transform duration-300  ${
                    active === key ? "rotate-45 text-[#EAF044]" : "text-gray-400 group-hover:rotate-45"
                  }`}>
                    →
                  </span>
                </div>
                <p
                  className={`text-base leading-relaxed transition-all duration-300 font-inter ${
                    active === key ? "text-gray-300" : "text-[#5D5D5D] group-hover:text-[#0A0A0A]"
                  }`}
                >
                  {services[key].description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Service Details */}
          <div className="lg:sticky lg:top-28 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-10 shadow-xl"
              >
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-[#EAF044] rounded-full mb-6">
                    <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
                      Selected Service
                    </span>
                  </div>
                  <h4 className="text-3xl font-Kairos font-bold text-black mb-2">
                    Key Features
                  </h4>
                  <div className="h-1 w-16 bg-[#EAF044] rounded-full"></div>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {services[active].features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-[#EAF044] rounded-full flex items-center justify-center text-[#0A0A0A] text-xs font-bold mt-0.5 group-hover:scale-110 transition-transform">
                        ✓
                      </span>
                      <span className="text-[#0A0A0A] text-base leading-relaxed font-medium font-inter">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {services[active].technologies && (
                  <>
                    <div className="mb-6">
                      <h4 className="text-2xl font-Kairos font-bold text-black mb-2">
                        Technologies We Use
                      </h4>
                      <div className="h-1 w-16 bg-[#EAF044] rounded-full"></div>
                    </div>
                    <div className="flex flex-wrap gap-3 font-inter">
                      {services[active].technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-5 py-2.5 bg-white text-[#0A0A0A] rounded-xl text-sm font-semibold border-2 border-gray-200 hover:border-[#EAF044] hover:shadow-md transition-all cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDetails() {
  const detailSections = [
    {
      icon: "/icons/lightning.svg",
      title: "Fast Delivery",
      description: "We follow agile methodologies to deliver projects on time without compromising quality.",
      color: "from-yellow-50 to-yellow-100"
    },
    {
      icon: "/icons/cloud.svg",
      title: "Scalable Solutions",
      description: "Our solutions are built to grow with your business, handling increased load seamlessly.",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: "/icons/lock.svg",
      title: "Security First",
      description: "We implement industry-standard security practices to protect your data and users.",
      color: "from-green-50 to-green-100"
    },
    {
      icon: "/icons/layers.svg",
      title: "Full-Stack Expertise",
      description: "From frontend to backend, cloud to mobile, we handle every aspect of development.",
      color: "from-purple-50 to-purple-100"
    },
    {
      icon: "/icons/check.svg",
      title: "Quality Assurance",
      description: "Rigorous testing ensures your product is reliable, performant, and bug-free.",
      color: "from-pink-50 to-pink-100"
    },
    {
      icon: "/icons/reactive.svg",
      title: "Ongoing Support",
      description: "We provide continuous maintenance and support to keep your systems running smoothly.",
      color: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-5 px-5 py-2 bg-[#EAF044] rounded-full"
          >
            <span className="text-sm font-semibold text-[#0A0A0A] uppercase tracking-wider">
              ★ Why Choose Us
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-Kairos font-bold leading-tight mb-6"
          >
            Why Choose Initech
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-xl  text-[#5D5D5D] leading-relaxed font-inter"
          >
            We're committed to excellence in every project we undertake, delivering solutions that exceed expectations
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#EAF044] hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-Kairos font-bold mb-4 text-black group-hover:text-[#0A0A0A] transition-colors">
                {section.title}
              </h3>
              <p className="text-base font-inter text-[#5D5D5D] leading-relaxed group-hover:text-[#0A0A0A] transition-colors">
                {section.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#EAF044] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t-2 border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Completed" },
              { value: "24/7", label: "Expert Support" }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#EAF044] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-[#5D5D5D] font-medium uppercase  tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-28 bg-[#0A0A0A] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#EAF044] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EAF044] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mb-6 px-6 py-2 bg-[#EAF044] bg-opacity-20 backdrop-blur-sm rounded-full border border-[#EAF044] border-opacity-30"
        >
          <span className="text-sm font-bold text-black uppercase tracking-wider">
            ✦ Let's Build Together
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-Kairos font-bold text-white mb-8 leading-tight"
        >
          Ready to Start <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EAF044] to-white">
            Your Project?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-gray-300 font-normal font-inter mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Let's discuss how we can help transform your ideas into reality with our expert services. 
          <span className="text-[#EAF044] font-semibold"> Get a free consultation today!</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
        >
          <button className="group flex items-center text-lg gap-3 px-8 py-4 font-bold text-gray-900 transition-all bg-[#EAF044] rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-[#EAF044]/50">
            <div className="w-10 h-6 bg-[#0A0A0A1A] hover:bg-black transition-all duration-500 ease-in-out rounded-xl flex items-center justify-center relative overflow-hidden">
              <img
                src="/11.svg"
                alt="white icon"
                className="w-6 h-6 absolute transition-all duration-500 ease-in-out transform group-hover:translate-x-full group-hover:opacity-0"
              />
              <img
                src="/1.png"
                alt="black icon"
                className="w-6 h-6 absolute transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
            GET IN TOUCH
          </button>

          <button className="px-8 py-4 bg-transparent text-lg font-bold text-white transition-all border-2 border-gray-600 rounded-2xl hover:bg-white hover:text-gray-900 hover:border-white hover:scale-105">
            VIEW OUR PORTFOLIO
          </button>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 pt-12 border-t border-gray-800"
        >
          {[
            { icon: "✓", text: "Free Consultation" },
            { icon: "✓", text: "Quick Response Time" },
            { icon: "✓", text: "Expert Team" },
            { icon: "✓", text: "Flexible Engagement" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-300">
              <span className="text-[#EAF044] text-xl font-bold">{item.icon}</span>
              <span className="text-base md:text-lg font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
