
import React, { useReducer } from "react";
import { TodosContext } from "./context";
import { todosReducer, initialState } from "./reducer";

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}
