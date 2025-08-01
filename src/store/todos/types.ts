export type TodoStatus = 'todo' | 'in-progress' | 'done';

export interface Todo {
  id: string;
  text: string;
  tags: string[];
  status: TodoStatus;
  createdAt: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
}

export type TodosAction =
  | { type: 'add'; payload: Todo }
  | { type: 'remove'; payload: { id: string } }
  | { type: 'update'; payload: { id: string; updates: Partial<Todo> } }

export interface TodosContextValue {
  state: TodosState;
  dispatch: React.Dispatch<TodosAction>;
}
