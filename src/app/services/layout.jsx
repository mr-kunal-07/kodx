import Head from 'next/head';

export default function ServicesLayout({ children }) {
  const siteBaseUrl = "https://kodxmedia.site";
  const pageTitle = "Web & Mobile App Development Services | KodxMedia";
  const pageDescription =
    "Discover KodxMedia's professional web development, mobile app solutions, SaaS platform creation, and UI/UX design services crafted for startups and enterprises to scale faster.";
  const pageUrl = `${siteBaseUrl}/services`;
  const pageImage = `${siteBaseUrl}/default-og-image.jpg`; 

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="web development services, mobile app development, SaaS platform, UI/UX design, startup solutions, AI development, blockchain, India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:alt" content="KodxMedia Services Preview" />
        <meta property="og:site_name" content="KodxMedia" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:alt" content="KodxMedia Services Preview" />

        {/* Browser theme color */}
        <meta name="theme-color" content="#171717" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web and Mobile App Development",
              "provider": {
                "@type": "Organization",
                "name": "KodxMedia",
                "url": siteBaseUrl,
                "logo": `${siteBaseUrl}/logo.png`
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "description": pageDescription,
              "offers": {
                "@type": "Offer",
                "url": pageUrl,
                "priceCurrency": "INR",
                "price": "Custom"
              }
            }),
          }}
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
