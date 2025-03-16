"use client"
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

type ProjectColor = 'red' | 'pink' | 'orange';

const projectStyles = {
  red: {
    border: "border-red-500",
    tag: "bg-red-500/20 border-red-500/30",
    glow: "shadow-[0_0_15px_rgba(239,68,68,0.7)]",
    hover: "bg-red-500/50"
  },
  pink: {
    border: "border-pink-500",
    tag: "bg-pink-500/20 border-pink-500/30",
    glow: "shadow-[0_0_15px_rgba(236,72,153,0.7)]",
    hover: "bg-pink-500/50"
  },
  orange: {
    border: "border-orange-500",
    tag: "bg-orange-500/20 border-orange-500/30",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.7)]",
    hover: "bg-orange-500/50"
  }
};

export function Projec() {
  const isLowPerformance = usePerformanceMode();

  const projects = [
    {
      title: "Valentino",
      description: "You enter your username and the Twitter API fetch your profile and pass it on to Gemini API which has prompt to comment on the user's Posts, PFP, username",
      image: "/valentino.jpg",
      liveLink: "https://Valentino.waliilaw.me",
      github: "https://github.com/waliilaw/Valentino",
      tags: ["React", "Tailwind", "TypeScript", "Twitter API"],
      tagColor: 'pink' as ProjectColor
    },
    {
      title: "Kagura",
      description: "A Real-time Chat React App with Cloudinary Image Upload and Authentication and Socket.io for real-time chat, and More AI feature soon to be added",
      image: "/kagura.jpg",
      liveLink: "https://redranger.me",
      github: "https://github.com/waliilaw/Kagura",
      tags: ["React", "Socket.io", "TypeScript"],
      tagColor: 'orange' as ProjectColor
    },
    {
      title: "Red Ranger",
      description: "Use Twitter's API to allow users to fetch their profile details (e.g., username, profile picture) by entering their X username. This information can be used to assign a Ranger to the user.",
      image: "/rangers.jpg",
      liveLink: "https://redranger.me",
      github: "https://github.com/waliilaw/Power-Rangers-FRONTEND--PUBLIC",
      tags: ["React", "Kinde", "TypeScript", "ShadCN"],
      tagColor: 'red' as ProjectColor
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto mt-10 p-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)]"
        >
          {/* Project Card */}
          <div className={`relative h-full w-full bg-black/20 rounded-lg p-6
            ${!isLowPerformance ? 'backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300' : 'group-hover:scale-[1.01] transition-transform duration-300'}`}>
            
            {/* Hover effect - simplified for low performance */}
            <div className={`absolute -inset-[1.5px] rounded-lg opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 ${
                isLowPerformance 
                  ? `border-2 ${projectStyles[project.tagColor].border}` 
                  : projectStyles[project.tagColor].hover
              }`} 
            />
            
            {/* Content */}
            <div className="relative z-20">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 mb-4 text-sm">{project.description}</p>
              
              {/* Links */}
              <div className="flex items-center gap-4 mb-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                     className={`text-white transition-colors border-2 ${projectStyles[project.tagColor].border} p-2 rounded-full`}>
                    Live Demo
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-orange-500 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`px-3 py-1 text-xs font-medium text-white/80 rounded-full ${projectStyles[project.tagColor].tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Glow effect - simplified for low performance */}
          <div className={`absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 pointer-events-none ${
              isLowPerformance 
                ? `border ${projectStyles[project.tagColor].border}` 
                : `border-2 ${projectStyles[project.tagColor].border} 
                    border-t-0 border-l-0 ${projectStyles[project.tagColor].glow}`
            }`} 
          />
        </div>
      ))}
    </div>
  );
}
