import React, { useState } from 'react';
import { ButtonIcons, Menu, SendingCourse, SubMenuItem, SubMenuRow } from './AppBar/AppBar.styled';
import { StyledIcon } from './global.styled';
import { FiChevronDown , FiChevronUp  } from 'react-icons/fi';

const DropdownMenu = ({ title, items }) => {

  const [isOpen, setOpen] = useState(false); 

  const toggleSubMenu = () => {
    setOpen(!isOpen);
  };  
  
  return (
    <div>
      <ButtonIcons onClick={toggleSubMenu}>{title}        
        <StyledIcon>{isOpen ? <FiChevronUp  /> : <FiChevronDown  />}</StyledIcon>
      </ButtonIcons>
      { <Menu $isopen={isOpen}> 
            {items.map((item, index) => (
            <SubMenuItem key={index}>
              <SubMenuRow>
                <SendingCourse to={item.link} >{item.text}</SendingCourse>               
              </SubMenuRow>
            </SubMenuItem>
          ))}     
        </Menu>}
    </div>
  );
}

export default DropdownMenu;