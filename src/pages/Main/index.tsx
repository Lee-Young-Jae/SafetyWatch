import { useQuery } from "@tanstack/react-query";
import { getTodayCasualty, getWeekCasualty } from "../../utills/parseHtml";
import { News as Newstype } from "../../types/news";
import News from "./News";
import S from "./Style";
import Loading from "../../components/Loading";
import TodayCasualty from "./TodayCasualty";

const serviceKey = import.meta.env.VITE_API_KEY;
const url = `https://apis.data.go.kr/B552468/news_api01/getNews_api01?serviceKey=${serviceKey}&pageNo=1&numOfRows=40`;

const getNewsData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data.body.items.item;
};

const Main = () => {
  const { isLoading, error, data } = useQuery<Newstype, Error>({
    queryKey: ["news"],
    queryFn: getNewsData,
  });

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "An error has occurred";

  return (
    <S.Container>
      <>
        {(function () {
          const todayCasualty = getTodayCasualty(data);
          return (
            <TodayCasualty
              casualty={todayCasualty[0]}
              injured={todayCasualty[1]}
            />
          );
        })()}
      </>
      <S.NewsSection>
        {data.map((news) => (
          <News
            key={news.arno}
            arno={news.arno}
            keyword={news.keyword}
            contents={news.contents}
          />
        ))}
      </S.NewsSection>
    </S.Container>
  );
};

export default Main;
