import S from "./Style";

interface TodayCasualtyProps {
  casualty: number;
  injured: number;
}

const TodayCasualty = ({ casualty, injured }: TodayCasualtyProps) => {
  return (
    <S.Container>
      <p>
        Today's casualty: <span>{casualty}</span>
      </p>
      <p>
        Today's injured: <span>{injured}</span>
      </p>
    </S.Container>
  );
};

export default TodayCasualty;
