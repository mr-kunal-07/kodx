// app/stack/layout.jsx
const siteBaseUrl = "https://kodxmedia.site";
const pageUrl = `${siteBaseUrl}/stack`;
const pageImage = `${siteBaseUrl}/default-og-image.jpg`;

export const metadata = {
  title: "Technology Stack & Tools — KodxMedia",
  description:
    "Explore KodxMedia's technology stack — Next.js, React, Node.js, AWS, MySQL, MongoDB, Tailwind CSS, and more — the powerful tools we use to deliver scalable, production-ready solutions.",
  keywords: [
    "KodxMedia tech stack",
    "web development technologies",
    "Next.js",
    "React",
    "Node.js",
    "AWS",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "GraphQL",
    "Redis",
    "Figma",
    "Flutter"
  ],
  openGraph: {
    title: "KodxMedia — Technology Stack & Tools",
    description:
      "Our technology stack powers modern, fast, and scalable products — from Next.js & React to AWS, databases, and design tools.",
    url: pageUrl,
    type: "website",
    locale: "en_US",
    siteName: "KodxMedia",
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: "KodxMedia Technology Stack Preview"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KodxMedia — Technology Stack",
    description:
      "See the tools & technologies we use to deliver world-class products — Next.js, React, AWS, Tailwind, and more.",
    images: [pageImage],
  },
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 },
};

export default function StackLayout({ children }) {
  const stackJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "url": pageUrl,
    "name": "KodxMedia Technology Stack",
    "description": "List of programming languages, frameworks, databases, and tools used by KodxMedia.",
    "numberOfItems": 19,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Next.js", "url": "https://nextjs.org" },
      { "@type": "ListItem", "position": 2, "name": "React", "url": "https://react.dev" },
      { "@type": "ListItem", "position": 3, "name": "Node.js", "url": "https://nodejs.org" },
      { "@type": "ListItem", "position": 4, "name": "AWS", "url": "https://aws.amazon.com" },
      { "@type": "ListItem", "position": 5, "name": "Tailwind CSS", "url": "https://tailwindcss.com" },
      { "@type": "ListItem", "position": 6, "name": "MongoDB", "url": "https://www.mongodb.com" },
      { "@type": "ListItem", "position": 7, "name": "MySQL", "url": "https://www.mysql.com" },
      { "@type": "ListItem", "position": 8, "name": "PostgreSQL", "url": "https://www.postgresql.org" },
      { "@type": "ListItem", "position": 9, "name": "GraphQL", "url": "https://graphql.org" },
      { "@type": "ListItem", "position": 10, "name": "Redis", "url": "https://redis.io" },
      { "@type": "ListItem", "position": 11, "name": "Firebase", "url": "https://firebase.google.com" },
      { "@type": "ListItem", "position": 12, "name": "Figma", "url": "https://figma.com" },
      { "@type": "ListItem", "position": 13, "name": "Flutter", "url": "https://flutter.dev" },
      { "@type": "ListItem", "position": 14, "name": "Kotlin", "url": "https://kotlinlang.org" },
      { "@type": "ListItem", "position": 15, "name": "Vite", "url": "https://vitejs.dev" },
      { "@type": "ListItem", "position": 16, "name": "Redux", "url": "https://redux.js.org" },
      { "@type": "ListItem", "position": 17, "name": "TypeScript", "url": "https://www.typescriptlang.org" },
      { "@type": "ListItem", "position": 18, "name": "Sass", "url": "https://sass-lang.com" },
      { "@type": "ListItem", "position": 19, "name": "Adobe XD", "url": "https://adobe.com/products/xd.html" },
    ],
  };

  return (
    <>
      <main id="main" className="container mx-auto relative z-10">
        {children}
      </main>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stackJsonLd) }}
      />
    </>
  );
}
