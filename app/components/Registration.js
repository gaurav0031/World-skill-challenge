"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Registration() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    category: "",
    teamName: "",
    student1: "",
    student2: "",
    student3: "",
    mentorName: "",
    additionalInfo: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const categories = [
    "TechFrontiers (Robotics, AI & ML)",
    "HackLogic (Coding & App Development)",
    "Idea2Impact (Young Entrepreneur)",
    "SoarFest (Aeromodelling)",
    "ThinkCreate (Design Thinking)",
    "Gaming: Get.Set.Go!",
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          studentNames: [formData.student1, formData.student2, formData.student3],
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          schoolName: "",
          contactPerson: "",
          email: "",
          phone: "",
          category: "",
          teamName: "",
          student1: "",
          student2: "",
          student3: "",
          mentorName: "",
          additionalInfo: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Register Your Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to showcase your skills? Register your team now and be part of this amazing journey!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-700 rounded-xl p-6 md:p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">School Name *</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your school name"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Contact Person *</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Teacher/Coordinator name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="contact@school.edu"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Competition Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Team Name *</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your team name"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-4">Student Names (3 required) *</label>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="student1"
                  value={formData.student1}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Student 1 name"
                />
                <input
                  type="text"
                  name="student2"
                  value={formData.student2}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Student 2 name"
                />
                <input
                  type="text"
                  name="student3"
                  value={formData.student3}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Student 3 name"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Mentor Name (Teacher) *</label>
              <input
                type="text"
                name="mentorName"
                value={formData.mentorName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Teacher mentor name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Additional Information</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any additional information or special requirements..."
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500 text-white p-4 rounded-lg text-center"
              >
                Registration successful! We'll contact you soon with further details.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500 text-white p-4 rounded-lg text-center"
              >
                Registration failed. Please try again or contact support.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Registering..." : "Register Team"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
