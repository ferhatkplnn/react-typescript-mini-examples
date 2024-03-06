import React, { Component, ComponentProps, ComponentPropsWithRef } from "react";

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

const Button = ({ style, onClick, children }: ButtonProps) => {
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
