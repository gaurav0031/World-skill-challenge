"use client"
import { motion } from "framer-motion"

export default function Stages() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Online Idea/Report Submission",
      description: "Submit your innovative ideas or detailed reports based on the selected theme.",
      icon: "📝",
      color: "bg-blue-500",
    },
    {
      stage: "Stage 2",
      title: "Virtual Bootcamp",
      description:
        "Participate in exclusive skill-enhancement sessions with experts to refine your ideas and prepare for the next round.",
      icon: "💻",
      color: "bg-green-500",
    },
    {
      stage: "Stage 3",
      title: "Regional Rounds (On-Ground)",
      description: "Compete live in your nearest zone: Mumbai | Nagpur | Kolkata | Noida",
      icon: "🏆",
      color: "bg-yellow-500",
    },
    {
      stage: "Stage 4",
      title: "National Finale – Delhi",
      description:
        "Top teams from each region battle it out at the Grand Finale in Delhi with industry leaders and mentors in attendance.",
      icon: "🥇",
      color: "bg-red-500",
    },
    {
      stage: "Stage 5",
      title: "International Round",
      description: "To Be Announced - Represent your country on the global stage!",
      icon: "🌍",
      color: "bg-purple-500",
    },
  ]

  return (
    <section id="stages" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Competition Stages</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Your journey from idea to international recognition</p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"} gap-8`}
            >
              <div className="w-full md:w-1/2">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-700 rounded-lg p-6 md:p-8 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-xl md:text-2xl">{stage.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-blue-400">{stage.stage}</h3>
                      <h4 className="text-lg md:text-xl font-bold text-white">{stage.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{stage.description}</p>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 ${stage.color} rounded-full flex items-center justify-center`}
                >
                  <span className="text-2xl md:text-3xl">{stage.icon}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
