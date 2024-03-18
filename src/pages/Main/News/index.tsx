import { parseHtmlNews } from "../../../utills/parseHtml";
import S from "./Style";

interface NewsProps {
  arno: string;
  keyword: string;
  contents: string;
}

const News = ({ arno, keyword, contents }: NewsProps) => {
  return (
    <S.Container key={arno}>
      <S.Title>{keyword}</S.Title>
      <S.Content>
        {parseHtmlNews(contents).map((el, key) => {
          return (
            <span key={key}>
              {el}
              <br />
            </span>
          );
        })}
      </S.Content>
    </S.Container>
  );
};

export default News;
