import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Problems from '@/components/sections/Problems';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Problems />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
