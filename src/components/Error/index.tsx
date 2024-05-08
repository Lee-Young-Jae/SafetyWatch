import S from "./Style";
interface FallbackProps {
  error: Error | null;
  resetErrorBoundary?: () => void;
}

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <S.Container>
      <S.Title>Something went wrong</S.Title>
      <S.ErrorMsg>{error?.message}</S.ErrorMsg>
      <S.RetryButton onClick={resetErrorBoundary}>다시 시도하기</S.RetryButton>
    </S.Container>
  );
};

export default Error;
