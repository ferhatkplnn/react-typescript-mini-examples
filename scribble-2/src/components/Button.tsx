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
  return (
    <button
      className="py-2 px-3 mt-2 border hover:border-purple-300 hover:text-purple-300 duration-500"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
