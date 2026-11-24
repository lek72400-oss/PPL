import { EVENT_INFO } from '../data/eventData';

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#ECF7EF] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2
              id="contact-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#14261B] sm:text-[1.75rem]"
            >
              03. 문의
            </h2>
            <p className="mt-2 text-sm text-[#445E4D]">
              행사 관련 담당 부서 안내입니다.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-xl border border-[#C5DFCC] bg-[#DFF0E3] p-6 sm:p-8">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium text-[#445E4D]">담당 부서</dt>
                  <dd className="mt-1.5 text-lg font-semibold text-[#14261B]">
                    {EVENT_INFO.host}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#445E4D]">연락처</dt>
                  <dd className="mt-1.5 text-lg font-semibold text-[#14261B]">
                    {EVENT_INFO.contactStatus}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 border-t border-[#C5DFCC] pt-4 text-sm text-[#445E4D]">
                담당 부서는 {EVENT_INFO.contactTeam}이며, 세부 연락처는 현재 {EVENT_INFO.contactStatus}입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
