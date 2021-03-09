import Container from "react-bootstrap/Container"
import Head from "next/head"

const Register = () => {
  return (
    <>
      <Head>
        <title>ODD EYE CIRCLE | Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="text-center py-3">
        <h1 className="gradient gradient-text bold-text">
          Welcome to the club!
        </h1>
      </Container>
    </>
  )
}

export default Register
