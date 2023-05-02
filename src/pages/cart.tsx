import type { RootState } from '@/redux/store'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import { CartList } from '@/components/CartList'
import { removeFromCart } from '@/redux/cartReducer'

export default function Cart (): JSX.Element {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const isCartNotEmpty = cart.length > 0

  const handleRemoveFromCart = (id: TProduct['id']): void => {
    dispatch(removeFromCart(id))
  }

  return (
    <main className='w-2/4 m-auto'>
        <Head>
            <title>Cart - Paltas</title>
            <meta name="description" content="Carrito de compras de Palta App" />
        </Head>
        <CartList removeFromCart={handleRemoveFromCart} cart={cart} isCartNotEmpty={isCartNotEmpty} />
        <section className='w-full mt-6 flex flex-col md:flex-row items-center justify-between p-8 border-2 rounded-md shadow-lg'>
            <h2 className='font-bold'>Sub total: <span className='font-light'>{cart.length}</span></h2>
            <button className='bg-cyan-700 p-3 rounded text-cyan-950 font-semibold hover:bg-cyan-500 transition-all ease duration-200'>
              Checkout
            </button>
        </section>
    </main>
  )
}
