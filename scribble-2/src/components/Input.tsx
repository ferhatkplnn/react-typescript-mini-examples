type TInputProps = {
  label: string;
  id: string;
};

const Input = ({ label, id }: TInputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="uppercase font-semibold text-sm">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="text-black text-lg px-4 py-2 rounded"
      />
    </div>
  );
};

export default Input;
