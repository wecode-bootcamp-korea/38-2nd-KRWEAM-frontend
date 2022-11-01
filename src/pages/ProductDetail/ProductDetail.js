import React, { useEffect, useState } from "react";
import * as S from "./StyledProductDetail";
import DetailImageContainer from "./ImageContainer";
import ContentsContainer from "./ContentsContainer";
import ItemComponent from "../../components/ItemComponent/ItemComponent";
import { useLocation, useParams } from "react-router-dom";
import { api } from "../../config";

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [brandInfo, setBrandInfo] = useState([]);

  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    fetch(`${api.products}/info/${params.id}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data.message[0]);
        const { brandEngName } = data.message[0];
        fetch(`${api.products}/relation/${brandEngName} `, {
          method: "GET",
        })
          .then(res => res.json())
          .then(data => setBrandInfo(data.message));
      });
  }, []);
  return (
    <S.DetailContainer>
      <S.DetailMainContainer>
        <DetailImageContainer productImage={productInfo.productImage} />
        <ContentsContainer productInfo={productInfo} />
      </S.DetailMainContainer>
      <S.AnotherProducts>
        <S.TitleConatiner>
          <S.Name>
            <S.BrandName>{productInfo.brandEngName} </S.BrandName>의 다른 상품
          </S.Name>
          <S.more>더보기</S.more>
        </S.TitleConatiner>
        {brandInfo.length > 0 ? (
          <S.ImagesContainer>
            <ItemComponent
              productInfo={brandInfo[0]}
              location={location.pathname}
            />
            <ItemComponent
              productInfo={brandInfo[1]}
              location={location.pathname}
            />
            <ItemComponent
              productInfo={brandInfo[2]}
              location={location.pathname}
            />
            <ItemComponent
              productInfo={brandInfo[3]}
              location={location.pathname}
            />
          </S.ImagesContainer>
        ) : null}
      </S.AnotherProducts>
    </S.DetailContainer>
  );
};

export default ProductDetail;
