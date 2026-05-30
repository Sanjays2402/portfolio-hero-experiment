import { HeroShell } from '@/components/heroes/hero-shell'
import { HeroOrb } from '@/components/hero-orb'
import { PortfolioLayout } from '@/components/portfolio-layout'

export default function V1() {
  return <PortfolioLayout currentSlug="v1" hero={<HeroShell centerpiece={<HeroOrb />} />} />
}
