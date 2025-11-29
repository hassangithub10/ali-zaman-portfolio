import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-accent/15 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-dark-card rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg border border-orange-accent/30">
            <span className="text-4xl font-bold bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent">
              AZ
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-display"
        >
          <span className="bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent">
            Ali Zaman Malik
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-6 text-gray-300"
        >
          Engr. | Merchandising | Planning | Operations | Apparel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Expert in developing systems from scratch with strengths in adaptability, logical thinking, 
          product grip, planning, and ERP systems. Transforming supply chains with data visibility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <a
            href="#contact"
            className="bg-orange-accent hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="border-2 border-yellow-accent hover:bg-yellow-accent hover:text-dark-bg text-yellow-accent px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            View Experience
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-orange-accent" />
            <span>+923336549290</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-orange-accent" />
            <span>alizamantu@hotmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-orange-accent" />
            <span>Lahore, Punjab, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero