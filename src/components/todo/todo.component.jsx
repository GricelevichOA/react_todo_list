const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const completeHandler = () => {
    completeTodo(todo);
  };

  const deleteHandler = () => {
    deleteTodo(todo);
  };

  return (
    <div>
      <p>{todo.text}</p>
      {todo.completed ? <p>completed</p> : <p>in progress</p>}
      <span onClick={completeHandler}>complete</span>|
      <span onClick={deleteHandler}>delete</span>
    </div>
  );
};

export default Todo;
