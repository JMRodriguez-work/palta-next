import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function ProductItem (): JSX.Element {
  const { query: { productId } } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    const getProduct = async (): Promise<void> => {
      const response = await fetch(`/api/avo/${productId as string}`)
      const data = await response.json()
      setProduct(data)
    }
    getProduct().catch(console.error)
  }, [productId])

  return (
    <div>
      <Head>
        <title>Product</title>
        <link rel="shortcut icon" href="/faviconjm.ico" type="image/x-icon" />
        <meta name="description" content="Pagina detallada del producto" />
      </Head>
        <p>Pagina del producto: { productId }</p>
        {product?.name}
    </div>
  )
}
