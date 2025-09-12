'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sanjays2402@gmail.com',
    href: 'mailto:sanjays2402@gmail.com'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New Brunswick, NJ',
    href: null
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanjay24',
    href: 'https://linkedin.com/in/sanjay24'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Sanjays2402',
    href: 'https://github.com/Sanjays2402/'
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

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block">07</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GET IN TOUCH
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-foreground mb-6"
            >
              Let's Build Something Amazing Together
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to connect, 
              feel free to reach out!
            </motion.p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`${
                  contact.href ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <ContactCard contact={contact} />
                  </a>
                ) : (
                  <ContactCard contact={contact} />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sanjays2402@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Send Me an Email
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 pt-8 border-t border-border text-center"
          >
            <p className="text-muted-foreground">
              © 2026 Sanjay Santhanam. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </motion.footer>
        </div>
      </div>
    </section>
  )
}

const ContactCard = ({ contact }: { contact: typeof contactInfo[0] }) => {
  const Icon = contact.icon
  
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">
            {contact.label}
          </h4>
          <p className="text-muted-foreground group-hover:text-primary transition-colors">
            {contact.value}
          </p>
        </div>
        {contact.href && (
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
    </div>
  )
}