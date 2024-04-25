import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
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
    width: inherit;
    height: inherit;
    background-color: #ff8181;
    top: 0;
    left: 0;
    transform-origin: 50% 100%;
    transform: rotate(0deg);
  }

  & .normal {
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: #ffdb58;
    top: 0;
    left: 0;
    transform-origin: 50% 100%;
    transform: rotate(60deg);
  }

  & .good {
    position: absolute;
    width: inherit;
    height: inherit;
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

const Tooltip = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.4rem;
  height: 1.4rem;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  border: 1px solid #b0b0b0;
  color: #b0b0b0;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.2s, border 0.2s;
  user-select: none;

  &:hover {
    color: #000;
    border: 1px solid #000;
  }
`;

const needleAnimation = (deg: number) => keyframes`
  0% {
    transform: rotate(${deg - 3}deg);
  }
  100% {
    transform: rotate(${deg + 3}deg);
  }
`;

const Needle = styled.div<{ $degree: number }>`
  position: absolute;
  width: 3px;
  border-radius: 3px;
  height: calc(100% - 10px);
  background-color: #000000ce;
  top: 12px;
  left: 50%;
  transform-origin: 50% 100%;
  transform: rotate(${(props) => props.$degree}deg);
  transition: transform 0.5s;
  animation: ${(props) => needleAnimation(props.$degree)} 3s alternate infinite;
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
  Tooltip,
};

export default S;
