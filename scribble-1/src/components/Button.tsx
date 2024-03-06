import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
  borderRadius: Record<string, number>;
  onClick: <T>(val: T) => T;
  children: React.ReactNode; // Allowed all value
  // children: JSX.Element;  // Only allowed one element
};

const Button = ({ style, onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
