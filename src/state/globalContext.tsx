import { initialState, reducer } from './globalReducer';
import { State, Action } from '../Types';
import { createContext, useReducer } from 'react';

export interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const Context = createContext<ContextValue | undefined>(undefined);

const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
