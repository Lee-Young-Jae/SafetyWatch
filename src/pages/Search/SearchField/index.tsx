import Loading from "../../../components/Loading";
import { useGetAct } from "../../../hooks/queries/useAct";
import S from "./Style";
import { ActCategoryName } from "../../../utills/constants";
import { removeEmAndImage } from "../../../utills/parseHtml";
import BoldifyKeyword from "../../../components/BoldifyKeyword";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

interface SearchResultProps {
  search: string;
  category?: number;
}

const SearchResult = ({ search, category }: SearchResultProps) => {
  const { isLoading, error, data } = useGetAct(search, category);

  const [searchOption, setSearchOption] = useState({
    categorys: 0,
  });

  const filteredData = useMemo(
    () =>
      data?.items?.item?.filter((item) => {
        if (searchOption.categorys === 0) return true;
        return searchOption.categorys.toString() === item.category;
      }),
    [searchOption.categorys, data]
  );

  if (isLoading)
    return (
      <S.SubMessage>
        <Loading />
        <p style={{ textAlign: "center" }}>
          검색 결과가 많아 시간이 걸릴 수 있습니다.
        </p>
      </S.SubMessage>
    );
  if (error)
    return (
      <S.SubMessage>
        <p>이런! 에러가 발생했습니다.</p>
        <p>잠시 후 다시 시도해주세요.</p>
      </S.SubMessage>
    );
  if (!data)
    return (
      <S.SubMessage>
        산업안전보건법, KOSHA GUIDE 등의 법규, 지침, 가이드를 검색해보세요.
      </S.SubMessage>
    );

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
        {!filteredData && (
          <S.SearchResultItem>검색 결과가 없습니다.</S.SearchResultItem>
        )}
        {filteredData?.map((item) => (
          <S.SearchResultItem key={item.doc_id}>
            <S.SearchResultTitle>{item.title}</S.SearchResultTitle>
            <S.SearchResultContent>
              <BoldifyKeyword
                keyword={search}
                text={removeEmAndImage(item.content)}
              />
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
