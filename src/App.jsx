import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Showcase from './components/Showcase';
import TeamContact from './components/TeamContact';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for in-page links
    if ('scrollBehavior' in document.documentElement.style) return; // native support
    const links = document.querySelectorAll('a[href^="#"]');
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.pageYOffset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    links.forEach((l) => l.addEventListener('click', onClick));
    return () => links.forEach((l) => l.removeEventListener('click', onClick));
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#0a0a0f] font-[Inter] text-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Showcase />
      <TeamContact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-xl font-semibold text-transparent">
          NeonFoundry
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#showcase" className="transition hover:text-white">Work</a>
          <a href="#team" className="transition hover:text-white">Team</a>
          <a href="#contact" className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/20">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/40 py-10">
      <div className="mx-auto max-w-7xl px-6 text-sm text-white/50">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <span>© {new Date().getFullYear()} NeonFoundry — All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
