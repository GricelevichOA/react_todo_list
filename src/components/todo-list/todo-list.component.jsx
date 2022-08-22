import React from "react";

import Todo from "../todo/todo.component";

const TodoList = ({ todos, completeTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />;
      })}
    </div>
  );
};

export default TodoList;
