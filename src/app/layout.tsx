import { ReactNode } from 'react'
import type { Metadata } from "next";
import '@/style/index.scss'
import { Header, Footer, Content } from '@/layout'

export const metadata: Metadata = {
  title: "데일리 운세 노트",
  description: "하루에 한번씩 데일리 운세 노트",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="ko">
      <body>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
      </body>
    </html>
  );
}
