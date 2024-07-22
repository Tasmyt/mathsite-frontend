import { Sending } from '../global.styled';
import { DivMenu, DivMenuTablet } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import DropdownMenu from 'components/DropdownMenu';
import TabletSubMenu from './TabletSubMenu';
import useWindowWidth from 'hooks/useWindowWidth';

const BarTablet = () => {
  const { isLoggedIn } = useAuth();
  const windowWidth = useWindowWidth();
  
  const mathematicsItems = [
    { text: 'Курс 1', link: '/mathematics1' },
    { text: 'Курс 2', link: '/mathematics2' },
  ];

  const informaticsItems = [
    { text: 'Курс 1', link: '/informatics1' },
    { text: 'Курс 2', link: '/informatics2' },
  ];

  return (
    <>
      <Sending to="/"> Головна </Sending>

      <DivMenuTablet>
        {windowWidth > 912 ? (
          <>
            <DivMenu>
              <DropdownMenu title="Математика" items={mathematicsItems} />
            </DivMenu>

            <DivMenu>
              <DropdownMenu title="Інформатика" items={informaticsItems} />
            </DivMenu>
          </>
        ) : (
          <DivMenu>
            <TabletSubMenu/>            
          </DivMenu>
        )}
      </DivMenuTablet>

      <Sending to="/digest"> Довідник </Sending>

      {isLoggedIn && <Sending to="/private">Ваш кабінет</Sending>}
    </>
  );
};

export default BarTablet;
