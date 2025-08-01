import clsx from "clsx";
import type { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, className, color, size, variant, disabled, loading, ...props }) => {
  const baseStyles = "rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  const colorStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-800",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };

  const variantStyles = {
    solid: "border-transparent",
    outline: "border",
    text: "border-transparent",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        colorStyles[color as ButtonColor || "primary"],
        sizeStyles[size as ButtonSize || "medium"],
        variantStyles[variant as ButtonVariant || "solid"],
        { "opacity-50 cursor-not-allowed": disabled || loading },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span> <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v0c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v0z"></path></svg> </span>}
      {!loading && children}
    </button>
  );
}
