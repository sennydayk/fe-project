import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const onClickConfirmButton = () => {
    alert("로그인 되었습니다.");
    navigate("/home");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  // 이메일과 비밀번호 입력값이 비어있지 않은지 확인하는 함수
  const isInputValid = () => {
    return email.trim() !== "" && pw.trim() !== "";
  };

  return (
    <div className="container">
      <div className="page">
        <div className="titleWrap">이메일로 시작하기</div>
        <div className="contentWrap" style={{ marginBottom: "30px" }}>
          <div className="inputTitle">이메일</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="abc@gccompany.co.kr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            onClick={onClickConfirmButton}
            className="bottomButton"
            disabled={!isInputValid()} // 입력값이 비어있으면 버튼 비활성화
          >
            로그인
          </button>
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
              color: "gray",
            }}
          >
            계정이 없으신가요?
          </div>
          <div
            onClick={navigateToSignup}
            style={{
              cursor: "pointer",
              marginTop: "15px",
              fontSize: "17px",
              display: "flex",
              justifyContent: "center",
              fontWeight: "600",
            }}
          >
            이메일로 회원가입
          </div>
        </div>
      </div>
    </div>
  );
}
