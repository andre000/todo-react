import type { TodoItemProps } from "./TodoItem.types";
import { useTodos } from "../../../../store/todos";

export const TodoItem: React.FC<TodoItemProps> = ({ todo, className }) => {
  const { removeTodo } = useTodos();

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', todo.id);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <div className={`shadow-md rounded-lg p-4 mb-4 cursor-move relative ${className}`} draggable onDragStart={handleDragStart}>
      <span className="text-gray-400 hover:text-gray-600 cursor-pointer absolute top-2 right-4" onClick={handleDelete}>
        &times;
      </span>
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
