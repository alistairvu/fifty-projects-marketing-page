import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import { AppMembersCard } from "./AppMembersCard"
import memberData from "../data/memberData.json"

export const AppMembers = () => {
  return (
    <Container className="text-center py-3">
      <h2 className="gradient gradient-text semibold-text">
        Who are the members?
      </h2>

      <Row>
        {memberData.map((member) => (
          <AppMembersCard key={member.id} {...member} />
        ))}
      </Row>
    </Container>
  )
}
