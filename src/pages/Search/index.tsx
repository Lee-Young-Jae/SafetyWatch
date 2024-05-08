import { useState } from "react";
import useInput from "../../hooks/useInput";
import SearchResult from "./SearchField";
import S from "./Style";

const Search = () => {
  const [search, setSearch] = useState("");

  const { onChange, value } = useInput("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <S.Container>
      <h2>법령 검색</h2>
      <S.InputField id="search_form" onSubmit={onSubmit}>
        <S.Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={value}
          onChange={onChange}
        />
        <S.SearchButton type="submit">검색</S.SearchButton>
      </S.InputField>
      <SearchResult search={search} />
    </S.Container>
  );
};

export default Search;
