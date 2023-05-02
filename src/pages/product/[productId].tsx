import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useGetPaltaId } from '@/hooks/useGetPaltaId'
import defaultImage from '../../../public/images/avocados.jpg'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import ProductAttributes from '@/components/ProductSummary/ProductAttributes'
import ProductInfo from '@/components/ProductSummary/ProductInfo'
import { addToCart } from '@/redux/cartReducer'

export default function ProductItem (): JSX.Element {
  const { query: { productId } } = useRouter()
  const product = useGetPaltaId(productId as string)
  const imgSrc = (product !== null) ? product.image : defaultImage
  const imgAlt = (product !== null) ? product.name : 'palta'
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)

  const isInCart = cart.some(item => item.id === product?.id)

  const handleAddToCart = (): void => {
    if (product !== null) {
      dispatch(addToCart(product))
    }
  }

  return (
    <main className='w-2/4 m-auto'>
      <Head>
        <title>Product</title>
        <link rel="shortcut icon" href="/faviconjm.ico" type="image/x-icon" />
        <meta name="description" content="Pagina detallada del producto" />
      </Head>
        <ProductInfo
          isInCart={isInCart}
          handleAddToCart={handleAddToCart}
          product={product}
          imgSrc={imgSrc as string}
          imgAlt={imgAlt}
        />
        <ProductAttributes product={product} />
    </main>
  )
}
