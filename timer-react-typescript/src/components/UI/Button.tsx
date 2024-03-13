import { type ComponentPropsWithoutRef } from "react";

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
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
