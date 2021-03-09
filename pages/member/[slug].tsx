import slugData from "../../data/slugData.json"
import memberData from "../../data/memberData.json"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AppButton, AppCallToAction } from "../../components"
import { useRouter } from "next/router"
import ReactPlayer from "react-player"
import Head from "next/head"

interface MemberProps {
  id: number
  name: string
  birthName: string
  birthDate: string
  image: string
  animal: string
  color: string
  colorHex: string
  position: string
  solo: string
  soloLink: string
  [key: string]: string | number
}

const Member = (props: MemberProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>ODD EYE CIRCLE | {props.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Introduction to ${props.name} – A member of LOONA/ODD EYE CIRCLE.`}
        />
      </Head>

      <Container className="py-3">
        <Container className="pb-3">
          <AppButton title="Return" gradient onClick={() => router.back()} />
        </Container>
        <Row>
          <Col sm={4}>
            <img src={props.image} width="100%" alt={props.name} />
          </Col>
          <Col sm={8}>
            <h1
              className="bold-text text-center"
              style={{ color: props.colorHex }}
            >
              {props.name}
            </h1>
            <p>
              <strong>Birth Name:</strong> {props.birthName} <br />
              <strong>Birthday:</strong> {props.birthDate} <br />
              <strong>Animal:</strong> {props.animal} <br />
              <strong>Color:</strong> {props.color} <br />
              <strong>Position:</strong> {props.position} <br />
              <strong>Solo:</strong> {props.solo}
            </p>
            <h2 className="bold-text text-center">
              Watch her solo music video
            </h2>
            <ReactPlayer url={props.soloLink} width="100%" />
            <AppCallToAction />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = slugData.member.map((slug) => ({
    params: {
      slug: slug,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const data = memberData.find((member) => member.slug === params.slug)
  return {
    props: data,
  }
}

export default Member
