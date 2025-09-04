import { SajuPalja } from '@/component'


const date = new Date();

export default function Home() {

  return (
    <div>
      <SajuPalja year={1995} month={9} day={7} hours={15}/>
    </div>
  );
}
