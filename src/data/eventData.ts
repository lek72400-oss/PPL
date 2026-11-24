export interface EventInfo {
  company: string;
  department: string;
  host: string;
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  oneLineIntro: string;
  date: string;
  time: string;
  dateTime: string;
  location: string;
  audience: string;
  contactTeam: string;
  contactStatus: string;
  introSentences: [string, string];
  footerNotice: string;
}

export const EVENT_INFO: EventInfo = {
  company: '온담컴퍼니',
  department: '경영지원팀',
  host: '온담컴퍼니 경영지원팀',
  title: "2027 봄 워크숍 '함께 걷는 하루'",
  subtitleLine1: '2027 봄 워크숍',
  subtitleLine2: '‘함께 걷는 하루’',
  oneLineIntro: '온담컴퍼니 전 직원이 광교호수공원을 걸으며 함께 소통하는 봄 워크숍입니다.',
  date: '2027년 4월 16일(금)',
  time: '09:30~16:00',
  dateTime: '2027년 4월 16일(금) 09:30~16:00',
  location: '광교호수공원',
  audience: '온담컴퍼니 전 직원',
  contactTeam: '경영지원팀',
  contactStatus: '미정',
  introSentences: [
    '온담컴퍼니 경영지원팀이 주최하는 2027 봄 워크숍 ‘함께 걷는 하루’는 전 직원이 함께 걸으며 소통하는 사내 봄 행사입니다.',
    '2027년 4월 16일(금) 광교호수공원에서 진행되며, 온담컴퍼니 전 직원이 함께 참여할 수 있습니다.',
  ],
  footerNotice: '교육용 가상 행사입니다',
};

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: '첫 화면' },
  { id: 'intro', label: '행사 소개' },
  { id: 'details', label: '핵심 정보' },
  { id: 'contact', label: '문의' },
];
