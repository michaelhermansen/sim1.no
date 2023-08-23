import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, className, ...rest }: Props) {
  return (
    <div
      className={clsx("max-w-[390px] w-full mx-auto px-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
