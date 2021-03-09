import { Formik } from "formik"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import * as yup from "yup"
import { AppButton } from "."

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
})

export const AppForm = () => {
  const submitHandler = (values: any) => {
    console.log(values)
  }

  return (
    <Card className="px-3 text-left col-md-6 offset-md-3 py-3">
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
              <AppButton title="Sign me up!" gradient submit />
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
