import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CookieConsent from '../components/CookieConsent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {!pageProps.hideCookieConsent && <CookieConsent />}
    </>
  )
}

export default MyApp
