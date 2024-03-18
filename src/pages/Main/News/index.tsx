import { parseHtmlNews } from "../../../utills/parseHtml";

interface NewsProps {
  arno: string;
  keyword: string;
  contents: string;
}

const News = ({ arno, keyword, contents }: NewsProps) => {
  return (
    <article key={arno}>
      <h2>{keyword}</h2>
      <div>
        {parseHtmlNews(contents).map((el, key) => {
          return (
            <span key={key}>
              {el}
              <br />
            </span>
          );
        })}
      </div>
    </article>
  );
};

export default News;
