import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { EVENT_INFO, NAV_ITEMS } from '../data/eventData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#C5DFCC] bg-[#ECF7EF]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="font-display text-lg font-semibold tracking-tight text-[#14261B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E5A44]"
        >
          {EVENT_INFO.company}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="행사 안내 메뉴" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E5A44] ${
                  isActive
                    ? 'text-[#23533A]'
                    : 'text-[#445E4D] hover:text-[#14261B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#23533A]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action & mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('details')}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#14261B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23533A]"
          >
            일정 및 장소 확인
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#FACC15] text-[#14261B] transition-colors duration-150 hover:bg-[#EAB308] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23533A]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="모바일 행사 안내 메뉴"
          className="border-t border-[#C5DFCC] bg-[#ECF7EF] px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#DFF0E3] text-[#23533A]'
                        : 'text-[#14261B] hover:bg-[#DFF0E3]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
