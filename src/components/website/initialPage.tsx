import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InitialPage() {
  // Instructions for the game
  const instructions = [
    "You will try to guess what is the word",
    "You have 5 attempts to win",
    "Yellow block means right letter in the wrong place",
    "Green block means right letter in the right place",
    "Good Luck :)",
  ];
  return (
    <section className="flex flex-col items-center gap-5 py-25 px-5">
      <h1 className="text-2xl lg:text-3xl font-bold">
        Welcome to the Wordle game
      </h1>
      <div>
        <h2 className="text-lg">Follow the instructions below:</h2>
        <ul className="list-disc list-inside">
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      <Button asChild className="mt-10" size={"lg"}>
        <Link href="/game">Start Game</Link>
      </Button>
    </section>
  );
}
