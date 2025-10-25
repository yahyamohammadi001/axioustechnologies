"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SignedIn, SignedOut, UserButton, SignUpButton, SignInButton } from "@clerk/nextjs"
import { SheetTrigger } from "@/components/ui/sheet"
import { Sheet } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4 md:pl-6 md:pr-6">
        <div className="md:hidden">
          <button 
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))} 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center space-x-4">
            <ModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center space-x-2">
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  )
}
