import Head from 'next/head'

export default function Home (): JSX.Element {
  return (
    <main className="h-screen w-full flex flex-col gap-2 items-center justify-center">
      <Head>
        <title>Paltas</title>
        <link rel="shortcut icon" href="faviconjm.ico" type="image/x-icon" />
      </Head>
      <h1 className='text-4xl'>Palta app</h1>
    </main>
  )
}
