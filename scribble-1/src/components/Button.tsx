import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
  borderRadius: Record<string, number>;
  onClick: <T>(val: T) => T;
};

const Button = ({ style, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={style}>
      Button
    </button>
  );
};

export default Button;
