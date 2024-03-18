import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  margin: 0 auto;
`;

const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

const S = {
  Container,
  NewsSection,
};
export default S;
