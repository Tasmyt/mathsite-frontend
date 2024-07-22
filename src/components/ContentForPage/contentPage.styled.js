import { colors, fontWeights } from 'components/global.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardMainDiv = styled.div`
  width: 70vw;
  height: 70vh;
  padding: 60px; 
  overflow: scroll;
  display: grid;
  flex-wrap: wrap;
  justify-items: center;
  grid-row-gap: 32px; 
  grid-column-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); 

  @media (max-width: 912px) {    
    padding: 40px;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  
    
  }
  @media (max-width: 576px) {
   width: 100vw;
   grid-row-gap: 68px;
  }
`

export const CardDiv = styled.div`
  width: 240px;
  height: 190px;
   /* margin: 40px 20px 0 40px;  */
  transform: translateY(60px);
   &:hover .card-top {
    box-shadow: inset 0 0 60px #f5f5f5,
    inset -20px 0 80px #19b1f8,
    inset -20px 0 300px #19b1f8,
    0 0 50px #fff,
    10px 0 80px #19b1f8;
    transform: translateY(-100px);
    border-radius: 20px 20px 0 0;
    opacity: 0.8;
  }
  &:hover .card-bottom {
    background-color: #f5f5f5;
    transform: translateY(-100px);
    border-radius: 0 0 20px 20px;
    opacity: 1;
  }

  @media (max-width: 912px) {
    width: 200px;
  height: 162px;   
    
  }
  @media (max-width: 576px) {
   
  }
`
export const CardTopDiv = styled.div`
  position: relative;
  padding: 16px;
  background-color: ${colors.accent};
  /* background-color: #333; */
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: 0.4s;
  /* opacity: 0.8; */
  z-index: 1;

  @media (max-width: 912px) {
       
    
  }
  @media (max-width: 576px) {
   
  }
`
export const CardBottomDiv = styled.div`
padding: 8px;
  background-color: #333;
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  border-radius: 20px;
  transition: 0.4s;  
  box-shadow: 0 20px 50px #111;
  transform: translateY(-190px);
  opacity: 0;

  @media (max-width: 912px) {
       
    
  }
  @media (max-width: 576px) {
   
  }
`
export const StyledIconCard = styled.div`  
  color: ${colors.snow};
  font-size: 32px;

  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  }
`
export const TextTop = styled.h2`
  margin: 0;
  color: ${colors.snow};
  font-size: 24px;
  /* padding: 12px 0 0 0; */
  font-weight: ${fontWeights.semiBold};

  @media (max-width: 912px) {
   font-size: 20px; 
  }
  @media (max-width: 576px) {
    
  }
`
export const TextBottom = styled.p`  
  color: #555;
  font-size: 16px;
  text-align: center;
  /* padding: 12px 0 0 0; */
  font-weight: ${fontWeights.semiBold};

  @media (max-width: 912px) {
    
  }
  @media (max-width: 576px) {
    
  }
`
export const CardLink = styled(Link)`
    display: block;
    background-color: #333;
    padding: 15px 0;
    /* text-decoration: none; */
    color: #f5f5f5; 
    font-size: 12px;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 30px;

    &:hover, &:focus 
   {
    /* background:  #caddfe; */
    
  } 
  @media (max-width: 912px) {
    margin-left: 0;
    padding: 8px 0;
    font-size: 8px;
  }
  @media (max-width: 576px) {
    
  }
  `
export const TextConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  padding: 20px 8px 8px;
  

  @media (max-width: 912px) {
   padding-top: 12px; 
  }
  @media (max-width: 576px) {
    
  }
`