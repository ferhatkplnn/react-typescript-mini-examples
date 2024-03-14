import { type TTimer } from "../store/timersContext";
import Container from "./UI/Container";

type TTimerProps = TTimer;

const Timer = ({ name, duration }: TTimerProps) => {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
};

export default Timer;
