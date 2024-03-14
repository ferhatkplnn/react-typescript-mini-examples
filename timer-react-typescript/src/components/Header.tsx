import Button from "./UI/Button";
import { useTimersContext } from "../store/timersContext";

const Header = () => {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <div>
        <Button
          onClick={
            timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
          }
        >
          {timersCtx.isRunning ? "Stop" : "Start"} Timers
        </Button>
      </div>
    </header>
  );
};

export default Header;
