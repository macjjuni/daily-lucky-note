import KoreanLunarCalendar from "korean-lunar-calendar";

const calendar = new KoreanLunarCalendar();

const STEMS = ["갑","을","병","정","무","기","경","신","임","계"];
const BRANCHES = ["자","축","인","묘","진","사","오","미","신","유","술","해"];

function getHourGanzhi(dayGapja: string, hours: number) {
  const STEMS = ["갑","을","병","정","무","기","경","신","임","계"];
  const dayStem = dayGapja[0];
  const dayStemIdx = STEMS.indexOf(dayStem);

  // 지지 인덱스: 23시 기준으로 오프셋
  const branchIdx = Math.floor(((hours + 1) % 24) / 2);
  const hourBranch = BRANCHES[branchIdx];

  const hourStem = STEMS[(dayStemIdx * 2 + branchIdx) % 10];
  return hourStem + hourBranch;
}

export const getGanzhi = (year: number, month: number, day: number, hours: number) => {

  calendar.setSolarDate(year, month, day);

  const koreanGapja = calendar.getKoreanGapja()

  const yearGapja = koreanGapja.year;
  const monthGapja = koreanGapja.month;
  const dayGapja = koreanGapja.day;
  const hourGapja = getHourGanzhi(dayGapja, hours);

  return { year: yearGapja, month: monthGapja, day: dayGapja, hours: `${hourGapja}시` }
}