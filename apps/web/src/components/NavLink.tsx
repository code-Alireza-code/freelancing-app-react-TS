import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  to: LinkProps["to"];
  className?: string;
};

export default function NavLink({ children, to, className }: NavLinkProps) {
  return (
    <Link to={to} className={`flex gap-x-4 text-lg ${className}`}>
      {children}
    </Link>
  );
}
