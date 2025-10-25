import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Axious Technologies!</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Master new skills with our comprehensive courses, batches, and opportunities.
      </p>
      <Link href="/onboarding">
        <Button size="lg" className="text-xl px-8 py-4">Get Started</Button>
      </Link>
    </div>
  );
}
