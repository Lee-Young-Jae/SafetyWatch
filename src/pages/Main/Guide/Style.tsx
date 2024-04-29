import styled from "styled-components";

const Container = styled.article`
  margin-top: 20px;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  font-size: 0.8rem;
`;

export const S = {
  Container,
  Title,
  Content,
};

export default S;
