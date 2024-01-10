import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { todoTitle } = useContext(TodoContext);
  return (
    <div>
      <h1>This is a todo form component</h1>
      <h2>{todoTitle}</h2>
    </div>
  );
};

export default TodoForm;
