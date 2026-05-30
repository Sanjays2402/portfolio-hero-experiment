import { HeroShell } from '@/components/heroes/hero-shell'
import { HeroOrb } from '@/components/hero-orb'
import { PortfolioLayout } from '@/components/portfolio-layout'

export default function Home() {
  return <PortfolioLayout currentSlug="v1" hero={<HeroShell centerpiece={<HeroOrb />} />} />
}
