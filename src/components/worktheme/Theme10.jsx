import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme10() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>Обертальні рухи в природі: від атомів до планет.</SubList>
            <SubList>
              Тіла та обертання: математичні моделі та їх використання.
            </SubList>
            <SubList>Обертання на кухні: Від ковшів до кавоварок.</SubList>
            <SubList>
              Дизайнерські фігури: Тіла та поверхні в мистецтві обертання.
            </SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Фігури обертання.</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Гірлянди руху: Як тіла веселяться у світі обертання.
            </SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              Ванна має форму циліндра з радіусом основи 0,6 м та висотою 0,8 м
              Кожен раз, коли виливається певна кількість води в цю ванну,
              рівень води піднімається на певну висоту. Яка кількість води
              потрібна, щоб заповнити ванну, якщо вона повністю порожня? Як
              зміниться рівень води в ванні, якщо вилити об'єм води 0,2 м<sup>2</sup>?
            </SubList>
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}
