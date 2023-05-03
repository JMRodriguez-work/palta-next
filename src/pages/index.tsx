import Head from 'next/head'
import Card from '@/components/Card'
// import { useGetAllPaltas } from '@/hooks/useGetAllPaltas'
import Link from 'next/link'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://palta-next.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await res.json()
  return {
    props: {
      productList
    }
  }
}

export default function Home ({ productList }: { productList: TProduct[] }): JSX.Element {
  // const productList = useGetAllPaltas()

  return (
    <main className="h-full w-full">
      <Head>
        <title>Home - Paltas</title>
        <meta name="description" content="App de diferentes paltas" />
      </Head>
      <ul className='w-full flex justify-center align-center gap-5 p-2 flex-wrap'>
        {productList?.map(item => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <li><Card item={item} /></li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
