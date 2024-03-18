import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  justify-content: space-around;

  p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 1.1rem;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const S = {
  Container,
};

export default S;
