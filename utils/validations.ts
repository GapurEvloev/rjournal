import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email("Wrong email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 symbols")
    .required("Password is required"),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required("First and last name are required"),
  })
  .concat(LoginFormSchema);
