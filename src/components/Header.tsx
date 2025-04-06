import React, { memo } from "react";
import { FlipWords } from "./ui/flip-words";

export const Header = memo(function Header() {
  const words = ["DSA", "CP", "Web 2.0", "DevOps"];

  return (
    <div className="flex justify-center items-center pr- pl-0">
      <div className="text-6xl  mx-auto font-bold">
        <span className="inline-block text-6xl font-bold text-white">
          Hi! I&apos;m Nilesh
        </span>
        <span className="flex justify-center items-center text-6xl font-bold text-white p-6 mt-6">
          <FlipWords words={words} />
        </span>
      </div>
    </div>
  );
});
