import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "outline" | "";
  loading?: boolean;
  children: ReactNode;
};

function ButtonIcon({
  children,
  variant = "",
  loading = false,
  className = "",
  disabled,
  type = "button",
  ...rest
}: ButtonIconProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      className={`btn--${variant} ${className} p-0.5`}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
