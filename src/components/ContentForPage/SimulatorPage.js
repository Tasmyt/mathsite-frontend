import React, { useState } from 'react';
import CustomList from 'components/customList/CustomList';
import {  
  ListSection,
  SwitchThemeButton,
  ThemeButton,
  ThemeDiv1  
} from 'components/customList/customList.styled';
import useWindowWidth from 'hooks/useWindowWidth';
import { useSimulators } from 'context/SimulatorsContext';
import { CardBottomDiv, CardDiv, CardLink, CardMainDiv, CardTopDiv, StyledIconCard, TextBottom, TextConteiner, TextTop } from './contentPage.styled';
import { GoMortarBoard } from "react-icons/go";

const SimulatorPage = ({ topics }) => { 
    
  const { simulators } = useSimulators();
  const [selectedSimulatorName, setSelectedSimulatorName] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);  
  const windowWidth = useWindowWidth();

  const handleClick = simulator => {
    setSelectedSimulatorName(simulator);
    if (openMenu) setTimeout(() => setOpenMenu(false), 50);
  };
// тут оформлюємо div2, тобто контент для відображення 
  const renderSimulatorItem = exercis => (
    <CardDiv key={exercis._id}>
      <CardTopDiv className='card-top' >
        <div>
          <StyledIconCard> <GoMortarBoard /></StyledIconCard>
          <TextTop> {exercis.title} </TextTop> 
        </div>          
      </CardTopDiv>
      <CardBottomDiv className='card-bottom'>
        <TextConteiner>
          <TextBottom>{exercis.description}</TextBottom>
          <CardLink to={`${exercis.url}`} target="_blank">Посилання на ресурс</CardLink>
        </TextConteiner>
        
      </CardBottomDiv>
    </CardDiv>
  );

  const selectedSimulators = simulators.filter(
    simulator => simulator.name === selectedSimulatorName
  );

  return (
    <>
      {windowWidth <= 576 ? (
        <SwitchThemeButton onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? 'Відкрити список тем' : 'Закрити список тем'}
        </SwitchThemeButton>
      ) : null}

      <ListSection>
        <ThemeDiv1 $isopenmenu={openMenu}>
          <CustomList
            items={topics}
            renderItem={topic => (
              <ThemeButton key={topic} onClick={() => handleClick(topic)}>
                {topic}
              </ThemeButton>
            )}
          />
        </ThemeDiv1>

        <CardMainDiv>
            {selectedSimulators.map(simulator => renderSimulatorItem(simulator))}
        </CardMainDiv>

      </ListSection>
    </>
  );
}
export default SimulatorPage;