import { useEffect, useRef, useState } from "react";
import { useTimersContext, type TTimer } from "../store/timersContext";
import Container from "./UI/Container";

type TTimerProps = TTimer;

const Timer = ({ name, duration }: TTimerProps) => {
  const [remaining, setRemaining] = useState(duration * 1000);
  const intervalRef = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  if (remaining <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemaining((prevTime) => Math.max(prevTime - 50, 0));
      }, 50);

      intervalRef.current = timer;
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formattedRemainingTime = (remaining / 1000).toFixed(2);

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
