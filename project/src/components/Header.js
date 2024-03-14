import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon, ProfileIcon, LogoIcon } from "./Icons";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 120px -10px 120px;
`;

export const HeaderIocn = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid pointBoxColor:;
  border-radius: 28px;
  padding: 0 10px 0 10px;
  margin: 18px 20px 22px 20px;
`;

export const RightMenu = styled.div`
  display: flex;
  margin: -5x 0 5px 0;
`;

export const MenuText = styled.p`
  padding: 30px 10px 10px 20px;
  font-size: 19px;
  font-weight: 500;
  font-style: normal;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <button
        style={{ padding: "0", border: "none", background: "none" }}
        onClick={() => navigate("/Home")}
      >
        <LogoIcon />
      </button>
      <RightMenu>
        <MenuText>이벤트</MenuText>
        <MenuText>고객센터</MenuText>
        <HeaderIocn>
          <button
            style={{ padding: "0", border: "none", background: "none" }}
            onClick={() => navigate("/Menu")}
          >
            <MenuIcon />
          </button>
          <button
            style={{ padding: "0", border: "none", background: "none" }}
            onClick={() => navigate("/Mypage")}
          >
            <ProfileIcon />
          </button>
        </HeaderIocn>
      </RightMenu>
    </HeaderStyle>
  );
}

export default Header;
