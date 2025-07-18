"use client"
import { motion } from "framer-motion"

export default function Contact() {
  const cities = ["Mumbai", "Nagpur", "Kolkata", "Noida"]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Stay Updated!</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get the latest updates, forms, guidelines, and announcements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300 text-sm md:text-base">worldskillchallenge@aerobay.com</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Event Incharge</h4>
                  <p className="text-gray-300 text-sm md:text-base">NSR – 9557******</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Official Website</h4>
                  <p className="text-gray-300 text-sm md:text-base">www.worldskillchallenge.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Regional Zones</h3>

            <div className="grid grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-4 md:p-6 text-center"
                >
                  <h4 className="text-white font-bold text-lg md:text-xl">{city}</h4>
                  <p className="text-blue-100 text-xs md:text-sm mt-2">Regional Round</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg p-6 md:p-8 text-center"
            >
              <h4 className="text-white font-bold text-xl md:text-2xl mb-2">National Finale</h4>
              <p className="text-white text-lg">Delhi</p>
              <p className="text-yellow-100 text-sm mt-2">Grand Finale with Industry Leaders</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Important Note</h3>
            <p className="text-gray-300 text-base md:text-lg">
              All updates, forms, guidelines, and announcements will be available at our official website. Official
              documentation and event handbook will be shared with all participating schools.
            </p>
            <motion.a
              href="https://www.worldskillchallenge.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Official Website
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-gray-700 pt-8"
        >
          <p className="text-gray-400 text-base md:text-lg mb-4">Let your students step into the future — only at</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            World Skill Challenge Powered by <span className="text-blue-400">AeroBay</span>!
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
