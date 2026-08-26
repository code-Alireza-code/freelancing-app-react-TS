import type { ReactNode } from "react";
import {
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type RadioOption<TValue extends string> = {
  value: TValue;
  label: ReactNode;
};

type RadioGroupProps<
  TFieldValues extends FieldValues,
  TValue extends string,
> = {
  name: FieldPath<TFieldValues>;
  options: RadioOption<TValue>[];
  label?: string;
  className?: string;
  wrapperClassName?: string;
};

function RadioGroup<TFieldValues extends FieldValues, TValue extends string>({
  name,
  options,
  label,
  className = "",
  wrapperClassName = "",
}: RadioGroupProps<TFieldValues, TValue>) {
  const { control } = useFormContext<TFieldValues>();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const errorId = `${name}-error`;

  return (
    <fieldset className={wrapperClassName}>
      {label && <legend className="mb-2 block">{label}</legend>}
      <div className={`flex gap-4 ${className}`}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;

          return (
            <div key={option.value} className="flex items-center gap-2">
              <input
                id={id}
                type="radio"
                name={field.name}
                value={option.value}
                checked={field.value === option.value}
                onChange={() => field.onChange(option.value)}
                onBlur={field.onBlur}
                ref={field.ref}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
              />

              <label htmlFor={id}>{option.label}</label>
            </div>
          );
        })}
      </div>

      {error?.message && (
        <span id={errorId} className="text-error text-xs">
          {String(error.message)}
        </span>
      )}
    </fieldset>
  );
}

export default RadioGroup;
