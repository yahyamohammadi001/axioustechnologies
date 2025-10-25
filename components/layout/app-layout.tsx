"use client"

import { useState } from "react"
import { Header } from "./header"
import { DesktopSidebar, MobileSidebar } from "./sidebar"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative h-full min-h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 md:pl-64">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MobileSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}