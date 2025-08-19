'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

const stats = [
  { number: '4+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Completed' },
  { number: '30+', label: 'Research Citations' }
]

const terminalCommands = [
  { command: '$ whoami', output: 'sanjay.santhanam' },
  { command: '$ cat experience.txt', output: '4+ years in software development' },
  { command: '$ ls skills/', output: 'Java  Spring-Boot  React.js  Node.js  PostgreSQL' },
  { command: '$ cat education.txt', output: 'MS Computer Science - Syracuse University' }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block">01</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Passionate Software Developer
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 4 years of experience in building scalable microservices-based 
                applications using Java, Spring Boot, and React.js, I specialize in creating 
                robust backend systems and engaging user interfaces.
              </p>
              
              <p>
                Holding a Master's degree in Computer Science from Syracuse University, 
                I bring a strong foundation in software engineering principles and a 
                passion for continuous learning.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-card border border-border"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-lg overflow-hidden shadow-xl">
              {/* Terminal Header */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-mono">
                  ~/sanjay
                </span>
              </div>

              {/* Terminal Content */}
              <div className="bg-card p-6 font-mono text-sm space-y-3">
                {terminalCommands.map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  >
                    <div className="text-primary">
                      <span className="text-muted-foreground">➜</span> {cmd.command}
                    </div>
                    <div className="text-muted-foreground ml-2">
                      {cmd.output}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex items-center"
                >
                  <span className="text-muted-foreground">➜</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 text-primary"
                  >
                    _
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}