import styled from "styled-components";

const Container = styled.div``;

const InputField = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 2px solid #3498db;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  min-width: 4rem;
  height: 40px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const S = {
  Container,
  Input,
  InputField,
  SearchButton,
};

export default S;
