import { colors, fontWeights } from 'components/global.styled';
import styled from 'styled-components';

export const SectionDigest = styled.section`
  display: block;
  margin: 0 auto 40px auto;  
  padding-top: 40px;
  text-align: center;
   @media (max-width: 912px) {     
    margin: 0 auto 20px auto;  
    padding-top: 20px;
  }
  @media (max-width: 576px) {
    margin: 0 auto 16px auto;
  }  
`
export const DigestH1 = styled.h1`
  display: inline-block;
  margin: 0;
  padding: 0 24px;
  font-weight: ${fontWeights.medium};
  font-size: 48px;
  border-bottom: 6px solid ${colors.accent};
  @media (max-width: 912px) {
    font-size: 40px;    
    
  }
  @media (max-width: 576px) {
    font-size: 36px;
  }
`
export const DigestH2 = styled.h2`
  display: inline-block;
  margin: 0 0 40px;
  padding: 0 24px;
  font-weight: ${fontWeights.bold};
  font-size: 36px;
  color: ${colors.accent};
   @media (max-width: 576px) {
    font-size: 32px;
  }
`
export const CriteriaFrame = styled.iframe`
  width: 90%;
  height: 600px;
  border: none;
  background-color: aliceblue;
  border-radius: 8px;
  @media (max-width: 912px) {
    width: 95%;    
    height: 500px;
  }
  @media (max-width: 576px) {
    height: 400px;
  }
`

export const CriteriaContainer = styled.div` 
  width: ${props => (props.$fullscreen ? '100vw' : '100%')};
  height: ${props => (props.$fullscreen ? '100vh' : '100%')};
   
  padding: 20px ;
  overflow: hidden;
  background-color: ${colors.basicLight};  
  border-radius: 8px; 
  @media (max-width: 576px) {
    padding: 12px ;
  } 
  `
export const DigestDiv = styled.div`
  display: flex;  
  width: 25vw;
  margin: 8px auto;
  padding: 16px ;
  justify-content: center;
  overflow: hidden;
  background-color: ${colors.snow};  
  border-radius: 8px; 
  @media (max-width: 576px) {
    margin: 4px auto;
    padding: 8px;
  } 
  `
  export const DigestButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: ${fontWeights.semiBold};
  background-color: ${colors.snow};
  border-radius: 8px;
  @media (max-width: 912px) {
    font-size: 16px;     
    height: 24px;   
  }
  @media (max-width: 576px) {
    background-color: rgba(0, 0, 0, 0);
    
  }
  &:hover, 
  &:focus {
    color: ${colors.accent}; 
  }
  cursor: pointer; 
`