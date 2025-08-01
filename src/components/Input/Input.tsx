import clsx from "clsx";
import { forwardRef } from "react";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, status, ...props },
  ref
) {
  const baseStyles = "border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300";

  const statusStyles = {
    error: "border-red-500",
    success: "border-green-500",
    default: "border-gray-300",
  };

  const statusClass = status ? statusStyles[status] : statusStyles.default;

  return (
    <input
      ref={ref}
      className={clsx(
        baseStyles,
        statusClass,
        className
      )}
      {...props}
    />
  );
});
