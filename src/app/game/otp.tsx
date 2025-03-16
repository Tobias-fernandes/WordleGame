"use client";
import { Input } from "@/components/ui/input";
import { data } from "@/lib/data";
import { useState, useRef, ChangeEvent, KeyboardEvent, useEffect } from "react";

export function OneTimePassword({ length = 5 }) {
  const [guess, setGuess] = useState<string[]>(Array(length).fill("")); // State to store the block values
  const inputRefs = useRef<HTMLInputElement[]>([]); // Refs for all the input blocks

  // Function to handle the input change
  function handleChange(index: number, event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    // Update the block value
    const newGuess = [...guess];
    newGuess[index] = value;
    setGuess(newGuess);

    // Focus on the next block if available
    if (value && index < length - 1) inputRefs.current[index + 1].focus();
  }

  // Function to handle when the backspace key is pressed
  function handleKeyDown(
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) {
    // Focus on the previous block if available
    if (event.key === "Backspace" && !guess[index] && index > 0)
      inputRefs.current[index - 1].focus();
  }

  // Function to get a random word from the data
  useEffect(() => {
    const words = data;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
  }, []);

  // Function to detect when the user completes the OTP
  useEffect(() => {
    if (guess.join("").length === length) {
      // console.log("OTP is complete");
    }
  }, [guess, length]);

  return (
    <div className="flex gap-2.5">
      {guess.map((digit, index) => (
        <Input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          ref={(element) => {
            if (element) inputRefs.current[index] = element;
          }}
          className="w-16 h-16 bg-gray-300 text-xl border capitalize text-center border-gray-300"
        />
      ))}
    </div>
  );
}
