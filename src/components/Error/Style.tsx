import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ErrorMsg = styled.p`
  font-size: 1.5rem;
`;

const RetryButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const S = {
  Container,
  Title,
  ErrorMsg,
  RetryButton,
};

export default S;
