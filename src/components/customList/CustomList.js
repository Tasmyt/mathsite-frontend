import { AddWorkUl } from 'pages/private/addWork.styled';
import React from 'react';
import { ThemeLi } from './customList.styled';

const CustomList = ({ items, renderItem }) => {
  return (
    <AddWorkUl>
      {items.map((item, index) => (
        <ThemeLi key={index}>
          {renderItem ? renderItem(item) : item}
        </ThemeLi>
      ))}
    </AddWorkUl>
  );
};

export default CustomList;