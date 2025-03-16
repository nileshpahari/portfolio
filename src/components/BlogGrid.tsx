import { useRouter } from "next/navigation";

export function BlogGrid() {
  const router = useRouter();
  
  const blogs = [
    {
      id: "getting-started-with-nextjs-14",
      title: "Getting Started with Next.js 14",
      description: "Learn the basics of Next.js 14 and its new features",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: "mastering-tailwind-css",
      title: "Mastering Tailwind CSS",
      description: "Advanced techniques and best practices for Tailwind CSS",
      date: "March 10, 2024",
      readTime: "7 min read"
    },
    {
      id: "web3-development-guide",
      title: "Web3 Development Guide",
      description: "A comprehensive guide to Web3 development",
      date: "March 5, 2024",
      readTime: "10 min read"
    },
    {
      id: "dsa-problem-solving",
      title: "DSA Problem Solving",
      description: "Effective strategies for solving DSA problems",
      date: "March 1, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10 p-8">
      {blogs.map((blog, index) => (
        <div
          key={index}
          onClick={() => router.push(`/blog/${blog.id}`)}
          className="relative group border-0 border-white/5 cursor-pointer"
        >
          {/* Permanent subtle border shadow */}
          <div className="absolute -inset-0 bg-white/5 rounded-lg" />
          <div className="absolute -inset-0 bg-gradient-to-r from-orange-500/10 via-orange-300/10 to-orange-500/10 rounded-lg blur-sm" />
          
          {/* Blog Card */}
          <div className="relative h-full w-full bg-black/20 backdrop-blur-sm rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 p-6">
            {/* Hover border effect */}
            <div className="absolute -inset-[1.5px] bg-orange-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-0 bg-black rounded-lg" />
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
              <p className="text-white/60 mb-4">{blog.description}</p>
              <div className="flex justify-between text-sm text-white/40">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          {/* Outer glow effect */}
          <div className="absolute -inset-[2px] bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
} 