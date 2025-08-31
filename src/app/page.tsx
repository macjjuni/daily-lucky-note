import { SajuPalja } from '@/component'


const date = new Date();

const nowDate = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
  hours: date.getHours(),
}



export default function Home() {

  return (
    <div>
      <SajuPalja {...nowDate} />
    </div>
  );
}
