import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'  // Updated import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // For demo purposes - in real implementation, configure EmailJS
      console.log('Form submitted:', formData)
      
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setIsSent(false), 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display mb-4 bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feel free to reach out for professional opportunities or collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-orange-accent font-display">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-orange-accent to-yellow-accent rounded-lg p-3">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-300">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-orange-accent to-yellow-accent rounded-lg p-3">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <a 
                    href="mailto:alizamantu@hotmail.com"
                    className="text-gray-300 hover:text-orange-accent transition-colors"
                  >
                    alizamantu@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-orange-accent to-yellow-accent rounded-lg p-3">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Phone</h4>
                  <a 
                    href="tel:+923336549290"
                    className="text-gray-300 hover:text-orange-accent transition-colors"
                  >
                    +92 333 6549290
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-yellow-accent mb-4">Professional Summary</h4>
              <p className="text-gray-300">
                With expertise in operations management, production planning, and supply chain transformation,
                I bring comprehensive skills to drive business growth and operational efficiency in the apparel industry.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-bg rounded-xl p-6 border border-dark-border">
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-accent text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-accent text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-accent text-white"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-accent text-white resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-accent hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-600 text-white rounded-lg text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact