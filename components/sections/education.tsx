'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'

const education = [
  {
    school: 'Syracuse University',
    degree: 'Master of Science in Computer Science',
    location: 'Syracuse, NY',
    period: 'Aug 2022 - May 2024',
    type: 'Masters'
  },
  {
    school: 'Anna University',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    location: 'Chennai, IN',
    period: 'Aug 2018 - Apr 2022',
    type: 'Bachelors'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 glass-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block">05</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            EDUCATION
          </h2>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-lg p-8 shadow-lg hover:shadow-xl hover:bg-card/50 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 left-0 w-1 h-full ${
                edu.type === 'Masters' ? 'bg-primary' : 'bg-primary/60'
              }`}></div>
              
              {/* Education Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg ${
                  edu.type === 'Masters' ? 'bg-primary/10' : 'bg-primary/5'
                }`}>
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {edu.school}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    edu.type === 'Masters' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {edu.type}
                  </span>
                </div>
              </div>

              {/* Degree */}
              <h4 className="text-lg font-semibold text-foreground mb-4 leading-relaxed">
                {edu.degree}
              </h4>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>

              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}