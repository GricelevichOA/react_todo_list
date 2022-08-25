import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  margin-bottom: 40px;
`;

export const FormInput = styled.input`
  flex: 1 1;
  padding: 5px 0;

  border: none;

  text-align: start;

  &:focus {
    outline: none;

    -webkit-box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 1) inset;
    -moz-box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 1) inset;
    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 1) inset;
  }

  &::placeholder {
    text-align: start;
    color: #818181;
  }
`;

export const FormButton = styled.button`
  color: #fff;
  background-color: #000000;
  padding: 5px;

  border: none;

  &:hover {
    color: #000000;
    background-color: #fff;

    -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 1);
  }

  &:active {
    -webkit-box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
  }
`;
