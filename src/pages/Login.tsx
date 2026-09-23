import { useFormik } from "formik";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import FormInput from "../components/ui/FormInput";
import Button from "../components/ui/Button";
import { loginSchema } from "../validation/schemas";

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(values);
      resetForm();
    },
  });

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in "
      footer={
        <>
          Don't have an account?{" "}
          <Link
            to="/get-started"
            className="text-neutral-900 font-medium hover:underline"
          >
            Get Started
          </Link>
        </>
      }
    >
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <FormInput
          label="Email"
          type="email"
          placeholder="you@company.com"
          error={formik.errors.email}
          touched={formik.touched.email}
          {...formik.getFieldProps("email")}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={formik.errors.password}
          touched={formik.touched.password}
          {...formik.getFieldProps("password")}
        />

        <div className="text-right -mt-1">
          <Link
            to="/forgot-password"
            className="text-sm text-neutral-500 hover:text-neutral-900"
          >
            Forgot your password?
          </Link>
        </div>

        <Button
          type="submit"
          loading={formik.isSubmitting}
          loadingText="Signing in..."
          disabled={formik.isSubmitting || !formik.dirty}
          className="cursor-pointer"
        >
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
