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
  width: 100%;

  & span {
    word-wrap: break-word;
    word-break: break-all;
  }
`;

const GuideButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;

const S = {
  Container,
  Title,
  Content,
  GuideButton,
};

export default S;
