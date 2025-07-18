"use client"
import { motion } from "framer-motion"

export default function About() {
  const categories = [
    { name: "Primary", range: "Class 3 to 5", color: "bg-green-500" },
    { name: "Junior", range: "Classes 6 to 8", color: "bg-blue-500" },
    { name: "Senior", range: "Classes 9 to 12", color: "bg-purple-500" },
  ]

  const benefits = [
    "National & International Recognition",
    "Hands-on Industry Exposure",
    "Expert Mentorship",
    "Cash Prizes, Trophies & AeroBay Skill Badges",
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">About the Challenge</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With a unique blend of futuristic themes, hands-on experiences, and real-world challenges, this platform
            helps students go beyond the classroom and into the world of innovation, teamwork, and leadership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Age Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 rounded-lg p-8 text-center"
              >
                <div
                  className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-xl">{category.name[0]}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{category.name}</h4>
                <p className="text-gray-300">{category.range}</p>
                <p className="text-sm text-gray-400 mt-4">
                  Custom-tailored themes and problem statements suited to the age group
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Join the World Skill Challenge?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-lg p-4"
              >
                <p className="text-white font-semibold text-sm md:text-base">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
