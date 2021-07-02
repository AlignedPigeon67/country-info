import styled from 'styled-components';
import CountryItem from './CountryItem';

const ListContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const CountryList = ({ countries }) => {
  return (
    <ListContainer>
      {countries.map(country => (
        <CountryItem country={country} />
      ))}
    </ListContainer>
  );
};

export default CountryList;
