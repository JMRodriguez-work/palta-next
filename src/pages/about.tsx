import React from 'react'
import Navbar from '@/components/Navbar'

const About = (): JSX.Element => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='text-center pt-5 text-xl'>
        <h1>About page</h1>
      </div>
    </div>
  )
}

export default About
