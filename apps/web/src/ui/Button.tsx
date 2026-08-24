import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "outline";
  loading?: boolean;
  loadingContent?: ReactNode;
};

function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  disabled,
  type = "button",
  loadingContent = "Loading...",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      className={`btn btn--${variant} ${className}`}
    >
      {loading ? loadingContent : children}
    </button>
  );
}

export default Button;
