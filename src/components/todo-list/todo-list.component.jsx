import React from "react";

import Todo from "../todo/todo.component";

import { TodoListContainer, TodoListEmpty } from "./todo-list.styles";

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <TodoListContainer>
      {todos.length === 0 ? (
        <TodoListEmpty>Empty list</TodoListEmpty>
      ) : (
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })
      )}
    </TodoListContainer>
  );
};

export default TodoList;
