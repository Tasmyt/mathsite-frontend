import { useDispatch } from 'react-redux';
import { logOut } from 'customRedux/auth/operations';
import { ButtonIcons, Panel } from 'components/AppBar/AppBar.styled';
import { FiLogOut } from 'react-icons/fi';
import { StyledIcon } from 'components/global.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();  

  return (
    <Panel>
      <ButtonIcons type="button" onClick={() => dispatch(logOut())}>
        Вихід
        <StyledIcon>
          <FiLogOut />
        </StyledIcon>
      </ButtonIcons>
    </Panel>
  );
};
