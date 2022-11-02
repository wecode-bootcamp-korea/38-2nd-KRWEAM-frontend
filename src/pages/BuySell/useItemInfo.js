import { useEffect, useState } from "react";

export default function useItemInfo(initialAPI = "/data/buyItem.json") {
  const [itemInfo, setItemInfo] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(initialAPI, {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(result => setItemInfo(result.message));
  }, []);

  return itemInfo;
}
