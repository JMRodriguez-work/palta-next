import Head from 'next/head'
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
    <main className="h-full w-full">
      <Head>
        <title>Home - Paltas</title>
        <meta name="description" content="App de diferentes paltas" />
      </Head>
      {/* <Navbar /> */}
      {productList?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </main>
  )
}
