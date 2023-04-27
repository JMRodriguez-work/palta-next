import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home (): JSX.Element {
  return (
    <main className="h-screen w-full">
      <Head>
        <title>Paltas</title>
        <link rel="shortcut icon" href="faviconjm.ico" type="image/x-icon" />
      </Head>
      <Navbar />
    </main>
  )
}
