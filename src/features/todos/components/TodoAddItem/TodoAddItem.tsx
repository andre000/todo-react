import { useState } from "react";
import { useTodos } from "../../../../store/todos";
import { Modal } from "../../../../components/Modal";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import type { TodoAddItemProps } from "./TodoAddItem.types";

export const TodoAddItem: React.FC<TodoAddItemProps> = ({ status, isOpen, onClose }) => {
  const { addTodo } = useTodos();

  const [newTodoText, setNewTodoText] = useState("");
  const [newTodoTags, setNewTodoTags] = useState("");

  const validateInput = (text: string) => {
    return text.trim().length > 0;
  };

  const handleAddClick = () => {
    if (validateInput(newTodoText)) {
      addTodo({ text: newTodoText, status, tags: newTodoTags.length > 0 ? newTodoTags.split(",").map(tag => tag.trim()) : [] });
      setNewTodoText("");
      setNewTodoTags("");
      onClose();
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="p-4">
        <h2 className="text-lg font-bold mb-2">Add New Todo</h2>
        <div className="mb-2 flex flex-col gap-2">
          <p>To-do text:</p>
          <Input
            type="text"
            placeholder="Enter todo text"
            value={newTodoText}
            onChange={e => setNewTodoText(e.target.value)}
            onKeyDown={handleEnterKey}
          />

          <p>Tags (optional):</p>
          <Input
            type="text"
            placeholder="Enter todo tags (comma separated)"
            value={newTodoTags}
            onChange={e => setNewTodoTags(e.target.value)}
            onKeyDown={handleEnterKey}
          />
        </div>
        <Button className="mt-2" onClick={handleAddClick} disabled={!validateInput(newTodoText)}>
          Add Todo
        </Button>
      </form>
    </Modal>
  );
}
