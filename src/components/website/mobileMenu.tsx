import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ToggleDarkMode } from "./toggleDarkMode";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
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
        <div className="flex justify-center">
          <Button asChild>
            <ToggleDarkMode />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
