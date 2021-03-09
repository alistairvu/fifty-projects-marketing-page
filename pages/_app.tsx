import { AppProps } from "next/app"
import { AppHeader } from "../components"
import "../styles/bootstrap.min.css"
import Router from "next/router"
import NProgress from "nprogress" //nprogress module
import "nprogress/nprogress.css"
import "../styles/styles.css"

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
