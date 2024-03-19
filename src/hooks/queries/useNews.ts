import { useQuery } from "@tanstack/react-query";
import { News } from "../../types/news";

const serviceKey = import.meta.env.VITE_API_KEY;

const getNewsData = async (numOfRows = 40) => {
  const url = `https://apis.data.go.kr/B552468/news_api01/getNews_api01?serviceKey=${serviceKey}&pageNo=1&numOfRows=${numOfRows}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.body.items.item;
};

export const useGetNews = (numOfRows?: number) => {
  return useQuery<News, Error>({
    queryKey: ["news"],
    queryFn: () => getNewsData(numOfRows),
  });
};
