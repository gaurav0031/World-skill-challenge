"use client"
import { motion } from "framer-motion"

export default function Pricing() {
  const pricingTiers = [
    {
      title: "Free Team",
      price: "₹0",
      description: "1 Free Team per school in any ONE category",
      features: [
        "Access to all competition stages",
        "Virtual bootcamp participation",
        "Regional round qualification",
        "Certificate of participation",
        "Basic mentorship support",
      ],
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      title: "Standard Categories",
      price: "₹499",
      description: "Per additional team",
      features: [
        "TechFrontiers (Robotics, AI & ML)",
        "HackLogic (Coding & App Development)",
        "Idea2Impact (Young Entrepreneur)",
        "SoarFest (Aeromodelling)",
        "ThinkCreate (Design Thinking)",
        "All competition benefits",
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      title: "Gaming Category",
      price: "₹999",
      description: "Per team for Gaming: Get.Set.Go!",
      features: [
        "RC Car races participation",
        "BattleBot duals competition",
        "Premium equipment access",
        "Advanced technical support",
        "Exclusive gaming workshops",
        "Special recognition awards",
      ],
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Participation Fee</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Affordable pricing to make innovation accessible to all students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-gray-800 rounded-xl overflow-hidden shadow-xl ${
                tier.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{tier.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== "₹0" && <span className="text-gray-400 ml-2">per team</span>}
                </div>
                <p className="text-gray-300 mb-6 text-sm md:text-base">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300 text-sm md:text-base">
                      <svg
                        className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${tier.color} hover:opacity-90 transition-opacity`}
                >
                  {tier.price === "₹0" ? "Claim Free Spot" : "Register Team"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Special Offer!</h3>
            <p className="text-white text-base md:text-lg">
              Every school gets <span className="font-bold">1 FREE team registration</span> in any category of their
              choice. Additional teams can be registered at the above rates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
