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
  metadataBase: new URL("https://kodxmedia.site"),
  title: {
    default: "KodxMedia | Startup-first Web & Mobile App Development Company",
    template: "%s | Startup-first Web & Mobile App Development Company",
  },
  description:
    "KodxMedia is a leading web and mobile app development agency in India, specializing in creating modern websites, SaaS platforms, and scalable digital solutions. Utilizing cutting-edge technologies such as Next.js, AWS, and AI, we excel in building fast, scalable MVPs, AI applications, blockchain platforms, and stunning UI/UX designs. Trusted by over 25 startups for comprehensive tech delivery, we are the go-to partner for startup founders.",
  keywords: [
    "web development",
    "mobile app development",
    "next.js",
    "aws",
    "ai",
    "blockchain",
    "ui/ux",
    "startups",
    "india",
    "development agency",
  ],
  openGraph: {
    type: "website",
    url: "https://kodxmedia.site",
    title: "KodxMedia | Startup-first Web & Mobile App Development Company",
    description:
      "KodxMedia helps startups build powerful, scalable websites, mobile apps, SaaS platforms, AI tools, and blockchain solutions.",
    images: [
      {
        url: "/default-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KodxMedia Services Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KodxMedia | Startup-first Web & Mobile App Development Company",
    description:
      "KodxMedia helps startups build powerful, scalable websites, mobile apps, SaaS platforms, AI tools, and blockchain solutions.",
    images: ["/default-og-image.jpg"],
  },
  themeColor: "#171717",
  alternates: {
    canonical: "https://kodxmedia.site",
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
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
