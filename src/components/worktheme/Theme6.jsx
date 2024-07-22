import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme6() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>
              Вячеслав Андрійович Ясінський і олімпіадна математика.
            </SubList>
            <SubList>Перпендикулярність площин у архітектурі.</SubList>
            <SubList>Застосування векторів.</SubList>
            <SubList>Метод Монжа.</SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Паралельне проектування.</SubList>
            <SubList>Вектори у просторі.</SubList>
            <SubList>Методи розв'язування геометричних задач.</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Іван та Іванка, розлучившись на перехресті, пішли по взаємно
              перпендикулярним дорогах, Іван зі швидкістю 3,6 км/год, Іванка -
              2,7 км/год. Яка відстань (в км) буде між ними через 45 хвилин?
            </SubList>
            <SubList>Симетрія в мистецтві.</SubList>
            <SubList>Висловлювання про геометрію та їх автори.</SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              За допомогою настільної лампи створіть зображення прямокутного
              аркуша паперу, "відкинуте" променями на площину стола. Дослідіть,
              якою фігурою може бути проекція прямокутника при центральному
              проектуванні. А при паралельному?
            </SubList>
            <SubList>
              Розв'яжіть задачу: Дано вектори (2;m;5) і (4;2;n). При яких
              значеннях m і n ці вектори є колінеарними?
            </SubList>
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}
