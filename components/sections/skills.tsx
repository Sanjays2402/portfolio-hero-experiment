'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: [
      'Java',
      'C/C++',
      'Python',
      'JavaScript',
      'TypeScript',
      'Ruby',
    ]
  },
  {
    icon: Wrench,
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Angular',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript',
    ]
  },
  {
    icon: Database,
    title: 'Backend & Databases',
    skills: [
      'Spring Boot',
      'Node.js',
      'Django',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Jenkins',
      'Terraform',
      'Azure',
    ]
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

const SkillCard = ({ skill, index }: { skill: string, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
    >
      <div className="bg-gradient-to-br from-card to-muted/50 border border-border rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Skill name */}
        <div className="relative z-10 text-center">
          <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            {skill}
          </span>
        </div>
        
        {/* Subtle pulse effect */}
        <motion.div
          className="absolute inset-0 border border-primary/20 rounded-lg opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-dyslexic text-primary mb-4 block">04</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SKILLS
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-6xl mx-auto">
            {[
              'Flask', 'FastAPI', 'Microsoft SQL Server', 'NoSQL', 'GCP', 'Ansible',
              'Git', 'GitHub', 'GitLab', 'JIRA', 'Trello', 'Confluence',
              'REST APIs', 'GraphQL', 'Microservices', 'FHIR', 'OAuth',
              'JUnit', 'Selenium', 'PyTest', 'Jest', 'Mocha',
              'Agile/Scrum', 'Waterfall', 'SDLC', 'Firebase', 'Postman'
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-dyslexic bg-muted text-muted-foreground rounded-full border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}