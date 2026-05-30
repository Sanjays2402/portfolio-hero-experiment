import { HeroShell } from '@/components/heroes/hero-shell'
import { HeroOrb } from '@/components/hero-orb'

export default function V1() {
  return <HeroShell centerpiece={<HeroOrb />} variantLabel="Variant 01 — Gradient Orb" />
}
