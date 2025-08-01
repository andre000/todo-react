import type { Todo, TodoStatus, TodosAction, TodosState } from "./types";

export const initialState: TodosState = {
  list: [
    {
      id: '1',
      text: 'This is a sample todo item',
      status: 'todo',
      tags: ['tag1', 'tag2'],
      createdAt: new Date().toISOString(),
      completed: false
    }
  ]
};

export function todosReducer(state: TodosState, action: TodosAction): TodosState {
  switch (action.type) {
    case 'add': {
      const newTodo = {
        ...action.payload,
        id: crypto.randomUUID(),
        status: 'todo' as TodoStatus,
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
export const addTodo = (todo: Omit<Todo, 'id' | 'status' | 'createdAt' | 'completed'>): TodosAction => ({
  type: 'add',
  payload: { ...todo, id: '', status: 'todo', createdAt: '', completed: false }
});

export const removeTodo = (id: string): TodosAction => ({
  type: 'remove',
  payload: { id }
});

export const updateTodo = (id: string, updates: Partial<Omit<Todo, 'id'>>): TodosAction => ({
  type: 'update',
  payload: { id, updates }
});
