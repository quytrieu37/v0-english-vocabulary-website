import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "English Vocabulary Builder",
  description: "Learn and master 1000 essential English words",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <nav className="border-b">
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">
                  VocabMaster
                </Link>
                <div className="flex items-center gap-4">
                  <Link href="/">
                    <Button variant="ghost">Home</Button>
                  </Link>
                  <Link href="/flashcards">
                    <Button variant="ghost">Flashcards</Button>
                  </Link>
                  <Link href="/categories">
                    <Button variant="ghost">Categories</Button>
                  </Link>
                  <Link href="/saved">
                    <Button variant="ghost">Saved Words</Button>
                  </Link>
                  <ModeToggle />
                </div>
              </div>
            </nav>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} English Vocabulary Builder. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
