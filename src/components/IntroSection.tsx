import { EVENT_INFO } from '../data/eventData';

export function IntroSection() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="border-b border-[#C5DFCC] bg-[#ECF7EF] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2
              id="intro-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#14261B] sm:text-[1.75rem]"
            >
              01. 행사 소개
            </h2>
            <p className="mt-3 text-sm text-[#445E4D]">
              주최 · {EVENT_INFO.host}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="max-w-[65ch] space-y-5 text-base leading-[1.75] text-[#14261B] sm:text-[1.0625rem]">
              <p>{EVENT_INFO.introSentences[0]}</p>
              <p>{EVENT_INFO.introSentences[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
