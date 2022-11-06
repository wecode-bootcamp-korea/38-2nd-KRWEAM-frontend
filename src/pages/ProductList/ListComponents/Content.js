import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../../../context/ListContext";
import ItemComponent from "../../../components/ItemComponent/ItemComponent";
import Accordion from "./Accordion";
import * as S from "../styled.ProductList";

const Content = ({ location }) => {
  const navigate = useNavigate();
  const { products, clickSubCategory } = useContext(ListContext);

  return (
    <S.Content>
      <Accordion multiple clickSubCategory={clickSubCategory} />
      <S.Items>
        <S.Button>빠른배송</S.Button>
        <S.Button>브랜드배송</S.Button>
        <S.Grid>
          {products.length > 1 &&
            products.map(product => (
              <div key={product.id}>
                <ItemComponent
                  productInfo={product}
                  location={location.pathname}
                  onClick={() => navigate(`/detail/${product.productId}`)}
                />
              </div>
            ))}
        </S.Grid>
      </S.Items>
    </S.Content>
  );
};

export default Content;
