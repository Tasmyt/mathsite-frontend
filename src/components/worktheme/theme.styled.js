import styled from 'styled-components';


export const MainDiv = styled.div`
  display: flex; 

  @media (max-width: 912px) {
    display: block;
   height: 100%;
   overflow-y: scroll;
  }
  @media (max-width: 576px) {
   display: block;
   height: 100%;
   overflow-y: scroll;
  }
`;
export const SubMainDiv = styled.div`
  display: block;
  width: 50%;
  height: 68vh;
  padding: 0 20px;
  text-align: left;
  overflow-y: scroll;  

  @media (max-width: 912px) {
    width: 100%;
    height: auto;
    overflow-y: visible;
  }
  @media (max-width: 576px) {
   width: 100%;
  }
`;
export const TitleThemeH3 = styled.h3`
    font-size: 24px;
  @media (max-width: 912px) {
   font-size: 20px;
  }
  @media (max-width: 576px) {
    
    font-size: 16px;
  }
`;