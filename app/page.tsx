import Header from '@/components/Header'
import Links from '@/components/Links'
import Title from '@/components/Title'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Title />
      <Links />
    </main>
  )
}
