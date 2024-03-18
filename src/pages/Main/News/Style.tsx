import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  font-size: 0.9rem;
`;

const S = {
  Container,
  Title,
  Content,
};

export default S;
