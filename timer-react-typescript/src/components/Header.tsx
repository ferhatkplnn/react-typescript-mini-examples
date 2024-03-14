import Button from "./UI/Button";
import { useTimersContext } from "../store/timersContext";

const Header = () => {
  const { isRunning, startTimers, stopTimers } = useTimersContext();

  const handleButtonClick = isRunning ? stopTimers : startTimers;
  const buttonLabel = isRunning ? "Stop" : "Start";

  return (
    <header>
      <h1>ReactTimer</h1>

      <div>
        <Button onClick={handleButtonClick}>{buttonLabel} Timers</Button>
      </div>
    </header>
  );
};

export default Header;
