"use client";

import { Header, Footer } from '@/components/layout';
import { Hero, About, Features, CTA } from '@/components/sections';
import { Suspense } from 'react';

// Componente de loading para seções
function SectionLoading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-white border-t-yellow-400 rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="overflow-hidden">
        <Suspense fallback={<SectionLoading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
