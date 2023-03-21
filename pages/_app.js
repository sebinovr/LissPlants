import '@/styles/globals.css'
import { AppProvider } from '@/context/Provider'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
