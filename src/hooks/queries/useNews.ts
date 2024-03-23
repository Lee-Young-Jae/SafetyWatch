import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { ResponseNews } from "../../types/news";

const serviceKey = import.meta.env.VITE_API_KEY;

interface getNewsDataProps {
  numOfRows?: number;
  pageParam?: number;
}

const getNewsData = async ({
  numOfRows = 40,
  pageParam = 1,
}: getNewsDataProps) => {
  const url = `https://apis.data.go.kr/B552468/news_api01/getNews_api01?serviceKey=${serviceKey}&pageNo=${pageParam}&numOfRows=${numOfRows}`;
  const res = await fetch(url);
  const data = await res.json();

  const news = data.body.items.item;
  if (!news) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }

  const pageNo = data.body.pageNo;
  return {
    news,
    pageNo,
  };
};

export const useGetNews = ({ numOfRows, pageParam }: getNewsDataProps) => {
  return useQuery<ResponseNews, Error>({
    queryKey: ["news", numOfRows, pageParam],
    queryFn: () => getNewsData({ numOfRows, pageParam }),
  });
};

export const useGetInfiniteNews = () => {
  return useInfiniteQuery({
    queryKey: ["news"],
    queryFn: ({ pageParam }) => getNewsData({ pageParam }),
    getNextPageParam: (lastData) => +lastData.pageNo + 1,
    initialPageParam: 1,
  });
};
