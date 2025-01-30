// config/seo.ts
export const SEO_DEFAULT = {
  title: "wApprentice | Track, Apply, and Win Apprenticeships",
  description: "Find and track apprenticeships in one click. Real salary insights, CV tips, and no-BS search.",
  keywords: "apprenticeships uk, apprenticeships near me, apprenticeship search, apply for apprenticeships, apprenticeship tracker, apprenticeship salary guide, CV tips for apprenticeships, apprenticeship employer reviews, career apprenticeships, wApprentice, apprenticeships in London, apprenticeships Manchester, apprenticeships Birmingham,  CV template for apprenticeship applications,track apprenticeship applications, best apprenticeship programs, apprenticeships salary, apprenticeship wage, apprenticeship job, apprenticeship assessment, apprenticeship assessment test",
  ogImage: "", 
  canonicalUrl: "https://wapprentice.app",
};

export const STRUCTURED_DATA_HOME = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "wApprentice",
  "url": "https://wapprentice.app",
  "description": "Land apprenticeships: Apply, track—one click. Smart search, salary insights, CV tips.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://wapprentice.app/search?q={search_term}",
    "query-input": "required name=search_term"
  }
};