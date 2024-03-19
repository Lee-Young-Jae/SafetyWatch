import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SearchResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SearchResultTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding: 10px 20px;
  font-weight: bold;
`;

const SearchResultContent = styled.div`
  padding: 10px 20px;
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 1.5;
  width: 100%;

  span {
    width: 100%;
    word-wrap: break-word;
    word-break: keep-all;
  }
`;

const Filter = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  option {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 2px solid #3498db;
    border-radius: 5px;

    &:focus {
    }
  }

  option:hover {
    background-color: #3498db;
    color: #fff;
  }

  option:focus {
    background-color: #3498db;
    color: #fff;
  }

  option:active {
    background-color: #3498db;
    color: #fff;
  }
`;

const S = {
  Container,
  SearchResult,
  SearchResultItem,
  SearchResultTitle,
  SearchResultContent,
  Filter,
};

export default S;
