import styled from 'styled-components';
import CountryItem from './CountryItem';

const ListContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 3rem;
`;

const CountryList = ({ countries, searchQuery }) => {
  return (
    <ListContainer>
      {searchQuery.length < 1
        ? countries.map(country => (
            <CountryItem country={country} key={country.numericCode} />
          ))
        : countries
            .filter(country =>
              country.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(country => (
              <CountryItem country={country} key={country.numericCode} />
            ))}
    </ListContainer>
  );
};

export default CountryList;
