import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 입력값이 모두 채워졌을 때 확인 버튼 활성화
    if (email && username && phoneNumber && password && confirmPassword) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [email, username, phoneNumber, password, confirmPassword]);

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("회원가입 되셨습니다.");
    navigate("/login");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="page">
        <form className="signup-form" onSubmit={handleSignup}>
          <h1 className="infomation">필수 정보 입력</h1>
          <h2 className="info">가입을 위해 필수 정보를 입력해 주세요</h2>

          <div>
            <label className="email" htmlFor="email">
              이메일
            </label>
          </div>
          <div>
            <input
              className="emailput"
              type="email"
              id="email"
              value={email}
              placeholder="abcd@naver.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="username" htmlFor="username">
              이름
            </label>
          </div>
          <div>
            <input
              className="nameput"
              type="text"
              placeholder="홍길동"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="phone-number" htmlFor="phone-number">
              전화번호
            </label>
          </div>
          <div>
            <input
              className="phoneput"
              type="text"
              id="phone-number"
              value={phoneNumber}
              placeholder="휴대전화 번호 입력"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="password" htmlFor="password">
              비밀번호
            </label>
          </div>
          <div>
            <input
              className="passwordput"
              type="password"
              id="password"
              value={password}
              placeholder="최소 8자 이상"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="confirm-password" htmlFor="confirm-password">
              비밀번호 확인
            </label>
          </div>
          <div>
            <input
              className="passwordfirmput"
              placeholder="위 비밀번호와 동일하게 입력"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "50px", marginBottom: "30px" }}>
            <button
              className={isButtonActive ? "check active" : "check"}
              id="signup-button"
              onClick={handleSignup}
              disabled={!isButtonActive}
            >
              확인
            </button>
          </div>

          <div
            className="login-link"
            onClick={navigateToLogin}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>이미 회원이신가요?</div>
            <div>로그인</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
