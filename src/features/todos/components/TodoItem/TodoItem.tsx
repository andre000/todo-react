import type { TodoItemProps } from "./TodoItem.types";

export const TodoItem: React.FC<TodoItemProps> = ({ todo, className }) => {
  return (
    <div className={`shadow-md rounded-lg p-4 mb-4 cursor-move ${className}`} draggable data-id={todo.id}>
      <p className="text-gray-600">{todo.text}</p>
      <div className="mt-2">
        {todo.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs font-semibold mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
