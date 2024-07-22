import styled from 'styled-components';
import { colors, fontWeights } from 'components/global.styled';
export const PrivateBackground = styled.section`
  width: 80vw;
  height: calc(80vw / 1.12);
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url('../../mathsite-frontend/images/background-privat.webp');
  background-size: cover;

  @media (max-width: 912px) {
    width: 90vw;
  }
  @media (max-width: 576px) {
    background-image: url('../../mathsite-frontend/images/background-mobil.webp');
    height: calc(90vw * 1.55);
  }
`;
export const PrivateWelcom = styled.div`
  position: absolute;
  width: 32vw;
  height: 14vw;
  display: flex;  
  align-items: center;
  justify-content: center;
`;

export const PrivateH1 = styled.h1`
  font-weight: ${fontWeights.medium};
  font-size: 36px;
  @media (max-width: 912px) {
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const PrivateWrapper = styled.div`
  position: absolute;
  margin-top: 18%;
  width: 64vw;
  max-height: 42.5vw;
  overflow:scroll; 
  /* padding: 20px 80px;
text-align: justify;
background-color: ${colors.basicLight};
border-radius: 16px; */

@media (max-width: 576px) {
  width: 80vw;
  max-height: 100vw;    
  }  
`;

export const PrivateContentWrapper = styled.div`
  /* position: absolute;
  margin-top: 18%;
  width: 60vw;
  max-height: 42.5vw;  */
  margin-bottom: 40px;
  padding: 20px 80px;
text-align: center;
background-color: ${colors.basicLight};
border-radius: 16px;

@media (max-width: 912px) {
  padding: 8px;
  margin-bottom: 32px;  
  }
@media (max-width: 576px) {
  /* max-height: 100vw; */   
   margin-bottom: 20px; 
  }  
`;

export const PrivateH2 = styled.h2`
  margin-bottom: 0;
  text-decoration: underline;
  text-decoration-color: ${colors.accent};
  font-weight: ${fontWeights.bold};
  font-size: 32px;
  color: ${colors.snow};
  @media (max-width: 912px) {
    font-weight: ${fontWeights.medium};
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
