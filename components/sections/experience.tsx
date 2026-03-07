'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer',
    company: 'Johnson & Johnson',
    period: 'Jun 2024 - Present',
    location: 'New Brunswick, New Jersey, United States · Hybrid',
    description: 'Architected a FHIR-compliant microservice using Java 17 and Spring Boot to streamline patient appointment scheduling across 15 hospitals, reducing average booking time by 35% and supporting 24/7 availability.',
    technologies: ['Java 17', 'Spring Boot', 'FHIR', 'Microservices', 'React.js', 'API Gateway']
  },
  {
    title: 'Software Developer',
    company: 'Citi',
    period: 'May 2023 - Apr 2024',
    location: 'New York, United States · Remote',
    description: 'Facilitated the construction of Spring Boot microservices for real-time credit card fraud checks using Kafka Streams and Oracle, supporting over 1M transactions per hour and meeting strict latency requirements with 15% accuracy improvement.',
    technologies: ['Spring Boot', 'Kafka Streams', 'Oracle', 'Docker', 'RESTful APIs', 'Java 17']
  },
  {
    title: 'Software Development Engineer',
    company: 'Zentek Infosoft',
    period: 'Jun 2020 - Jul 2022',
    location: 'Jaipur, Rajasthan, India · Remote',
    description: 'Delivered a role-based enterprise HR portal using Java Spring Boot, Angular, and MySQL, streamlining onboarding workflows and reducing manual HR processing time by 40%.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AWS', 'REST APIs']
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

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block">02</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 pl-16' : 'md:pl-12 pl-16'
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-card/50 hover:border-white/20 transition-all duration-300"
                >
                  {/* Company & Period */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Building2 className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>

                  {/* Location */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {experience.location}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono glass-badge text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}