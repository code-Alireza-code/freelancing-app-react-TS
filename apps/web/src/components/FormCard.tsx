import type { ReactNode } from "react";

type FormCardProps = {
  children: ReactNode;
  className?: string;
};

function FormCard({ children, className = "" }: FormCardProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center *:text-secondary-800">
      <div
        className={`mx-2 w-sm rounded-lg border-2 border-secondary-300 p-4 sm:p-10 ${className}`}
      >
        <div className="relative flex flex-col items-center *:w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default FormCard;
