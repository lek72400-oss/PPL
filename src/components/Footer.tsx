import { EVENT_INFO } from '../data/eventData';

export function Footer() {
  return (
    <footer className="border-t border-[#C5DFCC] bg-[#DFF0E3] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 text-sm text-[#445E4D] sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
          {EVENT_INFO.host} · {EVENT_INFO.title}
        </p>
        <p className="font-medium text-[#14261B]">
          {EVENT_INFO.footerNotice}
        </p>
      </div>
    </footer>
  );
}
