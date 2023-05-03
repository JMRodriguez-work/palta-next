import React from 'react'
// import { useRouter } from 'next/router'
import Head from 'next/head'
// import { useGetPaltaId } from '@/hooks/useGetPaltaId'
import defaultImage from '../../../public/images/avocados.jpg'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import ProductAttributes from '@/components/ProductSummary/ProductAttributes'
import ProductInfo from '@/components/ProductSummary/ProductInfo'
import { addToCart } from '@/redux/cartReducer'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://palta-next.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map(({ id }) => ({ params: { productId: id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false
  }
}
// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://palta-next.vercel.app/api/avo/${params?.productId}`
  )
  const product = await response.json()

  // Pass post data to the page via props
  return { props: { product } }
}

export default function ProductItem ({ product }: { product: TProduct }): JSX.Element {
  // const { query: { productId } } = useRouter()
  // const product = useGetPaltaId(productId as string)
  console.log(product)
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
