import { HeroShell } from '@/components/heroes/hero-shell'
import { HeroWireframe } from '@/components/heroes/hero-wireframe'
import { PortfolioLayout } from '@/components/portfolio-layout'

export default function V2() {
  return <PortfolioLayout currentSlug="v2" hero={<HeroShell centerpiece={<HeroWireframe />} />} />
}
