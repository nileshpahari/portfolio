import { Icons } from "@/components/icons";
import { Download, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nilesh Pahari",
  initials: "NP",
  url: "https://nileshkrpahari.xyz",
  location: "West Bengal, India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "engineer | harmonicist",
  summary:
    "I like exploring computer science concepts, especially their theoretical aspects. I'm currently learning Web 3.0 stuff.",
  avatarUrl: "/me.jpg",
  skills: [
    "TypeScript",
    "JavaScript",
    "React.js",
    "Next.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "WebSockets",
    "Redux",
    "GNU/Linux",
    "C++",
    "Python",
    "Git",
    "Docker",
    "Vercel",
    "AWS",
    "Rust",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: Download, label: "Resume" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nileshpahari777@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nileshpahari",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nileshpahari",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nileshpahari",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://youtube.com/@nileshpahari",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:nileshpahari777@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  // work: [
  // {
  //   company: "Google Developer Groups",
  //   href: "https://gdghit.site",
  //   badges: [],
  //   location: "Haldia, India",
  //   title: "Web Developer",
  //   logoUrl: "/gdg.png",
  //   start: "March 2025",
  //   end: "Present",
  //   description:
  //     "Developed a website for Google Developer Groups Haldia. Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  // },
  // ],
  education: [
    {
      school: "Haldia Institute of Technology",
      degree: "Bachelor of Technology in Computer science and engineering",
      logoUrl: "/hit.png",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Contest Pulse",
      href: "https://contestpulse.netlify.app/",
      active: true,
      description:
        "A web app where users can see upcoming coding contests from various platforms like Codeforces, Leetcode, CodeChef, etc., bookmark them, and enable notifications.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "NextAuth",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://contestpulse.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/contest-pulse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/contestpulse.webp",
      video: "",
    },
    {
      title: "Clipzo",
      href: "https://clipzo.vercel.app/",
      active: true,
      description:
        "A web app to download videos or audio from YouTube and other platforms using yt-dlp and FFmpeg, with custom options.",
      technologies: [
        "Rust",
        "TypeScript",
        "Next.js",
        "Axum",
        "yt-dlp",
        "FFmpeg",
        "Prisma",
      ],
      links: [
        /*{
          type: "Website",
          href: "https://clipzo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/clipzo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/clipzo.webp",
      video: "",
    },
    {
      title: "Votana",
      href: "https://votana.vercel.app/",
      active: false,
      description:
        "A decentralized voting platform built on the solana blockchain.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Anchor",
        "Rust",
        "Redux Toolkit",
      ],
      links: [
        {
          type: "Website",
          href: "https://votana.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/votana",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/votana.png",
      video: "",
    },
    {
      title: "Walliy",
      href: "https://walliy.vercel.app/",
      active: false,
      description:
        "A web-based crypto wallet where users can store private keys and interact with smart contracts.",
      technologies: [
        "Next.js",
        "Redux Toolkit",
        "@solana/web3.js",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://walliy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/walliy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wallet.png",
      video: "",
    },
    {
      title: "CF MCP Server",
      href: "https://cf-mcp.vercel.app/",
      active: false,
      description:
        "A MCP server for Codeforces to fetch contest data and other resources programmatically.",
      technologies: ["Node.js", "TypeScript", "zod"],
      links: [
        /*{
          type: "Website",
          href: "https://cf-mcp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/codeforces-mcp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cfmcp.png",
      video: "",
    },
    {
      title: "Media Sphere",
      href: "",
      active: false,
      description: "Backend for a media sharing platform similar to YouTube.",
      technologies: ["Node.js", "Express", "MongoDB", "TypeScript"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/media-sphere/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mediasphere.webp",
      video: "",
    },
    {
      title: "Basic React Blog",
      href: "https://basic-react-blogging-app.netlify.app/",
      active: false,
      description:
        "A blogging platform like Medium, allowing users to create, read, update, and delete articles.",
      technologies: ["React", "Redux", "TinyMCE", "Appwrite"],
      links: [
        {
          type: "Website",
          href: "https://basic-react-blogging-app.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/react-blog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blog.png",
      video: "",
    },
    {
      title: "Top Chess",
      href: "https://topchess.netlify.app/",
      active: false,
      description:
        "A multiplayer real-time chess platform similar to chess.com or lichess.org.",
      technologies: ["React", "WebSockets", "TypeScript", "Prisma"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/nileshpahari/topchess",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/topchess.jpeg",
      video: "",
    },
  ],

  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
