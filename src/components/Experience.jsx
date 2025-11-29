import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const { ref, controls } = useScrollAnimation()

  const experiences = [
    {
      title: "Central Planning & Operations Department - Head",
      company: "Nishat Linen",
      period: "November 2021 - Present (4 years 1 month)",
      location: "Lahore, Punjab, Pakistan",
      description: "Transformation of Back End Supply Chain, Macro and Micro, Structure and Functions with Data Visibility"
    },
    {
      title: "Production Planning and Control [PPC] & WIP- HOD",
      company: "Samad Apparel",
      period: "April 2019 - April 2021 (2 years 1 month)",
      location: "Lahore, Pakistan",
      description: "Capacity Planning, Production Planning, Fabric & Accessories Planning, SAP Development, LEAN Implementation"
    },
    {
      title: "Business Unit CPD Head",
      company: "Sapphire Retail Limited (SRL)",
      period: "December 2018 - April 2019 (5 months)",
      location: "Lahore, Pakistan",
      description: "Supply Chain Management, Capacity Planning, Production Planning Execution"
    },
    {
      title: "Merchandising-Spain and UK Market-Denim Apparel",
      company: "Crescent Bahuman Ltd",
      period: "April 2014 - February 2015 (11 months)",
      location: "Pindi Bhattian Hafizabad",
      description: "Product Development, Merchandising, Marketing in Spain and UK Market"
    }
  ]

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display mb-4 bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey through various roles in apparel and textile industry
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-card rounded-lg p-8 border border-dark-border hover:border-orange-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-orange-accent font-display">
                    {exp.title}
                  </h3>
                  <p className="text-yellow-accent font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="font-semibold mt-2 md:mt-0 text-yellow-accent/80">
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-400 mb-2">{exp.location}</p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience