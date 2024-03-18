import React from "react";
import 로고 from "../assets/로고.png";
import 메뉴 from "../assets/메뉴.png";
import 프로필 from "../assets/프로필.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 100px;
  height: 23px;
  margin: 25px 25px 22px 25px;
`;

const Menu = styled.img`
  width: 25px;
  height: auto;
  padding: 5px;
`;
const Profile = styled.img`
  width: 30px;
  height: auto;

  padding: 8px 4px 6px 4px;
`;
export const LogoIcon = () => <Logo src={로고} alt="로고" />;
export const MenuIcon = () => <Menu src={메뉴} alt="메뉴" />;
export const ProfileIcon = () => <Profile src={프로필} alt="프로필" />;