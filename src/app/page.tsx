import Header from '@/components/Header';
import HeroSecond from '@/components/HeroSecond';
import React from 'react';
import Hero from '@/components/Hero';
import FeaturesSection  from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HeroSecond />
      <FeaturesSection />
      <Footer />
    </>
  );
}
