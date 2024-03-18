import { useQuery } from "@tanstack/react-query";
import {
  parseHtmlNews,
  getTodayCasualty,
  getWeekCasualty,
} from "../../utills/parseHtml";
import { News } from "../../types/news";

const serviceKey = import.meta.env.VITE_API_KEY;
const url = `https://apis.data.go.kr/B552468/news_api01/getNews_api01?serviceKey=${serviceKey}&pageNo=1&numOfRows=60`;

const getNewsData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data.body.items.item;
};

const Main = () => {
  const { isLoading, error, data } = useQuery<News, Error>({
    queryKey: ["news"],
    queryFn: getNewsData,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>News</h1>
      <section>
        {getTodayCasualty(data!).map((el, idx) => {
          return (
            <li key={idx}>
              {idx === 0 ? "Today's casualty: " : "Today's injured: "}
              {el}
            </li>
          );
        })}
        {getWeekCasualty(data!).map((el, idx) => {
          return (
            <li key={idx}>
              {idx === 0 ? "Week's casualty: " : "Week's injured: "}
              {el}
            </li>
          );
        })}

        {data?.map((news) => {
          return (
            <article key={news.arno}>
              <h2>{news.keyword}</h2>
              <p>
                {parseHtmlNews(news.contents).map((el, key) => {
                  return (
                    <span key={key}>
                      {el}
                      <br />
                    </span>
                  );
                })}
              </p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Main;
