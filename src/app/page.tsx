"use client";
import { Suspense } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Buttons } from "@/components/Buttons";
import { Back } from "@/components/Back";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/Navbar";
import { Stacks } from "@/components/Stacks";
import dynamic from "next/dynamic";

const LoadingSpinner = dynamic(() => import("@/components/LoadingSpinner"), {
  ssr: false,
});

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen w-screen ">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Back />
        <header className="flex flex-col items-center justify-center min-h-screen md:mt-8 mt-16  px-6">
          {/* <header className="flex flex-col items-center justify-center min-h-screen md:mt-8 mt-16 px-6 animate-diagonal"> */}

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
            {/* Image Section */}
            <div className="md:w-1/2 hidden md:flex md:justify-center">
              <Image
                src="/lucy.jpeg"
                alt="Profile"
                width={500}
                height={300}
                className="w-3/4 md:w-full rounded-lg shadow-lg animate-floatY"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
              <Header />
              <p className="text-lg font-bold text-white leading-relaxed">
                I love exploring computer science concepts, especially their
                theoretical aspects. I also build cool automation scripts with
                Bash and Python, and I&apos;m currently doing Competitive Programming and Web 3.0.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-24">
            <Buttons />
          </div>
        </header>
      </Suspense>

      {/* Stacks Section */}
      <section className="py-20 text-center text-white">
        <div className="relative inline-block">
          <h2 className="text-6xl font-bold pb-4 relative">
            Stacks
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
            <div className="absolute -bottom-[4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-800/80 to-transparent blur-sm" />
            <div className="absolute -bottom-[6px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent blur-md" />
            <div className="absolute -bottom-[8px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-lg" />
            <div className="absolute -bottom-[12px] left-1/4 right-1/4 h-[10px] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-xl" />
            <div className="absolute -bottom-[16px] left-1/3 right-1/3 h-[12px] bg-gradient-to-r from-transparent via-orange-600/20 to-transparent blur-2xl" />
          </h2>
        </div>
        <Stacks />
      </section>
    </AuroraBackground>
  );
}
