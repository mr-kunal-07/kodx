import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "KodxMedia",
  description:
    "KodxMedia builds modern websites, SaaS platforms, and scalable digital solutions with cutting-edge technologies like Next.js, AWS, and AI.",
  icons: {
    icon: "/logo2.webp",
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#050012] `}
      >
        {/* Responsive Glow */}
        <div
          className="
    absolute 
    top-[40%] 
    left-1/2 
    -translate-x-1/2 
    w-full 
    h-[1000px] 
    md:h-[1800px] 
    lg:h-[2200px] 
    bg-[#AA14F0]/90
    rounded-full 
    blur-[300px] 
    md:blur-[500px] 
    lg:blur-[450px] 
    pointer-events-none
    opacity-50
    md:opacity-25
  "
        ></div>


        <Navbar />

        {/* Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>

    </html>
  );
}
