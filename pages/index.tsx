import Head from "next/head"
import Container from "react-bootstrap/Container"
import {
  AppButton,
  AppHero,
  AppMembers,
  AppVideos,
  AppCallToAction,
} from "../components"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <Head>
        <title>ODD EYE CIRCLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHero />
      <Container className="text-center py-3">
        <h2 className="gradient gradient-text semibold-text">
          Who are ODD EYE CIRCLE?
        </h2>
        <p className="p-text">
          Loona Odd Eye Circle (often shortened as "OEC"), is a sub-unit of the
          South Korean girl group LOONA. The sub-unit consists of 3 members, Kim
          Lip, JinSoul and Choerry. They debuted on September 21, 2017 with the
          extended play Mix & Match.
        </p>
      </Container>

      <AppMembers />
      <AppVideos />
      <AppCallToAction />
    </>
  )
}

export default Home
