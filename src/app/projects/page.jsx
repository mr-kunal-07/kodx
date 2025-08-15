"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    image: "/e-com.png",
    category: "Web",
    desc: "High-performance storefront with SSR, optimized checkout, and analytics.",
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
    href: "/contact"
  },
  {
    title: "Social Mobile App",
    image: "/fot.webp",
    category: "Mobile",
    desc: "Community app with real-time chat, feed, and notifications.",
    tags: ["React Native", "Firebase", "Redis"],
    href: "/contact"
  },
  {
    title: "Analytics Dashboard",
    image: "/analytics.png",
    category: "Web",
    desc: "Insightful dashboards with role-based access and advanced filters.",
    tags: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    href: "/contact"
  },
  {
    title: "Brand System for SaaS",
    image: "/saa.png",
    category: "Branding",
    desc: "Unified brand, design system, and motion guidelines for rapid scale.",
    tags: ["Figma", "Design System", "Motion"],
    href: "/contact"
  },
  {
    title: "Marketing Microsites",
    image: "/marketing.png",
    category: "Web",
    desc: "SEO-ready campaign sites with delightful micro-interactions.",
    tags: ["Next.js", "Framer Motion", "SEO"],
    href: "/contact"
  },
  {
    title: "Retail POS Backend",
    image: "/pos.png",
    category: "Backend",
    desc: "Resilient APIs, caching, and queues powering in-store operations.",
    tags: ["Node.js", "Redis", "MySQL", "Auth"],
    href: "/contact"
  }
];

const categories = [
  { key: "all", title: "All" },
  { key: "Web", title: "Web" },
  { key: "Mobile", title: "Mobile" },
  { key: "Backend", title: "Backend" },
  { key: "Branding", title: "Branding" }
];

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
        <span
          className={`ml-2 rounded-full px-2 py-0.5 text-[10px] align-middle ${active ? "bg-white/20" : "bg-white/10"}`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl transition hover:-translate-y-1"
    >
      <Link href={project.href} className="block">
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white text-lg font-semibold group-hover:text-purple-300 transition-colors duration-300">
              {project.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
          </div>
          <p className="text-white/70 text-sm mb-3 line-clamp-2">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
      </Link>
    </article>
  );
}

export default function Page() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const map = { all: projects.length };
    for (const c of categories.filter((c) => c.key !== "all")) {
      map[c.key] = projects.filter((p) => p.category === c.key).length;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const list =
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active);
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.join(" ").toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [active, query]);

  return (
    <div className="w-full min-h-screen">
      <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              Our Work
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Projects We{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Loved Building
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              A selection of recent projects that combine performance, aesthetics,
              and measurable business results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              {categories.map((c) => (
                <CategoryChip
                  key={c.key}
                  label={c.title}
                  count={counts[c.key]}
                  active={active === c.key}
                  onClick={() => setActive(c.key)}
                />
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Search className="w-4 h-4 text-white/60" />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full bg-white/5 border border-white/15 rounded-full pl-9 pr-4 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={`${p.title}-${i}`} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-white/70 text-sm mt-10">
              No projects match your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
