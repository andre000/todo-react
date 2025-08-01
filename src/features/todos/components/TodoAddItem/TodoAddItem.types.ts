import type { TodoStatus } from "../../../../store/todos";
import type { ModalProps } from "../../../../components/Modal";

export interface TodoAddItemProps extends Omit<ModalProps, 'children'> {
  status: TodoStatus;
}
