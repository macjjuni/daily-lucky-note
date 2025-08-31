import { getGanzhi } from '@/uitl/date'



const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();


export default function Home() {

  const result = getGanzhi(1995, 9, 7, 13);

  return (
    <div>
      <div>{result.year}</div>
      <div>{result.month}</div>
      <div>{result.day}</div>
      <div>{result.hours}</div>
    </div>
  );
}
