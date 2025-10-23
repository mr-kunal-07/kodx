
const siteBaseUrl = "https://kodxmedia.site";
const pageUrl = `${siteBaseUrl}/contact`;
const pageImage = `${siteBaseUrl}/default-og-image.jpg`;

export const metadata = {
  title: "Contact KodxMedia — Talk to our team",
  description: "Get in touch with KodxMedia. Whether it's a quick question or a product brief, we're ready to help.",
  keywords: ["contact KodxMedia", "contact web dev agency", "get a quote KodxMedia"],
  openGraph: {
    title: "Contact KodxMedia",
    description: "Reach out to KodxMedia for web and mobile app development.",
    url: pageUrl,
    images: [{ url: pageImage, width: 1200, height: 630, alt: "Contact KodxMedia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KodxMedia",
    description: "Reach out to KodxMedia for web and mobile app development.",
    images: [pageImage],
  },
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }) {
  // Replace contact details below with your real data
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": pageUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "KodxMedia",
      "url": siteBaseUrl,
      "logo": `${siteBaseUrl}/logo.png`,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "9920655685",       
          "contactType": "customer support",
          "email": "kodxmedia@gmail.com",         
          "areaServed": "IN",
          "availableLanguage": ["English"]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}
