import S from "./Style";

interface TodayCasualtyProps {
  casualty: number;
  injured: number;
}

const TodayCasualty = ({ casualty, injured }: TodayCasualtyProps) => {
  return (
    <S.Container>
      <p>오늘 사상자 : </p>
      <p>
        사망 <span>{casualty}</span>
      </p>
      <p>
        부상 <span>{injured}</span>
      </p>
    </S.Container>
  );
};

export default TodayCasualty;
