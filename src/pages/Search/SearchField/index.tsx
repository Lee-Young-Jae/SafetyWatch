import Loading from "../../../components/Loading";
import { useGetAct } from "../../../hooks/queries/useAct";
import S from "./Style";
import { ActCategoryName } from "../../../utills/constants";
import { removeEm } from "../../../utills/parseHtml";
import BoldifyKeyword from "../../../components/BoldifyKeyword";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SearchResultProps {
  search: string;
  category?: number;
}

const SearchResult = ({ search, category }: SearchResultProps) => {
  const { isLoading, error, data } = useGetAct(search, category);

  const [searchOption, setSearchOption] = useState({
    categorys: 0,
  });

  if (isLoading)
    return (
      <>
        <Loading />
        <p style={{ textAlign: "center" }}>
          검색 결과가 많아 시간이 걸릴 수 있습니다.
        </p>
      </>
    );
  if (error) return <div>An error has occurred: {error.message}</div>;
  if (!data)
    return (
      <div>
        <p>
          산업안전보건법, KOSHA GUIDE 등의 법규, 지침, 가이드를 검색해보세요.
        </p>
      </div>
    );

  console.log("render");

  const filteredData = data?.items?.item?.filter((item) => {
    if (searchOption.categorys === 0) return true;
    return searchOption.categorys.toString() === item.category;
  });

  return (
    <S.Container>
      <S.SearchResult>
        <div>연관 검색어: {data.associated_word.join(", ")}</div>
        <div>검색 결과 약 {data.totalCount}개 </div>

        <S.Filter
          onChange={(e) => {
            setSearchOption({ ...searchOption, categorys: +e.target.value });
          }}
        >
          {Object.keys(ActCategoryName)
            .filter((item) => item !== "8" && item !== "9")
            .map((key) => {
              let newValue = +key;
              return (
                <option id={key} key={key} value={newValue}>
                  {ActCategoryName[+key]} {data.categorycount[+key]}
                </option>
              );
            })}
        </S.Filter>
        {filteredData.length === 0 && (
          <S.SearchResultItem>검색 결과가 없습니다.</S.SearchResultItem>
        )}
        {filteredData.map((item) => (
          <S.SearchResultItem key={item.doc_id}>
            <S.SearchResultTitle>{item.title}</S.SearchResultTitle>
            <S.SearchResultContent>
              <BoldifyKeyword keyword={search} text={removeEm(item.content)} />
              {item.category === "6" && item.filepath && (
                <p>
                  <Link to={item.filepath} target="_blank">
                    콘텐츠 보기
                  </Link>
                </p>
              )}
            </S.SearchResultContent>
          </S.SearchResultItem>
        ))}
      </S.SearchResult>
    </S.Container>
  );
};

export default SearchResult;
