import { AppProps } from "next/app"
import { AppHeader } from "../components"
import Router from "next/router"
import NProgress from "nprogress" //nprogress module
import "../styles/styles.scss"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

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
