import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "outline";
  loading?: boolean;
};

function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  disabled,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      className={`btn btn--${variant} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
