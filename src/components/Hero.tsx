import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  // Floating particles data
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    mobileSize: Math.random() * 8 + 4, // Smaller size for mobile
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle bg-[#43217a] hidden sm:block"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 10, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mobile Particles - Smaller */}
      {particles.map((particle) => (
        <motion.div
          key={`mobile-${particle.id}`}
          className="particle bg-[#43217a] block sm:hidden"
          style={{
            width: particle.mobileSize,
            height: particle.mobileSize,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 5, 0],
            x: [0, 5, -5, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center z-10">
        {/* Proof Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {[
            "40% efficiency increase",
            "AI Transformational Partner",
            "Multi-unit businesses"
          ].map((text, index) => (
            <Badge
              key={text}
              variant="secondary"
              className="glass-card px-4 py-2 text-sm border-spacing-2 border-[#fe9e01]/30 font-medium hover:shadow-neon hover:border-[#fe9e01]/50 text-foreground hover:text-foreground font-sans"
            >
              {text}
            </Badge>
          ))}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-sans text-black px-4"
        >
          Your{" "}
          <span className="text-[#43217a] font-bold">AI Transformational</span>{" "}
          Partner for{" "}
          <span className="text-[#fe9e01] font-bold">Business Growth</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto font-sans font-light px-4"
        >
          Connect your data silos, build custom AI layers, and deliver{" "}
          <span className="text-primary font-semibold font-sans">clarity, efficiency, and profitability</span> across your entire operation
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <Button size="lg" className="btn-neon text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-[#43217a] text-white shadow-[0_0_25px_rgba(67,33,122,0.4)] hover:bg-[#fe9e01] hover:shadow-[0_0_35px_rgba(254,158,1,0.6)] font-sans w-full sm:w-auto">
            Schedule Consultation
          </Button>
         
        </motion.div>

        {/* Floating geometric shapes - Hidden on mobile */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-neon-purple/30 rounded-2xl hidden sm:block"
          animate={{
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.1, 1, 0.9, 1],
            y: [0, -20, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#43217a]/20 rounded-full hidden sm:block"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}