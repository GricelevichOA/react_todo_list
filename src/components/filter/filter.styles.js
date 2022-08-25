import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 10px;
`;

export const FilterButton = styled.button`
  padding: 5px 10px;

  background-color: ${(props) => (props.active ? "#000000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000000")};
`;
