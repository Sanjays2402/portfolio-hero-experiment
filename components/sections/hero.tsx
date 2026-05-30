'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { HeroOrb } from '@/components/hero-orb'

const taglineWords = [
  'Java', 'Spring Boot', 'React', 'Distributed Systems',
  'AWS', 'PostgreSQL', 'Node.js', 'TypeScript', 'System Design',
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-32 overflow-hidden"
    >
      {/* Animated centerpiece — full bleed behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[min(90vw,900px)]">
          <HeroOrb />
        </div>
      </div>

      {/* Vignette to anchor text */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background pointer-events-none" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[420px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(var(--background) / 0.75) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 items-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-sm font-medium tracking-[0.35em] uppercase text-muted-foreground mb-6"
            >
              Software Engineer  ·  Builder
            </motion.p>

            {/* Massive headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-5xl sm:text-7xl lg:text-[8.5rem] font-bold leading-[0.95] tracking-tight mb-8"
            >
              <span className="block">Building ideas</span>
              <span className="block italic font-light text-foreground/55" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.7)' }}>
                into reality.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed text-center"
              style={{ textAlign: 'center' }}
            >
              Four years shipping scalable backend services and slick frontends.
              Java &middot; Spring Boot &middot; React &middot; AWS.
              MS Computer Science, Syracuse University.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                View Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-foreground hover:bg-muted/40 transition-colors"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-foreground/40 group-hover:border-foreground transition-colors">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                My Story
              </Link>
            </motion.div>

            {/* Socials — fixed left rail */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-40"
            >
              {[
                { Icon: Github, href: 'https://github.com/Sanjays2402/', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com/in/sanjay24', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:sanjays2402@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full bg-background/60 backdrop-blur border border-border/60 hover:border-foreground/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip — full-bleed bottom band */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-border/40 py-5 bg-background/50 backdrop-blur-sm"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...taglineWords, ...taglineWords].map((w, i) => (
            <span
              key={i}
              className="mx-6 text-xs tracking-[0.3em] uppercase text-muted-foreground"
            >
              {w}
              <span className="ml-12">&bull;</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
