import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TContainerProps<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: TContainerProps<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};

export default Container;
