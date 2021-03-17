import Link from "next/link"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { AppButton } from "."
import styles from "./styles/AppMembersCard.module.scss"

interface AppMembersCardProps {
  id: number
  name: string
  image: string
  colorHex: string
  slug: string
  [key: string]: string | number
}

export const AppMembersCard = (props: AppMembersCardProps) => {
  return (
    <Col sm={4} className="py-3">
      <Card>
        <Card.Img
          variant="top"
          src={props.image}
          className={styles.cardImage}
          alt={props.name}
        />
        <Card.Body>
          <Card.Title
            className="semibold-text"
            style={{ color: props.colorHex }}
          >
            <h3>{props.name}</h3>
          </Card.Title>
          <Card.Text>
            <Link href={`/member/${props.slug}`} passHref>
              <AppButton title="Learn more" color={props.colorHex} />
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
