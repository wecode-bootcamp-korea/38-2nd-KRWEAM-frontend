import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./MyPageLayoutStyle";
import MyPageAside from "./LayoutComponent/MyPageAside";
import MyPageMain from "./LayoutComponent/MyPageMain";
import MyPageList from "./LayoutComponent/MyPageList";
import MyPageWish from "./LayoutComponent/MyPageWish";

const MyPageLayout = () => {
  const params = useParams();
  const routingObj = {
    main: <MyPageMain />,
    wish: <MyPageWish />,
  };
  return (
    <S.MyPageContainer>
      <MyPageAside />
      {routingObj[params.log] || <MyPageList />}
    </S.MyPageContainer>
  );
};

export default MyPageLayout;
