import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Shield } from 'lucide-react'

const Footer = ({ onLoginClick }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-bold bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent mb-4"
            >
              Ali Zaman Malik
            </motion.div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional Engineer specializing in merchandising, planning, and operations 
              with extensive experience in apparel industry and supply chain transformation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ali-zaman-malik-engr-5b26a628"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-accent transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-accent" />
                <span className="text-gray-400">+92 333 6549290</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-accent" />
                <a 
                  href="mailto:alizamantu@hotmail.com"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                >
                  alizamantu@hotmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-accent" />
                <span className="text-gray-400">Lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`)
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-gray-400 hover:text-orange-accent transition-colors duration-300 text-left w-full"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={onLoginClick}
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-accent transition-colors duration-300 mt-4"
              >
                <Shield size={16} />
                Admin Login
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} Ali Zaman Malik. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Professional Engineer</span>
            <span>•</span>
            <span>Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer