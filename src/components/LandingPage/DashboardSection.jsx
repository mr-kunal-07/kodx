"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stackIcons = [
    { name: "React", src: "/icons/React.svg" },
    { name: "Vite", src: "/icons/vite.svg" },
    { name: "Redux", src: "/icons/redux.svg" },
    { name: "Tailwind", src: "/icons/tailwind.webp" },
    { name: "TypeScript", src: "/icons/TS.svg" },
    { name: "Sass", src: "/icons/sass.svg" },
    { name: "Express", src: "/icons/express.svg" },
    { name: "NextJS", src: "/icons/Nextjs.svg" },
    { name: "MongoDB", src: "/icons/mongodb.svg" },
    { name: "MySQL", src: "/icons/mysql-original.svg" },
    { name: "GraphQL", src: "/icons/GraphQL.webp" },
    { name: "PostgreSQL", src: "/icons/postgresql-original.svg" },
    { name: "Redis", src: "/icons/redis-original.svg" },
    { name: "Firebase", src: "/icons/firebase.svg" },
    { name: "Figma", src: "/icons/figma.svg" },
    { name: "Framer", src: "/icons/Framer.webp" },
    // { name: "MicroServices", src: "/icons/MicroServices.webp" },
    // { name: "Adobe XD", src: "/icons/xd-plain.svg" }
];

const socials = [
    { name: "X / Twitter", user: "@KodxMedia", icon: "/icons/x1.webp" },
    { name: "Dribbble", user: "@KodxMedia", icon: "/icons/Dribbble.webp" },
    { name: "LinkedIn", user: "@KodxMedia", icon: "/icons/Link.webp" },
];
function StackIcon({ src, alt }) {
    return (
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-white/5 flex items-center justify-center 
                        hover:scale-110 hover:rotate-3 transition-transform duration-300 ease-out shadow-sm hover:shadow-lg">
            <Image src={src} alt={alt} width={70} height={70} className="pointer-events-none" />
        </div>
    );
}

function SocialCard({ name, user, icon }) {
    return (
        <div className="glass p-4 sm:p-5 rounded-2xl flex items-center justify-between 
                transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10
                w-full max-w-md mx-auto">

            {/* Left: Icon + Text */}
            <div className="flex items-center gap-4">
                <Image
                    src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-lg"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{user}</p>
                </div>
            </div>

            {/* Right: Button */}
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full 
                       text-xs sm:text-sm transition whitespace-nowrap">
                Get Started
            </button>
        </div>

    );
}


export default function StackAndServices() {
    return (
        <div className="min-h-screen lg:mx-36 mt-9 p-4 sm:p-6 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Explore My Stack */}
                    <section className="glass p-4 sm:p-6 rounded-2xl">
                        <header className="mb-4 sm:mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold">Explore my stack</h2>
                            <p className="text-sm text-gray-400">
                                Let&apos;s see my useful tools while cooking
                            </p>
                        </header>
                        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-4 mb-4 sm:mb-6">
                            {stackIcons.map((icon, i) => (
                                <StackIcon key={i} src={icon.src} alt={icon.name} />
                            ))}
                        </div>
                        <button className="bg-white/10 hover:bg-white/20 w-full py-2 rounded-full text-sm sm:text-base transition">
                            See All
                        </button>
                    </section>

                    {/* Social Cards */}
                    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {socials.map((social, i) => (
                            <SocialCard key={i} {...social} />
                        ))}
                    </section>
                </div>

                {/* Right Column - Services */}
                <aside className="glass rounded-2xl relative overflow-hidden order-first lg:order-none group
                  min-h-[300px] sm:min-h-[400px] lg:min-h-0 flex">
                    <Image
                        src="/services2.webp"
                        alt="Services Background"
                        width={600}
                        height={800}
                        className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
                    <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full w-full">
                        <div className="transition-transform duration-500 ease-out group-hover:translate-y-[-5px]">
                            <h2 className="text-xl sm:text-4xl font-bold">Take a look at our Services</h2>
                            <p className="text-base sm:text-2xl text-gray-300 mt-2">
                                Let&apos;s see our service offerings
                            </p>
                        </div>
                        <Link
                            href="/services"
                            className="group relative flex items-center justify-center gap-1 text-white/85 hover:text-white p-2 rounded-full border border-zinc-300 hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden"
                        >
                            <div className="h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 absolute -left-10 -rotate-45 blur-sm group-hover:left-[150%] duration-500 group-hover:delay-200" />
                            See Services
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 group-hover:text-white duration-300" />
                        </Link>
                    </div>
                </aside>




            </div>
        </div>
    );
}
