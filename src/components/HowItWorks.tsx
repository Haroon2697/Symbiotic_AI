import { motion } from "framer-motion";
import { Link, Settings, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Link,
      title: "System Assessment & Integration",
      description: "We analyze your existing POS, accounting, scheduling, and CRM systems to identify integration opportunities and data flow optimization.",
      details: ["System audit", "Data mapping", "Integration planning"],
    },
    {
      number: "02",
      icon: Settings,
      title: "Custom AI Layer Development",
      description: "Build intelligent dashboards and automation that unify your data and provide real-time insights across all operations.",
      details: ["Dashboard creation", "AI model training", "Custom alerts setup"],
    },
    {
      number: "03",
      icon: Rocket,
      title: "Deploy & Transform",
      description: "Launch your unified AI-powered operations with ongoing optimization and support to maximize efficiency and profitability.",
      details: ["System deployment", "Team training", "Continuous optimization"],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Contrast Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fe9e01]/60 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-radial from-[#fe9e01]/10 to-transparent rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-radial from-[#43217a]/10 to-transparent rounded-full" />
      
      {/* Contrast Lines */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#fe9e01]/60 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#fe9e01]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#43217a]/60 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black font-sans px-4">
            Our Transformation Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans px-4">
            From data chaos to clarity in three strategic phases
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 px-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#43217a] mr-3 sm:mr-4 font-sans">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#43217a] flex items-center justify-center shadow-[0_0_20px_rgba(67,33,122,0.4)]">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black font-sans">
                  {step.title}
                </h3>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed font-sans">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.5 }}
                      className="flex items-center justify-center lg:justify-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#43217a] mr-3" />
                          <span className="text-sm sm:text-base lg:text-lg text-black font-medium font-sans">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-1 flex justify-center"
              >
                <div className="bg-white rounded-2xl w-64 sm:w-72 lg:w-80 h-48 sm:h-56 lg:h-64 flex items-center justify-center magnetic border border-gray-200 hover:border-[#43217a] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(67,33,122,0.2)]">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-[#43217a] flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-[0_0_20px_rgba(67,33,122,0.4)]">
                      <step.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-black font-sans">
                      Step {step.number}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Compact FAQ */}
        <div className="mt-16 max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-black font-sans">FAQs</h3>
            <p className="text-gray-600 text-sm sm:text-base font-sans">Quick answers to common questions</p>
          </div>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {[{
              q: "Do you replace our current tools?",
              a: "No. We integrate and optimize your existing stack (POS, CRM, accounting, scheduling)."
            },{
              q: "How fast can we see value?",
              a: "Teams usually see real-time KPI visibility in the first 2-4 weeks; automation follows."
            },{
              q: "Is it customizable for multiple locations?",
              a: "Yes. Benchmarks and dashboards support cross-unit comparisons and tailored KPIs."
            }].map((item, i) => (
              <details key={item.q} className="group p-4 sm:p-5">
                <summary className="cursor-pointer list-none font-semibold text-black flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="ml-4 text-[#fe9e01] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Progress Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/4 bottom-0 w-1 bg-[#43217a] rounded-full transform -translate-x-1/2 hidden lg:block"
          style={{ transformOrigin: "top" }}
        />
      </div>
    </section>
  );
}