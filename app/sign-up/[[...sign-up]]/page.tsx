import { SignUp } from "@clerk/nextjs";

export default function Page() {
  console.log("Rendering Clerk SignUp component.");
  return <SignUp />; 
}
