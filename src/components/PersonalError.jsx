import React from 'react'

const PersonalError = ({children}) => {
  return (
    <small className='text-danger mt-1 personal_error'>
        {children}
    </small>
  )
}

export default PersonalError