import React from 'react'
import {Field} from "formik"

const Input = ({htmlFor, label, placeholder,name}) => {
  return (
    <div>
        <div className='flex flex-col flex-wrap mt-6 mr-4'>
            <label htmlFor={htmlFor}>{label}*</label>
            <Field
            type="text"
            id={htmlFor}
            name={name}
            required
            placeholder={placeholder}
            className=' border-2 border-solid mt-2 p-3 '
            autocomplete="false"/>

        </div>
      
    </div>
  )
}

export default Input
