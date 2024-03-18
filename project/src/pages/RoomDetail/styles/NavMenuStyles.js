import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.btnHover};
  background: ${(props) => props.theme.white};
  position: ${(props) => props.isFixed ? 'fixed' : 'relative'};
  top: ${(props) => props.isFixed ? '0' : 'auto'};
  display:${(props) => props.isFixed ? 'block' : 'none'};
  left: 0;
  z-index: 10;
  `;

export const NavWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

export const NavList = styled.li`
  padding: 0 16px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${(props) => (props.isClicked ? props.theme.blue : "transparent")};
  font-weight: ${(props) => (props.isClicked ? "bold" : "normal")};

  a {
    color: ${(props) => (props.isClicked ? props.theme.blue : props.theme.black)};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  &:hover a {
    color: ${(props) => (props.isClicked ? props.theme.blue : "blue")};
  }
`;