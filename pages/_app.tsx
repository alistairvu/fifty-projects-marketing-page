import { AppProps } from "next/app"
import { AppHeader } from "../components"
import "../styles/bootstrap.min.css"
import "../styles/styles.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <AppHeader />
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
