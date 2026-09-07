import type { SelectHTMLAttributes } from "react";
import {
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps<T extends FieldValues> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "name" | "dir"
> & {
  name: FieldPath<T>;
  label?: string;
  dir?: "ltr" | "rtl";
  options: SelectOption[];
  placeholder?: string;
  wrapperClassName?: string;
  labelClassName?: string;
};

function Select<T extends FieldValues>({
  name,
  label,
  dir = "rtl",
  options,
  placeholder,
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  id,
  ...rest
}: SelectProps<T>) {
  const { control } = useFormContext<T>();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const selectId = id ?? name.replace(/\./g, "-");
  const errorId = `${selectId}-error`;

  return (
    <div className={wrapperClassName}>
      {label && (
        <label className={`mb-2 block ${labelClassName}`} htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        {...field}
        {...rest}
        id={selectId}
        dir={dir}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`textField__input ${className}`}
      >
        {placeholder && <option value="">{placeholder}</option>}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error?.message && (
        <div id={errorId} className="text-error text-xs">
          {String(error.message)}
        </div>
      )}
    </div>
  );
}

export default Select;
