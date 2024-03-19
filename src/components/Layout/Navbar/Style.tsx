import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
  padding: 1rem 0;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  align-items: space-between;

  a {
    margin: 0 0.5rem;
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
    font-size: 0.75rem;
  }
`;

const S = {
  Container,
  Logo,
  Menu,
};

export default S;
