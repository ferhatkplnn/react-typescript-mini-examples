import React, {
  Component,
  ComponentProps,
  ComponentPropsWithRef,
  useEffect,
  useRef,
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

import { type ThemeColor } from "../lib/types";

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

const buttonTextOptions = [
  "Click me!",
  "Click me again!",
  "Click me on more time!",
] as const; // artik buttonTextOptions sadece readonly oldu

type Auth = {
  sessionId: string;
  name: string;
};

type Guest = Omit<Auth, "name">; // name degerini cikardi

type ButtonColor = "red" | "blue" | "green";

const convertToArray = <T,>(value: T): T[] => {
  return [value];
};

type FooType<T> = {
  countValue: T;
  countHistory: T[];
};

const foo = <T,>({ countValue, countHistory }): FooType<T> => {
  return { countValue, countHistory };
};

const Button = ({ style, onClick, children }: ButtonProps) => {
  const [names, setName] = useState<string[]>(["ali", "osman"]);
  const [users, setUsers] = useState<User[] | null>(null);

  // const ref = useRef<Element | null>(null);
  // const ref = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColor"
    ) as ButtonColor;
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log("Clicked!");
  };

  return (
    <>
      <button onClick={handleClick} style={style}>
        {children}
      </button>
      {buttonTextOptions.map((opt) => {
        return <button key={opt}>{opt}</button>;
      })}
    </>
  );
};

export default Button;
