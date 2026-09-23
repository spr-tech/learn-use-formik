import * as Yup from "yup";

const email = Yup.string()
  .trim()
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address")
  .required("Email is required");

const password = Yup.string()
  .min(8, "Password must be at least 8 characters")
  .matches(/[a-z]/, "Password must include a lowercase letter")
  .matches(/[A-Z]/, "Password must include an uppercase letter")
  .matches(/\d/, "Password must include a number")
  .required("Password is required");
  
const name = (label: string) =>
  Yup.string()
    .trim()
    .min(2, `${label} must be at least 2 characters`)
    .required(`${label} is required`);

export const loginSchema = Yup.object({
  email,
  password,
});

export const signupSchema = Yup.object({
  firstName: name("First name"),
  lastName: name("Last name"),
  email: email.required("Work email is required"),
  password,
});
