import { HeroShell } from '@/components/heroes/hero-shell'
import { HeroWireframe } from '@/components/heroes/hero-wireframe'

export default function V2() {
  return <HeroShell centerpiece={<HeroWireframe />} variantLabel="Variant 02 — Wireframe Globe" />
}
