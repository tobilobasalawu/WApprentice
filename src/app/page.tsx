import Header from '@/components/Header';
import HeroSecond from '@/components/HeroSecond';
import React from 'react';
import Hero from '@/components/Hero';
import FeaturesSection  from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { SEO_DEFAULT, STRUCTURED_DATA_HOME } from '@/lib/seo';

export default function Home() {
  return (
    <>
    <SEO
        title={SEO_DEFAULT.title}
        description={SEO_DEFAULT.description}
        keywords={SEO_DEFAULT.keywords}
        canonicalUrl={SEO_DEFAULT.canonicalUrl}
        ogImage={SEO_DEFAULT.ogImage}
        structuredData={JSON.stringify(STRUCTURED_DATA_HOME)}
      />
      <Header />
      <Hero />
      <HeroSecond />
      <FeaturesSection />
      <Footer />
    </>
  );
}
