import { ComponentPropsWithoutRef, forwardRef } from "react";

type TInputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <div>
        <label htmlFor="{id}">{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
      </div>
    );
  }
);

export default Input;
