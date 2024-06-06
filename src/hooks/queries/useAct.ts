import { useQuery } from "@tanstack/react-query";
import { SafetyActData } from "../../types/act";

const serviceKey = import.meta.env.VITE_API_KEY;

const getSafetyAct = async (searchValue: string, category = 0) => {
  try {
    if (searchValue.length > 20) {
      const splitSearchValue = searchValue.split(" ");
      let firstWord = splitSearchValue.shift();
      if (firstWord && firstWord[0] === " ") {
        firstWord = firstWord.slice(1);
      }
      const lastWord = splitSearchValue.pop();

      while (splitSearchValue.join(" ").length > 10) {
        splitSearchValue.pop();
      }

      searchValue = `${firstWord}%20${splitSearchValue.join(
        "%20"
      )}%20${lastWord}`;
    }

    const url = `https://apis.data.go.kr/B552468/srch/smartSearch?serviceKey=${serviceKey}&pageNo=1&numOfRows=40&searchValue=${searchValue}&category=${category}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log("url:", url, "data:", data);

    if (data.response.header.resultCode !== "00") {
      throw new Error("Failed to fetch data");
    }

    return data.response.body;
  } catch (error) {
    throw new Error(
      "법령 검색중 오류가 발생했어요. 잠시 후 다시 시도해주세요."
    );
  }
};

export const useGetAct = (searchValue: string, category = 0) => {
  return useQuery<SafetyActData, Error, SafetyActData>({
    queryKey: ["act", searchValue, category],
    queryFn: () => getSafetyAct(searchValue, category),
    enabled: searchValue !== "",
    throwOnError: true,
  });
};
