// components/SEO.tsx
import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: string;
};

export default function SEO({
  title,
  description,
  keywords = "apprenticeship search, apply for apprenticeships, apprenticeship tracker, apprenticeship salary guide, CV tips for apprenticeships, apprenticeship employer reviews, career apprenticeships, wApprentice",
  canonicalUrl,
  ogImage = "/logo.svg",
  structuredData,
}: SEOProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">{structuredData}</script>
      )}
    </Head>
  );
}