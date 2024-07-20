"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function SignIn() {
  const onClick = () => {
    signIn("github");
  };
  return (
    <button className="py-2 px-2 bg-gray-700 text-white" onClick={onClick}>
      Sign in
    </button>
  );
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={() => {
        signOut();
      }}>
      <p>{children}</p>
      <button type="submit">Sign out</button>
    </form>
  );
}

export default function Hero() {
  const router = useRouter();
  return (
    <section className="flex items-center justify-center pt-32 pb-12 flex-col">
      <div className="max-w-5xl mx-auto text-center px-4 md:px-0">
        <h1 className="">
          <p className="text-6xl tracking-tighter text-muted-foreground/90 font-light">
            Introducing{" "}
            <span className="text-primary font-bold">snapshot.ai</span>
          </p>
        </h1>

        <h3 className="text-muted-foreground pt-4 w-full  mx-auto">
          Transform your accomplishments into concise AI generated summary
        </h3>
        <div className="pt-8">
          <Button onClick={() => router.push("/snapshot")}>Get Started</Button>
        </div>
      </div>
    </section>
  );
}
