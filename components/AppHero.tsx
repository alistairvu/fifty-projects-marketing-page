import Container from "react-bootstrap/Container"
import styles from "./styles/AppHero.module.scss"

export const AppHero = () => {
  return (
    <>
      <section className={styles.jumbotron} />

      <Container className="text-center pb-2 mt-3">
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
