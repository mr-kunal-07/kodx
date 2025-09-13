"use client";

import { useState } from "react";
import StackIcons from '@/components/LandingPage/StackIcons'
import { ChevronDown, Server, Globe, Smartphone, Database, Palette, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Frontend",
    icon: Globe,
    desc: "Modern, scalable UI frameworks for speed and accessibility.",
    tech: [
      { name: "React", src: "/icons/React.svg" },
      { name: "Next.js", src: "/icons/Nextjs.svg" },
      { name: "Vite", src: "/icons/vite.svg" },
      { name: "Redux", src: "/icons/redux.svg" },
      { name: "Tailwind CSS", src: "/icons/tailwind.webp" },
      { name: "TypeScript", src: "/icons/TS.svg" }
    ]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    desc: "Reliable, secure, and scalable server-side solutions.",
    tech: [
      { name: "Express", src: "/icons/express.svg" },
      { name: "Node.js", src: "/icons/nodejs.svg" },
      { name: "GraphQL", src: "/icons/GraphQL.webp" },
      { name: "Firebase", src: "/icons/firebase.svg" },
      { name: "Microservices", src: "/icons/MicroServices.webp" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    desc: "Optimized for both structured and unstructured data.",
    tech: [
      { name: "MongoDB", src: "/icons/mongodb.svg" },
      { name: "PostgreSQL", src: "/icons/postgresql-original.svg" },
      { name: "MySQL", src: "/icons/mysql-original.svg" },
      { name: "Redis", src: "/icons/redis-original.svg" }
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    desc: "Cross-platform apps with native performance.",
    tech: [
      { name: "Flutter", src: "/icons/flutter.svg" },
      { name: "Kotlin", src: "/icons/kotlin.svg" },
      { name: "React Native", src: "/icons/React.svg" }
    ]
  },
  {
    title: "Design",
    icon: Palette,
    desc: "Beautiful, functional, and user-first designs.",
    tech: [
      { name: "Figma", src: "/icons/figma.svg" },
      { name: "Adobe XD", src: "/icons/xd-plain.svg" },
      { name: "Canva", src: "/icons/Canva.webp" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    desc: "Resilient infrastructure with CI/CD automation.",
    tech: [
      { name: "Docker", src: "/icons/docker.svg" },
      { name: "AWS", src: "/icons/aws.svg" },
      { name: "Vercel", src: "/icons/vercel.svg" }
    ]
  }
];

function CategoryCard({ cat, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition hover:border-purple-400/50"
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <cat.icon className="w-6 h-6 text-purple-300" />
          <div>
            <h3 className="text-white font-semibold">{cat.title}</h3>
            <p className="text-white/60 text-sm">{cat.desc}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-white/70 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Tech Grid */}
      {open && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-5 pb-5 animate-fadeIn">
          {cat.tech.map((t) => (
            <div key={t.name} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 relative mb-2">
                <Image src={t.src} alt={t.name} fill className="object-contain" />
              </div>
              <span className="text-white text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}




const page = () => {
  return (
    <div className="w-full min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-4">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            Tech Stack
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Toolkit
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We carefully choose technologies that balance speed, scalability, and developer experience—
            ensuring every product we build is future-ready.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full border border-purple-400/50
              bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm
              hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:ring-2 hover:ring-purple-300/50 
              transition-all duration-300 transform hover:scale-105"
          >
            Let’s Build Together
          </Link>
        </div>
      </div>
      <StackIcons />
    </div>
  )
}

export default page