import { ComponentPropsWithoutRef, FormEvent } from "react";

type TFormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, children, ...otherProps }: TFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  };
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
};

export default Form;
