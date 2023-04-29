import Image from 'next/image'
import React from 'react'

interface CardProps {
  item: TProduct
}

export default function Card ({ item }: CardProps): JSX.Element {
  return (
    <article className='flex flex-col justify-center min-w-[200px] border-2 p-3 gap-3 rounded-md cursor-pointer transition-all ease duration-200 hover:border-slate-800  '>
        <Image className='rounded w-full h-auto object-cover' src={item.image} alt={item.name} width={200} height={150} priority />
        <hr />
        <div className='flex flex-col'>
            <span className='text-left font-bold'>{item.name}</span>
            <span className='text-gray-400 text-sm'>{item.price}</span>
        </div>
    </article>
  )
}
