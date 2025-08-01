import { useContext } from "react";
import { TodosContext } from "./context";
import { addTodo, removeTodo, updateTodo } from "./reducer";
import type { Todo } from "./types";

export function useTodos() {
  const ctx = useContext(TodosContext);
  if (!ctx) throw new Error('useTodos must be used within a TodosProvider');

  const { state: { list }, dispatch } = ctx;

  return {
    list,
    addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'completed'>) => {
      dispatch(addTodo(todo));
    },
    removeTodo: (id: string) => {
      dispatch(removeTodo(id));
    },
    updateTodo: (id: string, updates: Partial<Omit<Todo, 'id'>>) => {
      dispatch(updateTodo(id, updates));
    }
  };
}
