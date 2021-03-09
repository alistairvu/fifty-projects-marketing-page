import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ReactPlayer from "react-player/lazy"

export const AppVideos = () => {
  return (
    <Container className="text-center py-3">
      <h2 className="gradient gradient-text semibold-text">
        Alright, show me their music videos!
      </h2>

      <Row className="pt-3">
        <Col sm={6}>
          <h3 className="semibold-text">Girl Front</h3>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=tyInv6RWL0Q"
            width="100%"
          />
        </Col>

        <Col sm={6}>
          <h3 className="semibold-text">Sweet Crazy Love</h3>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=cG7FkoNKBzI"
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  )
}
