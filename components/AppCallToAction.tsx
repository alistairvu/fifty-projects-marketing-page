import { AppButton } from "./AppButton"
import Container from "react-bootstrap/Container"
import Link from "next/link"

export const AppCallToAction = () => {
  return (
    <Container className="text-center py-3">
      <h2 className="gradient gradient-text semibold-text">
        I want to join the fanclub!
      </h2>
      <Link href="/register" passHref>
        <AppButton gradient title="Click here to join!" />
      </Link>
    </Container>
  )
}
