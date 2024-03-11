import { ComponentPropsWithoutRef } from "react";

type TFromProps = ComponentPropsWithoutRef<"form">;

const Form = (props: TFromProps) => {
  return <form {...props}>{props.children}</form>;
};

export default Form;
