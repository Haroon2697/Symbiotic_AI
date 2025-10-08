import { motion } from "framer-motion";
import { Utensils, Coffee, Wine, Store, Layers, ChartLine, Sparkles, BellRing, Gauge } from "lucide-react";

export function VenueFeatures() {
  const venueTypes = [
    {
      icon: Utensils,
      title: "Multi-Unit Restaurants",
      features: [
        "Unified POS, scheduling, and CRM data",
        "Real-time KPI tracking across locations",
        "AI-driven labor optimization",
        "Cross-location performance benchmarking",
        "Automated financial reporting"
      ],
      gradient: "from-cyber-purple to-neon-purple",
    },
    {
      icon: Coffee,
      title: "Boutique Hotels",
      features: [
        "Guest data unification across platforms",
        "Predictive demand forecasting",
        "Dynamic staffing optimization",
        "Guest sentiment monitoring",
        "Revenue management automation"
      ],
      gradient: "from-cyber-blue to-neon-blue",
    },
    {
      icon: Wine,
      title: "Wellness Centers",
      features: [
        "Guest experience optimization",
        "Churn prediction and prevention",
        "Personalized service recommendations",
        "Staff training automation",
        "Loyalty program intelligence"
      ],
      gradient: "from-neon-purple to-cyber-blue",
    },
    {
      icon: Store,
      title: "Service Businesses",
      features: [
        "Custom AI integrations",
        "Financial automation workflows",
        "Executive dashboard creation",
        "Vendor optimization",
        "Training and onboarding AI"
      ],
      gradient: "from-cyber-purple to-cyber-blue",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-cyber-blue/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black font-sans px-4">
            Tailored for Every Business Type
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans font-light px-4">
            Symbiotic AI adapts to your specific business needs with specialized AI integrations and workflows
          </p>
        </motion.div>

        {/* Inserted detailed services and bullets per request */
        /* Icons added for visual emphasis */}
        <div className="space-y-10 px-4 max-w-5xl mx-auto mb-16">
          {/* AI-Driven Operational Dashboards */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-[#fe9e01]/60 via-[#43217a]/40 to-[#fe9e01]/60 shadow-[0_0_18px_rgba(254,158,1,0.15)] hover:shadow-[0_0_28px_rgba(67,33,122,0.25)] transition-shadow duration-300">
            <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#fe9e01]/15 flex items-center justify-center">
                <Layers className="w-5 h-5 text-[#fe9e01]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black font-sans">AI-Driven Operational Dashboards</h3>
            </div>
            <p className="text-gray-700 mb-4 font-sans">All your systems. One intelligent view.</p>
            <ul className="space-y-2 text-sm text-gray-700 font-sans">
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Unified Data Layer: POS, labor, accounting, inventory, CRM</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Real-Time KPI Tracking: sales, labor %, food cost %, guest metrics</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Custom Alerts: triggers when targets are missed</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Cross-Unit Benchmarking across locations</li>
            </ul>
            </div>
          </div>

          {/* Sales Forecasting & Labor Management */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-[#fe9e01]/60 via-[#43217a]/40 to-[#fe9e01]/60 shadow-[0_0_18px_rgba(254,158,1,0.15)] hover:shadow-[0_0_28px_rgba(67,33,122,0.25)] transition-shadow duration-300">
            <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#fe9e01]/15 flex items-center justify-center">
                <ChartLine className="w-5 h-5 text-[#fe9e01]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black font-sans">Sales Forecasting & Labor Management</h3>
            </div>
            <p className="text-gray-700 mb-4 font-sans">Predict demand. Control costs. Protect guest experience.</p>
            <ul className="space-y-2 text-sm text-gray-700 font-sans">
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Predictive Sales Forecasts using history, weather, events, seasonality</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Dynamic Scheduling that flexes with demand</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Cost Optimization to meet labor targets</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Scenario Modeling for planning</li>
            </ul>
            </div>
          </div>

          {/* Marketing & Lead Generation Automation */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-[#fe9e01]/60 via-[#43217a]/40 to-[#fe9e01]/60 shadow-[0_0_18px_rgba(254,158,1,0.15)] hover:shadow-[0_0_28px_rgba(67,33,122,0.25)] transition-shadow duration-300">
            <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#fe9e01]/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#fe9e01]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black font-sans">Marketing & Lead Generation Automation</h3>
            </div>
            <p className="text-gray-700 mb-4 font-sans">Smarter campaigns, less manual work.</p>
            <ul className="space-y-2 text-sm text-gray-700 font-sans">
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>AI-driven CRM & Outreach</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Lead Scoring for high-value segments</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Guest Sentiment Monitoring in real time</li>
            </ul>
            </div>
              </div>
              
          {/* Guest Experience Optimization */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-[#fe9e01]/60 via-[#43217a]/40 to-[#fe9e01]/60 shadow-[0_0_18px_rgba(254,158,1,0.15)] hover:shadow-[0_0_28px_rgba(67,33,122,0.25)] transition-shadow duration-300">
            <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#fe9e01]/15 flex items-center justify-center">
                <BellRing className="w-5 h-5 text-[#fe9e01]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black font-sans">Guest Experience Optimization</h3>
            </div>
            <p className="text-gray-700 mb-4 font-sans">Turn sentiment into training and loyalty.</p>
            <ul className="space-y-2 text-sm text-gray-700 font-sans">
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>AI-Powered Feedback Loops</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Loyalty Prediction to prevent churn</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Personalization Engines with smart offers</li>
            </ul>
            </div>
          </div>

          {/* Custom AI Integrations */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-[#fe9e01]/60 via-[#43217a]/40 to-[#fe9e01]/60 shadow-[0_0_18px_rgba(254,158,1,0.15)] hover:shadow-[0_0_28px_rgba(67,33,122,0.25)] transition-shadow duration-300">
            <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#fe9e01]/15 flex items-center justify-center">
                <Gauge className="w-5 h-5 text-[#fe9e01]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black font-sans">Custom AI Integrations</h3>
            </div>
            <p className="text-gray-700 mb-4 font-sans">Automation where it matters most.</p>
            <ul className="space-y-2 text-sm text-gray-700 font-sans">
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Financial Automations: invoice matching, cash flow alerts</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Vendor Optimization: predict shortages/pricing spikes</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Training & Onboarding AI: adaptive modules</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#fe9e01] mt-2 mr-3"></span>Executive Dashboards: integrated leadership view</li>
              </ul>
            </div>
          </div>

          {/* Competitor Lens Summary */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-[#fe9e01]/60 via-[#43217a]/40 to-[#fe9e01]/60 shadow-[0_0_18px_rgba(254,158,1,0.15)]">
            <div className="bg-white rounded-2xl p-6">
            <p className="text-sm sm:text-base text-gray-700 font-sans">
              <span className="font-semibold text-black">Competitor Lens: </span>
              Direct SaaS (Toast, R365, MarginEdge) are feature-rich but siloed. Big AI firms (Deloitte, Accenture) are broad and costly. <span className="font-semibold">Symbiotic AI</span> sits between—nimble, industry-specific, and transformation-focused.
            </p>
            </div>
          </div>
        </div>

        {/* Removed original venue-type grid and CTA per request */}
      </div>
    </section>
  );
}
