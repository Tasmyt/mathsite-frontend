import styled, { keyframes } from 'styled-components';
import { colors, fontWeights } from 'components/global.styled';

export const modalStyles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    position: 'relative',
    // background: 'white',
    // padding: '20px',
    // borderRadius: '4px',
    // maxWidth: '500px',
    // width: '100%',
    // margin: '0 20px',
  },
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50px);
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 10px 40px 10px;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.7) !important;
  /* overflow: hidden;
  overflow-y: auto; */
  z-index: 999;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s forwards;
  /* opacity: 0; */
  /* transition: opacity 0.3s; */

  &::before,
  &::after {
    content: "";
    display: block;
    height: 1px;
    flex-grow: 1;
  }
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
   /* justify-content: space-between; */
  text-align: center;
  width: 100%;
  max-width: 80rem;
  height: 90%;
  padding: 60px 20px 50px 20px;
  background-color: ${colors.snow};
  border-radius: 30px;
  filter: drop-shadow(0 0 10px rgba(255, 103, 0, 0.7));
  /* transform: translateY(50px);
  transition: transform 0.3s; */
  animation: ${({ $isClosing }) => ($isClosing ? slideOut : slideIn)} 0.3s forwards;

  @media (max-width: 576px) {
    padding: 12px;  
  } 
`;

export const ModalCloseButton = styled.button`
    position: absolute;
  top: 20px;
  right: 26px;
  width: 42px;
  height: 42px;
  padding: 4px 4px 0 4px;
  font-size: 24px;  
  border: 1px solid ${colors.snow};
  border-radius: 25px;
  background-color: ${colors.snow};
  
  transition: stroke 0.3s;
  &:hover {
    background-color: ${colors.accent};
    color: ${colors.snow};
    border-color:  ${colors.accent}
  }

   @media (max-width: 576px) {
    top: 12px;
    right: 12px;
    font-size: 20px;  
  } 
`
export const ModalTitle = styled.h2`
  margin-top: 0;
  
  font-weight: ${fontWeights.medium};
  font-size: 28px;
  font-style: italic;
  color: ${colors.bluetext};
  
  @media (max-width: 912px) {
    font-size: 24px;
    
  }
  @media (max-width: 576px) {
    /* line-height: 1.5; */
    margin-top: 40px;
    font-size: 24px;
  }
`;
