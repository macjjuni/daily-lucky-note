import { memo } from 'react'
import { getGanzhi } from '@/uitl/date'
import "./SajuPalja.scss"
import { getElementClass } from '@/uitl/class'

interface SajuPaljaProps {
  year: number;
  month: number;
  day: number;
  hours: number;
}

const SajuPalja = (props: SajuPaljaProps) => {

  const { year, month, day, hours } = getGanzhi(props.year, props.month, props.day, props.hours);

  return (
    <div className="palja">
      <div className="palja-pillar hours">
        <div className={`palja-pillar__block ${getElementClass(hours.charAt(0))}`}>
          {hours.charAt(0)}
        </div>
        <div className={`palja-pillar__block ${getElementClass(hours.charAt(1))}`}>
          {hours.charAt(1)}
        </div>
      </div>
      <div className="palja-pillar day">
        <div className={`palja-pillar__block ${getElementClass(day.charAt(0))}`}>
          {day.charAt(0)}
        </div>
        <div className={`palja-pillar__block ${getElementClass(day.charAt(1))}`}>
          {day.charAt(1)}
        </div>
      </div>
      <div className="palja-pillar month">
        <div className={`palja-pillar__block ${getElementClass(month.charAt(0))}`}>
          {month.charAt(0)}
        </div>
        <div className={`palja-pillar__block ${getElementClass(month.charAt(1))}`}>
          {month.charAt(1)}
        </div>
      </div>
      <div className="palja-pillar year">
        <div className={`palja-pillar__block ${getElementClass(year.charAt(0))}`}>
          {year.charAt(0)}
        </div>
        <div className={`palja-pillar__block ${getElementClass(year.charAt(1))}`}>
          {year.charAt(1)}
        </div>
      </div>
    </div>
  )
}

SajuPalja.displayName = 'SajuPalja';
export default memo(SajuPalja);