'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const codeSnippet = `public class SanjaySanthanam {
    private String role = "Software Developer";
    private String[] skills = {
        "Java", "Spring Boot", "React.js",
        "Node.js", "PostgreSQL", "AWS"
    };
    private String education = "MS Computer Science";
    private String university = "Syracuse University";
    
    public void buildAmazingThings() {
        // Let's create something extraordinary!
    }
}`

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">SOFTWARE</span>
                <span className="block text-gradient">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              With over 4 years of experience building scalable applications with Java, Spring Boot, 
              and modern web technologies. Holding a Master's degree in Computer Science from Syracuse University.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                href="#projects"
                className="btn-primary inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="btn-ghost inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Sanjays2402/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/sanjay24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:sanjays2402@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Code Window */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <div className="glass rounded-lg overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm text-muted-foreground font-mono">
                  SanjaySanthanam.java
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-card font-mono text-sm overflow-x-auto">
                <pre className="text-card-foreground">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}