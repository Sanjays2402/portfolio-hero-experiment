import { HeroShell } from '@/components/heroes/hero-shell'
import { HeroParticles } from '@/components/heroes/hero-particles'
import { PortfolioLayout } from '@/components/portfolio-layout'

export default function V3() {
  return <PortfolioLayout currentSlug="v3" hero={<HeroShell centerpiece={<HeroParticles />} />} />
}
