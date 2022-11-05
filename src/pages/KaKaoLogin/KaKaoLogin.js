import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const KaKaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  const getKakaoToken = () => {
    fetch(`http://10.58.52.112:3000/users/auth/kakao/callback?code=${code}`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          navigate("/");
        } else {
          alert("로그인 정보를 다시 확인하세요");
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    getKakaoToken();
  }, []);

  return <></>;
};

export default KaKaoLogin;
