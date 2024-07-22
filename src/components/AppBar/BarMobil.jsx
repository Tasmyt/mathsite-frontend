import { StyledIcon } from 'components/global.styled';
import { useAuth } from 'hooks';
import {
  ButtonIcons,
  DivMenu,
  MobilLi,
  MobilMenu,
  SendingMobil,
  SendingMobilCourse,
} from './AppBar.styled';
import { FiMenu, FiX } from 'react-icons/fi';
import React, { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside ';

const BarMobil = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setOpen] = useState(false);
  
  const toggleSubMenu = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, closeMenu);

  return (
    <>
      {
        <MobilMenu $isopen={isOpen} ref={menuRef}>
          <MobilLi>
            <SendingMobil to="/" onClick={closeMenu}>
              {' '}
              Головна{' '}
            </SendingMobil>
          </MobilLi>
          <MobilLi>
            <ButtonIcons> Математика </ButtonIcons>
            <DivMenu>
              <SendingMobilCourse to="/mathematics1" onClick={closeMenu}>
                {' '}
                Курс 1{' '}
              </SendingMobilCourse>
              <SendingMobilCourse to="/mathematics2" onClick={closeMenu}>
                {' '}
                Курс 2{' '}
              </SendingMobilCourse>
            </DivMenu>
          </MobilLi>

          <MobilLi>
            <ButtonIcons> Інформатика </ButtonIcons>
            <DivMenu>
              <SendingMobilCourse to="/informatics1" onClick={closeMenu}>
                {' '}
                Курс 1{' '}
              </SendingMobilCourse>
              <SendingMobilCourse to="/informatics2" onClick={closeMenu}>
                {' '}
                Курс 2{' '}
              </SendingMobilCourse>
            </DivMenu>
          </MobilLi>

          <MobilLi>
            <SendingMobil to="/digest" onClick={closeMenu}>
              {' '}
              Довідник{' '}
            </SendingMobil>
          </MobilLi>
          {isLoggedIn && (
            <MobilLi>
              <SendingMobil to="/private" onClick={closeMenu}>
                Ваш кабінет
              </SendingMobil>
            </MobilLi>
          )}
        </MobilMenu>
      }
      <ButtonIcons type="button" onClick={toggleSubMenu}>
        Меню
        <StyledIcon>{isOpen ? <FiX /> : <FiMenu />}</StyledIcon>
      </ButtonIcons>
    </>
  );
};

export default BarMobil;
