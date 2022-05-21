import React from 'react'
import { useField, ErrorMessage } from 'formik'

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        type="text"
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  )
}

export default TextField
