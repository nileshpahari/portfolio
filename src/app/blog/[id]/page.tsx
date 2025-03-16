"use client";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Back } from "@/components/Back";
import Image from 'next/image';

export default function BlogPost() {
  const params = useParams();
  console.log("Blog ID:", params.id); // Use the id parameter

  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden">
      <Navbar />
      <Back />
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl text-white font-bold">Blog post not found</h1>
        <Image 
          src="/no.gif"
          alt="Not Found" 
          width={384}
          height={384}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
