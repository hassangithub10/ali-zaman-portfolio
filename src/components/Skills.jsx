import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const { ref, controls } = useScrollAnimation()

  const technicalSkills = [
    { name: 'MS Excel', level: 90 },
    { name: 'ERP Systems', level: 85 },
    { name: 'Production Planning', level: 88 },
    { name: 'Supply Chain Management', level: 92 },
    { name: 'Capacity Planning', level: 85 },
    { name: 'Data Analysis & Reporting', level: 82 }
  ]

  const professionalSkills = [
    'Team Leadership',
    'Strategic Planning',
    'Process Optimization',
    'Lean Manufacturing',
    'Quality Control',
    'Vendor Management',
    'Budget Planning',
    'Performance Monitoring'
  ]

  const languages = [
    { name: 'English', level: 'Full Professional' },
    { name: 'Urdu', level: 'Full Professional' },
    { name: 'Arabic', level: 'Elementary' },
    { name: 'Punjabi', level: 'Native or Bilingual' }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-dark-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display mb-4 bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive overview of my professional skills and expertise across different domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-dark-bg rounded-xl p-8 border border-dark-border">
              <h3 className="text-2xl font-bold mb-6 text-orange-accent font-display">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={controls}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-orange-accent font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-border rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={controls}
                        transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                        className="h-3 rounded-full bg-gradient-to-r from-orange-accent to-yellow-accent"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Professional Skills & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Professional Skills */}
            <div className="bg-dark-bg rounded-xl p-8 border border-dark-border">
              <h3 className="text-2xl font-bold mb-6 text-yellow-accent font-display">
                Professional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {professionalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={controls}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="bg-dark-card px-4 py-2 rounded-full text-gray-300 border border-dark-border hover:border-orange-accent transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-dark-bg rounded-xl p-8 border border-dark-border">
              <h3 className="text-2xl font-bold mb-6 text-orange-accent font-display">
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={controls}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-dark-border last:border-b-0"
                  >
                    <span className="text-gray-300 font-medium">{language.name}</span>
                    <span className="text-yellow-accent font-semibold">{language.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.9 }}
          className="mt-12 bg-dark-bg rounded-xl p-8 border border-dark-border text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-yellow-accent font-display">
            Certifications & Awards
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <div className="bg-dark-card px-6 py-3 rounded-lg border border-dark-border">
              Professional Engineer
            </div>
            <div className="bg-dark-card px-6 py-3 rounded-lg border border-dark-border">
              Assistant Director Lahore Development Authority
            </div>
            <div className="bg-dark-card px-6 py-3 rounded-lg border border-dark-border">
              Vice President of Technical Textiles Society
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills