import styled from 'styled-components';

const InfoText = styled.p`
  font-size: 1.4rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  /* object-fit: contain; */
  width: 100%;
  height: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

const ListItem = styled.div`
  width: 265px;
  height: 335px;
  background-color: white;
  display: grid;
  grid-template-rows: 160px auto;
  border-radius: 1rem;
`;

const CountryItem = ({ country }) => {
  return (
    <ListItem>
      <Image src={country.flag} alt="country flag" />
      <InfoContainer>
        <InfoTitle>{country.name}</InfoTitle>
        <span>
          <InfoText>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </InfoText>
          <InfoText>
            <strong>Region:</strong> {country.region}
          </InfoText>
          <InfoText>
            <strong>Capital:</strong> {country.capital}
          </InfoText>
        </span>
      </InfoContainer>
    </ListItem>
  );
};

export default CountryItem;
