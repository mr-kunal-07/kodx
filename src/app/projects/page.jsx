"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Clock, Users, TrendingUp, ArrowLeft } from "lucide-react";

const projects = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    image: "/e-com.png",
    category: "Web",
    brief: "Built a high-performance online store",
    metrics: { duration: "3 months", team: "4 people", impact: "+150% sales" },
    challenge: "The client needed a fast, scalable e-commerce platform that could handle peak traffic during sales events.",
    solution: "Implemented Next.js with SSR for SEO, optimized images with lazy loading, integrated Stripe for seamless payments, and used PostgreSQL with connection pooling.",
    results: ["150% increase in sales", "40% faster page load", "99.9% uptime during Black Friday"],
    tech: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL", "Vercel"],
  },
  {
    id: "mobile-app",
    title: "Social Mobile App",
    image: "/fot.webp",
    category: "Mobile",
    brief: "Community app with real-time features",
    metrics: { duration: "4 months", team: "5 people", impact: "50K+ users" },
    challenge: "Creating a performant mobile app with real-time chat and notifications while maintaining battery efficiency.",
    solution: "Used React Native for cross-platform development, Firebase for real-time database and auth, Redis for caching, and optimized re-renders.",
    results: ["50K+ active users in 3 months", "4.8★ app store rating", "85% user retention rate"],
    tech: ["React Native", "Firebase", "Redis", "Push Notifications", "iOS & Android"],
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    image: "/analytics.png",
    category: "Web",
    brief: "Data visualization with role-based access",
    metrics: { duration: "2 months", team: "3 people", impact: "10 departments" },
    challenge: "Enterprise needed a secure, fast dashboard to visualize complex data across multiple departments with different access levels.",
    solution: "Built with React and GraphQL for efficient data fetching, Node.js backend with JWT authentication, and PostgreSQL for data storage.",
    results: ["Reduced report generation time by 80%", "Unified 10 departments", "Enhanced decision-making speed"],
    tech: ["React", "Node.js", "GraphQL", "PostgreSQL", "Chart.js", "JWT"],
  },
  {
    id: "saas-branding",
    title: "Brand System for SaaS",
    image: "/saa.png",
    category: "Branding",
    brief: "Complete brand identity and design system",
    metrics: { duration: "6 weeks", team: "3 designers", impact: "3x consistency" },
    challenge: "Startup needed a cohesive brand identity that could scale across web, mobile, and marketing materials.",
    solution: "Created comprehensive brand guidelines, design tokens, component library in Figma, and motion principles for consistent animations.",
    results: ["300% faster design-to-dev handoff", "Consistent brand across 15+ touchpoints", "Improved brand recognition"],
    tech: ["Figma", "Design Tokens", "Component Library", "Motion Guidelines", "Brand Strategy"],
  },
  {
    id: "marketing",
    title: "Marketing Microsites",
    image: "/marketing.png",
    category: "Web",
    brief: "Campaign landing pages with animations",
    metrics: { duration: "4 weeks", team: "2 people", impact: "+200% conversions" },
    challenge: "Marketing team needed fast-loading, visually engaging campaign sites that could be deployed quickly.",
    solution: "Built with Next.js for SEO optimization, Framer Motion for smooth animations, and implemented A/B testing for conversion optimization.",
    results: ["200% increase in conversion rate", "90+ PageSpeed score", "5 campaigns launched successfully"],
    tech: ["Next.js", "Framer Motion", "SEO Optimization", "A/B Testing", "Analytics"],
  },
  {
    id: "pos-backend",
    title: "Retail POS Backend",
    image: "/pos.png",
    category: "Backend",
    brief: "Resilient APIs for in-store operations",
    metrics: { duration: "5 months", team: "4 people", impact: "100+ stores" },
    challenge: "Retail chain needed a robust backend system that could handle high transaction volumes across multiple stores with offline capability.",
    solution: "Built scalable Node.js APIs with Redis caching, MySQL for transactions, queue system for async operations, and JWT authentication.",
    results: ["Handles 10K+ transactions/day", "99.95% uptime", "Deployed across 100+ stores"],
    tech: ["Node.js", "Redis", "MySQL", "Queue System", "JWT Auth", "REST API"],
  },
];

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden animate-pulse">
      <div className="w-full aspect-[16/10] bg-white/10" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-white/10 rounded w-3/4" />
        <div className="h-4 bg-white/10 rounded w-full" />
        <div className="flex gap-2">
          <div className="h-6 bg-white/10 rounded w-16" />
          <div className="h-6 bg-white/10 rounded w-16" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={imgRef}
      onClick={onClick}
      className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="relative w-full aspect-[16/10] bg-white/10 overflow-hidden">
        {loaded && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-3">{project.brief}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            {project.category}
          </span>
          <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </article>
  );
}

function CaseStudyPage({ project, onBack }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [project.id]);

  if (loading) {
    return (
      <div className="min-h-screen p-4 sm:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="h-8 bg-white/10 rounded w-24 animate-pulse" />
          <div className="h-10 bg-white/10 rounded w-3/4 animate-pulse" />
          <div className="w-full aspect-video bg-white/10 rounded-xl animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-4/6 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="text-white/70 hover:text-white mb-6 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Clock className="w-4 h-4" />
            {project.metrics.duration}
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Users className="w-4 h-4" />
            {project.metrics.team}
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <TrendingUp className="w-4 h-4" />
            {project.metrics.impact}
          </div>
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Challenge</h2>
            <p className="leading-relaxed">{project.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Solution</h2>
            <p className="leading-relaxed">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Results</h2>
            <ul className="space-y-2">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoad(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (selectedProject) {
    return (
      <CaseStudyPage
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="min-h-screen ">
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              Real projects, real impact. Click any project to view the full case study.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialLoad
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}