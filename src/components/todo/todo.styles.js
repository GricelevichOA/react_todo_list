import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;

  border-bottom: 1px solid #000000;

  padding: 5px 0;

  /* &:after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
  } */
`;

export const TodoText = styled.div`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#818181" : "#000000")};
  flex: 1 1;
  text-align: start;
`;

export const TodoButton = styled.button`
  background-color: #fff;
  border: none;

  height: 30px;
  width: 30px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
