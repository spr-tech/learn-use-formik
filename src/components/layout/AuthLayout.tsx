import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
};

const AuthLayout = ({ title, subtitle, children, footer }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      <Link to="/" className="font-semibold text-neutral-900">
        Rubies Shop
      </Link>

      <div className="w-full max-w-md mt-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            {title}
          </h1>
          <p className="mt-2 text-neutral-500">{subtitle}</p>
        </header>

        <div className="mt-8">{children}</div>

        {footer && (
          <p className="mt-6 text-center text-sm text-neutral-500">{footer}</p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
