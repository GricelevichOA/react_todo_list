import { useState, useEffect } from "react";
import { AppContainer, AppHeader } from "./App.styles.js";

import TodoList from "./components/todo-list/todo-list.component";
import Form from "./components/form/form.component";
import Filter from "./components/filter/filter.component";

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
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filter, setFilter] = useState("all");

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

  const setCurrentFilter = (f) => {
    setFilter(f);
  };

  useEffect(() => {
    switch (filter) {
      case "all":
        setFilteredTodos(todos);
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        break;
    }
  }, [filter, todos]);

  return (
    <AppContainer>
      <AppHeader>ToDo App</AppHeader>
      <Form addTodo={addTodo} />
      <Filter setCurrentFilter={setCurrentFilter} filter={filter} />
      <TodoList
        todos={filteredTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </AppContainer>
  );
}

export default App;
