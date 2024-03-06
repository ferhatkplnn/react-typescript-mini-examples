import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  const url: string = "https://api.github.com/users";

  function convertCurrency(amount: number, currency: string) {
    return `${currency}${amount}`;
  }

  const handleClick = <T,>(val: T): T => {
    setCount(count + 1);
    return val;
  };

  return (
    <div>
      <h1>app</h1>
      <p>url: {url}</p>
      <p>{convertCurrency(22, "$")}</p>
      <p>count: {count}</p>
      <Button
        onClick={handleClick}
        style={{
          background: "purple",
          color: "#fff",
          padding: "8px 24px",
        }}
        borderRadius={{
          topLeft: 5,
          topRight: 5,
          bottomRight: 10,
          bottomLeft: 10,
        }}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
