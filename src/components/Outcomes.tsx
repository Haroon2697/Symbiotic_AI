import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { DollarSign, Calendar, Shield } from "lucide-react";

export function Outcomes() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);
  const stats = [
    { icon: DollarSign, value: "40%", label: "Efficiency Increase", suffix: "average" },
    { icon: Calendar, value: "25%", label: "Cost Reduction", suffix: "in labor costs" },
    { icon: Shield, value: "300+", label: "Businesses Transformed", suffix: "and growing" },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-background">
      {/* Subtle background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[10%] h-[320px] w-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 right-[15%] h-[280px] w-[280px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-[#fe9e01] font-sans">
            Proven ROI That Transforms Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Join hundreds of businesses already transforming their operations with Symbiotic AI
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 magnetic group text-center dark:shadow-[0_0_25px_rgba(251,191,36,0.2)] dark:hover:shadow-[0_0_35px_rgba(251,191,36,0.4)]"
            >
              {/* Shine */}
              <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-[200%] w-[200%] -translate-x-full -translate-y-full rotate-45 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-1/2 group-hover:translate-y-1/2" />

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#43217a] text-white shadow-[0_0_20px_rgba(67,33,122,0.4)]">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Metric */}
              <div className="mb-2 text-4xl md:text-5xl font-bold text-[#43217a]">
                {stat.value.endsWith("%")
                  ? `${Math.round(parseInt(stat.value) * progress)}%`
                  : stat.value.includes("+")
                  ? `${Math.round(parseInt(stat.value) * progress)}+`
                  : stat.value}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1 font-sans">{stat.label}</h3>
              <p className="text-muted-foreground text-sm font-sans">{stat.suffix}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
              <p className="text-lg text-muted-foreground mb-6 font-sans">Ready to transform your business operations?</p>
          <motion.button whileHover={{ scale: 1.05 }} className="btn-neon px-8 py-4 text-lg bg-[#43217a] dark:bg-[#fe9e01] text-white shadow-[0_0_20px_rgba(67,33,122,0.3)] dark:shadow-[0_0_20px_rgba(254,158,1,0.3)] hover:bg-[#fe9e01] dark:hover:bg-[#43217a] hover:shadow-[0_0_30px_rgba(254,158,1,0.5)] dark:hover:shadow-[0_0_30px_rgba(67,33,122,0.5)] font-sans">
            Schedule AI Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}