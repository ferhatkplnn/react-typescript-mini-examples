import { ReactNode, createContext, useContext, useReducer } from "react";

type TTimer = {
  name: string;
  duration: number;
};

type TTimersState = {
  isRunning: boolean;
  timers: TTimer[];
};

const initialState: TTimersState = {
  isRunning: true,
  timers: [],
};

type TTimersContextValue = TTimersState & {
  addTimer: (timerData: TTimer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext = createContext<TTimersContextValue | null>(null);

type TTimersContextProviderProps = {
  children: ReactNode;
};

type TAction = {
  type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
};

function timersReducer(state: TTimersState, action: TAction): TTimersState {}

export const TimersContextProvider = ({
  children,
}: TTimersContextProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TTimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER" });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("TimersContext is null - that should not be the case!");
  }

  return timersCtx;
}
