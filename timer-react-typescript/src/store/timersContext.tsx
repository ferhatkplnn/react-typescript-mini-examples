import { ReactNode, createContext } from "react";

type TTimer = {
  name: string;
  duration: number;
};

type TTimersState = {
  isRunning: boolean;
  timers: TTimer[];
};

type TTimersContextValue = TTimersState & {
  addTimer: (timerData: TTimer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TTimersContextValue | null>(null);

type TTimersContextProviderProps = {
  children: ReactNode;
};

export const TimersContextProvider = ({
  children,
}: TTimersContextProviderProps) => {
  const ctx: TTimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      //
    },
    startTimers() {
      //
    },
    stopTimers() {
      ///
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
