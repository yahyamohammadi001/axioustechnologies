"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { BookOpen, Users, Briefcase, FileText, MessageSquare, Info, Home, User } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Blogs", href: "/blogs", icon: MessageSquare },
  { name: "About", href: "/about", icon: Info },
  { name: "Dashboard", href: "/dashboard", icon: User },
]

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b px-4 md:justify-start justify-center">
        <Link href="/" className="flex items-center">
          <img 
            src="/Logo.svg" 
            alt="Axious Technologies Logo" 
            className="h-49 w-44 mb-0 -ml-4 sm:h-44 sm:w-40 sm:mt-0 md:h-48 md:w-60 md:mx-auto lg:h-52 lg:w-64"
            style={{
              objectFit: 'contain'
            }}
          />
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

export function DesktopSidebar() {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-50 bg-background">
      <div className="flex flex-col flex-grow border-r shadow-lg">
        <SidebarContent />
      </div>
    </div>
  );
}

export function MobileSidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="p-0">
        <SidebarContent onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
