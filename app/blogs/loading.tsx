"use client"

import { useState, useCallback } from "react"
import { DesktopSidebar, MobileSidebarContent } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen } from "lucide-react";

export default function Loading() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r bg-card">
          <DesktopSidebar />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={(open) => setIsSidebarOpen(open)}>
        <div className="flex-1 flex flex-col md:pl-64">
          <Header />
          <SheetContent side="left" className="p-0 w-64">
            <SheetHeader>
              <SheetTitle className="sr-only">Sidebar Navigation</SheetTitle>
            </SheetHeader>
            <MobileSidebarContent />
          </SheetContent>
          <main className="flex-1 overflow-y-auto">
            {/* Header Section */}
            <section className="py-12 px-6 bg-card">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h1 className="font-playfair font-bold text-4xl">
                    <Skeleton className="w-80 h-10" />
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground mb-8">
                  <Skeleton className="w-full h-6" />
                </p>

                {/* Search and Filters */}
                <Skeleton className="w-full h-10" />
              </div>
            </section>

            {/* Featured Posts */}
            <section className="py-8 px-6 bg-muted/30">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">
                  <Skeleton className="w-60 h-8" />
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <Skeleton key={i} className="h-80 w-full" />
                  ))}
                </div>
              </div>
            </section>

            {/* All Posts */}
            <section className="py-8 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">
                  <Skeleton className="w-60 h-8" />
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-72 w-full" />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </Sheet>
    </div>
  );
}
