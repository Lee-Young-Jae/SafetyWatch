import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 10px;
  padding: 20px;
`;

const Clock = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  background-color: #f5f5f5;
  border-radius: 100px 100px 0 0;
  overflow: hidden;
  cursor: pointer;

  & .bad {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ff8181;
    top: 0;
    left: 0;
    transform-origin: 50% 100%;
    transform: rotate(0deg);
  }

  & .normal {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffdb58;
    top: 0;
    left: 0;
    transform-origin: 50% 100%;
    transform: rotate(60deg);
  }

  & .good {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #a9ff58;
    top: 0;
    left: 0;
    transform-origin: 50% 100%;
    transform: rotate(120deg);
  }

  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 1;
  }
`;

const Needle = styled.div<{ $degree: number }>`
  position: absolute;
  width: 3px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  height: calc(100% - 10px);
  background-color: #000000ce;
  top: 10px;
  left: 50%;
  transform-origin: 50% 100%;
  transform: rotate(${(props) => props.$degree}deg);
  transition: transform 0.5s;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 20px;
  font-size: 0.9rem;
  width: 100%;

  & span {
    margin-top: 10px;
  }
`;

// 작게
const Small = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

const S = {
  Container,
  Clock,
  Needle,
  Description,
  Small,
};

export default S;
