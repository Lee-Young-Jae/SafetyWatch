import S from "./Style";

interface SkeletonProps {
  count: number;
}

const Skeleton = ({ count }: SkeletonProps) => {
  return (
    <S.Container>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <S.Skeletons key={index}>
            <S.Skeleton $size={28} />
            <S.Skeleton $size={18} />
            <S.Skeleton $size={18} />
            <S.Skeleton $size={18} />
          </S.Skeletons>
        ))}
    </S.Container>
  );
};

export default Skeleton;
