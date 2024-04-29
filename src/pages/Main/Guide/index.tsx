import Loading from "../../../components/Loading";
import Skeleton from "../../../components/Skeleton";
import { useGetAct } from "../../../hooks/queries/useAct";
import { ActCategory } from "../../../utills/constants";
import { getPureTitle, parseHtmlNews } from "../../../utills/parseHtml";
import S from "./Style";

interface GuideProps {
  keyword: string;
}

const Guide = ({ keyword }: GuideProps) => {
  const { data, isLoading } = useGetAct(
    getPureTitle(keyword),
    +ActCategory.KOSHA_GUIDE
  );

  if (isLoading)
    return (
      <S.Container>
        <Skeleton count={2} />
      </S.Container>
    );
  if (!data)
    return (
      <S.Container>
        <Loading />
      </S.Container>
    );

  return (
    <S.Container>
      {data.items.item.map((item, index) => {
        const content = parseHtmlNews(item.content);
        return (
          <div key={index}>
            <S.Title>{item.title}</S.Title>
            <S.Content>{content}</S.Content>
          </div>
        );
      })}
    </S.Container>
  );
};

export default Guide;
