import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

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
        <Navbar />
        <p>Pagina del producto: { productId }</p>
        {product?.name}
    </div>
  )
}
