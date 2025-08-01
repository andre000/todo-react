import { useState } from "react";
import { Title } from "../../../../components/Title";
import { TodoItem } from "../TodoItem";
import { useTodos } from "../../../../store/todos";
import { TodoAddItem } from "../TodoAddItem/TodoAddItem";
import type { TodoListProps } from "./TodoList.types";

export const TodoList: React.FC<TodoListProps> = ({ title, status }) => {
  const { list, updateTodo } = useTodos();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const todoId = event.dataTransfer.getData('text/plain');
    const droppedTodo = list.find(t => t.id === todoId);

    if (droppedTodo) {
      updateTodo(todoId, { ...droppedTodo, status });
    }
    event.dataTransfer.clearData();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // Allow drop by preventing default behavior
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleAddTodo = () => {
    setIsOpen(true);
  };

  const cardClassDone = "bg-green-100 border-green-300 text-green-800 opacity-50 z-10 dark:bg-sky-800 dark:border-sky-400 dark:text-sky-900";
  const cardClassTodo = "bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-cyan-800 dark:border-cyan-500 dark:text-cyan-800";

  return (
    <>
    <div className="bg-white shadow-md rounded-lg p-6 w-full min-h-1/3 md:w-1/3 md:min-h-128 dark:bg-gray-800" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="flex justify-between items-center mb-4">
        <Title level={3} className="text-gray-600 dark:text-gray-300">{title}</Title>
        <button className="text-blue-500 cursor-pointer font-bold dark:text-red-400" onClick={handleAddTodo}> + </button>
      </div>
      {list.filter(todo => todo.status === status).map(todo => (
        <TodoItem key={todo.id} todo={todo} className={status === 'done' ? cardClassDone : cardClassTodo} />
      ))}
    </div>
    <TodoAddItem status={status} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
