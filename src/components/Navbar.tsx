"use client"
import { useState } from "react"
import Link from "next/link"
import { SiGithub, SiCodeforces, SiLeetcode } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Menu, X } from "lucide-react"
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            <Link
              href="https://github.com/nileshpahari"
              target="_blank"
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group"
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
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            {/*  <Link
              href="https://leetcode.com/u/nileshpahari/"
              target="_blank"
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group"
            >
              <SiLeetcode className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>*/}
            <Link
              href="https://codeforces.com/profile/scar-face"
              target="_blank"
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group"
            >
              <SiCodeforces className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-orange-500 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 bg-black/30 backdrop-blur-md rounded-lg mb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                href="https://github.com/nileshpahari"
                target="_blank"
                className="text-white hover:text-orange-500 transition-all duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                <SiGithub className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/nileshpahari"
                target="_blank"
                className="text-white hover:text-orange-500 transition-all duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://leetcode.com/u/nileshpahari/"
                target="_blank"
                className="text-white hover:text-orange-500 transition-all duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                <SiLeetcode className="w-5 h-5" />
                <span>LeetCode</span>
              </Link>
              <Link
                href="https://codeforces.com/profile/scar-face"
                target="_blank"
                className="text-white hover:text-orange-500 transition-all duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                <SiCodeforces className="w-5 h-5" />
                <span>CodeForces</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
