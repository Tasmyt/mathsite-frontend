import { StyledIcon } from 'components/global.styled';
import {
  ButtonIcons,  
  DropdownContent,
  Menu,  
  SendingCourse,   
  SubMenuItem,
} from './AppBar.styled';
import { FiChevronDown , FiChevronUp  } from 'react-icons/fi';
import React, { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside ';


const TabletSubMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [mathIsOpen, setMathIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  
  const toggleSubMenu = () => {
    setOpen(!isOpen);
  };   
  const toggleMathMenu = () => {
    setMathIsOpen(!mathIsOpen);
  };
  const toggleInfoMenu = () => {
    setInfoIsOpen(!infoIsOpen);
  };  
  const closeMenu = () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, closeMenu);
  return (
    <>
      {
        <Menu $isopen={isOpen} ref={menuRef} >          
          <SubMenuItem>
            <ButtonIcons onClick={toggleMathMenu}> Математика <StyledIcon>{mathIsOpen ? <FiChevronUp  /> : <FiChevronDown  />}</StyledIcon></ButtonIcons>
            <DropdownContent $isopen={mathIsOpen}>
              <SendingCourse to="/mathematics1" onClick={closeMenu}>
                {' '}
                Курс 1{' '}
              </SendingCourse>
              <SendingCourse to="/mathematics2" onClick={closeMenu}>
                {' '}
                Курс 2{' '}
              </SendingCourse>
            </DropdownContent>
          </SubMenuItem>

          <SubMenuItem>
            <ButtonIcons onClick={toggleInfoMenu}> Інформатика <StyledIcon>{infoIsOpen ? <FiChevronUp  /> : <FiChevronDown  />}</StyledIcon></ButtonIcons>
            <DropdownContent $isopen={infoIsOpen}>
              <SendingCourse to="/informatics1" onClick={closeMenu}>
                {' '}
                Курс 1{' '}
              </SendingCourse>
              <SendingCourse to="/informatics2" onClick={closeMenu}>
                {' '}
                Курс 2{' '}
              </SendingCourse>
            </DropdownContent>
          </SubMenuItem>
          
        </Menu>
      }
      <ButtonIcons type="button" onClick={toggleSubMenu}>
        Курси
        <StyledIcon>{isOpen ? <FiChevronUp  /> : <FiChevronDown  />}</StyledIcon>
      </ButtonIcons>
    </>
  );
};

export default TabletSubMenu;