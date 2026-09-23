type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  loadingText?: string;
};

const Button = ({
  children,
  loading = false,
  loadingText,
  disabled,
  type = "button",
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      disabled={loading || disabled}
      className={`w-full px-5 py-3 rounded-lg bg-neutral-900 text-white text-[15px] font-medium transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading && loadingText ? loadingText : children}
    </button>
  );
};

export default Button;
