import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, fontWeights } from 'components/global.styled';

export const AddWorkH1 = styled.h1`
  padding: 0 5vw 0 27vw;
  line-height: 2;
  font-weight: ${fontWeights.medium};
  font-size: 48px;
  text-decoration: underline;
  text-decoration-color: ${colors.accent};
  @media (max-width: 912px) {
    font-size: 36px;
    line-height: 1.5;
  }
  @media (max-width: 576px) {
    padding: 0;
    font-size: 24px;
  }
`;
export const TitleH3 = styled.h3`

  @media (max-width: 912px) {
    font-weight: ${fontWeights.semiBold};
  }
  @media (max-width: 576px) {
    font-weight: ${fontWeights.medium};
    font-size: 16px;
  }
`;

export const AddWorkSection = styled.section`
  display: flex;  
  border-top: 1px solid ${colors.outline};
  @media (max-width: 912px) {
    padding: 0 24px;
  }
  @media (max-width: 576px) {
    padding: 0 8px;
    font-size: 16px;
  } 
`;
export const AddWorkDiv1 = styled.div`    
  border-right: 1px solid ${colors.outline};
  width: 25vw;
  height: 100vh;
  padding: 24px;
  text-align: left;
  font-weight: ${fontWeights.bold};
  font-size: 24px; 
  @media (max-width: 912px) {
    padding: 8px 0;
    font-weight: ${fontWeights.semiBold};
  }
  @media (max-width: 576px) {
    font-weight: ${fontWeights.medium};
    font-size: 14px;
  } 
`;
export const AddWorkUl = styled.ul`    
  margin: 0;
  padding: 0; 
`;
export const AddWorkLi = styled.li`    
  margin-bottom: 20px;
  
 
  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
   margin-bottom: 16px; 
  } 
`;
export const AddWorkLink = styled(Link)`
    text-decoration: none;
    color: ${colors.bluetext};  
`
export const AddWorkDiv2 = styled.div`
width: 70vw;
height: 80vh;
overflow: scroll;
padding: 24px 24px 32px 24px;
  @media (max-width: 912px) {
    padding: 8px;
  }
  @media (max-width: 576px) {
    
  }    
`
export const ConteinerForList = styled.div`
text-align: left;
  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  }    
`
export const Sentence1 = styled.span`
font-weight: ${fontWeights.bold};
color: ${colors.bluetext};
`;

export const Sentence2 = styled.span`
font-weight: ${fontWeights.semiBold};
`;
export const List = styled.li`
margin-bottom: 20px;

  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  }    
`
 export const SubList = styled.li`
margin: 8px 0;
list-style-type: circle;
  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }    
`
  export const TextList = styled.p`
  margin: 12px 0;

  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  }    
` 
export const ListCurrentMonth = styled.li`
    width: 100%;
    color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#679fd6' : 'black')};    
    padding: 0;
    margin: 8px 0;
    border-radius: 5px;
    &:hover {
      color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#F79C42' : 'black')};
    }
`;
export const ButtonCurrentMonth = styled.button`
  margin: 0 8px;    
  padding: 6px 0px;
  width: 162px;
  height: 32px;
  border: 1px solid ${colors.accent};   
  border-color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#F79C42' : 'black')};
  border-radius: 28px;
  background-color: ${colors.snow};
  font-weight: ${fontWeights.medium};
  font-size: 16px;
  color: ${colors.black};
  cursor: pointer;
   @media (max-width: 912px) {
    font-size: 12px; 
     
  } 
  @media (max-width: 576px) {
    
    padding: 0;  
  } 
  &:hover 
   {
    background-color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#F79C42' : '#fff')};
    color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#fff' : 'black')};
    border-color:  ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#F79C42' : 'black')};
  }
  `
export const DivLine = styled.div`
 margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &::before {
    content: '';
  background-color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#679fd6' : 'black')};;
  width: 25vw;
  height: 1px;     
  }  
`;
export const WorkSample = styled.div`
 margin: 120px 0 ;
   
 
`;
