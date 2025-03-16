import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { OneTimePassword } from "./otp";

export default async function Game() {
  return (
    <section className="container max-w-screen-xl mx-auto py-10">
      <Link className="flex gap-1" href="/">
        <ArrowLeftIcon /> Back to lobby
      </Link>

      {/* Game Content Here */}
      <div className="py-5 flex justify-center">
        <OneTimePassword />
      </div>
    </section>
  );
}
