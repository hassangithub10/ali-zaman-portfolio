import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Target, Users, TrendingUp } from 'lucide-react'

const About = () => {
  const { ref, controls } = useScrollAnimation()

  const strengths = [
    {
      icon: Target,
      title: 'Adaptable & Logical',
      description: 'Quick to adapt to new challenges with strong logical thinking capabilities'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Expert in team management and fostering collaborative work environments'
    },
    {
      icon: TrendingUp,
      title: 'Product Expertise',
      description: 'Deep understanding of product development and market requirements'
    }
  ]

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display mb-4 bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know my professional background and approach to operations management
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
              <h3 className="text-2xl font-bold mb-6 text-orange-accent font-display">
                Professional Profile
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate and result-oriented professional with a proven track record of 
                unlocking growth and amplifying brand awareness. My diverse skillset spans across 
                multiple operations, with particular expertise in operations, planning and control 
                matters with advanced reporting skills.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="text-orange-accent font-semibold min-w-24">Strength:</span>
                  <span className="text-gray-300 ml-4">
                    Adaptable, Logically Convinces/Get Convinced, Product Grip, Planning, Follow Up, Mail, MS Excel, ERP
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-accent font-semibold min-w-24">Weakness:</span>
                  <span className="text-gray-300 ml-4">
                    Don't believe easily without proper validation
                  </span>
                </div>
              </div>
              <p className="text-gray-300 italic border-l-4 border-yellow-accent pl-4 py-2">
                Believes honesty, leadership and team management are key roles to prosper as an individual, 
                a company and an economy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ delay: 0.4 }}
            className="grid gap-6"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-dark-card rounded-xl p-6 border border-dark-border hover:border-orange-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-accent to-yellow-accent rounded-lg p-3">
                    <strength.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{strength.title}</h4>
                    <p className="text-gray-300">{strength.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Career Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.8 }}
          className="bg-dark-card rounded-xl p-8 border border-dark-border"
        >
          <h3 className="text-2xl font-bold mb-6 text-yellow-accent font-display text-center">
            Career Journey
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-accent">2012</div>
              <p className="text-gray-300">Started as Product Developer</p>
              <p className="text-sm text-yellow-accent">Softwood Lahore</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-accent">2014</div>
              <p className="text-gray-300">Product Development & Merchandising</p>
              <p className="text-sm text-yellow-accent">Crescent Bahuman Ltd</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-accent">2015</div>
              <p className="text-gray-300">Planning & Supply Chain</p>
              <p className="text-sm text-yellow-accent">Sapphire Retail</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-accent">2021</div>
              <p className="text-gray-300">Head of Planning & Operations</p>
              <p className="text-sm text-yellow-accent">Nishat Linen</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About