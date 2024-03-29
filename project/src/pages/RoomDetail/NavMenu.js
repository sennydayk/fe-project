import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles/NavMenuStyles';
import PrimaryBtn from '../../components/Button/PrimaryBtn';


const NavMenu = () => {
  const navListItems = useMemo(() => [
    { id: 'overview', title: '개요' },
    { id: 'facilities', title: '서비스 및 부대시설' },
    { id: 'rooms', title: '객실' },
    { id: 'location', title: '위치' }
  ], []);

  const [isFixed, setIsFixed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let visibleSectionId = 'overview';

      for (let i = navListItems.length - 1; i >= 0; i--) {
        const navListItem = navListItems[i];
        const section = document.getElementById(navListItem.id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 100) {
            visibleSectionId = navListItem.id;
            break;
          }
        }
      }

      setActiveMenu(visibleSectionId);
      setIsFixed(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navListItems]);

  const handleNavClick = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const navMenu = document.querySelector('.Nav');
      const navMenuHeight = navMenu ? navMenu.offsetHeight : 0;
      window.scrollTo({
        top: section.offsetTop - navMenuHeight,
        behavior: 'smooth'
      });
    }

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
                onClick={(event) => handleNavClick(navListItem.id, event)}
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