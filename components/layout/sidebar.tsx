"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Users, Briefcase, FileText, MessageSquare, Info, Home, User } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Opportunities", href: "/opportunities", icon: Briefcase },
  { name: "Blogs", href: "/blogs", icon: MessageSquare },
  { name: "About", href: "/about", icon: Info },
  { name: "Dashboard", href: "/dashboard", icon: User },
]

function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center justify-center w-full">
          <img 
            src="/Logo.svg" 
            alt="Axious Technologies Logo" 
            className="h-44 w-40 mb-2 sm:h-44 sm:w-40 sm:mt-0 md:h-64 md:w-56 md:mt-2 lg:h-52 lg:w-44 xl:h-54 xl:w-48"
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
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow border-r bg-card">
        <SidebarContent />
      </div>
    </div>
  );
}

export function MobileSidebarContent() {
  return <SidebarContent />;
}
