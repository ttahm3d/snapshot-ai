import { ModeToggle } from "../DarkModeToggle";

export default function Header() {
  return (
    <header className="border-b p-4 flex">
      <h2 className="text-3xl font-bold">snapshot.ai</h2>
      <nav className="ml-auto">
        <ModeToggle />
      </nav>
    </header>
  );
}
