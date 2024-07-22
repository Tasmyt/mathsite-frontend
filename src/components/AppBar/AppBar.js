import { AuthNav } from 'components/AuthNav/AuthNav';
import { Logo, Nav, Panel } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

import BarTablet from './BarTablet';
import BarMobil from './BarMobil';
import useWindowWidth from 'hooks/useWindowWidth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const windowWidth = useWindowWidth(); 

  return (
    <section>
      <Nav>
        
          <div>
            <Logo src="../../mathsite-frontend/images/logo.webp " alt="Логотип" />
          </div>
          <Panel>
            <Panel>
              {windowWidth <= 576 ? <BarMobil /> : <BarTablet />}
            </Panel>

            <div>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</div>
          </Panel>
        
      </Nav>
    </section>
  );
};

export default AppBar;
