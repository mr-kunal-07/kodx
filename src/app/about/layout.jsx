// app/about/layout.jsx
const siteBaseUrl = "https://kodxmedia.site";
const pageUrl = `${siteBaseUrl}/about`;
const pageImage = `${siteBaseUrl}/default-og-image.jpg`;

export const metadata = {
  title: "About KodxMedia — Startup-first Web & Mobile App Development",
  description:
    "About KodxMedia — we build fast, scalable web & mobile products for startups. Learn about our team, values, and client case studies.",
  keywords: [
    "KodxMedia",
    "about KodxMedia",
    "web development team",
    "mobile app agency",
    "startup development agency",
  ],
  openGraph: {
    title: "About KodxMedia — Startup-first Web & Mobile App Development",
    description:
      "We build fast, scalable web & mobile products for startups. Learn about our team, values, and client case studies.",
    url: pageUrl,
    siteName: "KodxMedia",
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: "KodxMedia — Web & Mobile App Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About KodxMedia",
    description:
      "We build fast, scalable web & mobile products for startups. Learn about our team, values, and client case studies.",
    images: [pageImage],
  },
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }) {
  // JSON-LD AboutPage + Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": pageUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "KodxMedia",
      "url": siteBaseUrl,
      "logo": `${siteBaseUrl}/logo.png`,
      // replace with your social profiles
      "sameAs": [
        "https://twitter.com/REPLACE_ME",
        "https://www.linkedin.com/company/REPLACE_ME"
      ],
      "description": "KodxMedia builds modern web & mobile products for startups and enterprises."
    },
    "description": "Learn about KodxMedia — our mission, team, and client successes."
  };

  return (
    <>
      <main id="main" className="container mx-auto relative z-10">
        {children}
      </main>

      {/* JSON-LD structured data — helps Google understand the About page. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
