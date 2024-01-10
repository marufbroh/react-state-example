import { ReactNode, createContext } from "react";

export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const values = {
    todoTitle: "This is a todo title",
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
