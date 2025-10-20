"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogWritingPage() {

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Removed sidebar content */}
      </div>

      {/* Mobile Sidebar */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-6 lg:p-12">
          <div className="flex justify-start mb-6">
            <Button asChild variant="outline">
              <Link href="/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Link>
            </Button>
          </div>
          {/* Empty content area for your blog writing UI */}
        </main>
      </div>
    </div>
  )
}
