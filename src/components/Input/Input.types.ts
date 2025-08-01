export type InputStatus = "default" | "error" | "success";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  status?: InputStatus;
}
