import React from 'react'
import { Form, Formik } from "formik"
import FormikControl from './formikControl/FormikControl'
import * as Yup from "yup";
import axios from "axios"

export const initialValues = {
    phone : "",
    password : "",
    c_password : "",
};

export const onSubmit = (values) => {
    console.log(values);
};

export const validationSchema = Yup.object({
    phone : Yup.string().required("تلفن همراه اجباری!"),
    password : Yup.string().required("رمز عبور اجباری!").min(8,"حداقل 8 کاراکتر"),
    c_password : Yup.string().required("تایید رمز اجباری!").min(8,"حداقل 8 کاراکتر"),
});


const Register = () => {
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
                              <div className='login_image d-flex justify-content-center align-items-center col-1 col-sm-4 col-md-6'>
                                <img src="./assets/image/2853458.jpg" className='w-75 mx-5' alt="" />
                              </div>
                            <Form className='login_forms col-11 col-sm-8 col-md-6' required>

                                <h4 className='text-center'>ثبت نام</h4>

                                <FormikControl
                                control="input"
                                name="phone"
                                placeholder="تلفن همراه"
                                type="number"
                                icon="telephone-fill"
                                />

                                <FormikControl
                                control="input"
                                name="password"
                                placeholder="رمز عبور"
                                type="password"
                                icon="key-fill"
                                />
                                <FormikControl
                                control="input"
                                name="c_password"
                                placeholder="رمز عبور تایید"
                                type="password"
                                icon="shield-lock-fill"
                                />

                                <div className='justify-content-center d-flex align-items-center flex-column login_button'>
                                  <button className='btn btn-success mt-4 w-75 py-3'>ثبت نام</button>
                                  <a href="#" className='m-3 mb-3'>قبلا ثبت نام کرده اید ؟</a>
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

export default Register