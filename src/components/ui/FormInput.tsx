import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type FormInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const FormInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  type = "text",
  placeholder,
  required = true,
}: FormInputProps) => {
  const [visible, setVisible] = useState(false);

  const hasError = Boolean(touched && error);
  const isPassword = type === "password";
  const inputType = isPassword && visible ? "text" : type;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[15px] text-neutral-700">
        {label}
        {required && <span className="text-red-500 ml-1.5">*</span>}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full px-4 py-3 text-[15px] rounded-lg bg-neutral-100 placeholder:text-neutral-400 outline-none transition-colors focus:bg-white focus:ring-2 ${
            isPassword ? "pr-12" : ""
          } ${
            hasError
              ? "ring-2 ring-red-400 focus:ring-red-400"
              : "focus:ring-neutral-900/20"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-neutral-900 cursor-pointer"
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {hasError && (
        <p id={`${name}-error`} className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
