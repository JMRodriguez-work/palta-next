import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App ({ Component, pageProps }: AppProps): any {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
