import styled from 'styled-components';
import { colors, fontWeights } from 'components/global.styled';

export const EstimateDiv = styled.div`

/* flex-wrap: wrap;

display: grid;
grid-column-gap: 16px;
grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));

@media (max-width: 912px) {
  grid-template-columns: repeat(auto-fill, minmax(86px, 1fr));
    
  }
@media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); 
    
  }  */
`
export const EstimateUl = styled.ul`

flex-wrap: wrap;
display: grid;
grid-row-gap: 20px;
grid-column-gap: 16px;
grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
justify-items: center;
padding: 0;
margin: 16px auto;
`

export const EstimateLi = styled.li`
border-radius: 11px;
padding: 10px;
width: 89px;
height: 98px;
background: linear-gradient(135deg, #67b0f8 0%, #fff 51.56%, #67b0f8 100%);
@media (max-width: 576px) {
    width: 68px;
    height: 75px;
    padding: 8px 4px;     
  }
`
export const DateP = styled.p`
    font-size: 14px;
    @media (max-width: 576px) {
    font-size: 12px;     
  }
`
export const EstimateP = styled.p`
    font-weight: ${fontWeights.semiBold};
    line-height: 2;
    @media (max-width: 576px) {
     line-height: 1.6;    
  }
`
export const TextP = styled.p`
   font-size: 16px; 
   @media (max-width: 576px) {
    font-size: 12px;     
  }
`
export const ResultDiv = styled.div`
 
border: 2px solid ${colors.accent};
border-radius: 11px;
padding: 10px;
width: 89px;
height: 98px;
background: linear-gradient(135deg, #67b0f8 0%, #fff 51.56%, #67b0f8 100%);
@media (max-width: 576px) {
    width: 68px;
    height: 75px;
    padding: 8px 4px;     
  }
`
export const ResultP = styled.p`
    font-size: 14px;
    font-weight: ${fontWeights.semiBold};
    @media (max-width: 576px) {
    font-size: 12px;     
  }
`
export const Semestr = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.6vw;    
`
export const Add = styled.p`
    padding: 0 auto; 
    font-weight: ${fontWeights.semiBold};
    font-size: 16px;
    color: ${colors.snow};
    @media (max-width: 912px) {
    max-width: 250px;              
      
  } 
    @media (max-width: 576px) {
    font-weight: ${fontWeights.medium};
    font-size: 12px;
    padding: 0 8px ;  
  }   
`
export const ButtonAdd = styled.button`    
  padding: 6px 0px;
  width: 162px;
  height: 32px;
  border: 1px solid ${colors.accent};
  border-radius: 28px;
  background-color: ${colors.snow};
  font-weight: ${fontWeights.medium};
  font-size: 16px;
  color: ${colors.black};
  cursor: pointer;
   @media (max-width: 912px) {
    /* font-size: 12px; */
    padding: 0 8px ;  
  } 
  @media (max-width: 576px) {
    font-size: 12px;
    padding: 0 8px ;  
  } 
  &:hover, 
  &:focus {
    background-color: ${colors.accent};
    color: ${colors.snow};
    border-color:  ${colors.accent}
  }
  `


export const ResultConteiner = styled.div`
  margin: 14px 0;
  padding: 10px;
  width: 112px;
  height: 98px;
  border: 2px solid ${colors.accent};
  border-radius: 11px;
  background: linear-gradient(135deg, #67b0f8 0%, #fff 51.56%, #67b0f8 100%);
  @media (max-width: 576px) {
    width: 80px;
    height: 75px;
    padding: 8px 4px;     
  }
`
export const ResultH3 = styled.h3`
  margin-bottom: 0;
  text-decoration: underline;
  text-decoration-color: ${colors.accent};
  font-weight: ${fontWeights.medium};
  font-size: 24px;
  color: ${colors.snow};
  @media (max-width: 912px) {
    
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
export const ResultSemestrDiv = styled.div`
display: flex; 
/* width: 100%; */
/* justify-content: center;
align-items: center;  */
@media (max-width: 912px) {
  
    
  }
@media (max-width: 576px) {
   
    
  } 
`
export const ResultUl = styled.ul`

flex-wrap: wrap;
display: grid;
grid-row-gap: 20px;
grid-column-gap: 16px;
grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
justify-items: center;
padding: 0;
margin: 16px auto;
max-width: 60%;
@media (max-width: 912px) {
  max-width: 80%;    
  }
@media (max-width: 576px) {
   grid-column-gap: 0px;
   grid-row-gap: 12px;
   grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); 
  } 
`