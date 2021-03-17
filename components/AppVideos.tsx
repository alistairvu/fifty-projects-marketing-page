import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const AppVideos = () => {
  return (
    <Container className="text-center py-3">
      <h2 className="gradient gradient-text semibold-text">
        Alright, show me their music videos!
      </h2>

      <Row className="pt-3">
        <Col sm={6}>
          <h3 className="semibold-text">Girl Front</h3>
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/tyInv6RWL0Q?controls=0"
          />
        </Col>

        <Col sm={6}>
          <h3 className="semibold-text">Sweet Crazy Love</h3>
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/cG7FkoNKBzI?controls=0"
          />
        </Col>
      </Row>
    </Container>
  )
}
