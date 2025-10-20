import { DefaultSessionClaims } from "@clerk/nextjs/server";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
    };
  }
}

// Augment ClerkMiddlewareAuth if userId and session are not recognized directly
declare module "@clerk/nextjs/server" {
  interface ClerkMiddlewareAuth {
    userId: string | null;
    session: Session | null;
  }
  interface Session {
    publicMetadata: {
      onboardingComplete?: boolean;
    };
  }
}
