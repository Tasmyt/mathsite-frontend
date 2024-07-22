import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme9() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>Паралелепіпед у будівництві.</SubList>
            <SubList>Піраміди в архітектурі.</SubList>
            <SubList>Геометрія в кристалах.</SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Многогранники.</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>Розгортки правильних многогранників.</SubList>
            <SubList>Зірчасті многогранники.</SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>Розташування висоти в різних видах пірамід.</SubList>
            <SubList>
              Підставка для канцелярського приладу має форму правильного
              трикутної призми без верхньої основи. Периметр бічної грані цієї
              підставки дорівнює 40 см. Знайдіть площу бічної поверхні
              підставки, якщо сторона її основи дорівнює 10 см​.
            </SubList>            
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}
