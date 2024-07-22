import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme8() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>
              Застосування первісних у фізиці.
            </SubList>
            <SubList>
              Практичні застосування інтегралу.
            </SubList>
            <SubList>Історія виникнення поняття інтегралу.</SubList>
            <SubList>Віктор Буняковський - український	математик.</SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Інтеграл.</SubList>            
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Чому формула Ньютона - Лейбніца має таку назву?
            </SubList>
            <SubList>
              Як за допомогою інтегралу визначити об'єм тіл обертання?              
            </SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              Приклади розв'язку задач з теми "Знаходження площ криволінійних трапецій і фігур"
            </SubList>            
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}
