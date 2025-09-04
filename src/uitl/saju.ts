import KoreanLunarCalendar from 'korean-lunar-calendar'
import {BRANCHES, HOUR_STEM_OFFSET, STEMS} from '@/const/element'

const calendar = new KoreanLunarCalendar()

function getHourGanzhi(dayGapja: string, hours: number) {
  const dayStem = dayGapja[0]
  const branchIdx = Math.floor(hours / 2) % 12
  const hourBranch = BRANCHES[branchIdx]

  console.log(dayStem)
  const startIdx = HOUR_STEM_OFFSET[dayStem]
  if (startIdx === undefined) throw new Error(`Invalid dayStem: ${dayStem}`)

  const hourStem = STEMS[(startIdx + branchIdx) % 10]

  return hourStem + hourBranch
}


export const getGanzhi = (year: number, month: number, day: number, hours: number) => {
  // KoreanLunarCalendar는 month 1~12 기준
  calendar.setSolarDate(year, month, day)

  const koreanGapja = calendar.getChineseGapja()

  const yearGapja = koreanGapja.year.slice(0, 2)
  const monthGapja = koreanGapja.month.slice(0, 2)
  const dayGapja = koreanGapja.day.slice(0, 2)
  const hourGapja = getHourGanzhi(dayGapja, hours)

  console.log(hourGapja)
  return { year: yearGapja, month: monthGapja, day: dayGapja, hour: hourGapja }
}
