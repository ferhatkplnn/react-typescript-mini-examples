import { ComponentPropsWithoutRef } from "react";

type TButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type TAnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

const Button = (props: TButtonProps | TAnchorProps) => {
  if (props.el === "anchor") {
    return <a {...props}></a>;
  }
  return <button {...props}>Button</button>;
};

export default Button;
