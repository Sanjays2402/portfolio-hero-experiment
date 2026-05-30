import { HeroShell } from '@/components/heroes/hero-shell'
import { HeroGrid } from '@/components/heroes/hero-grid'
import { PortfolioLayout } from '@/components/portfolio-layout'

export default function V4() {
  return <PortfolioLayout currentSlug="v4" hero={<HeroShell centerpiece={<HeroGrid />} />} />
}
