"use client"

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import { AppLayout } from "@/components/layout/app-layout"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <ClerkProvider>
        <AppLayout>{children}</AppLayout>
      </ClerkProvider>
    </ThemeProvider>
  )
}