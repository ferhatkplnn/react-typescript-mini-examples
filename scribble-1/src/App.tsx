import { useRef, useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  const url: string = "https://api.github.com/users";

  function convertCurrency(amount: number, currency: string) {
    return `${currency}${amount}`;
  }

  const handleClick = <T,>(val: T): T => {
    return val;
  };

  return (
    <div>
      <h1>App</h1>
      <p>url: {url}</p>
      <p>{convertCurrency(22, "$")}</p>
      <p>count: {count}</p>
      <Button
        setCount={setCount}
        onClick={handleClick}
        style={{
          background: "purple",
          color: "#fff",
          padding: "8px 24px",
        }}
        borderRadius={{
          topLeft: 8,
          topRight: 5,
          bottomRight: 10,
          bottomLeft: 10,
        }}
        type="submit"
        autoFocus={true}
        // ref={buttonRef}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
