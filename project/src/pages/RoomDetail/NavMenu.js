import React, { useEffect, useState } from 'react';
import * as S from './styles/NavMenuStyles';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const NavMenu = () => {
  const navListItems = [
    { id: 'overview', title: '개요' },
    { id: 'facilities', title: '서비스 및 부대시설' },
    { id: 'rooms', title: '객실' },
    { id: 'location', title: '위치' },
    { id: 'reviews', title: '리뷰' }
  ];

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsFixed(true);
  };

  return (
    <S.Nav isFixed={isFixed}>
      <S.NavWrap>
        <S.NavUl>
          {navListItems.map((navListItem) => (
            <S.NavList
              key={navListItem.id}
            >
              <a
                href={`#${navListItem.id}`}
                onClick={handleNavClick}
              >
                {navListItem.title}
              </a>
            </S.NavList>
          ))}
        </S.NavUl>

        <div>
          <PrimaryBtn text='객실선택' />
        </div>
      </S.NavWrap>


    </S.Nav>
  );
};

export default NavMenu;