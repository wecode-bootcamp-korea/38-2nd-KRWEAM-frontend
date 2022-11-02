import React, { useEffect, useState } from "react";
import useItemInfo from "../useItemInfo";
import useDealType from "../useDealType";
import { api } from "../../config";
import { DealContext } from "../../../context/DealContext";
import SizeSelect from "./DealStepsComps/SizeSelect";
import Payment from "../components/DealStepsComps/Payment";
import Bid from "../components/DealStepsComps/Bid";
import * as S from "./styled.DealSteps";

const DealSteps = ({ location, productId }) => {
  const itemInfo = useItemInfo(`${api.deal}/${productId}`);

  const { dealType, address, paymentType, price } = useDealType(
    location,
    itemInfo
  );
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [clickedBtn, setClickedBtn] = useState("");
  const [wishPrice, setWishPrice] = useState("");
  const [steps, setSteps] = useState(0);

  const pageTitle = {
    0: `${dealType}하기`,
    1: "입찰하기",
    2: `${address}/${paymentType}`,
  };

  const dealStepsComps = {
    0: <SizeSelect />,
    1: <Bid />,
    2: <Payment />,
  };

  useEffect(() => {
    const intPrice = parseInt(price);
    price && setUpdatedPrice(intPrice);
  }, []);

  return (
    <DealContext.Provider
      value={{
        location,
        itemInfo,
        clickedBtn,
        setClickedBtn,
        setSteps,
        wishPrice,
        setWishPrice,
        updatedPrice,
        setUpdatedPrice,
        SIZES,
      }}
    >
      <S.PageTitle>{pageTitle[steps]}</S.PageTitle>
      <div>{dealStepsComps[steps]}</div>
    </DealContext.Provider>
  );
};

export default DealSteps;

const SIZES = [
  0,
  [
    { id: 1, size: 230 },
    { id: 2, size: 235 },
    { id: 3, size: 240 },
    { id: 4, size: 245 },
    { id: 5, size: 250 },
    { id: 6, size: 255 },
    { id: 7, size: 260 },
    { id: 8, size: 265 },
    { id: 9, size: 270 },
    { id: 10, size: 275 },
    { id: 11, size: 280 },
    { id: 12, size: 285 },
    { id: 13, size: 290 },
    { id: 14, size: 295 },
    { id: 15, size: 300 },
  ],
  [
    { id: 16, size: "XXS" },
    { id: 17, size: "XS" },
    { id: 18, size: "S" },
    { id: 19, size: "M" },
    { id: 20, size: "L" },
    { id: 21, size: "XL" },
    { id: 22, size: "XXL" },
  ],
];
