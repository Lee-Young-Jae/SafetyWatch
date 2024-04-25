import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ClockSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

const FilterInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const S = {
  Container,
  ClockSection,
  NewsSection,
  Title,
  FilterInput,
};
export default S;
