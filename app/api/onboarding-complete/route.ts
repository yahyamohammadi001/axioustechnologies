import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { clerkClient } from "@clerk/nextjs/server";
console.log('clerkClient after import in route.ts:', clerkClient);

export async function POST(req: Request) {
  console.log('CLERK_SECRET_KEY in API route:', process.env.CLERK_SECRET_KEY ? '*****' : 'UNDEFINED');
  const user = await currentUser();

  if (!user) {
    console.error('API /api/onboarding-complete: Unauthorized - No user found.');
    return new NextResponse('Unauthorized', { status: 401 });
  }

  console.log('API /api/onboarding-complete: User found:', user.id);
  try {
    const clerk = await clerkClient(); // Await the async function to get the client instance
    await clerk.users.updateUserMetadata(user.id, {
      publicMetadata: {
        onboardingComplete: true,
      },
    });
    console.log('User metadata updated: onboardingComplete set to true for userId:', user.id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error updating user metadata for userId:', user.id, 'Error:', error.message, error.stack);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
