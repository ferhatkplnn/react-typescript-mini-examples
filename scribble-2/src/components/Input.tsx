import { ComponentProps } from "react";

type TInputProps = {
  label: string;
  id: string;
} & ComponentProps<"input">;

const Input = ({ label, id, ...props }: TInputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="uppercase font-semibold text-sm">
        {label}
      </label>
      <input
        id={id}
        className="text-black text-lg px-4 py-2 rounded"
        {...props}
      />
    </div>
  );
};

export default Input;
