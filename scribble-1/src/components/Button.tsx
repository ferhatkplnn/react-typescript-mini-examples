import React, {
  Component,
  ComponentProps,
  ComponentPropsWithRef,
  useRef,
  useState,
  useState,
} from "react";

// type ButtonProps = {
//   style: React.CSSProperties;
//   borderRadius: Record<string, number>;
//   onClick: <T>(val: T) => T;
//   children: React.ReactNode; // Allowed all value
//   // children: JSX.Element;  // Only allowed one element
//   setCount: React.Dispatch<React.SetStateAction<number>>;
//   type: "text" | "submit" | "reset";
//   autoFocus: boolean;
// };

// type ButtonProps = ComponentProps<"button">;
type ButtonProps = ComponentPropsWithRef<"button"> & {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  borderRadius: Record<string, number>;
}; // if use ref

type User = {
  name: string;
  email: string;
  salary: number;
};

const Button = ({ style, onClick, children }: ButtonProps) => {
  const [names, setName] = useState<string[]>(["ali", "osman"]);
  const [users, setUsers] = useState<User[] | null>(null);

  // const ref = useRef<Element | null>(null);
  // const ref = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log("Clicked!");
  };

  return (
    <button onClick={handleClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
