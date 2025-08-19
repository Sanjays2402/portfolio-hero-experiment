'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'FHIR-Compliant Patient Scheduling Microservice',
    description: 'Architected a FHIR-compliant microservice using Java 17 and Spring Boot to streamline patient appointment scheduling across 15 hospitals, reducing average booking time by 35% and supporting 24/7 availability.',
    technologies: ['Java 17', 'Spring Boot', 'FHIR', 'Microservices']
  },
  {
    title: 'Real-Time Credit Card Fraud Detection System',
    description: 'Facilitated the construction of Spring Boot microservices for real-time credit card fraud checks using Kafka Streams and Oracle, supporting over 1M transactions per hour with 15% accuracy improvement.',
    technologies: ['Spring Boot', 'Kafka Streams', 'Oracle', 'Docker']
  },
  {
    title: 'Enterprise HR Portal with Role-Based Access',
    description: 'Delivered a role-based enterprise HR portal using Java Spring Boot, Angular, and MySQL, streamlining onboarding workflows and reducing manual HR processing time by 40%.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL']
  },
  {
    title: 'Flight Arrival Delay Prediction Model',
    description: 'Leveraged Scikit-learn and XGBoost to predict flight arrival delays with 94% accuracy on the OpenFlights dataset, while visualizing cascading delay impacts using Matplotlib and Seaborn for 15% improvement in airline scheduling efficiency.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Matplotlib']
  },
  {
    title: 'CLOUDKEY: Secure Authentication Service',
    description: 'Crafted a secure, cloud-based user authentication system using Firebase Auth, Google OAuth, and API keys, while enhancing frontend/backend flows with React and Node.js; boosted login efficiency by 30% and reduced access errors by 20%.',
    technologies: ['Firebase Auth', 'Google OAuth', 'React', 'Node.js']
  },
  {
    title: 'TensorFlow Image Detection Pipeline',
    description: 'Established a TensorFlow-powered early sepsis detection model into a Python Flask API and integrated it with cloud-alert systems in SMART-on-FHIR-compliant REST APIs implementing the healthcare interoperability data standard, removing 80% of manual entry overhead.',
    technologies: ['TensorFlow', 'Python Flask', 'SMART-on-FHIR', 'REST APIs']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block">03</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded border border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}