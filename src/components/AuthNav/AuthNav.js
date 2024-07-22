import { Panel } from 'components/AppBar/AppBar.styled';
import { Sending, StyledIcon } from 'components/global.styled';
import { FiLogIn } from 'react-icons/fi';

export const AuthNav = () => {
  return (
    <Panel>
      <Sending to="https://math-backend.onrender.com/api/auth/google">
        {' '}
        Вхід
        <StyledIcon>
          <FiLogIn />
        </StyledIcon>
      </Sending>
    </Panel>
  );
};
