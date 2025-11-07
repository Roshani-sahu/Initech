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
    <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-7xl text-5xl text-black font-Kairos mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto md:text-2xl text-lg text-[#5D5D5D] font-Kairos"
        >
          We deliver cutting-edge solutions that transform your business through technology, innovation, and strategic expertise.
        </motion.p>
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
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:mb-16 mb-10 text-center sm:text-left">
          <h2 className="md:mb-9 mb-3 md:text-6xl text-4xl text-black font-Kairos">
            What We Offer
          </h2>
          <p className="max-w-[600px] md:text-2xl text-lg text-[#5D5D5D] font-Kairos mx-auto sm:mx-0">
            At Initech, we combine design, engineering, and strategy to build scalable digital solutions for modern businesses.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-8 items-start">
          {/* Left Column - Service List */}
          <div className="space-y-0">
            {Object.keys(services).map((key) => (
              <div
                key={key}
                onClick={() => setActive(key)}
                className={`cursor-pointer transition-all duration-500 pt-5 border-t border-black ${
                  active === key ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                <h3
                  className={`md:my-5 mb-2 md:text-3xl text-2xl font-Kairos transition-all duration-300 ${
                    active === key ? "text-[#0A0A0A]" : "text-[#0A0A0A]"
                  }`}
                >
                  {services[key].title}
                </h3>
                <p
                  className={`md:text-base text-base leading-relaxed transition-all duration-300 ${
                    active === key ? "text-[#0A0A0A]" : "text-[#5D5D5D]"
                  }`}
                >
                  {services[key].description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Service Details */}
          <div className="lg:sticky lg:top-24 bg-gray-50 rounded-2xl p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-Kairos font-bold text-black mb-6">
                  Key Features
                </h4>
                <ul className="space-y-3 mb-8">
                  {services[active].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#EAF044] mt-1.5">●</span>
                      <span className="text-[#0A0A0A] text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {services[active].technologies && (
                  <>
                    <h4 className="text-2xl font-Kairos font-bold text-black mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {services[active].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white text-[#0A0A0A] rounded-lg text-sm font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
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
      description: "We follow agile methodologies to deliver projects on time without compromising quality."
    },
    {
      icon: "/icons/cloud.svg",
      title: "Scalable Solutions",
      description: "Our solutions are built to grow with your business, handling increased load seamlessly."
    },
    {
      icon: "/icons/lock.svg",
      title: "Security First",
      description: "We implement industry-standard security practices to protect your data and users."
    },
    {
      icon: "/icons/layers.svg",
      title: "Full-Stack Expertise",
      description: "From frontend to backend, cloud to mobile, we handle every aspect of development."
    },
    {
      icon: "/icons/check.svg",
      title: "Quality Assurance",
      description: "Rigorous testing ensures your product is reliable, performant, and bug-free."
    },
    {
      icon: "/icons/reactive.svg",
      title: "Ongoing Support",
      description: "We provide continuous maintenance and support to keep your systems running smoothly."
    }
  ];

  return (
    <section className="relative bg-white text-gray-900 px-6 lg:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-Kairos font-bold leading-tight mb-4">
            Why Choose Initech
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#5D5D5D]">
            We're committed to excellence in every project we undertake
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {detailSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-4">
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-Kairos font-semibold mb-3 text-black">
                {section.title}
              </h3>
              <p className="text-base text-[#5D5D5D] leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-Kairos font-bold text-white mb-6"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Let's discuss how we can help transform your ideas into reality with our expert services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group flex items-center text-normal gap-2 px-6 py-3 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105">
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
            GET IN TOUCH
          </button>

          <button className="px-6 py-3 bg-transparent text-base font-medium text-white transition-colors border border-gray-600 rounded-xl hover:bg-white hover:text-gray-900">
            VIEW OUR PORTFOLIO
          </button>
        </motion.div>
      </div>
    </section>
  );
}
