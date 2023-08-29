import { initialState, reducer } from "./reducer";
import { State, Action } from "./reducerTypes";
import { createContext, useReducer } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";

export interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const Context = createContext<ContextValue | undefined>(undefined);

// Create a provider component that wraps your app and provides the context
const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};

export { Context, ContextProvider };
