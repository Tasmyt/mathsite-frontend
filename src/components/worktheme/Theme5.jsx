import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme5() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>
              Станіслав Улам - видатний математик.
            </SubList>
            <SubList>
              Як ймовірність допомагає приймати рішення у повсякденному житті.
            </SubList>
            <SubList>Використання ймовірності в медицині: діагностика та прогнозування.</SubList>
            <SubList>Ймовірність у страховій справі: як розраховуються страхові премії.</SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Історія розвитку теорії ймовірності: від Паскаля до сучасності.</SubList>
            <SubList>Основні правила обчислення ймовірностей.</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Використання ймовірності в іграх: від казино до настільних ігор.
            </SubList>
            <SubList>
                Як прогнозується погода: роль ймовірності в метеорології.              
            </SubList>
            <SubList>
                Теорія ймовірності в спорті: як обчислюються шанси на перемогу команд.              
            </SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              Приклади розв'язку задач з теми "Теорія ймовірності"
            </SubList>
            <SubList>Приклади розв'язку задач з теми "Комбінаторика"</SubList>            
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}
