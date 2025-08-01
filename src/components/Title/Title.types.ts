export type HeadingLevel = 1 | 2 | 3 | 4;

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}
