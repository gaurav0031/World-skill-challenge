"use client"
import { motion } from "framer-motion"

export default function Categories() {
  const categories = [
    {
      name: "TechFrontiers",
      subtitle: "Robotics, AI & Machine Learning",
      description: "Innovate solutions for real-world problems using sensors, automation, or ML logic.",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "HackLogic",
      subtitle: "Coding & App Development",
      description: "Build useful tools, games, or apps to solve social and student-life challenges.",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Idea2Impact",
      subtitle: "Young Entrepreneur Challenge",
      description:
        "Pitch your startup idea that solves a real-world need in sustainability, education, or everyday tech.",
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "SoarFest",
      subtitle: "Aeromodelling & Aviation Science",
      description: "Design, construct and explain working gliders or RC-based air models.",
      icon: "✈️",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "ThinkCreate",
      subtitle: "Design Thinking & 3D Modelling",
      description: "Solve problems with smart design using SketchUp or paper prototyping techniques.",
      icon: "🎨",
      color: "from-red-500 to-rose-500",
    },
    {
      name: "Gaming: Get.Set.Go!",
      subtitle: "RC Car Races & BattleBot Duals",
      description: "Compete in adrenaline-filled RC Car races and BattleBot duals.",
      icon: "🎮",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <section id="categories" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Competition Categories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your arena and showcase your skills in these exciting categories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6 md:p-8">
                <div className="text-3xl md:text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{category.name}</h3>
                <h4 className="text-base md:text-lg font-semibold text-blue-400 mb-4">{category.subtitle}</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800 rounded-lg p-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Team Structure</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl md:text-2xl">3</span>
              </div>
              <p className="text-white font-semibold">Students</p>
            </div>
            <div className="text-2xl md:text-4xl text-gray-400">+</div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl md:text-2xl">1</span>
              </div>
              <p className="text-white font-semibold">Mentor (Teacher only)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
