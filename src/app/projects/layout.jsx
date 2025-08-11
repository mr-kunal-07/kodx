// app/projects/layout.jsx
const siteBaseUrl = "https://kodxmedia.site";
const pageUrl = `${siteBaseUrl}/projects`;
const pageImage = `${siteBaseUrl}/default-og-image.jpg`;

export const metadata = {
  title: "Projects — KodxMedia Portfolio",
  description: "A curated portfolio of web, mobile and SaaS projects built by KodxMedia for startups and enterprises.",
  keywords: ["KodxMedia projects", "portfolio web development", "case studies"],
  openGraph: {
    title: "KodxMedia — Projects & Case Studies",
    description: "Portfolio of selected web, mobile and SaaS projects built by KodxMedia.",
    url: pageUrl,
    images: [{ url: pageImage, width: 1200, height: 630, alt: "KodxMedia Projects Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KodxMedia — Projects",
    description: "Portfolio of selected projects and case studies.",
    images: [pageImage],
  },
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

export default function ProjectsLayout({ children }) {
  // Example: CollectionPage + ItemList. Replace the `itemListElement` with your actual projects.
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": pageUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        // Replace these placeholder objects with your actual projects.
        {
          "@type": "ListItem",
          "position": 1,
          "url": `${siteBaseUrl}/projects/project-1`,
          "name": "Project One",
          "description": "Short description of Project One."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": `${siteBaseUrl}/projects/project-2`,
          "name": "Project Two",
          "description": "Short description of Project Two."
        }
      ]
    }
  };

  return (
    <>
      <main id="main" className="container mx-auto relative z-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
    </>
  );
}
