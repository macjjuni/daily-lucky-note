'use strict'

import '@/layout/layout.scss';
import {ReactNode} from 'react'
export default function Content({ children } : { children: ReactNode }) {

  return <main className="content">{children}</main>
}
