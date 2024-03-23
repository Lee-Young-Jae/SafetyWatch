export type News = {
  keyword: string;
  contents: string;
  arno: string;
}[];

export type ResponseNews = {
  news: News;
  pageNo: number;
};
