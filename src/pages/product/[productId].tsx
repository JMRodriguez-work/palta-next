import React from 'react'
import { useRouter } from 'next/router'

export default function ProductItem (): JSX.Element {
  const { query: { productId } } = useRouter()

  return (
    <div>
        <p>Pagina del producto: { productId }</p>
    </div>
  )
}
