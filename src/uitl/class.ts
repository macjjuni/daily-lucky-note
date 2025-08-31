import { STEMS_TREE, STEMS_WATER, STEMS_FIRE, STEMS_EARTH, STEMS_GOLD } from '@/const/element'


export const getElementClass = (char: string) => {
  if (STEMS_TREE.includes(char)) {
    return 'tree'
  }
  if (STEMS_WATER.includes(char)) {
    return 'water'
  }
  if (STEMS_FIRE.includes(char)) {
    return 'fire'
  }
  if (STEMS_EARTH.includes(char)) {
    return 'earth'
  }
  if (STEMS_GOLD.includes(char)) {
    return 'gold'
  }
}