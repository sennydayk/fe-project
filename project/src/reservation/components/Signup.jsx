import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
//import { Styled } from "styled-components;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const payload = {
      email: email,
      password: password,
      nickname: userNickname,
      name: username,
      phone: phoneNumber,
      role: role,
    };

    try {
      const response = await fetch("요청지 주소", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log("성공! 이메일주소: " + data.email);
        navigate("/login");
      } else if (response.status === 400) {
        alert(`회원가입 실패: ${data.email}`);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h1>필수 정보 입력</h1>
        <h2>가입을 위해 필수 정보를 입력해 주세요</h2>

        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">이름</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone-number">전화번호</label>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="role-selection">
          <label>성별</label>
          <div>
            <input
              type="radio"
              id="man"
              value="user"
              checked={role === "user"}
              onChange={() => setRole("user")}
            />
            <label htmlFor="customer">남자</label>
          </div>
          <div>
            <input
              type="radio"
              id="woman"
              value="user"
              checked={role === "user"}
              onChange={() => setRole("user")}
            />
            <label htmlFor="seller">여자</label>
          </div>
        </div>

        <button id="signup-button" onClick={handleSignup}>
          회원가입
        </button>

        <p className="login-link">
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
