import { useEffect, useState } from 'react'

export function useGetPaltaId (productId: string): TProduct | null {
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    const getProduct = async (): Promise<void> => {
      const response = await fetch(`/api/avo/${productId}`)
      const data = await response.json()
      setProduct(data)
    }
    getProduct().catch(console.error)
  }, [productId])

  return product
}
