import React, { useEffect, useState } from "react";
import WishItem from "./WishItem";
import { api } from "../../../config";
import * as S from "./MyPageWishStyle";

const MyPageWish = () => {
  const [wishItem, setWishItem] = useState(null);

  useEffect(() => {
    fetch(`${api.wish}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => setWishItem(data.message));
  }, []);

  const onRemove = id => {
    setWishItem(wishItem.filter(item => item.productId !== id));
  };

  return (
    <div>
      <S.WishHeader>관심상품</S.WishHeader>
      {wishItem && (
        <S.WishListContainer>
          {wishItem.map(el => (
            <WishItem onRemove={onRemove} key={el.productId} wishItem={el} />
          ))}
        </S.WishListContainer>
      )}
    </div>
  );
};

export default MyPageWish;
