import { useState } from "react";
import { Casualty } from "../../../utills/constants";
import S from "./Style";

interface ClockProps {
  casualty: number;
  injured: number;
}

const Clock = ({ casualty, injured }: ClockProps) => {
  const [clicked, setClicked] = useState(false);

  const calculateCasualtyScore = (casualty: number, injured: number) => {
    return (
      casualty * Casualty.CASUALTY_WEIGHT + injured * Casualty.INJURED_WEIGHT
    );
  };

  const casualtyScore = calculateCasualtyScore(casualty, injured);

  const calcCasualtyDegree = (score: number) => {
    // bad = 280 ~ 329;
    // normal = 330 ~ 359 , 0 ~ 29; // 360 == 0
    // good = 30 ~ 80;

    if (score >= Casualty.SCORE.BAD_MIN) {
      if (score >= Casualty.SCORE.BAD_MAX) {
        return 280;
      }
      const startAngle = 280;
      const endAngle = 329;
      const range = Casualty.SCORE.BAD_MAX - Casualty.SCORE.BAD_MIN;
      const angle_weight = (endAngle - startAngle) / range;

      return startAngle + (Casualty.SCORE.BAD_MAX - score) * angle_weight;
    }

    if (score >= Casualty.SCORE.NORMAL_MIN) {
      const startAngle = 330;
      const endAngle = 389;
      const range = Casualty.SCORE.NORMAL_MAX - Casualty.SCORE.NORMAL_MIN;
      const angle_weight = (endAngle - startAngle) / range;

      return startAngle + (Casualty.SCORE.NORMAL_MAX - score) * angle_weight;
    }

    if (score >= Casualty.SCORE.GOOD_MIN) {
      const startAngle = 30;
      const endAngle = 80;
      const range = Casualty.SCORE.GOOD_MAX - Casualty.SCORE.GOOD_MIN;
      const angle_weight = (endAngle - startAngle) / range;

      return startAngle + (Casualty.SCORE.GOOD_MAX - score) * angle_weight;
    }
    return 0;
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <S.Container>
      <S.Tooltip onClick={handleClick}>!</S.Tooltip>
      <S.Clock onClick={handleClick}>
        <div className="bad"></div>
        <div className="normal"></div>
        <div className="good"></div>
        <S.Needle $degree={calcCasualtyDegree(casualtyScore)} />
        <p>{casualtyScore}</p>
      </S.Clock>
      <p>
        일주일 사상자 수: {casualty + injured}명 &nbsp;
        <S.Small>
          ({casualty} + {injured})
        </S.Small>
      </p>
      {clicked && (
        <S.Description>
          <p>사상자 지수는 일주일간의 사상자 수를 기반으로 계산됩니다.</p>
          <span>사망: {casualty}명</span>
          <span>부상: {injured}명</span>
          <span>
            <b>
              사상자 지수의 목적은 사업장 관계인과 근로자의 안전의식 및 경각심을
              고취시키고 동종 업종의 유사 재해를 예방하는 데에 있습니다.
            </b>
          </span>
        </S.Description>
      )}
    </S.Container>
  );
};

export default Clock;
