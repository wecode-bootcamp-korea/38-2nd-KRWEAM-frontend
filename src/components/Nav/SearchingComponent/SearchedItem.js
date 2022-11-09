import React from "react";
import * as S from "./SearchedItemStyle";

const SearchedItem = ({ item }) => {
  return (
    <S.SearchedItemContainer>
      <S.SearchedItemImg src={item.thumbnail} />
      <S.SearchedItemTextContainer>
        <S.SearchedItemEngName>{item.english_name}</S.SearchedItemEngName>
        <S.SearchedItemKorName>{item.korean_name}</S.SearchedItemKorName>
      </S.SearchedItemTextContainer>
    </S.SearchedItemContainer>
  );
};

export default SearchedItem;
