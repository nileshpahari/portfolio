"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { useRouter } from "next/navigation";

export function Buttons() {
  const router = useRouter();

  return (
    <div>
      <Button
        onClick={() => router.push('/projects')}
        borderRadius="2.75rem"
        containerClassName="w-48 h-20"
        className="bg-gradient-to-b text-white">
        <span className="flex items-center font-bold text-2xl opacity-80">
          Projects
        </span>
      </Button>
    </div>
  );
}
