import Navbar from "./Navbar";
import S from "./Style";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Container>
      <Navbar />
      {children}
    </S.Container>
  );
};

export default Layout;
