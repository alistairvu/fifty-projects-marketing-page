import { Formik } from "formik"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import Alert from "react-bootstrap/Alert"
import * as yup from "yup"
import { AppButton } from "."
import axios from "axios"
import { useState } from "react"

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
})

export const AppForm = () => {
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const submitHandler = async (values: any) => {
    setSending(true)
    setError(false)
    setSuccess(false)
    try {
      const data = await axios.post("/api/member", values)
      if (data) {
        setSuccess(true)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <Card className="px-3 text-left col-md-6 offset-md-3 py-3">
      {success && <Alert variant="success">Registration successful!</Alert>}
      {error && <Alert variant="danger">An error occurred...</Alert>}
      <Formik
        validationSchema={schema}
        onSubmit={submitHandler}
        initialValues={{ name: "", email: "" }}
      >
        {(props) => (
          <Form noValidate onSubmit={props.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name..."
                value={props.values.name}
                onChange={props.handleChange}
                isValid={props.touched.name && !props.errors.name}
                isInvalid={!!props.errors.name}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {props.errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your email..."
                value={props.values.email}
                onChange={props.handleChange}
                isValid={props.touched.email && !props.errors.email}
                isInvalid={!!props.errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {props.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
              <AppButton
                title={sending ? "Signing you up..." : "Sign me up!"}
                disabled={sending}
                gradient
                submit
              />
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
