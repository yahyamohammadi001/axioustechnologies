"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SignedIn, SignedOut, UserButton, SignUpButton, SignInButton } from "@clerk/nextjs"
import { SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
  setSidebarOpen?: (open: boolean) => void;
}

export function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <>
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 md:px-6">
          <div className="md:hidden">
            <SheetTrigger asChild>
              <button className={cn(buttonVariants({ variant: "ghost", size: "icon" }))} onClick={() => setSidebarOpen?.(true)}>
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
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
    </>
  )
}
