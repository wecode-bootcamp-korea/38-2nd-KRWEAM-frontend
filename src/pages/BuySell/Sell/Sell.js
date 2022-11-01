import React from "react";
import { useLocation, useParams } from "react-router-dom";
import DealSteps from "../components/DealSteps";

const Sell = () => {
  const location = useLocation();
  const { id } = useParams();

  return <DealSteps location={location} productId={id} />;
};

export default Sell;
