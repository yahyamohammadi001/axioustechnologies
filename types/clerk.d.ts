import { DefaultSessionClaims } from "@clerk/nextjs/server";

declare module "@clerk/nextjs/server" {
  interface SessionClaims extends DefaultSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
    };
  }
}
