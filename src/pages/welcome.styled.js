import styled from 'styled-components';

export const WelcomeBackground = styled.section`
width: calc(100vw - 160px);
display: block;
position: relative;
margin: 0 auto; 
height: 100vh;
background-repeat: no-repeat;
background-image: url("../../images/background-login.webp");
background-size: contain;

@media (max-width: 912px) {
    width: calc(100vw - 64px);    
  }   
@media (max-width: 576px) {
    width: calc(100vw - 32px);
  }    
`
export const WelcomeH1 = styled.h1`
 margin-top: 24%; 
  text-align: center;
@media (max-width: 912px) {    
    font-size: 24px;
  }
@media (max-width: 576px) {    
    font-size: 16px;
  }
`
export const WelcomeContentWrapper = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;   
  height: 100%;
`;