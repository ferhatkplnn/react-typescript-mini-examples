import Button from "./UI/Button";
import { useTimersContext } from "../store/timersContext";

const Header = () => {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
};

export default Header;
