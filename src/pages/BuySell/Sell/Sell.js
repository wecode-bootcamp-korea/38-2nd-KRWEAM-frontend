import React from "react";
import { useLocation, useParams } from "react-router-dom";
import DealSteps from "../components/DealSteps";

const Sell = () => {
  const location = useLocation();
  const { productId } = useParams();

  return <DealSteps location={location} productId={productId} />;
};

export default Sell;
