import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export function DetailsSection() {
  const [copied, setCopied] = useState(false);

  const summaryText = [
    EVENT_INFO.title,
    `일시: ${EVENT_INFO.dateTime}`,
    `장소: ${EVENT_INFO.location}`,
    `대상: ${EVENT_INFO.audience}`,
    `주최: ${EVENT_INFO.host}`,
  ].join('\n');

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const detailItems = [
    {
      label: '일시',
      value: EVENT_INFO.dateTime,
      caption: '행사 진행 일시',
      tabular: true,
    },
    {
      label: '장소',
      value: EVENT_INFO.location,
      caption: '행사 진행 장소',
      tabular: false,
    },
    {
      label: '대상',
      value: EVENT_INFO.audience,
      caption: '참여 대상',
      tabular: false,
    },
  ];

  return (
    <section
      id="details"
      aria-labelledby="details-heading"
      className="border-b border-[#C5DFCC] bg-[#DFF0E3] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="details-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#14261B] sm:text-[1.75rem]"
            >
              02. 핵심 정보
            </h2>
            <p className="mt-2 text-sm text-[#445E4D]">
              일시, 장소, 대상을 한눈에 확인하세요.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#14261B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23533A] sm:self-auto"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[#14261B]" aria-hidden="true" />
                <span>핵심 정보 복사됨</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>핵심 정보 복사</span>
              </>
            )}
          </button>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-2.5 sm:gap-5 md:gap-6">
          {detailItems.map((item) => (
            <div
              key={item.label}
              className="flex min-w-0 flex-col justify-between rounded-xl border border-[#C5DFCC] bg-[#F7FCF8] p-3.5 sm:p-6 md:p-7"
            >
              <div>
                <dt className="text-xs font-semibold text-[#23533A]">
                  {item.label}
                </dt>
                <dd
                  className={`mt-2 sm:mt-3 break-keep text-[13px] sm:text-lg md:text-xl font-semibold leading-snug text-[#14261B] ${
                    item.tabular ? 'tabular-nums' : ''
                  }`}
                >
                  {item.value}
                </dd>
              </div>
              <p className="mt-3 sm:mt-5 border-t border-[#C5DFCC] pt-3 sm:pt-4 text-[11px] sm:text-xs break-keep text-[#445E4D]">
                {item.caption}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
