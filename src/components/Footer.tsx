import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const newsletterUrl = import.meta.env.NEXT_PUBLIC_NEWSLETTER_URL || "#";
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/symbiotic-ai-solutions", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@symbioticaisolutions.com", label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-[#43217a] via-[#43217a]/90 to-[#fe9e01]/40 backdrop-blur-xl border-t border-glass-border/30 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-cyber-blue/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#fe9e01] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SAI</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-sans">
                  Symbiotic AI
                </div>
                <div className="text-sm text-white/80 font-sans">
                  Solutions
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed font-sans text-sm sm:text-base">
              Your AI Transformational Partner for business growth. 
              Connect data silos, build custom AI layers, deliver clarity and profitability.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-base sm:text-lg font-bold text-white font-sans">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@symbioticaisolutions.com"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors magnetic font-sans"
              >
                <Mail className="w-5 h-5 text-[#43217a] hover:text-[#fe9e01] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)]" />
                <span className="text-xs sm:text-sm font-sans break-all">info@symbioticaisolutions.com</span>
              </a>
              <a
                href="tel:+14152994019"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors magnetic font-sans"
              >
                <Phone className="w-5 h-5 text-[#43217a] hover:text-[#fe9e01] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)]" />
                <span className="text-xs sm:text-sm font-sans">+1 (415) 299-4019</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-base sm:text-lg font-bold text-white font-sans">Quick Links</h3>
            <div className="space-y-3">
              {["Features", "How It Works", "Testimonials", "Contact", "Privacy Policy"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-white/80 hover:text-white transition-colors magnetic text-xs sm:text-sm font-sans"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-base sm:text-lg font-bold text-white font-sans">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 
                           flex items-center justify-center text-muted-foreground hover:text-primary 
                           hover:shadow-neon transition-all duration-300 magnetic border border-glass-border/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white hover:text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-white/60 font-sans">
              Stay updated with the latest AI transformation insights and business optimization strategies.
            </p>
            <a href="mailto:info@symbioticaisolutions.com" className="inline-block mt-2 text-xs sm:text-sm underline text-white/80 hover:text-white font-sans">
              Get in touch for consultation
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-glass-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-xs sm:text-sm text-white/80 font-sans">
            © 2024 Symbiotic AI Solutions. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-white/80 mt-4 md:mt-0 font-sans">
            Your AI Transformational Partner
          </p>
        </motion.div>
      </div>
      {/* Floating CTA Button */}
      <a href="mailto:info@symbioticaisolutions.com" className="fixed right-4 bottom-4 z-50">
        <div className="rounded-full px-5 py-3 bg-[#fe9e01] text-white font-semibold shadow-[0_10px_30px_rgba(254,158,1,0.5)] hover:bg-[#43217a] transition-colors">
          Schedule Consultation
        </div>
      </a>
    </footer>
  );
}