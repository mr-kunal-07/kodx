"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink, Search } from "lucide-react";

const socials = [
  { name: "X / Twitter", user: "@KodxMedia", icon: "/icons/x1.webp", href: "https://x.com/KodxMedia" },
  { name: "Instagram", user: "@KodxMedia", icon: "/icons/instagram.webp", href: "https://instagram.com/KodxMedia" },
  { name: "LinkedIn", user: "@KodxMedia", icon: "/icons/Link.webp", href: "https://linkedin.com/company/kodxmedia" },
];

const techCategories = [
  {
    key: "frontend",
    title: "Frontend",
    items: [
      { name: "React", src: "/icons/React.svg", desc: "Interactive UI library" },
      { name: "Next.js", src: "/icons/Nextjs.svg", desc: "Full‑stack React framework" },
      { name: "TypeScript", src: "/icons/TS.svg", desc: "Typed JavaScript" },
      { name: "Vite", src: "/icons/vite.svg", desc: "Fast dev server & bundler" },
      { name: "Tailwind CSS", src: "/icons/tailwind.webp", desc: "Utility‑first CSS" },
      { name: "Sass", src: "/icons/sass.svg", desc: "CSS preprocessor" },
      { name: "Redux", src: "/icons/redux.svg", desc: "Predictable state" },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", src: "/icons/express.svg", desc: "JS runtime on server" },
      { name: "Express", src: "/icons/express.svg", desc: "Minimal web framework" },
      { name: "PostgreSQL", src: "/icons/postgresql-original.svg", desc: "Relational database" },
      { name: "MongoDB", src: "/icons/mongodb.svg", desc: "Document database" },
      { name: "Redis", src: "/icons/redis-original.svg", desc: "In‑memory cache" },
      { name: "MySQL", src: "/icons/mysql-original.svg", desc: "Relational database" },
      { name: "GraphQL", src: "/icons/GraphQL.webp", desc: "API query language" },
      { name: "Firebase", src: "/icons/firebase.svg", desc: "BaaS platform" },
      { name: "Microservices", src: "/icons/MicroServices.webp", desc: "Distributed architecture" },
    ],
  },
  {
    key: "mobile",
    title: "Mobile & Cross‑Platform",
    items: [
      { name: "Flutter", src: "/icons/flutter.svg", desc: "Multi‑platform UI toolkit" },
      { name: "React Native", src: "/icons/React.svg", desc: "Native apps with React" },
      { name: "Kotlin", src: "/icons/kotlin.svg", desc: "Modern Android language" },
    ],
  },
  {
    key: "design",
    title: "Design & Tools",
    items: [
      { name: "Figma", src: "/icons/figma.svg", desc: "Collaborative design" },
      { name: "Adobe XD", src: "/icons/xd-plain.svg", desc: "UX design & prototyping" },
      { name: "Framer", src: "/icons/Framer.webp", desc: "Interactive prototyping" },
      { name: "Canva", src: "/icons/Canva.webp", desc: "Quick visual design" },
      { name: "Dribbble", src: "/icons/Dribbble.webp", desc: "Design inspiration" },
    ],
  },
];

function flattenTech(categories) {
  return categories.flatMap((c) => c.items.map((i) => ({ ...i, category: c.title, key: c.key })));
}

const allTech = flattenTech(techCategories);

const listVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04 } }),
};

function CategoryChip({ label, active = false, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs sm:text-sm border transition-all duration-300 whitespace-nowrap ${active
        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-[0_0_24px_rgba(147,51,234,0.35)]"
        : "bg-white/5 text-white/80 border-white/15 hover:bg-white/10"
        }`}
      aria-pressed={active}
    >
      <span>{label}</span>
      {typeof count === "number" && (
        <span className={`ml-2 rounded-full px-2 py-0.5 text-[10px] align-middle ${active ? "bg-white/20" : "bg-white/10"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

function TechCard({ tech, index }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden flex flex-col items-center p-6 rounded-xl border border-white/15 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 transition"
      title={`${tech.name} • ${tech.category}`}
    >
      <div className="pointer-events-none absolute -left-10 -top-10 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
        <Image src={tech.src} alt={tech.name} fill className="object-contain" sizes="64px" loading="eager" />
      </div>
      <p className="text-white text-sm font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300">{tech.name}</p>
      <p className="text-gray-300 text-xs text-center group-hover:text-white/80 transition-colors duration-300">{tech.desc}</p>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
    </motion.div>
  );
}

function SocialCard({ name, user, icon, href = "#" }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-md hover:border-purple-400/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)] transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
        <Image src={icon} alt={name} width={32} height={32} className="object-contain w-full h-full" loading="eager" />
      </div>
      <div className="flex-1">
        <p className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors duration-300">{name}</p>
        <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">{user}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

export default function Page() {
  const [activeKey, setActiveKey] = useState("all");
  const [query, setQuery] = useState("");

  const tabs = useMemo(() => [{ key: "all", title: "All", count: allTech.length }, ...techCategories.map((c) => ({ key: c.key, title: c.title, count: c.items.length }))], []);

  const filtered = useMemo(() => {
    const list = activeKey === "all" ? allTech : allTech.filter((t) => t.key === activeKey);
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter((t) => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.category.toLowerCase().includes(q));
  }, [activeKey, query]);

  return (
    <div className="w-full min-h-screen">
      <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              Tech Stack
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Tools We <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Build With</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              A curated set of modern technologies we use to craft fast, scalable, and delightful products.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              {tabs.map((t) => (
                <CategoryChip key={t.key} label={t.title} count={t.count} active={activeKey === t.key} onClick={() => setActiveKey(t.key)} />
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-3 flex items-center"><Search className="w-4 h-4 text-white/60" /></div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search technologies..."
                className="w-full bg-white/5 border border-white/15 rounded-full pl-9 pr-4 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 transition"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={`${activeKey}-${query}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.25 }}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filtered.map((tech, i) => (
                  <TechCard key={`${tech.name}-${i}`} tech={tech} index={i} />
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center text-white/70 text-sm mt-10">No technologies match your search.</div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center sm:text-left">Get More Insights</h2>
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <SocialCard {...social} />
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}


