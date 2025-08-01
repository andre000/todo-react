import type { Todo, TodosAction, TodosState } from "./types";

export const initialState: TodosState = {
  list: []
};

export function todosReducer(state: TodosState, action: TodosAction): TodosState {
  switch (action.type) {
    case 'add': {
      const newTodo = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        completed: false
      };
      return { ...state, list: [...state.list, newTodo] };
    }

    case 'remove':
      return { ...state, list: state.list.filter(todo => todo.id !== action.payload.id) };

    case 'update':
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === action.payload.id ? { ...todo, ...action.payload.updates } : todo
        )
      };

    default:
      return state;
  }
}

/* Actions */
export const addTodo = (todo: Omit<Todo, 'id' | 'createdAt' | 'completed'>): TodosAction => ({
  type: 'add',
  payload: { ...todo, id: '', createdAt: '', completed: false }
});

export const removeTodo = (id: string): TodosAction => ({
  type: 'remove',
  payload: { id }
});

export const updateTodo = (id: string, updates: Partial<Omit<Todo, 'id'>>): TodosAction => ({
  type: 'update',
  payload: { id, updates }
});
