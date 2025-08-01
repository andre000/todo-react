export type ButtonColor = "primary" | "secondary" | "danger";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "solid" | "outline" | "text";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}
