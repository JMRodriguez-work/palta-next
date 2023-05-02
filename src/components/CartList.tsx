import React from 'react'

interface PropsType {
  isCartNotEmpty: boolean
  cart: TProduct[]
}

export function CartList ({ isCartNotEmpty, cart }: PropsType): JSX.Element {
  return (
    <section className='w-full items-center justify-center'>
        {isCartNotEmpty
          ? <h2>Cart not empty</h2>
          : <div className='flex flex-col p-8 border-2 rounded-md shadow-lg bg-red-300 border-red-700 text-red-950'>
              <h2 className='font-semibold'>Your cart is empty</h2>
              <p>You will need to add some items to the cart before you can checkout</p>
            </div>
        }
    </section>
  )
}
