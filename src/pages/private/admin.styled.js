import styled from 'styled-components';
import { colors, fontWeights } from 'components/global.styled';
import { NavLink } from 'react-router-dom';

export const AdminSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 100px;     

  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  }
`;

export const AdminSectionCourse = styled.section`
  display: block;
  justify-content: center; 
  padding-left: 0;  

  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  }
`;

export const AdminCourseUl = styled.ul`
  display: flex;  
`;

export const AdminButton = styled.button`
  margin-right: 20px;
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
export const AdminLink = styled(NavLink)`
  margin-right: 12px;
  text-decoration: none;
  border-radius: 12px;
  padding: 4px 16px;  
  border: 1px solid ${colors.outline};
  background: ${colors.snow};
  color: ${colors.black};

  cursor: pointer;
  &:hover,
  &:focus, &:active, &.active {
    border: 1px solid ${colors.accent};
    background: ${colors.accent};
    color: ${colors.snow};
  }
  @media (max-width: 576px) {
    margin-right: 8px;
    font-size: 16px;
  }
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  position: sticky;
  top: 88px;   
  background-color: ${colors.snow} ;  
  /* z-index: 3;   */

  &::before, &::after {
    content: '';
    position: absolute;
    border: 1px solid ${colors.accent};
    
    pointer-events: none;
    z-index: 3;
  }
  &::before {
    top: 0;
    left: -1px;
    right: -1px;
    bottom: 0;
  }
  &::after {
    top: 1px;
    left: 0;
    right: 0;
    bottom: 1px;
  }
`;


export const Td = styled.td`
  border: 2px solid ${colors.basic};
  padding: 4px;
  &:nth-of-type(6n+2) {
    background-color:  #ADD8E6;
  }
  &:nth-of-type(6n+3) {
    background-color:  #ADD8E6;    
  }
  &:nth-of-type(6n+4) {
    background-color:  #ADD8E6;
  }
`;

export const FixedTh = styled(Th)`
  position: sticky;
  left: 10px;
  z-index: 1;
  background: #fff;
  &::before, &::after {
    content: '';
    position: absolute;
    border: 1px solid ${colors.accent};
    
    pointer-events: none;
    /* z-index: 5; */
  }
  &::before {
    top: 0;
    left: -1px;
    right: -1px;
    bottom: 0;
  }
  &::after {
    top: 1px;
    left: 0;
    right: 0;
    bottom: 1px;
  }  
`;

export const FixedTd = styled(Td)`
  position: sticky;
  left: 10px;
  background: #fff;
  border-style: none;
  &::before, &::after {
    content: '';
    position: absolute;
    border: 1px solid ${colors.accent};
    
    pointer-events: none;
    /* z-index: 5; */
  }
  &::before {
    top: 0;
    left: -1px;
    right: -1px;
    bottom: 0;
  }
  &::after {
    top: 1px;
    left: 0;
    right: 0;
    bottom: 1px;
  }
  /* z-index: 3; */
`;
export const DataInput = styled.input`
 width: 60px;
 text-align: center;
 font-size: 16px;

 &:focus {
    border-color: ${colors.accent};
    outline: none;
 }
`;
export const DataButton = styled.button`  
  font-size: 16px;
  
  cursor: pointer;
  &:hover {
    background-color: ${colors.accent}; 
    color: ${colors.snow};    
    border-color: ${colors.accent};
    outline: none;
  }   
`
