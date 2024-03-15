import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon, ProfileIcon, LogoIcon } from "./Icons";

export const HeaderStyle = styled.div`
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 0 160px;
  justify-content: space-between;
`;

export const HeaderIocn = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #f0f0f0;
  border-radius: 28px;
  padding: 0 10px 0 10px;
  margin: 16px 20px;
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
      <HeaderWrapper>
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
      </HeaderWrapper>
    </HeaderStyle>
  );
}

export default Header;