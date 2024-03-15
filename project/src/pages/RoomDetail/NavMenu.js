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
  const [activeMenu, setActiveMenu] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const visibleSection = navListItems.find(navListItem => {
        const section = document.getElementById(navListItem.id);
        if (!section) return false;
        const { top, bottom } = section.getBoundingClientRect();
        return top <= 0 && bottom > 0;
      });
      setActiveMenu(visibleSection ? visibleSection.id : 'overview');
      setIsFixed(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navListItems]);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsFixed(true);
  };

  return (
    <S.Nav isFixed={isFixed}>
      <S.NavWrap>
        <S.NavUl>
          {navListItems.map((navListItem) => (
            <S.NavList
              key={navListItem.id}
              isClicked={activeMenu === navListItem.id}
            >
              <a
                href={`#${navListItem.id}`}
                onClick={() => handleNavClick(navListItem.id)}
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