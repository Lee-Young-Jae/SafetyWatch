import { Link, useLocation } from "react-router-dom";
import S from "./Style";

const Navbar = () => {
  const location = useLocation();

  return (
    <S.Container>
      <S.Logo></S.Logo>
      <S.Menu>
        {location.pathname !== "/" && <Link to="/">사상자 지수 보러가기</Link>}
        {location.pathname !== "/search" && (
          <Link to="/search">법령 검색하러 가기</Link>
        )}
      </S.Menu>
    </S.Container>
  );
};

export default Navbar;
