import { Skeleton } from "@/components/ui/skeleton"

export default function OpportunitiesLoading() {
  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 bg-card border-r" />
      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-card border-b" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <Skeleton className="h-12 w-96" />
            <Skeleton className="h-6 w-full max-w-2xl" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10" />
              ))}
            </div>
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full" />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
