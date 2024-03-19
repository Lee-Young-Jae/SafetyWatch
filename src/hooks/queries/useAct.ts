import { useQuery } from "@tanstack/react-query";
import { SafetyActData } from "../../types/act";

const serviceKey = import.meta.env.VITE_API_KEY;

const getSafetyAct = async (searchValue: string, category = 0) => {
  const url = `https://apis.data.go.kr/B552468/srch/smartSearch?serviceKey=${serviceKey}&pageNo=1&numOfRows=40&searchValue=${searchValue}&category=${category}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.response.body;
};

export const useGetAct = (searchValue: string, category = 0) => {
  return useQuery<SafetyActData, Error, SafetyActData>({
    queryKey: ["act", searchValue, category],
    queryFn: () => getSafetyAct(searchValue, category),
    enabled: searchValue !== "",
  });
};
