import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Link from "next/link"
import { useRouter } from "next/router"

export const AppHeader = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="gradient gradient-text">
            <strong>OEC</strong>
          </Navbar.Brand>
        </Link>

        {pathname !== "/register" && (
          <>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Link href="/register" passHref>
                  <Nav.Link className="gradient gradient-text">
                    Join the Fanclub!
                  </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  )
}
