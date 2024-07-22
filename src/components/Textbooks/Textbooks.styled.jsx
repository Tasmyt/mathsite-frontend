import { colors, fontWeights } from 'components/global.styled';
import styled from 'styled-components';
export const BaseConteiner = styled.div`    
  
`
export const ViewerContainer = styled.div`

  width: ${props => (props.$fullscreen ? '100vw' : '100%')};
  height: ${props => (props.$fullscreen ? '100vh' : '100%')};
   
  padding: 20px ;
  overflow: hidden;
  background-color: ${colors.basicLight};  
  border-radius: 8px;
  
  position: relative;

  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;    
    width: 100vw;
    height: 100vh;
    z-index: 10;       
  } 
`;
export const Ul = styled.ul`
  display: grid;
  justify-items: center;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-row-gap: 20px;
  @media (max-width: 576px) {
   grid-template-columns:  1fr;
  }
`
export const Li = styled.li`  
  width: 80%; 
  height: min-content;
  /* height: 320px; */
  margin: auto;
`
export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  
  &.fullscreen {
    width: 100vw;
    height: 88vh;
  }  
  
`
export const FullscreenButton = styled.button`
  text-align: center;
  padding: 4px 12px;
  border: none;
  border-radius: 8px;
  z-index: 2;
  .fullscreen & {
    display: block;
    margin: 0 auto;
  }
   &:hover {
   background-color: ${colors.accent}; 
  }
  cursor: pointer; 
`;
export const Title = styled.p`
  padding: 8px 0;
  border-top: 2px solid ${colors.basicDark};  
  font-weight: ${fontWeights.bold};
  font-size: 24px;
  @media (max-width: 912px) {
    font-size: 20px;  
  }
  @media (max-width: 576px) {
    
  }
`