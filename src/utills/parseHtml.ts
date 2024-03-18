import { News } from "../types/news";

export const parseHtmlNews = (html: string) => {
  const contents = html.replace(/<br \s*\/?>/g, "\n").replace(/<[^>]+>/g, ``);
  const splitContents = contents.split("\n");
  const filteredContents = splitContents.filter(
    (content) => content !== "" && content !== "\r" && content !== "&nbsp;"
  );

  return filteredContents;
};

export const getTodayCasualty = (news: News) => {
  const today = new Date();
  const todayString = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}.`;
  const casualty = news.reduce(
    (acc, cur) => {
      const parsedContents = parseHtmlNews(cur.contents);
      const date = parsedContents[0];
      if (date.includes(todayString)) {
        const casualtyMatch = parsedContents[3].match(/(사망) (\d+)명/);
        const injuredMatch = parsedContents[3].match(/(부상) (\d+)명/);

        if (casualtyMatch) {
          acc[0] += parseInt(casualtyMatch[2]);
        }
        if (injuredMatch) {
          acc[1] += parseInt(injuredMatch[2]);
        }
      }

      return acc;
    },
    [0, 0]
  );

  return casualty;
};

export const getWeekCasualty = (news: News) => {
  const currentTime = new Date().getTime();
  const weekAgo = new Date(currentTime - 7 * 24 * 60 * 60 * 1000);

  const casualty = news.reduce(
    (acc, cur) => {
      const accidentDate = cur.keyword.match(/\[(\d+\/\d+),/);
      if (accidentDate) {
        const parsedContents = parseHtmlNews(cur.contents);
        const date = accidentDate[1];
        const accidentDateTimestamp = new Date(
          `${new Date().getFullYear()}/${date}`
        ).getTime();

        if (accidentDateTimestamp > weekAgo.getTime()) {
          const casualtyMatch = parsedContents[3].match(/(사망) (\d+)명/);
          const injuredMatch = parsedContents[3].match(/(부상) (\d+)명/);

          if (casualtyMatch) {
            acc[0] += parseInt(casualtyMatch[2]);
          }
          if (injuredMatch) {
            acc[1] += parseInt(injuredMatch[2]);
          }
        }
      }

      return acc;
    },
    [0, 0]
  );

  return casualty;
};
