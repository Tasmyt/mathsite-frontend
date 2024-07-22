import { colors, fontWeights } from 'components/global.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginBackground = styled.section`
display: block;
position: relative;
margin: 0 auto; 
height: 100%;
background-repeat: no-repeat;
background-image: url("../../mathsite-frontend/images/background-login.webp");
background-size: contain;
`
export const ContentWrapper = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const LoginH1 = styled.h1`
margin-top: 12%;
  text-align: center;
@media (max-width: 912px) {
    font-size: 24px;
  }
@media (max-width: 576px) {
    font-size: 16px;
  }
`
export const LoginH2 = styled.h2`
@media (max-width: 912px) {
    font-size: 20px;
  }
@media (max-width: 576px) {
    text-align: center;
    font-size: 16px;
  }
`
export const LoginH3 = styled.h3`  
@media (max-width: 912px) {
    font-size: 16px;
  }
@media (max-width: 576px) {
    text-align: center;
    font-size: 14px;
  }
`
export const LoginConteiner = styled.div`
max-width: 1060px;
margin-top: 3%;
padding: 20px 80px;
text-align: justify;
background-color: ${colors.basicLight};
border-radius: 16px;
@media (max-width: 912px) {
    max-width: 600px;
    padding: 16px 60px;
    margin-top: 2%;    
  }
@media (max-width: 576px) {
    max-width: 360px;
    margin: 6%  auto;
    padding: 8px 32px;
  }
@media (max-width: 400px) {    
    margin: 12%  auto; 
    margin-top: 1%;   
  }  
`
export const LoginSending = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px 0 12px;
  font-size: 36px;
  font-weight: ${fontWeights.bold};
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
  @media (max-width: 912px) {
    padding: 0 12px;
    font-size: 24px;
  }
`;
export const LpginStyledIcon = styled.div`
  margin-left: 4px;
  color: currentColor;
  font-size: 48px;

  @media (max-width: 912px) {
    font-size: 36px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
    margin-left: 4px;
  }
`;