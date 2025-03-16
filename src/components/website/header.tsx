import { Button } from "../ui/button";
import Link from "next/link";
import { DropdownMenuToggle } from "./toggleDarkMode";
import { SheetDemo } from "./mobileMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-around py-4">
      <h2 className="text-xl">WordleGame</h2>
      <div className="hidden lg:flex gap-2">
        <Button variant={"link"} asChild>
          <Link href="https://github.com/Tobias-fernandes/" target="_blank">
            GitHub
          </Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link
            href="https://www.linkedin.com/in/tobiasfigueiredo/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </Button>
        <Button asChild>
          <DropdownMenuToggle />
        </Button>
      </div>

      <div className="block lg:hidden">
        <SheetDemo />
      </div>
    </header>
  );
}
