import React from 'react'
import Head from 'next/head'

const About = (): JSX.Element => {
  return (
    <div className='h-full'>
      <Head>
        <title>About - Paltas</title>
        <meta name="description" content="Informacion sobre nosotros creadores de Palta App" />
      </Head>
      <div className='text-center pt-5 text-xl'>
        <h1>About page</h1>
      </div>
    </div>
  )
}

export default About
