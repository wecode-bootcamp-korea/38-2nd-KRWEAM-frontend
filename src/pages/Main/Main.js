import React, { useEffect, useState } from "react";
import MainLayout from "./MainLayout";

const Main = () => {
  const [justDropItem, setJustDropItem] = useState([]);
  useEffect(() => {
    fetch("/data/mainmock.json")
      .then(res => res.json())
      .then(data => setJustDropItem(data));
  }, []);

  return <MainLayout justDropItem={justDropItem} />;
};

export default Main;
