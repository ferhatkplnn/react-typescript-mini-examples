import { useEffect, useRef, useState } from "react";
import { type TTimer } from "../store/timersContext";
import Container from "./UI/Container";

type TTimerProps = TTimer;

const Timer = ({ name, duration }: TTimerProps) => {
  const [remaining, setRemaining] = useState(duration * 1000);
  const intervalRef = useRef<number | null>(null);

  if (remaining <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((prevTime) => prevTime - 50);
    }, 50);

    intervalRef.current = timer;

    return () => clearInterval(timer);
  }, []);

  const formattedRemainingTime = (remaining / 1000).toFixed(2);
  console.log(formattedRemainingTime);

  return (
    <Container as="article">
      <h3>{name}</h3>
      <p>
        <progress max={duration * 1000} value={remaining} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
};

export default Timer;
