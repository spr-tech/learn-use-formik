import { useFormik } from "formik";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import FormInput from "../components/ui/FormInput";
import Button from "../components/ui/Button";
import { signupSchema } from "../validation/schemas";

const GetStarted = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values, { resetForm }) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(values);
      resetForm();
    },
  });

  return (
    <AuthLayout
      title="Get Started"
      subtitle="Create your secure Rubies account"
      footer={
        <>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-neutral-900 font-medium hover:underline"
          >
            Login
          </Link>
        </>
      }
    >
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <FormInput
          label="First Name"
          placeholder="Enter your first name"
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
          {...formik.getFieldProps("firstName")}
        />

        <FormInput
          label="Last Name"
          placeholder="Enter your last name"
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
          {...formik.getFieldProps("lastName")}
        />

        <FormInput
          label="Work email"
          type="email"
          placeholder="you@company.com"
          error={formik.errors.email}
          touched={formik.touched.email}
          {...formik.getFieldProps("email")}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Create a password"
          error={formik.errors.password}
          touched={formik.touched.password}
          {...formik.getFieldProps("password")}
        />

        <Button
          type="submit"
          loading={formik.isSubmitting}
          loadingText="Creating account..."
          disabled={formik.isSubmitting || !formik.dirty}
          className="cursor-pointer"
        >
          Continue
        </Button>
      </form>
    </AuthLayout>
  );
};

export default GetStarted;
