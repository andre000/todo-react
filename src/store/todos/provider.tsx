
import React, { useReducer, useEffect } from "react";
import { TodosContext } from "./context";
import { todosReducer, initialState } from "./reducer";
import type { TodosState } from "./types";

function getInitialState(): TodosState {
  const stored = localStorage.getItem('@todo/state')
  return stored ? JSON.parse(stored) : initialState
}

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todosReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem('@todo/state', JSON.stringify(state));
  }, [state]);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}
