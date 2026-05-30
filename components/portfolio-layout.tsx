import Link from 'next/link'
import type { ReactNode } from 'react'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { EducationSection } from '@/components/sections/education'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { ResearchSection } from '@/components/sections/research'
import { ContactSection } from '@/components/sections/contact'

const variants = [
  { slug: 'v1', label: 'Orb' },
  { slug: 'v2', label: 'Globe' },
  { slug: 'v3', label: 'Particles' },
  { slug: 'v4', label: 'Synthwave' },
  { slug: 'editorial', label: 'Editorial' },
]

export function PortfolioLayout({ hero, currentSlug }: { hero: ReactNode; currentSlug: string }) {
  return (
    <>
      {hero}
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ResearchSection />
      <ContactSection />

      {/* Floating variant switcher */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-border/60 shadow-lg">
        <span className="px-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Hero</span>
        {variants.map((v) => (
          <Link
            key={v.slug}
            href={`/${v.slug}`}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              v.slug === currentSlug
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
            }`}
          >
            {v.label}
          </Link>
        ))}
      </div>
    </>
  )
}
