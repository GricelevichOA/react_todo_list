const Todo = ({ todo, completeTodo }) => {
  const completeHandler = () => {
    completeTodo(todo);
  };

  return (
    <div>
      <p>{todo.text}</p>
      {todo.completed ? <p>completed</p> : <p>in progress</p>}
      <span onClick={completeHandler}>complete</span>|<span>delete</span>
    </div>
  );
};

export default Todo;
