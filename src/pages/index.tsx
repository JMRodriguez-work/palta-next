import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

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
    <main className="h-screen w-full">
      <Head>
        <title>Paltas</title>
        <link rel="shortcut icon" href="faviconjm.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      {productList?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </main>
  )
}
