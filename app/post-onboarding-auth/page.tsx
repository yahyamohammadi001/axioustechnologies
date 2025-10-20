"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useSession } from '@clerk/nextjs';

export default function PostOnboardingAuthPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const { session } = useSession();

  useEffect(() => {
    if (!isLoaded || !session || !isSignedIn || !user) {
      // Wait for Clerk to load and user to be signed in
      console.log('Clerk not fully loaded or user not signed in yet. Waiting...');
      return;
    }

    const markOnboardingComplete = async () => {
      try {
        const response = await fetch('/api/onboarding-complete', {
          method: 'POST',
        });

        if (response.ok) {
          console.log('Onboarding complete API call successful. Reloading session...');
          await session.reload(); // Force Clerk to refresh the session
          console.log('Session reloaded. Redirecting to landing page.');
          router.push('/');
        } else {
          console.error('Failed to mark onboarding complete after authentication.');
          // Fallback: Redirect to onboarding to try again or handle error
          router.push('/onboarding');
        }
      } catch (error) {
        console.error('Error marking onboarding complete:', error);
        router.push('/onboarding'); // Redirect on error
      }
    };
    // Only mark onboarding complete if it hasn't been marked yet in the current session
    if (!(session.publicMetadata as any)?.onboardingComplete) {
      console.log('Onboarding not yet complete in session metadata. Marking complete.');
      markOnboardingComplete();
    } else {
      console.log('Onboarding already complete in session metadata. Redirecting to landing.');
      router.push('/');
    }
  }, [isLoaded, isSignedIn, user, router, session]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Processing your request...</p>
    </div>
  );
}
