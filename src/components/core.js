import * as Yup from "yup";

export const initialValues = {
    email : "",
    password : "",
};

export const onSubmit = (values) => {
    console.log(values);
};

export const validationSchema = Yup.object({
    email : Yup.string().required("ایمیل اجباری!"),
    password : Yup.string().
    required("رمز عبور اجباری!").
    min(8,"حداقل 8 کاراکتر"),
});
