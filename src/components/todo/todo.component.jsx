import trash from "../../assets/trash.png";

import { TodoContainer, TodoText, TodoButton } from "./todo.styles";

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const completeHandler = () => {
    completeTodo(todo);
  };

  const deleteHandler = () => {
    deleteTodo(todo);
  };

  return (
    <TodoContainer>
      <TodoText completed={todo.completed} onClick={completeHandler}>
        {todo.text}
      </TodoText>

      <TodoButton onClick={deleteHandler}>
        <img src={trash} alt="delete" />
      </TodoButton>
    </TodoContainer>
  );
};

export default Todo;
