import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Head from 'next/head'

export default function App ({ Component, pageProps }: AppProps): any {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
