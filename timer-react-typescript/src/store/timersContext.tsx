import { ReactNode, createContext, useContext, useReducer } from "react";

export type TTimer = {
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

type TStartTimerAction = {
  type: "START_TIMERS";
};

type TStopTimersAction = {
  type: "STOP_TIMERS";
};

type TAddTimersAction = {
  type: "ADD_TIMER";
  payload: TTimer;
};

type TAction = TStartTimerAction | TStopTimersAction | TAddTimersAction;

function timersReducer(state: TTimersState, action: TAction): TTimersState {
  switch (action.type) {
    case "START_TIMERS":
      return { ...state, isRunning: true };

    case "STOP_TIMERS":
      return { ...state, isRunning: false };

    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };

    default:
      return state;
  }
}

export const TimersContextProvider = ({
  children,
}: TTimersContextProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TTimersContextValue = {
    timers: timersState.timers,
    isRunning: false,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
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
