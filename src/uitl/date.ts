import KoreanLunarCalendar from 'korean-lunar-calendar'
import { BRANCHES, STEMS } from '@/const/element'

const calendar = new KoreanLunarCalendar()



function getHourGanzhi(dayGapja: string, hours: number) {
  const dayStem = dayGapja[0]
  const dayStemIdx = STEMS.indexOf(dayStem)

  // 지지 인덱스: 23시 기준으로 오프셋
  const branchIdx = Math.floor(((hours + 1) % 24) / 2)
  const hourBranch = BRANCHES[branchIdx]

  const hourStem = STEMS[(dayStemIdx * 2 + branchIdx) % 10]
  return hourStem + hourBranch
}

export const getGanzhi = (year: number, month: number, day: number, hours: number) => {

  calendar.setSolarDate(year, month, day)

  const koreanGapja = calendar.getChineseGapja()

  const yearGapja = koreanGapja.year.slice(0, 2)
  const monthGapja = koreanGapja.month.slice(0, 2)
  const dayGapja = koreanGapja.day.slice(0, 2)
  const hourGapja = getHourGanzhi(dayGapja, hours)

  return { year: yearGapja, month: monthGapja, day: dayGapja, hours: hourGapja }
}