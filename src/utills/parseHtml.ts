import { News } from "../types/news";

export const parseHtmlNews = (html: string) => {
  const contents = html.replace(/<br \s*\/?>/g, "\n").replace(/<[^>]+>/g, ``);
  const replacedNbspContents = contents.replace(/&nbsp;/g, "");
  const splitContents = replacedNbspContents.split("\n");
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
        const casualtyMatch = parsedContents
          .find((content) => content.includes("사망"))
          ?.match(/(사망) (\d+)명/);
        const injuredMatch = parsedContents
          .find((content) => content.includes("부상"))
          ?.match(/(부상) (\d+)명/);

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
      const accidentDate = cur.contents.match(
        /([0-9]{4}. [0-9]{1,2}. [0-9]{1,2})/
      );

      if (accidentDate) {
        const date = accidentDate[1].split(". ");

        const accidentDateTimestamp = new Date(
          parseInt(date[0]),
          parseInt(date[1]) - 1,
          parseInt(date[2])
        ).getTime();

        if (accidentDateTimestamp > weekAgo.getTime()) {
          console.log();
          const casualty = parseHtmlNews(cur.contents).find((content) =>
            content.includes("사망")
          );
          const injured = parseHtmlNews(cur.contents).find((content) =>
            content.includes("부상")
          );

          const casualtyMatch = casualty?.match(/(사망) (\d+)명/);
          const injuredMatch = injured?.match(/(부상) (\d+)명/);
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

export const removeEmAndImage = (html: string) => {
  const removedEm = html
    .replace(/<em class='smart'>/g, "")
    .replace(/<\/em>/g, "");
  const removedImage = removedEm
    .replace(/<img[^>]+>/g, "")
    .replace(/<\/img>/g, "");
  return removedImage;
};

export const getPureTitle = (html: string) => {
  const removedTag = html.replace(/<[^>]+>/g, "");
  const splitTitle = removedTag.split("]");
  return splitTitle[1];
};
