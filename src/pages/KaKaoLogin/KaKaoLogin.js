import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { APIKEY, REDIRECT_URI } from "../../config";

const KaKaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${APIKEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        } else {
          navigate("/");
        }
      })
      .then(navigate("/"));
  };

  useEffect(() => {
    if (!code) return;
    getKakaoToken();
  }, []);

  return <></>;
};

export default KaKaoLogin;
