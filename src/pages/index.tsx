import Head from 'next/head'
import Card from '@/components/Card'
import { useGetAllPaltas } from '@/hooks/useGetAllPaltas'

export default function Home (): JSX.Element {
  const productList = useGetAllPaltas()

  return (
    <main className="h-full w-full">
      <Head>
        <title>Home - Paltas</title>
        <meta name="description" content="App de diferentes paltas" />
      </Head>
      <ul className='w-full flex justify-center align-center gap-5 p-2 flex-wrap'>
        {productList?.map(item => (
          <li key={item.id}><Card item={item} /></li>
        ))}
      </ul>
    </main>
  )
}
