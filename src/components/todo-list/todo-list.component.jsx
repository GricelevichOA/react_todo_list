import React from "react";

import Todo from "../todo/todo.component";

import { TodoListContainer } from "./todo-list.styles";

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <TodoListContainer>
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
    </TodoListContainer>
  );
};

export default TodoList;
