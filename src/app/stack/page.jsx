"use client";
import StackIcons from '@/components/LandingPage/StackIcons'
import React from 'react'

import Image from "next/image";
import Link from 'next/link';

const socials = [
  { name: "X / Twitter", user: "@KodxMedia", icon: "/icons/x1.webp" },
  { name: "Instagram", user: "@KodxMedia", icon: "/icons/instagram.webp" },
  { name: "LinkedIn", user: "@KodxMedia", icon: "/icons/Link.webp" },
];

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React", src: "/icons/React.svg", desc: "JavaScript library for UI" },
      { name: "Vite", src: "/icons/vite.svg", desc: "Next-gen front-end tooling" },
      { name: "Redux", src: "/icons/redux.svg", desc: "State management library" },
      { name: "Tailwind", src: "/icons/tailwind.webp", desc: "Utility-first CSS framework" },
      { name: "TypeScript", src: "/icons/TS.svg", desc: "Typed superset of JavaScript" },
      { name: "Sass", src: "/icons/sass.svg", desc: "CSS preprocessor for styling" },
      { name: "NextJS", src: "/icons/Nextjs.svg", desc: "React framework for web apps" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Express", src: "/icons/express.svg", desc: "Node.js web framework" },
      { name: "GraphQL", src: "/icons/GraphQL.webp", desc: "API query language" },
      { name: "MicroServices", src: "/icons/MicroServices.webp", desc: "Service-oriented architecture" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", src: "/icons/mongodb.svg", desc: "NoSQL database" },
      { name: "MySQL", src: "/icons/mysql-original.svg", desc: "Relational database" },
      { name: "PostgreSQL", src: "/icons/postgresql-original.svg", desc: "Advanced SQL database" },
      { name: "Redis", src: "/icons/redis-original.svg", desc: "In-memory data store" },
      { name: "Firebase", src: "/icons/firebase.svg", desc: "Backend as a service" },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    items: [
      { name: "Flutter", src: "/icons/flutter.svg", desc: "Cross-platform UI toolkit" },
      { name: "Kotlin", src: "/icons/kotlin.svg", desc: "Modern Android language" },
    ],
  },
  {
    title: "Design & Tools",
    items: [
      { name: "Figma", src: "/icons/figma.svg", desc: "UI/UX design tool" },
      { name: "Adobe XD", src: "/icons/xd-plain.svg", desc: "UI/UX design tool" },
    ],
  },
];


const page = () => {
  return (
    <div className='w-full min-h-screen'>

      <section className="w-full py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Technologies We Work With
          </h2>

          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              {/* Category Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-6">
                {category.title}
              </h3>

              {/* Tech Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.items.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 rounded-xl
                  border border-white/20 backdrop-blur-xl
                  bg-gradient-to-br from-white/10 to-white/5
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                  transition duration-300 group"
                  >
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Name */}
                    <p className="text-white text-sm font-semibold mb-1">
                      {tech.name}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-xs text-center">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Social Cards */}
      <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center sm:text-left">
          Get More Insights
        </h1>

        {/* Cards */}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, i) => (
            <SocialCard key={i} {...social} />
          ))}
        </section>
      </div>
    </div>
  )
}


function SocialCard({ name, user, icon }) {
  return (
    <Link
      href="#"
      className="flex  items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md
            hover:border-purple-400/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]
            transition-all duration-300"
    >
      <Image
        src={icon}
        alt={name}
        width={32}
        height={32}
        className="object-contain"
      />
      <div>
        <p className="text-white font-medium">{name}</p>
        <p className="text-sm text-white/60">{user}</p>
      </div>
    </Link>
  );
}

export default page