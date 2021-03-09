import Container from "react-bootstrap/Container"
import Head from "next/head"
import { AppForm } from "../components"

const Register = () => {
  return (
    <>
      <Head>
        <title>ODD EYE CIRCLE | Register</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Register for the LOONA/ODD EYE CIRCLE fanclub!"
        />
      </Head>

      <Container className="text-center py-3">
        <h1 className="gradient gradient-text bold-text">
          Welcome to the club!
        </h1>

        <AppForm />
      </Container>
    </>
  )
}

export default Register
