"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code2, Lightbulb, Rocket, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Product Strategy',
    icon: '/icons/GraphQL.webp',
    desc: 'Align business goals with user needs through data-driven strategy and roadmapping.',
    highlights: ['Market & user research', 'North-star metrics', 'Roadmap & milestones'],
    href: '/contact'
  },
  {
    title: 'UI/UX Design',
    icon: '/icons/figma.svg',
    desc: 'Design delightful, accessible experiences with scalable design systems.',
    highlights: ['Wireframes to hi-fi', 'Design systems', 'Interactive prototypes'],
    href: '/contact'
  },
  {
    title: 'Web Development',
    icon: '/icons/Nextjs.svg',
    desc: 'High-performance web apps using React, Next.js, and TypeScript.',
    highlights: ['SSR/SSG & SEO', 'TypeScript & testing', 'Analytics & observability'],
    href: '/contact'
  },
  {
    title: 'Mobile Development',
    icon: '/icons/flutter.svg',
    desc: 'iOS/Android apps with Flutter and React Native for fast, native experiences.',
    highlights: ['Single codebase', 'Native modules', 'CI/CD & stores'],
    href: '/contact'
  },
  {
    title: 'Backend & APIs',
    icon: '/icons/express.svg',
    desc: 'Robust, secure backends with Node.js, PostgreSQL, MongoDB, and GraphQL.',
    highlights: ['Scalable architecture', 'Auth & security', 'Caching & queues'],
    href: '/contact'
  },
  {
    title: 'Brand & Creative',
    icon: '/icons/Canva.webp',
    desc: 'Cohesive brand systems, visuals, and content that amplify your story.',
    highlights: ['Identity & guidelines', 'Social creatives', 'Motion & micro-interactions'],
    href: '/contact'
  }
];

function ServiceCard({ service }) {
  return (
    <article
      className="group relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl transition hover:-translate-y-1 opacity-0 animate-fadeIn"
      aria-label={service.title}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 shrink-0 rounded-xl border border-white/10 bg-white/10 flex items-center justify-center">
          <Image src={service.icon} alt={service.title} fill className="object-contain p-2" sizes="48px" loading="eager" />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-lg font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300">{service.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">{service.desc}</p>
          <ul className="space-y-1.5 mb-5">
            {service.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-white/80 text-xs">
                <CheckCircle className="w-3.5 h-3.5 text-purple-300" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <Link href={service.href} className="inline-flex items-center gap-2 text-sm text-white group/btn">
            <span className="relative z-10">Learn more</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
    </article>
  );
}

export default function Page() {
  return (
    <div className="w-full min-h-screen">
      <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              What We Do
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Design, Build, and <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Scale</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              From idea to launch and beyond, we craft delightful products with a strong focus on performance, accessibility, and business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Our Process</h2>
            <p className="text-white/70 text-sm sm:text-base">A transparent, outcomes-driven approach that keeps you in the loop.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Lightbulb, title: 'Discover', desc: 'Deep dive into goals, users, and constraints.' },
              { icon: Sparkles, title: 'Design', desc: 'Iterate quickly with prototypes and feedback.' },
              { icon: Code2, title: 'Develop', desc: 'Build scalable, well-tested, observable systems.' },
              { icon: Rocket, title: 'Launch', desc: 'Ship, measure, and continuously improve.' }
            ].map((step) => (
              <div
                key={step.title}
                className="group relative overflow-hidden p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md opacity-0 animate-fadeIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <step.icon className="w-6 h-6 text-purple-300 mb-3" />
                <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
