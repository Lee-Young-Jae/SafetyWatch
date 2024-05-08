import styled from "styled-components";

const Container = styled.div``;

const InputField = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 2rem;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 80px;
  height: 40px;
  margin-left: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const S = {
  Container,
  Input,
  InputField,
  SearchButton,
};

export default S;
