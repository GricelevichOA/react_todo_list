import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    addTodo(newTodo);
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Add ToDo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default Form;
