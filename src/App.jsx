import { useState } from "react";
import "./App.css";

import TodoList from "./components/todo-list/todo-list.component";
import Form from "./components/form/form.component";

function App() {
  const todosArray = [
    {
      id: 1,
      text: "buy milk",
      completed: true,
    },
    {
      id: 2,
      text: "buy cheese",
      completed: false,
    },
    {
      id: 3,
      text: "cook dinner",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(todosArray);

  const completeTodo = (todoToComplete) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoToComplete.id) {
        return {
          ...todoToComplete,
          completed: !todoToComplete.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const deleteTodo = (todoToDelete) => {
    const newTodos = todos.filter((todo) => todo.id !== todoToDelete.id);

    setTodos(newTodos);
  };

  const addTodo = (todoToAdd) => {
    const newTodos = [...todos, todoToAdd];

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
