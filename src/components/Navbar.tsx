import Link from 'next/link'
import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'

export default function Navbar (): JSX.Element {
  const cart = useSelector((state: RootState) => state.cart)
  return (
    <nav className='flex py-6 items-center justify-between px-5 shadow-md shadow-slate-900'>
        <h1>PALTA APP</h1>
        <ul className='flex gap-5 items-center'>
            <li>
                <Link href='/' className=' border-2 rounded-md p-2 transition-all ease duration-300 hover:border-slate-800'>
                    Home
                </Link>
            </li>
            <li>
                <Link href='/about' className='border-2 rounded-md p-2 transition-all ease duration-300 hover:border-slate-800'>
                    About
                </Link>
            </li>
            <li className='relative cursor-pointer'>
                <Link href='/cart'>
                        <ShoppingBagOutlinedIcon className='text-4xl' aria-label='cart button' />
                        <span className='absolute bottom-4 px-1 left-4 bg-black rounded'>{cart.length}</span>
                </Link>
            </li>
        </ul>
      </nav>
  )
}
