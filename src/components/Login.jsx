import React from 'react'
import { Form, Formik } from "formik"
import { initialValues, onSubmit, validationSchema } from './core'
import FormikControl from '../formikControl/FormikControl'
import SubmitButton from './SubmitButton'
import LoginImage from './LoginImage'
import LoginTitle from './LoginTitle'
import LoginLinks from './LoginLinks'

const Login = () => {
    return (
      <div className='container'>
          <div className='d-flex justify-content-center align-items-center'>
            <Formik
            initialValues={initialValues}
            onSubmit={(values)=>onSubmit(values)}
            validationSchema={validationSchema}
            >
            {
              formik=>{
                return (
                    <div className='col-12 login_bg'>
                          <div  className='row mt-5 form_box'>
                          <LoginImage/>
                            <Form className='login_forms col-11 col-sm-8 col-md-6' required>

                                <LoginTitle/>

                                <FormikControl
                                control="input"
                                name="email"
                                placeholder="ایمیل"
                                type="email"
                                icon="envelope-fill"
                                />

                                <FormikControl
                                control="input"
                                name="password"
                                placeholder="رمز عبور"
                                type="password"
                                icon="key-fill"
                                />

                                <div className='justify-content-center d-flex align-items-center flex-column login_button'>
                                  <SubmitButton/>
                                  <LoginLinks/>
                                </div>
                            </Form>
                          </div>
                    </div>
                )
              }
            }
            </Formik>
          </div>
      </div>
    )
}

export default Login