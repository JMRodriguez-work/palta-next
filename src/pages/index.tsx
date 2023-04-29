import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '@/components/Card'

export default function Home (): JSX.Element {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      try {
        const response = await fetch('/api/avo')
        const data = await response.json()
        setProductList(data.data)
      } catch (error) {
        console.error(error)
      }
    }
    getProducts()
      .catch(console.error)
  }, [])

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
