import { useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { DetailsSection } from './components/DetailsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { Navbar } from './components/Navbar';
import { NAV_ITEMS } from './data/eventData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      for (let i = elements.length - 1; i >= 0; i--) {
        if (elements[i].offsetTop <= scrollPosition) {
          setActiveSection(elements[i].id);
          return;
        }
      }
      setActiveSection('hero');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
    setActiveSection(sectionId);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#ECF7EF] text-[#14261B]">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1">
        <HeroSection onNavigate={handleNavigate} />
        <IntroSection />
        <DetailsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
