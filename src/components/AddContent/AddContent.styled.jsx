import styled from 'styled-components';
import { colors, fontWeights } from 'components/global.styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 60px;
  padding: 40px 80px;
  border-style: none;
  border: 10px ridge rgba(247, 156, 66, 0.6);
  @media (max-width: 912px) {
    margin: 20px 8px;
    padding: 20px 8px;
  }  
`;

export const LabelForm = styled.label`
  margin-bottom: 48px;
  color: ${colors.bluetext};
  font-weight: ${fontWeights.semiBold};
   @media (max-width: 912px) {
    margin-bottom: 24px;
  }
`;

export const InputForm = styled.input`
  width: 30vw;
  margin-left: 40px;
  padding: 12px 20px;
  font-size: 24px;
  border-radius: 8px;
  border-color: ${colors.bluetext};
  outline: none;

  &:focus {
    border-style: none;
    border: 2px solid ${colors.accent};
  }
  @media (max-width: 912px) {
    width: 60vw;
    margin-left: 0;
    padding: 8px 20px;
  }
`;
export const ButtonForm = styled.button`
  padding: 12px 20px;
  font-size: 24px;
  border-radius: 8px;
  border-color: ${colors.bluetext};
  outline: none;

  cursor: pointer;
  &:hover {
    background-color: ${colors.accent};
    color: ${colors.snow};
    border-color: ${colors.accent};
  }
  @media (max-width: 912px) {
    margin-left: 24px;
    padding: 8px 20px;
  }
`;
