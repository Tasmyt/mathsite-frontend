import styled from 'styled-components';
import { colors, fontWeights } from '../global.styled';
import { Link } from 'react-router-dom';

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 1440px;
  justify-content: space-between;
  @media (max-width: 912px) {
    max-width: 912px;
  }
  @media (max-width: 576px) {
    width: 576px;
  }
`;
export const Logo = styled.img`
  display: inline-block;
  vertical-align: baseline;
  width: 132px;
  @media (max-width: 912px) {
    width: 72px;
  }
`;
export const Icons = styled.img`
  display: inline-block;
  margin-left: 24px;
  vertical-align: baseline;
  width: 56px;
  @media (max-width: 912px) {
    width: 32px;
  }
  @media (max-width: 576px) {
    margin-left: 12px;
  }
`;

export const DropdownContent = styled.div`
  opacity: ${({ $isopen }) => $isopen ? '1' : '0'};
  transition: opacity 0.5s ease-in-out; 
  position: absolute;
  transform: translateY(25%);   
  margin-left: 136px;
  border: 1px solid ${colors.outline};
  background-color: white; 
  border-radius: 8px; 
  overflow: hidden;    
`;
export const ButtonIcons = styled.button`
  border: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 8px 12px;
  background-color: ${colors.snow};
  border-radius: 8px;
  @media (max-width: 912px) {
    font-size: 16px;    
    padding: 0px 8px ;
    height: 24px;   
  }
  @media (max-width: 576px) {
    background-color: rgba(0, 0, 0, 0);
    padding: 0px 12px 4px;
  }
  &:hover, 
  &:focus {
    color: ${colors.accent}; 
  }
  cursor: pointer; 
`;
export const DivMenu = styled.div`
  position: relative;
  @media (max-width: 912px) {
    display: inline-block;
    
  }
`;
export const Menu = styled.ul`
  position: absolute;
  top: 24px;
  padding: 0;
  margin-left: 10px;
  opacity: ${props => (props.$isopen ? 1 : 0)};
  transform: translateY(${props => (props.$isopen ? 0 : '-10px')});
  visibility: ${props => (props.$isopen ? 'visible' : 'hidden')};
  transition: all 1s;
  border: 1px solid ${colors.outline};
  background-color: white; 
  border-radius: 8px;      
  @media (max-width: 912px) {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;     
    border: none;
  }
`;
export const SubMenuItem = styled.li`
  list-style: none;
  margin: 4px 0;
  padding: 0;
  display: flex;
  align-items: center;
  
  @media (max-width: 912px) {
    margin-bottom: 12px;    
  }
  @media (max-width: 576px) {
    transform: translate(116px, -24px);
  }
`;

export const SubMenuRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
 
`;
export const DivMenuTablet = styled.div`
  display: flex;
`;
export const MobilMenu = styled.ul`
  position: absolute;
  top: -10px;
  left: -210px;
  width: 200px;
  height: 100vh;
  padding-left: 12px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid ${colors.accent};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateX(${props => (props.$isopen ? '210px' : 0)});
  transition: transform 1s;
`;
export const MobilLi = styled.li`
  margin: 20px 0;
`;
export const SendingMobil = styled(Link)`
  display: flex;
  width: 132px;
  align-items: center;
  padding: 0 12px;
  font-weight: ${fontWeights.medium};
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    border: 1px solid ${colors.accent};
    border-radius: 8px;
  }
`;

export const SendingCourse = styled(Link)`
  display: flex;
  width: 132px;
  align-items: center;
  padding: 0 12px;
  font-weight: ${fontWeights.medium};
  text-decoration: none;
  color: black;  
   @media (max-width: 912px) {  
  width: 100px;
  }
  &:hover,
  &:focus {
    background-color: ${colors.accent};   
    @media (max-width: 912px) {
    border: none;    
  }
  }
`;
export const SendingMobilCourse = styled(Link)`
  display: flex;
  width: 132px;
  align-items: center;
  padding: 0 24px;
  font-weight: ${fontWeights.medium};
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    background-color: ${colors.accent};
    border-radius: 8px; 
  }
`;
