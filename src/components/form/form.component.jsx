import { useState } from "react";

import { FormContainer, FormInput, FormButton } from "./form.styles";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Task cannot be empty");

      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    addTodo(newTodo);
    setText("");
  };

  return (
    <>
      <FormContainer onSubmit={addTodoHandler}>
        <FormInput
          type="text"
          placeholder="Enter text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <FormButton type="submit">Add</FormButton>
      </FormContainer>
    </>
  );
};

export default Form;
