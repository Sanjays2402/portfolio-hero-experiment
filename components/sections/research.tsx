'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Calendar, Award } from 'lucide-react'

const publications = [
  {
    title: 'Animal detection for road safety using deep learning',
    authors: 'S Santhanam, SS Panigrahi, SK Kashyap, BK Duriseti',
    conference: '2021 International Conference on Computational Intelligence and Computing',
    year: '2021',
    citations: '24',
    type: 'Conference Paper'
  },
  {
    title: 'Model proposal for a yolo objection detection algorithm based social distancing detection system',
    authors: 'SS Balamurugan, S Santhanam, A Billa, R Aggarwal, NV Alluri',
    conference: '2021 International Conference on Computational Intelligence and Computing',
    year: '2021',
    citations: '4',
    type: 'Conference Paper'
  },
  {
    title: 'Drowsiness detection with OpenCV',
    authors: 'S Sanjay, N Banupriya, M Sathish',
    conference: '2021 Second International Conference on Electronics and Sustainable Communication',
    year: '2021',
    citations: '3',
    type: 'Conference Paper'
  },
  {
    title: 'Recognition of Pneumonia from the X-Ray image pattern using Convolutional Neural Networks',
    authors: 'Sathya Soundararajan, Thyagaraj T, YANAMADALA VASU DEVA SAI',
    conference: 'Springer - International Conference on Innovations, Research and Emerging Technologies (IRCET-21)',
    year: '2021',
    citations: '2',
    type: 'Conference Paper'
  },
  {
    title: 'Computer Vision based Road Lane Detection',
    authors: 'S S. Sidhaarthan',
    journal: 'Artificial & Computational Intelligence 2 (2)',
    year: '2021',
    citations: '0',
    type: 'Journal Article'
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

export function ResearchSection() {
  const totalCitations = publications.reduce((sum, pub) => sum + parseInt(pub.citations), 0)

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block">06</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            RESEARCH
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Published research in computer vision, deep learning, and intelligent systems
          </p>
        </motion.div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="text-center p-6 glass-stat rounded-lg">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">{publications.length}</div>
            <div className="text-sm text-muted-foreground">Publications</div>
          </div>
          <div className="text-center p-6 glass-stat rounded-lg">
            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">{totalCitations}+</div>
            <div className="text-sm text-muted-foreground">Citations</div>
          </div>
          <div className="text-center p-6 glass-stat rounded-lg">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">2021</div>
            <div className="text-sm text-muted-foreground">Research Year</div>
          </div>
        </motion.div>

        {/* Publications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2, shadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              className="glass-card rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-card/50 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  {/* Publication Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {publication.title}
                  </h3>
                  
                  {/* Authors */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{publication.authors}</span>
                  </div>
                  
                  {/* Conference/Journal */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <BookOpen className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{publication.conference || publication.journal}</span>
                  </div>
                  
                  {/* Type Badge */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {publication.type}
                  </span>
                </div>
                
                {/* Right Side - Year & Citations */}
                <div className="flex lg:flex-col gap-4 lg:gap-2 lg:text-right">
                  <div className="text-center lg:text-right">
                    <div className="text-2xl font-bold text-foreground">{publication.year}</div>
                    <div className="text-xs text-muted-foreground">Year</div>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-2xl font-bold text-primary">{publication.citations}</div>
                    <div className="text-xs text-muted-foreground">Citations</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Research Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Computer Vision', 'Deep Learning', 'Object Detection', 
              'Medical Imaging', 'Convolutional Neural Networks', 'Road Safety', 
              'OpenCV', 'YOLO Algorithm', 'Social Distancing', 
              'Drowsiness Detection', 'Lane Detection', 'Healthcare AI'
            ].map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 text-sm font-medium glass-badge text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}