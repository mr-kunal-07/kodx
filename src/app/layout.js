import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen w-full bg-[#0f0012] `}
  >
          {/* Glow Layer */}
          <div
            className="
            min-h-screen w-full
          absolute 
          top-[50%]
          left-[50%]
          -translate-x-1/2 
          -translate-y-1/2
          bg-[#AA14F0]/50
          rounded-full 
          blur-[350px]  
          md:blur-[500px]
          lg:blur-[700px] 
          opacity-60
        "
          />

        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <BottomBar />
      </body>

    </html>
  );
}
