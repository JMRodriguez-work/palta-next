import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useGetPaltaId } from '@/hooks/useGetPaltaId'
import Image from 'next/image'
import defaultImage from '../../../public/images/avocados.jpg'

export default function ProductItem (): JSX.Element {
  const { query: { productId } } = useRouter()
  const product = useGetPaltaId(productId as string)
  const imgSrc = (product !== null) ? product.image : defaultImage
  const imgAlt = (product !== null) ? product.name : 'palta'

  return (
    <main className='w-2/4 m-auto'>
      <Head>
        <title>Product</title>
        <link rel="shortcut icon" href="/faviconjm.ico" type="image/x-icon" />
        <meta name="description" content="Pagina detallada del producto" />
      </Head>
        <div className='flex flex-col md:flex-row mt-5 justify-center items-center gap-10'>
          <Image className='rounded w-auto h-auto' src={imgSrc} alt={imgAlt} width={250} height={250} priority />
          <div className='flex flex-col gap-1 h-[250px] justify-center'>
            <h2 className='font-bold text-2xl'>{product?.name}</h2>
            <span className='font-thin mt-2 '>${product?.price}</span>
            <span className='text-xs bg-slate-500 text-slate-300 w-fit p-1 rounded'>SKU: {product?.sku}</span>
            <button className='bg-green-700 w-fit p-2 rounded mt-4 hover:bg-green-500 transition-all ease duration-200'>
              Add to cart
            </button>
          </div>
        </div>
        <article className='mt-5'>
          <h3 className='font-semibold text-xl'>About this avocado</h3>
          <p className='font-extralight text-slate-300'>{product?.attributes.description}</p>
        </article>
        <hr className='my-4 border-slate-400' />
        <table className='w-full border-2 rounded border-slate-600 mt-6 table-auto'>
          <thead className='text-left bg-slate-600 text-white'>
            <tr>
              <th className='py-2 px-4 text-left font-semibold' colSpan={2}>Attributes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='divide-x divide-slate-600'>
              <td className='py-2 px-4 text-left'>Shape</td>
              <td className='py-2 px-4'>{product?.attributes.shape}</td>
            </tr>
            <tr className='divide-x divide-slate-600'>
              <td className='py-2 px-4 text-left' >Hardiness</td>
              <td className='py-2 px-4'>{product?.attributes.hardiness}</td>
            </tr>
            <tr className='divide-x divide-slate-600'>
              <td className='py-2 px-4 text-left'>Taste</td>
              <td className='py-2 px-4'>{product?.attributes.taste}</td>
            </tr>
          </tbody>
        </table>
    </main>
  )
}
