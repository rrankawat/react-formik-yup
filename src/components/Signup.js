import { Formik, Form } from 'formik'
import TextField from './TextField'
import * as Yup from 'yup'

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 chars or less')
      .required('This field is required'),
    lastName: Yup.string()
      .max(15, 'Must be 15 chars or less')
      .required('This field is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('This field is required'),
    password: Yup.string()
      .min(6, 'Must be 6 chars or more')
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password do not match')
      .required('This field is required'),
  })

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold display-4">Sign Up</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button type="submit" className="btn btn-dark mt-3">
              Register
            </button>
            <button type="reset" className="btn btn-danger mt-3 ms-3">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Signup
