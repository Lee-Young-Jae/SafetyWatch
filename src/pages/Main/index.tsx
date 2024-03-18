import { useQuery } from "@tanstack/react-query";
import { getTodayCasualty, getWeekCasualty } from "../../utills/parseHtml";
import { News as Newstype } from "../../types/news";
import News from "./News";

const serviceKey = import.meta.env.VITE_API_KEY;
const url = `https://apis.data.go.kr/B552468/news_api01/getNews_api01?serviceKey=${serviceKey}&pageNo=1&numOfRows=60`;

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

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {getTodayCasualty(data!).map((el, idx) => {
        return (
          <div key={idx}>
            {idx === 0 ? "Today's casualty: " : "Today's injured: "}
            {el}
          </div>
        );
      })}
      {getWeekCasualty(data!).map((el, idx) => {
        return (
          <div key={idx}>
            {idx === 0 ? "Week's casualty: " : "Week's injured: "}
            {el}
          </div>
        );
      })}
      <section>
        {data?.map((news) => (
          <News
            key={news.arno}
            arno={news.arno}
            keyword={news.keyword}
            contents={news.contents}
          />
        ))}
      </section>
    </div>
  );
};

export default Main;
