"use client";
import { Back } from "@/components/Back";
import { Navbar } from "@/components/Navbar";
import { Project } from "@/components/Project";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useState, useEffect } from "react";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) return <LoadingSpinner />;
  alert("Not all the live links may work as expected. This is because some are under construction, and some of the projects are hosted on free-tier services, which may have restrictions on the number of requests they can handle. If you encounter any issues, please try again later.");
  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden">
      {/* Under construction message */}
      {/* <div className="flex h-screen items-center justify-center">
        <div className="text-white text-4xl font-bold">Page is under construction</div>
      </div> */}
      {/* Simple light beam */}
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-orange-500/10 via-orange-400/5 to-transparent" />
      
      <Navbar />
      <Back />
      <section className="py-20 text-center text-white relative z-10">
        <div className="relative inline-block">
          <h2 className="text-6xl font-bold pb-4 pt-10 relative">
            Projects
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
            <div className="absolute -bottom-[4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-800/80 to-transparent blur-sm" />
            <div className="absolute -bottom-[6px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent blur-md" />
            <div className="absolute -bottom-[8px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-lg" />
            <div className="absolute -bottom-[12px] left-1/4 right-1/4 h-[10px] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-xl" />
            <div className="absolute -bottom-[16px] left-1/3 right-1/3 h-[12px] bg-gradient-to-r from-transparent via-orange-600/20 to-transparent blur-2xl" />
          </h2>
        </div>
        <Project />
      </section>
    </div>
  );
} 
