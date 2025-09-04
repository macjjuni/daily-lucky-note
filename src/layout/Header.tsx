'use strict'

import '@/layout/layout.scss';
import Image from 'next/image'

export default function header() {

  return (
    <header className="header">
      <Image src="/image/logo.png"  alt="logo" width={36} height={36}/>
    </header>
  )
}
