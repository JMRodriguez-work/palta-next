import React from 'react'

interface Props {
  product: TProduct | null
}

export default function ProductAttributes ({ product }: Props): JSX.Element {
  return (
    <>
        <article className='mt-5'>
          <h3 className='font-semibold text-xl'>About this avocado</h3>
          <p className='font-extralight text-slate-300'>{product?.attributes.description}</p>
        </article>
        <hr className='my-4 border-slate-400' />
        <table className='w-full border-2 rounded border-slate-600 my-6 table-auto'>
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
    </>
  )
}
