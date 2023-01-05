import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/reset.css'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
