import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const { ref, controls } = useScrollAnimation()

  const education = [
    {
      degree: "Engineer's Degree, Textiles Engineering (Textile Chemistry)",
      institution: "National Textile University",
      period: "January 2007 - December 2011",
      location: "Pakistan"
    },
    {
      degree: "F.Sc., Pre-Medicine/Pre-Medical Studies",
      institution: "Forman Christian College",
      period: "2003 - 2004",
      location: "Pakistan"
    },
    {
      degree: "High School, Matriculation Science Group",
      institution: "Divisional Public School Faisalabad",
      period: "1997 - 2002",
      location: "Faisalabad, Pakistan"
    }
  ]

  const internships = [
    {
      company: "Azgard9",
      role: "Denim Fabric Development Training",
      period: "2012",
      supervisor: "Mr. Kashif Junaid"
    },
    {
      company: "Cotton Web Private Limited",
      role: "Product Development of Jeans",
      period: "2012",
      supervisor: "Mr. Asif Khan & Mr. Faisal Yaqub"
    },
    {
      company: "Crescent Textile Mills Ltd",
      role: "Dyeing, Printing and Finishing Internship",
      period: "August 2009 - September 2009",
      achievements: [
        "Development Of Shade Book",
        "Understanding of Dyeing Machines",
        "Worked on running Finishes"
      ]
    }
  ]

  return (
    <section id="education" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display mb-4 bg-gradient-to-r from-orange-accent to-yellow-accent bg-clip-text text-transparent">
            Education & Training
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic background and professional training journey
          </p>
        </motion.div>

        {/* Formal Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-orange-accent font-display text-center">
            Formal Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={controls}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="bg-dark-card rounded-xl p-8 border border-dark-border hover:border-orange-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-accent to-yellow-accent rounded-lg p-3">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-yellow-accent font-semibold text-lg mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-6 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-orange-accent" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-orange-accent" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-yellow-accent font-display text-center">
            Professional Training & Internships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="bg-dark-card rounded-xl p-6 border border-dark-border hover:border-yellow-accent/30 transition-all duration-300 h-full"
              >
                <h4 className="text-lg font-bold text-white mb-2">{intern.company}</h4>
                <p className="text-orange-accent font-semibold mb-3">{intern.role}</p>
                <p className="text-gray-400 text-sm mb-3">{intern.period}</p>
                {intern.supervisor && (
                  <p className="text-gray-300 text-sm mb-3">
                    Supervisor: {intern.supervisor}
                  </p>
                )}
                {intern.achievements && (
                  <ul className="text-gray-300 text-sm space-y-1">
                    {intern.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* School of Vision and Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-r from-orange-accent/10 to-yellow-accent/10 rounded-xl p-8 border border-orange-accent/30 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-white font-display">
            School of Vision and Skills
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive training program covering denim fabric development, product development 
            of jeans, and essential follow-up skills under expert supervision in leading textile companies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education