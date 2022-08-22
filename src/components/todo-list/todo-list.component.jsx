import React from "react";

import Todo from "../todo/todo.component";

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
