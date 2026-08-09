/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "문윤태",
    nameEn: "YUNTAE",
    father: "문병률",
    mother: "이정춘",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "우채원",
    nameEn: "Bride",
    father: "우병규",
    mother: "박미자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-17",
    time: "16:20",
    venue: "디노체컨벤션",
    hall: "아트홀 6층",
    address: "서울특별시 성동구 왕십리 광장로 17 민자역사 6층",
    tel: "02-2200-1166",
    mapLinks: {
      kakao: "https://kko.to/HGE-SRjFsY",
      naver: "https://naver.me/FQVXQCYl"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "같은 보폭으로 나란히 걸으며\n서로에게 가장 편안한 안식처가 되겠습니다.\n두 사람이 하나 되어 내딛는\n이 첫걸음의 시작에 함께해 주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "차분하고 신중한 윤태와 밝고 웃음이 많은 채원.\n참 많이 다른 두 사람이 만났습니다.\n\n윤태는 자신의 이야기에 귀 기울여주고 함께 웃어주는 채원을 보며 함께할 모든 날을 꿈꾸게 되었고,\n채원은 언제나 자신을 위해줄 것 같은 윤태에게\n오래도록 함께하고 싶은 따뜻함을 느꼈습니다.\n\n서로 달라서 더 특별했던 두 사람.\n이제 서로의 가장 좋은 친구이자\n평생의 편이 되어 함께 걸어가려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "문윤태", bank: "국민은행", number: "98506195263" },
      { role: "아버지", name: "문병률", bank: "기업은행", number: "304-034491-01-026" },
      { role: "어머니", name: "이정춘", bank: "농협은행", number: "51706251005096" }
    ],
    bride: [
      { role: "신부", name: "우채원", bank: "신한은행", number: "110-319-227399" },
      { role: "아버지", name: "우병규", bank: "농협은행", number: "51308952020214" },
      { role: "어머니", name: "박미자", bank: "우체국", number: "40258602027244" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "윤태 ♥ 채원 결혼합니다",
    description: "2026년 10월 17일, 소중한 분들을 초대합니다."
  }
};
