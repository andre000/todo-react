import { Title } from "../../../../components/Title/Title";

type TodoListProps = {
  title: string;
}

export const TodoList: React.FC<TodoListProps> = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-1/3 min-h-128">
      <Title level={3} className="mb-4 text-gray-600">{title}</Title>
      <p className="text-gray-600">No todos available</p>
    </div>
  );
}
