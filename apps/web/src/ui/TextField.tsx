import type { InputHTMLAttributes } from "react";
import {
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type TextFieldProps<T extends FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "dir"
> & {
  name: FieldPath<T>;
  label?: string;
  dir?: "ltr" | "rtl";
  wrapperClassName?: string;
  labelClassName?: string;
};

function TextField<T extends FieldValues>({
  name,
  label,
  type = "text",
  dir = "rtl",
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  id,
  ...rest
}: TextFieldProps<T>) {
  const { control } = useFormContext<T>();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputId = id ?? name.replace(/\./g, "-");
  const errorId = `${inputId}-error`;

  return (
    <div className={wrapperClassName}>
      {label && (
        <label className={`mb-2 block ${labelClassName}`} htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        {...field}
        {...rest}
        id={inputId}
        type={type}
        dir={dir}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`textField__input ${className}`}
      />

      {error?.message && (
        <span id={errorId} className="text-error text-xs">
          {String(error.message)}
        </span>
      )}
    </div>
  );
}

export default TextField;
