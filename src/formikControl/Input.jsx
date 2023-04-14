import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import PersonalError from '../components/PersonalError'

const Input = ({type, name, placeholder, icon}) => {
    return (
        <div className='justify-content-center d-flex align-items-center flex-column forms_styles'>
            <FastField type={type} name={name} placeholder={placeholder} className='form-control w-75 mt-4 p-3' required/>
            <span className={`bi bi-${icon}`}></span>
            <ErrorMessage name={name} component={PersonalError}/>
        </div>
    )
}

export default Input