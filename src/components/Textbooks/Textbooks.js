import React, { useState } from 'react';
import { BaseConteiner, Frame, FullscreenButton, Li, Title, Ul, ViewerContainer } from './Textbooks.styled';


const Textbooks = () => {
    const fileNames = ['bevz-matematyka-10-kl.pdf', 'merzlyak-matematyka-10-kl.pdf', 'bevz-matematyka-11-kl.pdf', 'merzlyak-matematyka-11-kl.pdf', 'ryvkind-Informatyka-10-11kl.pdf', 'rechich-veb-tehnology.pdf'];
    
    const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = (index) => {
      if (fullscreen === index) {
        setFullscreen(false);
      } else {
        setFullscreen(index);
      }      
  };
  return (
    <BaseConteiner>
      <Ul >
        {fileNames.map((fileName, index) => (
          <Li key={index} >
            <ViewerContainer className={fullscreen === index ? 'fullscreen' : ''} $fullscreen={fullscreen === index}>
                <Frame id={`iframe-${index}`} src={'../../mathsite-frontend/textbooks/' + fileName} title={fileName} className={fullscreen === index ? 'fullscreen' : ''} />          
                <Title>{fileName}</Title> 
                 <FullscreenButton onClick={() => toggleFullscreen(index)}>
                    {fullscreen === index ? 'Згорнути' : 'Розгорнути'}
                </FullscreenButton>
                             
            </ViewerContainer>  
          </Li>
        ))}
      </Ul>
    </BaseConteiner>
  );
    };

export default Textbooks;