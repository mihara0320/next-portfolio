import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { RootContainer } from 'templates/RootContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootContainer>
      <Component {...pageProps} />
    </RootContainer>
  )
}

export default MyApp
