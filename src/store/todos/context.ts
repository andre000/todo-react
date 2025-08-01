import { createContext } from "react";
import type { TodosContextValue } from "./types";

export const TodosContext = createContext<TodosContextValue | undefined>(undefined);
