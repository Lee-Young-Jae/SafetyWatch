import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

const SkeletonKeyFrame = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const Skeletons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

interface SkeletonProps {
  $size: number;
}

const Skeleton = styled.div<SkeletonProps>`
  width: 100%;
  height: ${(props) => props.$size}px;
  margin-bottom: ${(props) => props.$size / 2}px;
  background-color: #f0f0f0;
  background-image: linear-gradient(
    90deg,
    #f0f0f0 0,
    #f8f8f8 50%,
    #f0f0f0 100%
  );
  border-radius: 10px;
  background-size: 200px 100%;
  animation: ${SkeletonKeyFrame} 1.5s infinite linear;
`;

const S = {
  Container,
  Skeletons,
  Skeleton,
};

export default S;
