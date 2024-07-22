import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

export const colors = {
  basicDark: '#207FEE',
  basic: '#50A7F9',
  basicLight: '#67B0F8',
  bluetext: '#679fd6',
  accent: '#F79C42',
  outline: '#B4B0B0',
  snow: '#fff',
  black: '#161515'
};

export const fontWeights = {
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const fontSizes = ['14px', '16px', '24px', '36px'];
export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
    display: flex;    
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;  
    font-weight: 400; 
    }
main {
  margin-top: 80px;
  text-align: center;
  @media (max-width: 912px) {
    margin-top: 60px;    
  }   
}
section {
    display: flex;
    padding: 0 80px;    
    margin-top: 12px;
    width: calc(100vw - 160px);

    @media (max-width: 1080px) {
    width: calc(100vw - 64px);    
    padding: 0 32px;        
  }   
    @media (max-width: 912px) { 
    font-size: 16px;    
  }
    @media (max-width: 576px) {
    width: calc(100vw - 32px);    
    padding: 0 16px;         
  }
    }
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;  
  justify-content: center;
  width: 100%;
  /* padding-bottom: 20px; */
  background-color: white;
  z-index: 10;
 
}
img {
    display: block;
    max-width: 100%;
    height: auto;
    }
ul {
  list-style-type: none;
  @media (max-width: 576px) {
    padding: 0 0 0 8px;
      
  }
}

p {
  margin: 0;
  padding: 0;
}
th,
td {
  padding: 24px 20px 8px;
  border: 2px solid ${colors.basicLight};
    @media (max-width: 912px) {
    padding: 12px 12px 4px;
    font-size: 14px;
    text-align: left;
  }
   @media (max-width: 576px) {
    padding: 4px;
      
  }
}
th, td:not(:first-child) {
    border-left: none;
  }
td:last-child {
    border-right: none;
  }
  th {
    @media (max-width: 912px) {
    padding-left: 8px;
    
  }
  }
`;



export const Button = styled.button`
  border: none;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  text-shadow: 0 2px white, 0 3px #777;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
`;

export const TitleContent = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: ${fontWeights.bold};
  color: ${colors.accent};
    @media (max-width: 912px) {
    font-weight: ${fontWeights.semiBold};  
    font-size: 24px;
  }
    @media (max-width: 576px) {
    font-size: 20px;
    font-weight: ${fontWeights.medium};
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;
export const Sending = styled(Link)`
  display: flex;
  align-items: center;  
  padding: 0 24px 0 12px;
  font-weight: ${fontWeights.medium};
  text-decoration: none;
  color: black;
  
  &:hover,
  &:focus {
    color: ${colors.accent};
  }
  @media (max-width: 912px) {
    padding: 0 12px;
  }
`;

export const StyledIcon = styled.div`
  margin-left: 4px;
  color: currentColor;
  font-size: 32px;

  @media (max-width: 912px) {
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
    margin-left: 4px;
  }
`;

