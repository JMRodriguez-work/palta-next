import Image from 'next/image'
import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

interface PropsType {
  isCartNotEmpty: boolean
  cart: TProduct[]
  removeFromCart: (id: TProduct['id']) => void
}

export function CartList ({ isCartNotEmpty, cart, removeFromCart }: PropsType): JSX.Element {
  return (
    <section className='w-full items-center justify-center'>
        {isCartNotEmpty
          ? cart.map(item => (
            <div
              className='w-full relative mt-6 flex flex-col md:flex-row items-center justify-start gap-5 p-8 border-2 rounded-md shadow-lg'
              key={item.id}
            >
              <Image className='rounded' src={item.image} alt={item.name} width={100} height={100} priority />
              <div className='flex flex-col gap-1 justify-center'>
                <h2 className='font-bold text-xl'>{item.name}</h2>
                <span className='font-thin mt-2 '>${item.price}</span>
                <span className='text-xs bg-slate-500 text-slate-300 w-fit p-1 rounded'>SKU: {item.sku}</span>
              </div>
              <DeleteOutlineOutlinedIcon
                onClick={() => { removeFromCart(item.id) }}
                aria-label='Remove from cart'
                className='absolute right-2 bottom-3 cursor-pointer transition-all ease duration-200 hover:text-red-600'
              />
            </div>
          ))
          : <div className='flex flex-col p-8 border-2 rounded-md shadow-lg bg-red-300 border-red-700 text-red-950'>
              <h2 className='font-semibold'>Your cart is empty</h2>
              <p>You will need to add some items to the cart before you can checkout</p>
            </div>
        }
    </section>
  )
}
