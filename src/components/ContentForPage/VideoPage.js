import React, { useState } from 'react';
import CustomList from 'components/customList/CustomList';
import {  
  ListSection,
  SwitchThemeButton,
  ThemeButton,
  ThemeDiv1,  
} from 'components/customList/customList.styled';
import { CardBottomDiv, CardDiv, CardLink, CardMainDiv, CardTopDiv, StyledIconCard, TextBottom, TextConteiner, TextTop } from './contentPage.styled';
import { GoMortarBoard } from "react-icons/go";
import useWindowWidth from 'hooks/useWindowWidth';
import { useVideos } from 'context/VideosContext';

const VideoPage = ({ topics }) => {
  
  const { videos } = useVideos();
  const [selectedVideoName, setSelectedVideoName] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);  
  const windowWidth = useWindowWidth();

  const handleClick = video => {
    setSelectedVideoName(video);
    if (openMenu) setTimeout(() => setOpenMenu(false), 50);
  };
// тут оформлюємо div2, тобто контент для відображення 
  const renderVideoItem = video => (
    <CardDiv key={video._id}>
      <CardTopDiv className='card-top' >
        <div>
          <StyledIconCard> <GoMortarBoard /></StyledIconCard>
          <TextTop> {video.title} </TextTop> 
        </div>          
      </CardTopDiv>
      <CardBottomDiv className='card-bottom'>
        <TextConteiner>
          <TextBottom>{video.description}</TextBottom>
          <CardLink to={`${video.url}`} target="_blank">Посилання на ресурс</CardLink>
        </TextConteiner>
        
      </CardBottomDiv>
    </CardDiv>
  );
  const selectedVideos = videos.filter(
    video => video.name === selectedVideoName
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

        <CardMainDiv> <p>Контент з'явиться незабаром</p>
            {selectedVideos.map(video => renderVideoItem(video))}
        </CardMainDiv>

      </ListSection>
    </>
  );
}
export default VideoPage;