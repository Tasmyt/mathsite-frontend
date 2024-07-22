import React from 'react';
import CustomList from './CustomList';
import { ThemeButton } from './customList.styled';
import { StyledIcon } from 'components/global.styled';
import { FiChevronDown , FiChevronUp  } from 'react-icons/fi';


export const renderTopicItem = (topic, items, renderItem, isOpen, onToggle) => {
  const matchingItems = items.filter(item => item.name === topic);
  return (
    <div key={topic}>
      <ThemeButton onClick={onToggle}>{topic}: <StyledIcon>{isOpen ? <FiChevronUp  /> : <FiChevronDown  />}</StyledIcon></ThemeButton>
      {isOpen && (
        <CustomList
          items={matchingItems.length > 0 ? matchingItems : ['Елементи не знайдено']}
          renderItem={matchingItems.length > 0 ? renderItem : null}
        />
      )}
    </div>
  );
};