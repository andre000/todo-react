import clsx from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4;

const sizes: Record<HeadingLevel, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

export const Title: React.FC<TitleProps>  = ({ children, level = 1, className, ...rest }) => {
  const Tag = `h${level}` as `h1` | `h2` | `h3` | `h4`;

  return (
    <Tag className={clsx(`font-sans font-bold`, sizes[level], className)} {...rest}>
      {children}
    </Tag>
  );
}
