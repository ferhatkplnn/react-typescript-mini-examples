import { ComponentPropsWithRef, forwardRef } from "react";

type TInputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={id} className="uppercase font-semibold text-sm">
          {label}
        </label>
        <input
          id={id}
          name={id}
          className="text-black text-lg px-4 py-2 rounded"
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
