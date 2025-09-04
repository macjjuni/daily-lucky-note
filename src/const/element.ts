export const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
export const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

export const STEMS_TREE = ['甲', '乙', '寅', '卯']
export const STEMS_FIRE = ['丙', '丁', '巳', '午']
export const STEMS_EARTH = ['戊', '己', '丑', '辰', '未', '戌']
export const STEMS_GOLD = ['庚', '辛', '申', '酉']
export const STEMS_WATER = ['壬', '癸', '子', '亥']


// 일간별 자시 천간 시작 인덱스
export const HOUR_STEM_OFFSET: Record<string, number> = {
  '甲': 0, '己': 0,
  '乙': 2, '庚': 2,
  '丙': 4, '辛': 4,
  '丁': 6, '壬': 6,
  '戊': 8, '癸': 8,
}
