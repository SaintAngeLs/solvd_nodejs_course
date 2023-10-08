import Header from '@/components/Header'
import Links from '@/components/Links'
import Title from '@/components/Title'
import Image from 'next/image'
import RootLayout from './layout'


export default function Home() {
  return (
    <RootLayout>
    <div className="min-h-screen p-24 flex flex-col">
      <Header />
      <div className="flex flex-1 lg:flex-row items-center">
        <Links />
        <Title />
      </div>
    </div>
    </RootLayout>
  )
}