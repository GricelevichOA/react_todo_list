import { FilterContainer, FilterButton } from "./filter.styles";

const Filter = ({ setCurrentFilter, filter }) => {
  return (
    <FilterContainer>
      <FilterButton
        active={filter === "all" ? "active" : null}
        onClick={() => {
          setCurrentFilter("all");
        }}
      >
        All
      </FilterButton>
      <FilterButton
        active={filter === "uncompleted" ? "active" : null}
        onClick={() => {
          setCurrentFilter("uncompleted");
        }}
      >
        Uncompleted
      </FilterButton>
      <FilterButton
        active={filter === "completed" ? "active" : null}
        onClick={() => {
          setCurrentFilter("completed");
        }}
      >
        Completed
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
