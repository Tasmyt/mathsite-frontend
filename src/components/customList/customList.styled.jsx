import styled from 'styled-components';
import { colors, fontWeights } from '../global.styled';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  max-width: 92vw;
  margin-top: 20px;
   @media (max-width: 912px) {
    display: block;    
    margin: 20px;
  }
  @media (max-width: 576px) {    
    max-width: 100vw;    
  }
`;
export const ThemeDiv1 = styled.div`    
  border-right: 1px solid ${colors.outline};
  width: 30vw;
  height: 70vh;
  padding: 0 20px 20px 20px;
  text-align: left;
  overflow: scroll;  
  @media (max-width: 912px) {
    padding: 8px 0;
    width: 24vw;    
  }
  @media (max-width: 576px) {
  position: absolute;
  top: 0;
  left: -16px;
  width: 240px;  
  padding-left: 12px;
  background: ${colors.snow};  
  border-radius: 10px;
  border: 2px solid ${colors.accent};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateX(${props => (props.$isopenmenu ? 0 : '-240px')});
  transition: transform 1s;
  z-index: 5;    
  } 
`;
export const ThemeDiv2 = styled.div`    
  width: 70vw;
  height: 70vh;
  
  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  } 
`;

export const LectureFrame = styled.iframe`
  width: 64vw;
  height: 70vh;
  
  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    width: 100vw;
  }
`;
export const MathInfH1 = styled.h1`
  margin-bottom: 0;
  line-height: 3;
  font-weight: ${fontWeights.medium};
  font-size: 48px;
  text-decoration: underline;
  text-decoration-color: ${colors.accent};
  @media (max-width: 912px) {
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.5;
  }
  @media (max-width: 576px) {
    padding: 0;
    font-size: 24px;
  }
`;
export const MathInfNav = styled.nav`
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 912px) {
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;
export const MathInfNavLink = styled(Link)`
  margin-right: 16px;
  text-decoration: none;
  border-radius: 40px;
  padding: 8px 16px;
  width: 98px;
  height: 40px;
  border: 1px solid ${colors.outline};
  background: ${colors.snow};
  color: ${colors.black};

  cursor: pointer;
  &:hover,
  &:focus {
    border: 1px solid ${colors.accent};
    background: ${colors.accent};
    color: ${colors.snow};
  }
  @media (max-width: 576px) {
    margin-right: 8px;
    font-size: 16px;
  }
`;
export const Img = styled.img`
  width: 50vw;
  margin: 0 auto;
   @media (max-width: 912px) {
   width: 40vw; 
  } 
`;
export const ListSection = styled.section`
  display: flex;
  padding: 0;
  border-top: 1px solid ${colors.outline};
  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
   position: relative;
    font-size: 16px;
  } 
`;
export const ThemeButton = styled.button`
  display: flex;
  padding: 8px 12px;
  width: 230px;
  justify-content: space-between;
  text-align: left;
  border: 1px solid ${colors.snow};
  border-radius: 10px;
  background-color: ${colors.snow};
  font-weight: ${fontWeights.medium};
  font-size: 24px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${colors.bluetext};
  cursor: pointer;
   @media (max-width: 912px) {
    font-size: 16px; 
    padding: 4px;
    width: 150px;
  } 
  @media (max-width: 576px) {    
      
  } 
  &:hover, &:focus 
   {
    background: linear-gradient(90deg, #62a7f8 0%, #caddfe 100%);
    color: ${colors.snow};
    
  }
  `
  export const SwitchThemeButton = styled.button`
  padding: 4px 8px;
  border: 1px solid ${colors.accent};
  font-size: 16px;
  font-weight: ${fontWeights.medium};
  background-color: ${colors.snow};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.accent}; 
    color: ${colors.snow};
  }   
`
  export const ThemeLi = styled.li`    
  margin: 8px 0;
  
  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
   margin-bottom: 16px; 
  } 
`;
export const ThemeLink = styled(Link)`
    margin-left: 20px;
    padding: 0 16px;
    text-decoration: none;
    color: ${colors.black}; 
    &:hover, &:focus 
   {
    background:  #caddfe;
    
  } 
  @media (max-width: 912px) {
    margin-left: 0;
    padding: 0;
  }
  @media (max-width: 576px) {
    
  } 
`