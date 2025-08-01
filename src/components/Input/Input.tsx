import clsx from "clsx";
import type { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({ className, status, ...props }) => {
  const baseStyles = "border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";

  const statusStyles = {
    error: "border-red-500",
    success: "border-green-500",
    default: "border-gray-300",
  };

  const statusClass = status ? statusStyles[status] : statusStyles.default;

  return (
    <input
      className={clsx(
        baseStyles,
        statusClass,
        className
      )}
      {...props}
    />
  );
};
