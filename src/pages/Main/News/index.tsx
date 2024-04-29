import { useState } from "react";
import { parseHtmlNews } from "../../../utills/parseHtml";
import S from "./Style";
import Guide from "../Guide";

interface NewsProps {
  arno: string;
  keyword: string;
  contents: string;
}

const News = ({ arno, keyword, contents }: NewsProps) => {
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleGuide = () => {
    setShowGuide(!showGuide);
  };

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
        <S.GuideButton onClick={handleGuide}>관련 예방 지침 보기</S.GuideButton>
        {showGuide && <Guide keyword={keyword} />}
      </S.Content>
    </S.Container>
  );
};

export default News;
