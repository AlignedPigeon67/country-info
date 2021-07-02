import styled from 'styled-components';
import CountryItem from './CountryItem';

const ListContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const CountryList = props => {
  return (
    <ListContainer>
      <CountryItem country={props.countries[0]} />
    </ListContainer>
  );
};

export default CountryList;
