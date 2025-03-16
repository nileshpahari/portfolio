"use client";
import Link from "next/link";

import {
  SiLeetcode,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiCodeforces,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-transparent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="relative group">
            <h1 className="text-white text-2xl font-bold bg-clip-text bg-gradient-to-b from-white to-gray-300 text-transparent hover:text-orange-500 transition-all duration-300 hover:scale-110">
              &lt;Home /&gt;
            </h1>
            <span className="absolute -inset-2 hover:text-orange-500 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <div className="flex gap-10 ">
            <Link
              href="https://github.com/nileshpahari"
              target="_blank"
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group  "
            >
              <SiGithub className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="https://x.com/nileshpahari"
              target="_blank"
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group  "
            >
              <FaXTwitter className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="https://linkedin.com/in/nileshpahari"
              target="_blank"
              className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="https://codeforces.com/profile/scar-face"
              target="_blank"
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group  "
            >
              <SiCodeforces className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="https://leetcode.com/nileshkumarpahari"
              target="_blank"
              className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <SiLeetcode className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
