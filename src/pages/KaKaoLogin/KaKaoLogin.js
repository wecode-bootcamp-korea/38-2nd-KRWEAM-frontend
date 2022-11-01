import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { api } from "../../config";

const KaKaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  const getKakaoToken = () => {
    fetch(`${api.base}/users/auth/kakao/callback?code=${code}`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          navigate("/");
          alert("성공적으로 로그인되었습니다.");
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
