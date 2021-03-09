import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import styles from "./styles/AppHero.module.css"

export const AppHero = () => {
  return (
    <>
      <Jumbotron fluid className={styles.jumbotron} />

      <Container className="text-center pb-2">
        <h1 className="gradient gradient-text bold-text">
          Iconic. Groundbreaking. Legendary.
        </h1>
        <h3 className="px-4">
          Introducing LOONA/ODD EYE CIRCLE - One of K-Pop's most iconic subunits
          of all time.
        </h3>
      </Container>
    </>
  )
}
