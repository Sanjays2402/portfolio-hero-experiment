'use client'

import { useEffect, useRef, useState } from 'react'
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

const PROMPT = 'sanjay@portfolio:~$ '

type Line = { txt: string; cls?: string }

const intro: Line[] = [
  { txt: 'Last login: ' + new Date().toLocaleString() + ' on tty001', cls: 'text-emerald-300/60' },
  { txt: '' },
  { txt: PROMPT + 'whoami', cls: 'text-emerald-300' },
  { txt: profile.name + ' — ' + profile.title, cls: 'text-emerald-100' },
  { txt: profile.location + ' · ' + profile.status },
  { txt: '' },
  { txt: PROMPT + 'cat about.txt', cls: 'text-emerald-300' },
  { txt: profile.blurb },
  { txt: '' },
  { txt: PROMPT + 'ls -la /work', cls: 'text-emerald-300' },
  ...projects.map(p => ({ txt: `drwxr-xr-x  sanjay  ${p.stack.join(',').padEnd(28)} ${p.n}-${p.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}` })),
  { txt: '' },
  { txt: PROMPT + 'history | tail -3', cls: 'text-emerald-300' },
  ...experience.map((e, i) => ({ txt: `  ${(experience.length - i).toString().padStart(3, ' ')}  ${e.period.padEnd(22)} ${e.company.padEnd(22)} ${e.role}` })),
  { txt: '' },
  { txt: PROMPT + 'type "help" for commands · "open" + n° to view a project', cls: 'text-emerald-300/70' },
]

const commands: Record<string, (arg?: string) => Line[]> = {
  help: () => [
    { txt: 'Commands:', cls: 'text-emerald-300' },
    { txt: '  about        — long-form bio' },
    { txt: '  work         — list projects' },
    { txt: '  open <n>     — open project, e.g. `open 02`' },
    { txt: '  exp          — work history' },
    { txt: '  skills       — tech stack by category' },
    { txt: '  edu          — education' },
    { txt: '  contact      — how to reach me' },
    { txt: '  clear        — clear the buffer' },
    { txt: '  sudo hire    — try it' },
  ],
  about: () => [{ txt: profile.blurb }],
  work: () => projects.map(p => ({ txt: `[${p.n}] ${p.title.padEnd(34)} ${p.stack.join(' · ')}` })),
  exp: () => experience.flatMap(e => [
    { txt: `${e.period}  ${e.company} — ${e.role}`, cls: 'text-emerald-200' },
    { txt: `              ${e.location}`, cls: 'text-emerald-100/60' },
    { txt: `              ${e.blurb}` },
    { txt: '' },
  ]),
  skills: () => Object.entries(skills).flatMap(([cat, items]) => [
    { txt: `[${cat}]`, cls: 'text-emerald-300' },
    { txt: '  ' + items.join(' · ') },
  ]),
  edu: () => education.map(e => ({ txt: `${e.year}  ${e.degree}  —  ${e.school}` })),
  contact: () => [
    { txt: 'email    ' + profile.email, cls: 'text-emerald-200' },
    { txt: 'github   github.com/' + profile.github },
    { txt: 'linkedin linkedin.com/' + profile.linkedin },
  ],
  clear: () => [{ txt: '__CLEAR__' }],
  'sudo hire': () => [
    { txt: '[sudo] password for recruiter: ********', cls: 'text-emerald-300/70' },
    { txt: 'success. opening mail client...', cls: 'text-emerald-300' },
    { txt: 'mailto:' + profile.email, cls: 'text-emerald-100 underline' },
  ],
  open: (arg) => {
    const p = projects.find(x => x.n === arg)
    if (!p) return [{ txt: `open: project "${arg}" not found. try \`work\`.`, cls: 'text-rose-400' }]
    return [
      { txt: `── ${p.n} · ${p.title} ──────────────────────────────`, cls: 'text-emerald-300' },
      { txt: p.blurb },
      { txt: 'stack: ' + p.stack.join(' · '), cls: 'text-emerald-100/70' },
    ]
  },
}

export default function TerminalVariant() {
  const [lines, setLines] = useState<Line[]>(intro)
  const [input, setInput] = useState('')
  const [hist, setHist] = useState<string[]>([])
  const [hIdx, setHIdx] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setCursor(c => !c), 530)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [lines])

  const submit = (raw: string) => {
    const cmd = raw.trim()
    setLines(L => [...L, { txt: PROMPT + raw, cls: 'text-emerald-100' }])
    if (!cmd) return
    setHist(h => [...h, cmd])
    const [head, ...rest] = cmd.split(/\s+/)
    let key = head.toLowerCase()
    if (head === 'sudo' && rest[0] === 'hire') key = 'sudo hire'
    const fn = commands[key]
    let out: Line[]
    if (fn) out = fn(rest.join(' '))
    else out = [{ txt: `command not found: ${head}. type \`help\`.`, cls: 'text-rose-400' }]
    if (out[0]?.txt === '__CLEAR__') { setLines([]); return }
    setLines(L => [...L, ...out, { txt: '' }])
  }

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { submit(input); setInput(''); setHIdx(null) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (hist.length) { const i = hIdx === null ? hist.length - 1 : Math.max(0, hIdx - 1); setHIdx(i); setInput(hist[i]) } }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (hIdx !== null) { const i = hIdx + 1; if (i >= hist.length) { setHIdx(null); setInput('') } else { setHIdx(i); setInput(hist[i]) } } }
    else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); setLines([]) }
  }

  return (
    <div className="min-h-screen bg-[#0a0d0a] text-emerald-200 font-mono p-4 md:p-8 selection:bg-emerald-300 selection:text-black">
      {/* CRT scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30"
           style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)' }} />
      <div className="fixed inset-0 pointer-events-none z-50"
           style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)' }} />
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.04]"
           style={{ background: 'repeating-linear-gradient(90deg, #34d399 0, #34d399 1px, transparent 1px, transparent 3px)' }} />

      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden border border-emerald-300/20 bg-black/60 shadow-[0_0_60px_-10px_rgba(52,211,153,0.4)]">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-emerald-300/[0.08] border-b border-emerald-300/20">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-rose-500/80" />
            <span className="size-3 rounded-full bg-amber-400/80" />
            <span className="size-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs text-emerald-300/70 tracking-wider">— sanjay@portfolio — 80×24 —</span>
          <span className="text-xs text-emerald-300/40">tty001</span>
        </div>

        {/* Output */}
        <div ref={scrollRef} onClick={() => inputRef.current?.focus()}
             className="p-5 md:p-7 h-[78vh] overflow-y-auto text-sm leading-relaxed"
             style={{ textShadow: '0 0 8px rgba(52,211,153,0.45)' }}>
          {lines.map((l, i) => (
            <div key={i} className={l.cls || 'text-emerald-200'}>{l.txt || '\u00A0'}</div>
          ))}
          {/* Input line */}
          <div className="flex items-center text-emerald-100">
            <span className="text-emerald-300">{PROMPT}</span>
            <span>{input}</span>
            <span className={`inline-block w-2 h-[1.1em] bg-emerald-300 ml-0.5 ${cursor ? 'opacity-100' : 'opacity-0'}`} />
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              autoFocus
              spellCheck={false}
              className="opacity-0 absolute -left-[9999px] w-1"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-3 text-[10px] text-emerald-300/40 flex items-center justify-between px-1">
        <span>Tip: `help`, `work`, `open 02`, `sudo hire`. Arrow keys = history. Ctrl+L = clear.</span>
        <span>{profile.location}</span>
      </div>

      <VariantSwitcher current="v2" dark />
    </div>
  )
}
