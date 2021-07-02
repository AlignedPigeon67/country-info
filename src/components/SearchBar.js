import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const Input = styled.input.attrs(props => ({
  type: props.type || 'text',
  placeholder: props.placeholder || 'Search...',
}))`
  background: transparent;
  border: none;
  width: 100%;
  height: 80%;
  opacity: 0.5;
  &:focus {
    outline: none;
    border: none;
    opacity: 1;
  }
`;

const SubmitButton = styled.button.attrs(props => ({
  type: props.type || 'submit',
}))`
  background: transparent;
  border: none;
  opacity: 0.3;
  &:hover {
    cursor: pointer;
  }
  ${Input}:focus & {
    opacity: 1;
  }
`;

const SearchForm = styled.form`
  background-color: white;
  width: 90%;
  height: 5rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.05);
  padding: 0 3rem;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const SearchBar = () => {
  return (
    <SearchForm>
      <SubmitButton>
        <SearchIcon fontSize="large" />
      </SubmitButton>
      <Input type="text" placeholder="Search for a country..." />
    </SearchForm>
  );
};

export default SearchBar;
