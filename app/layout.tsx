import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { BackToTop } from '@/components/back-to-top'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Sanjay Santhanam - Software Developer',
  description: 'Experienced Software Developer specializing in Java, Spring Boot, and React.js. Master\'s in Computer Science from Syracuse University.',
  keywords: ['Software Developer', 'Java', 'Spring Boot', 'React.js', 'Full Stack Developer', 'Syracuse University', 'Software Engineer'],
  authors: [{ name: 'Sanjay Santhanam' }],
  creator: 'Sanjay Santhanam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanjays2402.github.io/',
    title: 'Sanjay Santhanam - Software Developer',
    description: 'Experienced Software Developer specializing in Java, Spring Boot, and React.js.',
    siteName: 'Sanjay Santhanam Portfolio',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Floating glass orbs for depth */}
          <div className="glass-orb glass-orb-1" aria-hidden="true" />
          <div className="glass-orb glass-orb-2" aria-hidden="true" />
          <div className="glass-orb glass-orb-3" aria-hidden="true" />
          <div className="gradient-bg fixed inset-0 -z-10" aria-hidden="true" />
          <Navbar />
          <main className="min-h-screen relative">
            {children}
          </main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}