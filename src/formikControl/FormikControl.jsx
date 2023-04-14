import React from 'react'
import Input from './Input';

const FormikControl = (props) => {
    switch (props.control) {
        case "input":
            return <Input {...props}/>
        default:
            break;
    }
}

export default FormikControl