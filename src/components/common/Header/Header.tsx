import Link from "next/link";
import { ModeToggle } from "../DarkModeToggle";

export default function Header() {
  return (
    <header className="border-b p-4">
      <section className="container  flex items-center">
        <h2 className="text-3xl font-bold">snapshot.ai</h2>
        <nav className="ml-auto">
          <Link href="#pricing">Pricing</Link>
        </nav>
      </section>
    </header>
  );
}
