import { ArrowDown } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="border-b border-[#C5DFCC] bg-[#ECF7EF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Primary typographic column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-sm font-medium text-[#23533A]">
                {EVENT_INFO.host} 주최
              </p>

              <h1
                id="hero-title"
                className="font-display mt-4 max-w-2xl text-balance text-[clamp(2.125rem,4vw,3.5rem)] font-semibold leading-[1.2] tracking-tight text-[#14261B]"
              >
                <span className="block">{EVENT_INFO.subtitleLine1}</span>
                <span className="mt-1 block text-[#23533A]">
                  {EVENT_INFO.subtitleLine2}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#445E4D] sm:text-lg">
                {EVENT_INFO.oneLineIntro}
              </p>
            </div>

            {/* Key summary strip + primary CTA */}
            <div className="mt-10 border-t border-[#C5DFCC] pt-8">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium text-[#445E4D]">일시</dt>
                  <dd className="mt-1.5 text-base font-semibold tabular-nums text-[#14261B]">
                    {EVENT_INFO.date}
                    <span className="ml-2 font-medium text-[#445E4D]">
                      {EVENT_INFO.time}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#445E4D]">장소</dt>
                  <dd className="mt-1.5 text-base font-semibold text-[#14261B]">
                    {EVENT_INFO.location}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('details')}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-6 py-3 text-sm font-semibold text-[#14261B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23533A]"
                >
                  <span>핵심 정보 한눈에 보기</span>
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Minimal self-contained geometric lakeside trail artwork (no external images) */}
          <div className="lg:col-span-5">
            <div
              aria-hidden="true"
              className="flex h-full min-h-[240px] flex-col justify-between rounded-xl border border-[#C5DFCC] bg-[#DFF0E3] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between text-xs text-[#445E4D]">
                <span className="tabular-nums">2027. 04. 16</span>
                <span>{EVENT_INFO.location}</span>
              </div>

              <svg
                viewBox="0 0 360 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 h-48 w-full sm:h-56"
              >
                {/* Gentle horizon & lake contour lines */}
                <path
                  d="M20 185C85 168 138 196 205 180C258 167 302 174 340 164"
                  stroke="#A8CDB4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M28 206C98 192 154 214 224 200C274 190 310 194 336 188"
                  stroke="#B8D9C2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Winding walking path */}
                <path
                  d="M64 228C96 178 148 164 176 128C204 92 222 64 286 44"
                  stroke="#23533A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M78 228C112 184 160 172 190 134C216 100 236 74 294 56"
                  stroke="#23533A"
                  strokeOpacity="0.28"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                />
                {/* Spring sun & botanical leaf silhouettes */}
                <circle cx="96" cy="72" r="24" fill="#FACC15" fillOpacity="0.45" />
                <circle cx="96" cy="72" r="24" stroke="#EAB308" strokeOpacity="0.6" strokeWidth="1" />
                <path
                  d="M240 120C240 104 256 92 272 92C272 108 256 120 240 120Z"
                  fill="#23533A"
                  fillOpacity="0.18"
                  stroke="#23533A"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M240 120C226 112 218 98 222 84C236 90 244 104 240 120Z"
                  fill="#23533A"
                  fillOpacity="0.1"
                  stroke="#23533A"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* Two companion step markers on the trail */}
                <circle cx="176" cy="128" r="5" fill="#23533A" />
                <circle cx="192" cy="112" r="4" fill="#FACC15" stroke="#23533A" strokeWidth="2" />
              </svg>

              <div className="flex items-center justify-between border-t border-[#C5DFCC] pt-4 text-xs text-[#445E4D]">
                <span>{EVENT_INFO.audience}</span>
                <span className="tabular-nums">{EVENT_INFO.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
