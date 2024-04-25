import { getTodayCasualty, getWeekCasualty } from "../../utills/parseHtml";
import News from "./News";
import S from "./Style";
import Loading from "../../components/Loading";
import TodayCasualty from "./TodayCasualty";
import Clock from "./Clock";
import { useGetInfiniteNews } from "../../hooks/queries/useNews";
import { ResponseNews } from "../../types/news";
import useIntersectionObserver from "../../hooks/useInterSection";
import { useState } from "react";
import debounce from "../../utills/debounce";

const Main = () => {
  const { isLoading, error, data, fetchNextPage } = useGetInfiniteNews();
  const { setTarget } = useIntersectionObserver({
    hasNextPage: true,
    fetchNextPage,
  });
  const [filterTitle, setFilterTitle] = useState<string>("");

  if (!data) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  const flatedNews: ResponseNews["news"] = data.pages
    .map((page) => page.news)
    .flat();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTitle(e.target.value);
  };

  const debouncedFilter = debounce(handleFilter, 500);

  const filteredNews = flatedNews.filter((news) =>
    news.keyword.includes(filterTitle)
  );

  return (
    <S.Container>
      <>
        {(function () {
          const todayCasualty = getTodayCasualty(flatedNews);
          return (
            <TodayCasualty
              casualty={todayCasualty[0]}
              injured={todayCasualty[1]}
            />
          );
        })()}
      </>
      <S.ClockSection>
        <S.Title>사상자 지수</S.Title>
        <>
          {(function () {
            const weekCasualty = getWeekCasualty(flatedNews);
            return (
              <Clock casualty={weekCasualty[0]} injured={weekCasualty[1]} />
            );
          })()}
        </>
      </S.ClockSection>

      <S.NewsSection>
        <S.Title>최근 뉴스</S.Title>
        <S.FilterInput
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={debouncedFilter}
        />

        {filteredNews.map((news) => (
          <News
            key={news.arno}
            arno={news.arno}
            keyword={news.keyword}
            contents={news.contents}
          />
        ))}
        {isLoading && <Loading />}
      </S.NewsSection>
      <div ref={(ref) => setTarget(ref)} />
    </S.Container>
  );
};

export default Main;
