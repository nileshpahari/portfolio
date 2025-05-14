"use client";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

type ProjectColor =
  | "red"
  | "pink"
  | "orange"
  | "green"
  | "blue"
  | "yellow"
  | "gray";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  github?: string;
  tags: string[];
  tagColor: ProjectColor;
}

const projectStyles = {
  red: {
    border: "border-red-500",
    tag: "bg-red-500/20 border-red-500/30",
    glow: "shadow-[0_0_15px_rgba(239,68,68,0.7)]",
    hover: "bg-red-500/50",
  },
  pink: {
    border: "border-pink-500",
    tag: "bg-pink-500/20 border-pink-500/30",
    glow: "shadow-[0_0_15px_rgba(236,72,153,0.7)]",
    hover: "bg-pink-500/50",
  },
  orange: {
    border: "border-orange-500",
    tag: "bg-orange-500/20 border-orange-500/30",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.7)]",
    hover: "bg-orange-500/50",
  },
  green: {
    border: "border-green-500",
    tag: "bg-green-500/20 border-green-500/30",
    glow: "shadow-[0_0_15px_rgba(34,197,94,0.7)]",
    hover: "bg-green-500/50",
  },
  blue: {
    border: "border-blue-500",
    tag: "bg-blue-500/20 border-blue-500/30",
    glow: "shadow-[0_0_15px_rgba(29,78,216,0.7)]",
    hover: "bg-blue-500/50",
  },
  yellow: {
    border: "border-yellow-500",
    tag: "bg-yellow-500/20 border-yellow-500/30",
    glow: "shadow-[0_0_15px_rgba(249,168,37,0.7)]",
    hover: "bg-yellow-500/50",
  },
  gray: {
    border: "border-gray-500",
    tag: "bg-gray-500/20 border-gray-500/30",
    glow: "shadow-[0_0_15px_rgba(156,163,175,0.7)]",
    hover: "bg-gray-500/50",
  },
  purple: {
    border: "border-purple-500",
    tag: "bg-purple-500/20 border-purple-500/30",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.7)]",
    hover: "bg-purple-500/50",
  },
};

export function Project() {
  const isLowPerformance = usePerformanceMode();

  const projects: ProjectProps[] = [
    {
      title: "Contest Pulse",
      description:
        "A web app that where users can see upcoming coding contests from various platforms like Codeforces, Leetcode, CodeChef, etc. and bookmark them for later. They can also enable notifications for the contests they are interested in.",
      image: "/contestpulse.jpeg",
      liveLink: "https://contestpulse.netlify.app/",
      github: "https://github.com/nileshpahari/contest-pulse",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "NextAuth", "Prima"],
      tagColor: "red" as ProjectColor,
    },

    {
      title: "React Blog",
      description:
        "Simple blogging application (similar to medium, but doesnt have all the features) where user create, read, update and delete articles",
      image: "/reactblog.webp",
      liveLink: "https://basic-react-blogging-app.netlify.app/",
      github: "https://github.com/nileshpahari/react-blog",
      tags: ["React", "Redux", "TailwindCSS", "TinyMCE", "Appwrite"],
      tagColor: "orange" as ProjectColor,
    },
    {
      title: "Media Sphere",
      description: "Backend of a media sharing platform (similar to YouTube)",
      image: "/mediasphere.jpeg",
      liveLink: "",
      github: "https://github.com/nileshpahari/media-sphere/",
      tags: ["Node.js", "Express", "MongoDB", "TypeScript"],
      tagColor: "red" as ProjectColor,
    },
    {
      title: "Top Chess",
      description:
        "A multiplayer chess platform where users can play chess with others realtime. (similar to chess.com or lichess.org, but has lesser features)",
      image: "/topchess.jpeg",
      // liveLink: "https://topchess.netlify.app/",
      github: "https://github.com/nileshpahari/topchess",
      tags: ["React", "TailwindCSS", "WebSockets", "TypeScript", "Prisma"],
      tagColor: "gray" as ProjectColor,
    },
    {
      title: "Web3 Wallet",
      description:
        "A simple web based wallet where users can store their private keys and interact with smart contracts",
      image: "/wallet.png",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
      github: "https://github.com/nileshpahari/simple-web-wallet",
      liveLink: "https://simple-web-wallet.netlify.app/",
      tagColor: "purple" as ProjectColor,
    },
    /*    {
          title: "Chatty",
          description:
            "A realtime chatting application build using websockets where users can chat with each other and send text messages, images and more. (similar to WhatsApp)",
          image: "/chatty.png",
          tags: ["React.js", "TypeScript", "TailwindCSS", "Websocket", "Prisma"],
          github: "https://github.com/nileshpahari/chatty",
          // liveLink: "https://chatty.netlify.app/",
          tagColor: "blue",
        },*/
    {
      title: "Carbon Sense",
      description:
        "A 24 hour hackathon project that calculates your annual carbon footprint emmision and gives AI based suggestions to reduce it.",
      image: "/carbonsense.avif",
      liveLink: "https://innovocon2k25.vercel.app/",
      github: "https://github.com/nileshpahari/innovocon2025",
      tags: ["Next.js", "TailwindCSS", "OpenAI API"],
      tagColor: "green" as ProjectColor,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto mt-10 p-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)]"
        >
          <div
            className={`relative h-full w-full bg-black/20 rounded-lg p-6
            ${!isLowPerformance
                ? "backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300"
                : "group-hover:scale-[1.01] transition-transform duration-300"
              }`}
          >
            <div
              className={`absolute -inset-[1.5px] rounded-lg opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 ${isLowPerformance
                  ? `border-2 ${projectStyles[project.tagColor].border}`
                  : projectStyles[project.tagColor].hover
                }`}
            />

            <div className="relative z-20">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/60 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex items-center gap-4 mb-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white transition-colors border-2 ${projectStyles[project.tagColor].border
                      } p-2 rounded-full`}
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 text-xs font-medium text-white/80 rounded-full ${projectStyles[project.tagColor].tag
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 pointer-events-none ${isLowPerformance
                ? `border ${projectStyles[project.tagColor].border}`
                : `border-2 ${projectStyles[project.tagColor].border} 
                    border-t-0 border-l-0 ${projectStyles[project.tagColor].glow
                }`
              }`}
          />
        </div>
      ))}
    </div>
  );
}
