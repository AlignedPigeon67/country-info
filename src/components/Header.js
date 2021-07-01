import styled from "styled-components";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const MainTitle = styled.h1`
  font-size: 1.6rem;
`;

const StyledHeader = styled.header`
  background-color: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <StyledHeader>
      <MainTitle>Where in the world?</MainTitle>
      <ThemeToggle>
        <Brightness2OutlinedIcon />
        <Text>Dark Mode</Text>
      </ThemeToggle>
    </StyledHeader>
  );
};

export default Header;
