import { useState, type InputHTMLAttributes, type KeyboardEvent } from "react";
import {
  useController,
  useFormContext,
  type FieldPathByValue,
  type FieldValues,
} from "react-hook-form";

type TagsInputProps<T extends FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "value" | "defaultValue" | "onChange" | "dir"
> & {
  name: FieldPathByValue<T, string[]>;
  label?: string;
  dir?: "ltr" | "rtl";
  wrapperClassName?: string;
  labelClassName?: string;
};

function TagsInput<T extends FieldValues>({
  name,
  label,
  dir = "rtl",
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  id,
  onKeyDown,
  ...rest
}: TagsInputProps<T>) {
  const { control } = useFormContext<T>();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [inputValue, setInputValue] = useState("");

  const tags = (field.value ?? []) as string[];

  const inputId = id ?? String(name).replace(/\./g, "-");
  const errorId = `${inputId}-error`;

  const addTag = () => {
    const tag = inputValue.trim();

    if (!tag || tags.includes(tag)) {
      setInputValue("");
      return;
    }

    field.onChange([...tags, tag]);
    setInputValue("");
  };

  const removeTag = (index: number) => {
    field.onChange(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented) return;

    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }

    if (event.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div className={wrapperClassName}>
      {label && (
        <label className={`mb-2 block ${labelClassName}`} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className={`textField__input flex flex-wrap items-center gap-2 ${
          error ? "border-error" : ""
        } ${className}`}
      >
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="flex items-center gap-1 rounded-md bg-secondary-200 px-2 py-1 text-sm"
          >
            {tag}

            <button
              type="button"
              onClick={() => removeTag(index)}
              aria-label={`Remove ${tag}`}
              className="text-secondary-500 hover:text-error"
            >
              ×
            </button>
          </span>
        ))}

        <input
          {...rest}
          id={inputId}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onBlur={field.onBlur}
          onKeyDown={handleKeyDown}
          dir={dir}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="min-w-24 flex-1 border-0 bg-transparent p-0 outline-none"
        />
      </div>

      {error?.message && (
        <span id={errorId} className="text-error text-xs">
          {String(error.message)}
        </span>
      )}
    </div>
  );
}

export default TagsInput;
