import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import {
  useController,
  useFormContext,
  type FieldPathByValue,
  type FieldValues,
} from "react-hook-form";

import { Calendar } from "@/shadcn/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/components/ui/popover";
import { cn } from "@/shadcn/lib/utils";

type DatePickerProps<T extends FieldValues> = {
  name: FieldPathByValue<T, Date | undefined>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  dir?: "ltr" | "rtl";
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  id?: string;
};

function DatePicker<T extends FieldValues>({
  name,
  label,
  placeholder = "انتخاب تاریخ",
  disabled = false,
  dir = "rtl",
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  id,
}: DatePickerProps<T>) {
  const { control } = useFormContext<T>();
  const [open, setOpen] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputId = id ?? String(name).replace(/\./g, "-");
  const errorId = `${inputId}-error`;

  const value = field.value as Date | undefined;

  const handleSelect = (date: Date | undefined) => {
    field.onChange(date);
    setOpen(false);
  };

  return (
    <div className={wrapperClassName} dir={dir}>
      {label && (
        <label htmlFor={inputId} className={`mb-2 block ${labelClassName}`}>
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={inputId}
            type="button"
            disabled={disabled}
            onBlur={field.onBlur}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "textField__input flex w-full items-center justify-between",
              !value && "text-muted-foreground",
              error && "border-error",
              className,
            )}
          >
            <span>{value ? value.toLocaleDateString() : placeholder}</span>

            <CalendarIcon className="size-5" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleSelect}
            disabled={{ before: new Date() }}
          />
        </PopoverContent>
      </Popover>

      {error?.message && (
        <span id={errorId} className="text-error text-xs">
          {String(error.message)}
        </span>
      )}
    </div>
  );
}

export default DatePicker;
