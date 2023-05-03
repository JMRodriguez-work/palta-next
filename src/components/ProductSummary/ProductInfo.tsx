import Image from 'next/image'
import React from 'react'

interface Props {
  imgSrc: string
  imgAlt: string
  product: TProduct | null
  handleAddToCart: () => void
  isInCart: boolean
}

export default function ProductInfo ({ imgSrc, imgAlt, product, handleAddToCart, isInCart }: Props): JSX.Element {
  const buttonStyles = isInCart ? 'bg-red-400 w-fit p-2 rounded mt-4' : 'bg-green-700 w-fit p-2 rounded mt-4 transition-all ease duration-200 hover:bg-green-500'
  const buttonText = isInCart ? 'IN CART' : 'ADD TO CART'

  return (
    <div className='flex flex-col md:flex-row mt-5 justify-center items-center gap-10'>
        {product !== null
          ? <Image className='rounded w-auto h-auto' src={imgSrc} alt={imgAlt} width={250} height={250} priority />
          : null
        }
        <div className='flex flex-col gap-1 h-[250px] justify-center'>
            <h2 className='font-bold text-2xl'>{product?.name}</h2>
            <span className='font-thin mt-2 '>${product?.price}</span>
            <span className='text-xs bg-slate-500 text-slate-300 w-fit p-1 rounded'>SKU: {product?.sku}</span>
            <button
                className={buttonStyles}
                onClick={handleAddToCart}
                disabled={isInCart}
            >
                {buttonText}
            </button>
        </div>
    </div>
  )
}
