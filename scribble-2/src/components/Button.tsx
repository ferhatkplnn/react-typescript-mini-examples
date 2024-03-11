import { ComponentPropsWithoutRef } from "react";

type TButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type TAnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

function isAnchorProps(
  props: TButtonProps | TAnchorProps
): props is TAnchorProps {
  return "href" in props;
}

const Button = (props: TButtonProps | TAnchorProps) => {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }
  return <button {...props}>Button</button>;
};

export default Button;
