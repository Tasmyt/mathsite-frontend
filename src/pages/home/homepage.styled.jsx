import { colors, fontWeights } from 'components/global.styled';
import styled from 'styled-components';

export const HomeBackground = styled.section`
    padding: 0;
    height: 28.3vw;    
    background-repeat: no-repeat;
    background-image: url("../../images//home/backgroundHome.webp");
    background-size: contain;
    
    @media (max-width: 576px) {
    background-image: linear-gradient(
    to right,
    ${colors.basic},
    #CADDFE
  );    
  }
`
export const HomeTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;      
    width: 32vw;
    margin: 40px 80px;
    font-family: 'Inter', sans-serif;
    color: ${colors.snow};
    @media (max-width: 912px) {
    margin: 8px 32px;    
  }
    @media (max-width: 576px) {
    margin: 0 16px;
    width: 100vw;    
  }
`
export const HomeH1 = styled.h1`
    margin-bottom: 8px;
    font-weight: ${fontWeights.medium};
    font-size: 3.5vw;
    text-align: center;
    @media (max-width: 912px) {
    font-size: 4vw;
  }
   @media (max-width: 576px) {
    font-size: 6vw;    
  }
`
export const HomeH2 = styled.h2`
    font-weight: ${fontWeights.medium};
    font-size: 2vw;
    text-align: center;
    @media (max-width: 912px) {
    font-size: 2.2vw;
  }
   @media (max-width: 576px) {
    font-size: 3vw;    
  }
`
export const HomeP = styled.p`
    font-size: 1.1vw; 
    text-align: center;
    @media (max-width: 912px) {
    font-size: 1.6vw;
  }
   @media (max-width: 576px) {
    font-size: 2.4vw;    
  }
`
export const Timetable = styled.table`
    table-layout: fixed;    
    width: 100%;
    margin-bottom: 60px;
    border-collapse: collapse;      
`
export const TimetableCaption = styled.caption`
    padding: 64px 0;
    font-weight: 700;
    font-size: 36px;
    color: ${colors.black};
  @media (max-width: 912px) {
    padding: 28px 0;
    font-weight: 600;
    font-size: 32px;
  }
   @media (max-width: 576px) {
    padding: 16px 0;    
    font-size: 24px;   
  }
`
export const TimetableHeaderTh = styled.th`
    padding-top: 0;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
    color: ${colors.black};
    border-bottom: 3px solid ${colors.accent};    
    border-top: none;
    &:last-child {
    border-right: none;
  }
   @media (max-width: 912px) {
    font-size: 14px;    
  } 
`