import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex-1 py-4'>
              {children}
            </div>
            <Footer />
        </div>
  )
}
