import { CheckCircle } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    { value: "10k+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "40+", label: "Team Members" },
    { value: "12+", label: "Global Partnerships" },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-Kairos text-black">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
            Measurable results that speak to our commitment to excellence
          </p>
        </div>

        {/* Premium Stats Strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              {/* Icon */}
              <CheckCircle className="text-gray-500 mb-4 w-8 h-8" />

              {/* Number */}
              <div className="text-4xl md:text-5xl font-Kairos text-black">
                {stat.value}
              </div>

              {/* Label */}
              <p className="text-gray-600 mt-2 text-sm md:text-base font-inter font-medium">
                {stat.label}
              </p>

              {/* Vertical Separator (Only for desktop, except last card) */}
              {idx !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-[-120px] top-2 h-20 w-px bg-gray-300/40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
