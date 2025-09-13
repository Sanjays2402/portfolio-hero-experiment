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
  keywords: ['Software Developer', 'Java', 'Spring Boot', 'React.js', 'Full Stack Developer', 'Syracuse University'],
  authors: [{ name: 'Sanjay Santhanam' }],
  creator: 'Sanjay Santhanam',
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
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}