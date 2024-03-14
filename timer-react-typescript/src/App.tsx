import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import { TimersContextProvider } from "./store/timersContext";

const App = () => {
  return (
    <>
      <TimersContextProvider>
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </TimersContextProvider>
    </>
  );
};

export default App;
