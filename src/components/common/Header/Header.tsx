"use client";
import Link from "next/link";
import { ModeToggle } from "../DarkModeToggle";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="border-b py-4">
      <section className="container flex items-center gap-4">
        <h2
          className="text-3xl font-bold cursor-pointer"
          onClick={() => router.push("/")}>
          snapshot.ai
        </h2>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </section>
    </header>
  );
}
