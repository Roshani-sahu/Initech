"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Shield, Workflow, TrendingDown, Layers3 } from "lucide-react";

interface HelpItem {
  icon: JSX.Element;
  title: string; 
}

const HowWeCanHelp: FC = () => {
  const items: HelpItem[] = [
    {
      icon: <TrendingDown className="w-18 h-18 text-gray-500" />,
      title: "Reduce\nOperational Costs",
    },
    {
      icon: <Workflow className="w-18 h-18 text-gray-500" />,
      title: "Simplify Your\nWorkflows",
    },
    {
      icon: <Shield className="w-18 h-18 text-gray-500" />,
      title: "Strengthen Your\nSecurity",
    },
    {
      icon: <Layers3 className="w-18 h-18 text-gray-500" />,
      title: "Expand Digital\nCapabilities",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-6xl text-[#EAF044] font-Kairos mb-16"
      >
        How <span className="text-black">We Can Help</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-6 pt-14">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            {item.icon}

            <h3 className="text-xl font-semibold text-[#1d1d1f] font-inter whitespace-pre-line leading-tight">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeCanHelp;
