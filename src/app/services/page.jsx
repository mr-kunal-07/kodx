"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, X, Clock, Users, Zap } from "lucide-react";

const services = [
  {
    id: "strategy",
    title: "Product Strategy",
    icon: "🎯",
    brief: "Align business goals with user needs",
    desc: "Transform your vision into actionable strategy through comprehensive research, competitive analysis, and data-driven insights.",
    highlights: ["Market & user research", "North-star metrics", "Roadmap & milestones"],
    details: {
      challenge: "Many products fail because they build features users don't need or align poorly with business objectives.",
      approach: "We conduct deep user research, analyze market trends, define success metrics, and create clear roadmaps that balance user value with business goals.",
      deliverables: ["User research reports", "Competitive analysis", "Product roadmap", "Success metrics dashboard"],
      timeline: "2-4 weeks",
      team: "Product strategist, UX researcher",
    },
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: "🎨",
    brief: "Design delightful, accessible experiences",
    desc: "Create beautiful, intuitive interfaces backed by user research and scalable design systems that grow with your product.",
    highlights: ["Wireframes to hi-fi", "Design systems", "Interactive prototypes"],
    details: {
      challenge: "Poor design leads to confused users, high bounce rates, and products that fail to achieve their potential.",
      approach: "We start with user flows, create low-fidelity wireframes for quick iteration, develop high-fidelity designs with your brand, and build component libraries for consistency.",
      deliverables: ["User flows & wireframes", "High-fidelity mockups", "Design system", "Interactive prototypes"],
      timeline: "3-6 weeks",
      team: "UI/UX designer, Design system specialist",
    },
  },
  {
    id: "web",
    title: "Web Development",
    icon: "💻",
    brief: "High-performance React & Next.js apps",
    desc: "Build fast, SEO-optimized web applications using modern technologies with best practices for performance and maintainability.",
    highlights: ["SSR/SSG & SEO", "TypeScript & testing", "Analytics & observability"],
    details: {
      challenge: "Slow websites lose customers. Poor SEO means less traffic. Buggy code wastes time and money.",
      approach: "We use Next.js for optimal performance, TypeScript for reliability, comprehensive testing for quality, and implement analytics to measure what matters.",
      deliverables: ["Production-ready web app", "Technical documentation", "Testing suite", "Performance reports"],
      timeline: "6-12 weeks",
      team: "Frontend developers, DevOps engineer",
    },
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: "📱",
    brief: "Cross-platform iOS & Android apps",
    desc: "Develop beautiful native mobile experiences using Flutter or React Native with a single codebase that works everywhere.",
    highlights: ["Single codebase", "Native modules", "CI/CD & stores"],
    details: {
      challenge: "Building separate iOS and Android apps doubles cost and time. Maintaining consistency across platforms is difficult.",
      approach: "We use Flutter or React Native to build once and deploy everywhere, integrate native features when needed, and set up automated testing and deployment.",
      deliverables: ["iOS & Android apps", "App store submission", "CI/CD pipeline", "Documentation"],
      timeline: "8-14 weeks",
      team: "Mobile developers, QA specialist",
    },
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "⚙️",
    brief: "Scalable, secure server infrastructure",
    desc: "Build robust backend systems with Node.js, databases, and APIs that handle growth while keeping your data secure.",
    highlights: ["Scalable architecture", "Auth & security", "Caching & queues"],
    details: {
      challenge: "Backend systems must handle growth, protect sensitive data, and provide reliable service under load.",
      approach: "We architect scalable systems using Node.js, implement secure authentication, optimize with caching strategies, and use queues for async operations.",
      deliverables: ["REST/GraphQL APIs", "Database schema", "Auth system", "API documentation"],
      timeline: "6-10 weeks",
      team: "Backend developers, DevOps engineer",
    },
  },
  {
    id: "branding",
    title: "Brand & Creative",
    icon: "✨",
    brief: "Cohesive visual identity that resonates",
    desc: "Develop comprehensive brand systems including identity, guidelines, and creative assets that tell your story consistently.",
    highlights: ["Identity & guidelines", "Social creatives", "Motion & micro-interactions"],
    details: {
      challenge: "Inconsistent branding confuses customers and weakens your market position. Generic visuals fail to stand out.",
      approach: "We discover your brand essence, create a distinctive visual identity, develop comprehensive guidelines, and produce assets across all touchpoints.",
      deliverables: ["Brand identity", "Style guide", "Creative assets", "Motion guidelines"],
      timeline: "4-6 weeks",
      team: "Brand designer, Motion designer",
    },
  },
];

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-pulse">
      <div className="flex gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/10" />
        <div className="flex-1 space-y-2">
          <div className="h-5 bg-white/10 rounded w-1/2" />
          <div className="h-4 bg-white/10 rounded w-3/4" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-5/6" />
      </div>
    </div>
  );
}

function ServiceCard({ service, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      onClick={onClick}
      className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/30 transition-all duration-300"
    >
      {loaded ? (
        <>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
              {service.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm">{service.brief}</p>
            </div>
          </div>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.desc}</p>
          <ul className="space-y-2 mb-4">
            {service.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-white/70 text-xs">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <button className="text-purple-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
            View details
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      ) : (
        <div className="space-y-4 animate-pulse">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10" />
            <div className="flex-1 space-y-2">
              <div className="h-5 bg-white/10 rounded w-1/2" />
              <div className="h-4 bg-white/10 rounded w-3/4" />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function ServiceDetailsModal({ service, onClose }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [service.id]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="w-full max-w-3xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 space-y-6">
          <div className="h-8 bg-white/10 rounded w-1/3 animate-pulse" />
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh]  rounded-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto max-h-[75vh] md:max-h-[90vh] p-4 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-3xl">
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {service.title}
                </h2>
                <p className="text-white/60 text-sm">{service.brief}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock className="w-4 h-4 text-purple-400" />
              {service.details.timeline}
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Users className="w-4 h-4 text-purple-400" />
              {service.details.team}
            </div>
          </div>

          <div className="space-y-6 text-white/80">
            <section>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                The Challenge
              </h3>
              <p className="leading-relaxed">{service.details.challenge}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">Our Approach</h3>
              <p className="leading-relaxed">{service.details.approach}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">What You Get</h3>
              <ul className="space-y-2">
                {service.details.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [selectedService, setSelectedService] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoad(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen ">
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              What We Do
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Design, Build, and{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Scale
              </span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              End-to-end product development services. Click any service to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialLoad
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => setSelectedService(service)}
                />
              ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetailsModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}